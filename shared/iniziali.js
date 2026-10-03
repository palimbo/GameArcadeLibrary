// Iniziali del record, come in sala giochi.
// Ogni gioco salva il proprio record in localStorage (chiavi "...-best-<difficoltà>" o "...-hiscore").
// Questo script se ne accorge: quando un record viene scritto chiede le tre iniziali, le salva
// accanto al record (stessa chiave + "-nome") e le mostra accanto a "Record:" nei menu del gioco.
// Uso: <script src="../../shared/iniziali.js" data-record="pinguino-best-" data-kind="score"></script>
(() => {
  "use strict";
  const me = document.currentScript;
  const BASE = (me && me.dataset.record) || "";
  const KIND = (me && me.dataset.kind) || "score";
  const SD = !!(me && me.dataset.sd !== undefined);
  const LAST_KEY = "sala-giochi-iniziali";
  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.";
  const RECORD_RE = /(-best-|-hiscore)/;

  const rawSet = Storage.prototype.setItem;
  const rawGet = Storage.prototype.getItem;
  const get = (k) => { try { return rawGet.call(localStorage, k); } catch { return null; } };
  const set = (k, v) => { try { rawSet.call(localStorage, k, v); } catch { /* ignore */ } };
  const nameKey = (k) => `${k}-nome`;
  const keyFor = (d) => (SD ? (d === "normale" ? BASE : `${BASE}-${d}`) : BASE + d);
  const nameFor = (k) => { const n = get(nameKey(k)); return n && /^[A-Z0-9.]{3}$/.test(n) ? n : ""; };

  function fmt(v) {
    if (KIND === "time") {
      const s = parseFloat(v);
      if (!(s > 0)) return v;
      const m = Math.floor(s / 60), r = s - m * 60;
      return `${m}:${(v.includes(".") ? r.toFixed(1).padStart(4, "0") : String(Math.floor(r)).padStart(2, "0"))}`;
    }
    const n = parseInt(v, 10);
    return Number.isFinite(n) ? n.toLocaleString("it-IT") : v;
  }

  // ---------- Spotting a new record ----------
  let pending = [], pendingT = null, modal = null;
  Storage.prototype.setItem = function (k, v) {
    rawSet.call(this, k, v);
    if (this !== localStorage || !RECORD_RE.test(k) || /-nome$/.test(k)) return;
    if (trofeiReady) setTimeout(checkTrofei, 300);
    // a record just made the scoreboard: wait for the game over screen, then ask for the initials
    // (a game that writes two records at once, such as the pinball tables, asks only once)
    pending.push({ k, v: String(v) });
    clearTimeout(pendingT);
    pendingT = setTimeout(() => { const p = pending; pending = []; ask(p); }, 450);
  };

  // ---------- The initials screen ----------
  const css = `
  #ai-modal { position: fixed; inset: 0; z-index: 100; display: flex; align-items: center; justify-content: center;
    padding: 16px; background: rgba(0,0,0,0.78); font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
    color: #fff; touch-action: manipulation; user-select: none; -webkit-user-select: none; -webkit-tap-highlight-color: transparent; }
  #ai-modal .box { width: min(420px, 100%); padding: 22px 18px 18px; border-radius: 14px; text-align: center;
    background: #0b0b1a; border: 3px solid #ffd34d; box-shadow: 0 0 0 4px #000, 0 0 40px rgba(255,211,77,0.35); }
  #ai-modal h3 { margin: 0 0 4px; font-size: clamp(22px, 7vw, 30px); font-weight: 900; letter-spacing: 3px; color: #ffd34d;
    text-shadow: 3px 3px 0 #c8302a; animation: ai-blink 0.9s steps(2) infinite; }
  #ai-modal .score { margin: 6px 0 2px; font-size: 22px; font-weight: 800; letter-spacing: 2px; }
  #ai-modal .hint { margin: 0 0 14px; font-size: 12px; letter-spacing: 1.5px; color: #9aa0c8; }
  #ai-modal .slots { display: flex; justify-content: center; gap: 12px; margin-bottom: 14px; }
  #ai-modal .slot { display: flex; flex-direction: column; align-items: center; gap: 4px; }
  #ai-modal .slot button { width: 64px; height: 40px; border-radius: 10px; border: 2px solid #3a3a6a; background: #16163a;
    color: #fff; font: 800 18px system-ui, sans-serif; cursor: pointer; touch-action: manipulation; }
  #ai-modal .slot button:active { background: #3a3a7a; }
  #ai-modal .letter { width: 64px; height: 72px; display: flex; align-items: center; justify-content: center;
    border-radius: 10px; border: 3px solid #3a3a6a; background: #000; font-size: 48px; font-weight: 900; cursor: pointer; }
  #ai-modal .slot.on .letter { border-color: #ffd34d; color: #ffd34d; box-shadow: 0 0 14px rgba(255,211,77,0.5); }
  #ai-modal .slot.on .letter span { animation: ai-blink 0.6s steps(2) infinite; }
  #ai-modal .ok { width: 100%; padding: 12px; border-radius: 10px; border: 0; background: #ffd34d; color: #1a1400;
    font: 900 18px system-ui, sans-serif; letter-spacing: 3px; cursor: pointer; box-shadow: 0 4px 0 #a8801a; }
  #ai-modal .keys { margin-top: 10px; font-size: 11px; color: #6a70a0; letter-spacing: 1px; }
  @media (pointer: coarse) { #ai-modal .keys { display: none; } }
  @keyframes ai-blink { 50% { opacity: 0.35; } }
  .ai-name { color: #ffd34d; font-weight: 800; letter-spacing: 1px; }
  #overlay .ai-quit { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; pointer-events: auto; }
  #overlay .ai-quit button { font-size: 13px; }
  #overlay .ai-pad { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; justify-content: center; font-size: 13px; color: #c8c8e0; pointer-events: auto; }
  #overlay .ai-pad button { font-size: 12px; padding: 6px 12px; }
  #overlay .ai-pad button.ai-on { border-color: #ffd34d; color: #ffd34d; box-shadow: 0 0 10px rgba(255,211,77,0.45); }
  .stick.ai-dpad { border-radius: 22% !important; }
  .stick.ai-dpad .knob, .stick.ai-dpad .ring { opacity: 0 !important; }
  .stick .ai-cross { display: none; }
  .stick.ai-dpad .ai-cross { display: block; position: absolute; inset: 8%; pointer-events: none; }
  .ai-cross i { position: absolute; width: 34%; height: 34%; border-radius: 8px; background: rgba(255,255,255,0.14); border: 2px solid rgba(255,255,255,0.45); box-sizing: border-box; }
  .ai-cross i::after { content: ""; position: absolute; left: 50%; top: 50%; width: 0; height: 0; transform: translate(-50%, -50%); border: 7px solid transparent; }
  .ai-cross .u { left: 33%; top: 0; } .ai-cross .u::after { border-bottom: 10px solid rgba(255,255,255,0.85); border-top-width: 0; }
  .ai-cross .d { left: 33%; bottom: 0; } .ai-cross .d::after { border-top: 10px solid rgba(255,255,255,0.85); border-bottom-width: 0; }
  .ai-cross .l { left: 0; top: 33%; } .ai-cross .l::after { border-right: 10px solid rgba(255,255,255,0.85); border-left-width: 0; }
  .ai-cross .r { right: 0; top: 33%; } .ai-cross .r::after { border-left: 10px solid rgba(255,255,255,0.85); border-right-width: 0; }
  .ai-cross i.on { background: rgba(255,211,77,0.55); border-color: #ffd34d; }
  #overlay .ai-trofei { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; max-width: 560px; pointer-events: auto; }
  #overlay .ai-trofei span { font: 600 12px system-ui, sans-serif; padding: 4px 9px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.18); color: rgba(255,255,255,0.55); background: rgba(0,0,0,0.25); }
  #overlay .ai-trofei span.got { color: #ffe9a8; border-color: #ffd34d; background: rgba(255,211,77,0.14); }
  #overlay .ai-imprese { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; align-items: center; max-width: 600px; pointer-events: auto; }
  #overlay .ai-imprese button { font: 600 12px system-ui, sans-serif; padding: 4px 9px; border-radius: 999px; border: 1px dashed rgba(255,255,255,0.25); color: rgba(255,255,255,0.6); background: rgba(0,0,0,0.25); cursor: pointer; letter-spacing: 0; box-shadow: none; }
  #overlay .ai-imprese button.got { color: #d8f8ff; border: 1px solid #7ad8ff; background: rgba(122,216,255,0.14); }
  #overlay .ai-imprese button.ai-sel { outline: 2px solid #7ad8ff; }
  #overlay .ai-imprese p { flex-basis: 100%; margin: 0; font: 12px system-ui, sans-serif; color: #c8e8f8; }
  #ai-toast.imp { background: #7ad8ff; color: #021a2a; }
  #ai-toast { position: fixed; left: 50%; top: calc(14px + env(safe-area-inset-top, 0px)); z-index: 101; transform: translate(-50%, -140%); transition: transform .35s ease;
    font: 800 14px system-ui, sans-serif; color: #1a1400; background: #ffd34d; padding: 9px 16px; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,.45); pointer-events: none; white-space: nowrap; }
  #ai-toast.on { transform: translate(-50%, 0); }`;
  function injectCss() {
    if (document.getElementById("ai-css")) return;
    const st = document.createElement("style"); st.id = "ai-css"; st.textContent = css;
    document.head.appendChild(st);
  }

  function ask(records) {
    if (!records.length || modal) return;
    injectCss();
    const last = get(LAST_KEY);
    const letters = (last && /^[A-Z0-9.]{3}$/.test(last) ? last : "AAA").split("");
    let pos = 0, fresh = false;
    const main = records.find((r) => BASE && r.k.startsWith(BASE) && !r.k.slice(BASE.length).includes("-")) || records[0];
    modal = document.createElement("div");
    modal.id = "ai-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-label", "Nuovo record: inserisci le tue iniziali");
    modal.innerHTML = `<div class="box">
      <h3>NUOVO RECORD!</h3>
      <div class="score">${fmt(main.v)}</div>
      <p class="hint">INSERISCI LE TUE INIZIALI</p>
      <div class="slots">${[0, 1, 2].map((i) => `<div class="slot" data-i="${i}">
        <button type="button" data-up="${i}" aria-label="Lettera successiva">▲</button>
        <div class="letter" data-sel="${i}"><span></span></div>
        <button type="button" data-down="${i}" aria-label="Lettera precedente">▼</button></div>`).join("")}</div>
      <button type="button" class="ok">OK</button>
      <div class="keys">↑ ↓ CAMBIA · ← → SPOSTA · SCRIVI · INVIO CONFERMA</div>
    </div>`;
    document.body.appendChild(modal);
    const slots = [...modal.querySelectorAll(".slot")];
    const paint = () => slots.forEach((s, i) => { s.classList.toggle("on", i === pos); s.querySelector("span").textContent = letters[i]; });
    const step = (i, d) => { letters[i] = CHARS[(CHARS.indexOf(letters[i]) + d + CHARS.length) % CHARS.length]; pos = i; paint(); };
    paint();

    function done() {
      const name = letters.join("");
      set(LAST_KEY, name);
      for (const r of records) set(nameKey(r.k), name);
      document.removeEventListener("keydown", onKey, true);
      window.removeEventListener("keydown", onKey, true);
      modal.remove(); modal = null;
      // on phones the tap on OK is followed by a click at the same spot: it must not reach
      // the "play again" button of the game over screen underneath
      const until = performance.now() + 700;
      const eat = (e) => { if (performance.now() < until) { e.stopImmediatePropagation(); e.preventDefault(); } };
      for (const ev of ["click", "mousedown", "mouseup"]) window.addEventListener(ev, eat, true);
      setTimeout(() => { for (const ev of ["click", "mousedown", "mouseup"]) window.removeEventListener(ev, eat, true); }, 750);
      markNewRecord(name);
      decorate();
      if (leaveAfter) { leaveAfter = false; setTimeout(goHome, 800); } // after the tap guard above
    }
    function onKey(e) {
      // while the initials screen is open the game does not see the keyboard
      e.stopImmediatePropagation();
      e.preventDefault();
      if (e.repeat && !fresh) return; // keys still held from the game do not count
      fresh = true;
      const k = e.key;
      if (k === "ArrowUp" || k === "w" || k === "W") step(pos, 1);
      else if (k === "ArrowDown" || k === "s" || k === "S") step(pos, -1);
      else if (k === "ArrowLeft") { pos = Math.max(0, pos - 1); paint(); }
      else if (k === "ArrowRight") { pos = Math.min(2, pos + 1); paint(); }
      else if (k === "Backspace") { pos = Math.max(0, pos - 1); paint(); }
      else if (k === "Enter") done();
      else if (k.length === 1 && CHARS.includes(k.toUpperCase())) {
        letters[pos] = k.toUpperCase();
        if (pos < 2) pos++;
        paint();
      }
    }
    window.addEventListener("keydown", onKey, true);
    document.addEventListener("keydown", onKey, true);

    // touch and mouse: tap a letter to pick it, hold ▲ ▼ to scroll through the alphabet
    let hold = null;
    const stopHold = () => { clearTimeout(hold); clearInterval(hold); hold = null; };
    modal.addEventListener("pointerdown", (e) => {
      e.stopPropagation();
      const up = e.target.closest("[data-up]"), down = e.target.closest("[data-down]");
      const sel = e.target.closest("[data-sel]");
      if (up || down) {
        e.preventDefault();
        const i = +(up ? up.dataset.up : down.dataset.down), d = up ? 1 : -1;
        step(i, d);
        stopHold();
        hold = setTimeout(() => { hold = setInterval(() => step(i, d), 90); }, 380);
      } else if (sel) { pos = +sel.dataset.sel; paint(); }
      else if (e.target.closest(".ok")) { e.preventDefault(); done(); }
    });
    for (const ev of ["pointerup", "pointercancel", "pointerleave"]) modal.addEventListener(ev, stopHold);
    modal.addEventListener("click", (e) => e.stopPropagation());
  }

  // ---------- Showing the names ----------
  function markNewRecord(name) {
    const ov = document.getElementById("overlay");
    if (!ov) return;
    const walker = document.createTreeWalker(ov, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      if (/NUOVO RECORD/.test(n.nodeValue) && !/ DI [A-Z0-9.]{3}/.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace(/NUOVO RECORD( DEL TAVOLO)?/, (m) => `${m} DI ${name}`);
    }
  }
  let observer = null;
  function decorate() {
    const ov = document.getElementById("overlay");
    if (!ov || !BASE) return;
    if (observer) observer.disconnect();
    const btn = ov.querySelector("[data-diff].on") || ov.querySelector(".on[data-diff]");
    let diff = btn ? btn.dataset.diff : null;
    if (!diff) { const d = get(BASE.replace(/-best-$|-hiscore$/, "") + "-difficulty"); diff = d || null; }
    const name = diff ? nameFor(keyFor(diff)) : "";
    ov.querySelectorAll(".ai-name").forEach((n) => n.remove());
    if (name) {
      const walker = document.createTreeWalker(ov, NodeFilter.SHOW_TEXT);
      for (let n = walker.nextNode(); n; n = walker.nextNode()) {
        const m = /(Record|RECORD|Miglior tempo)[^:]{0,20}:\s*[\d.,:]+/.exec(n.nodeValue);
        if (!m || (n.parentElement && n.parentElement.closest("h1,h2,h3,button"))) continue;
        const after = n.splitText(m.index + m[0].length);
        const tag = document.createElement("span");
        tag.className = "ai-name";
        tag.textContent = ` ${name}`;
        after.parentNode.insertBefore(tag, after);
        break;
      }
    }
    showTrofei(ov);
    showImprese(ov);
    if (observer) observer.observe(ov, { childList: true, subtree: true, characterData: true });
  }
  // ---------- Touch controls: thumb stick or arrow pad ----------
  // One setting for the whole hall ("sala-comandi"). With the arrows, every thumb stick of the game is
  // drawn as a cross of four arrows; a touch on it is snapped to one of eight directions at full push and
  // handed on to the game's own stick, so each game keeps working exactly as before.
  const PAD_KEY = "sala-comandi";
  const padMode = () => (get(PAD_KEY) === "frecce" ? "frecce" : "levetta");
  const sticks = () => [...document.querySelectorAll(".stick")];
  function applyPad() {
    const on = padMode() === "frecce";
    for (const st of sticks()) {
      if (!st.querySelector(".ai-cross")) {
        const c = document.createElement("div"); c.className = "ai-cross";
        c.innerHTML = '<i class="u"></i><i class="d"></i><i class="l"></i><i class="r"></i>';
        st.appendChild(c);
      }
      st.classList.toggle("ai-dpad", on);
    }
  }
  function snapPoint(st, e) {
    const r = st.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const dx = e.clientX - cx, dy = e.clientY - cy, R = r.width / 2;
    const lit = (cls) => st.querySelectorAll(".ai-cross i").forEach((i) => i.classList.toggle("on", cls.includes(i.className.replace(" on", ""))));
    if (Math.hypot(dx, dy) < R * 0.2) { lit([]); return { x: cx, y: cy }; }
    // straight directions get the wider share, so the diagonals are only taken on purpose
    const a = Math.atan2(dy, dx), oct = Math.round(a / (Math.PI / 4));
    const off = Math.abs(a - oct * Math.PI / 4);
    let ang = oct * Math.PI / 4;
    if (oct % 2 !== 0 && off > Math.PI / 12) ang = (Math.abs(a - (oct - 1) * Math.PI / 4) < Math.abs(a - (oct + 1) * Math.PI / 4) ? oct - 1 : oct + 1) * Math.PI / 4;
    const ux = Math.round(Math.cos(ang) * 1000) / 1000, uy = Math.round(Math.sin(ang) * 1000) / 1000;
    lit([ux < 0 ? "l" : "", ux > 0 ? "r" : "", uy < 0 ? "u" : "", uy > 0 ? "d" : ""]);
    return { x: cx + ux * R, y: cy + uy * R };
  }
  function padRelay(e) {
    if (!e.isTrusted) return;
    const st = e.target && e.target.closest && e.target.closest(".stick.ai-dpad");
    if (!st) return;
    if (e.type === "pointerup" || e.type === "pointercancel") { st.querySelectorAll(".ai-cross i").forEach((i) => i.classList.remove("on")); return; }
    e.stopImmediatePropagation(); e.preventDefault();
    const p = snapPoint(st, e);
    st.dispatchEvent(new PointerEvent(e.type, { pointerId: e.pointerId, pointerType: e.pointerType, isPrimary: e.isPrimary, clientX: p.x, clientY: p.y, screenX: p.x, screenY: p.y, buttons: e.buttons, bubbles: true, cancelable: true, composed: true }));
  }
  for (const t of ["pointerdown", "pointermove", "pointerup", "pointercancel"]) window.addEventListener(t, padRelay, true);
  function padHTML() {
    const m = padMode();
    return `<span>Comandi touch:</span><button type="button" data-pad="levetta" class="${m === "levetta" ? "ai-on" : ""}">🕹️ LEVETTA</button><button type="button" data-pad="frecce" class="${m === "frecce" ? "ai-on" : ""}">✚ FRECCE</button>`;
  }

  // ---------- Trophies (shared/trofei.js) ----------
  // Worked out from the saved records. The ones already won when the game opens are taken as seen;
  // a new one won while playing pops up at the top of the screen.
  const SEEN_KEY = "sala-trofei-visti";
  let trofeiReady = false;
  const seenSet = () => { try { return new Set(JSON.parse(get(SEEN_KEY) || "[]")); } catch { return new Set(); } };
  function trofei() { return window.SalaTrofei && BASE ? window.SalaTrofei.status(BASE, SD) : null; }
  function markSeen(list) {
    const seen = seenSet(); let fresh = [];
    for (const t of list) if (t.got && !seen.has(`${BASE}:${t.id}`)) { seen.add(`${BASE}:${t.id}`); fresh.push(t); }
    if (fresh.length) set(SEEN_KEY, JSON.stringify([...seen]));
    return fresh;
  }
  // the pop-ups at the top wait their turn, so a trophy and a feat won together are both read
  let toastQ = [], toastBusy = false;
  function toast(text, cls) { toastQ.push({ text, cls }); if (!toastBusy) nextToast(); }
  function nextToast() {
    const t = toastQ.shift();
    if (!t) { toastBusy = false; return; }
    toastBusy = true;
    let el = document.getElementById("ai-toast");
    if (!el) { el = document.createElement("div"); el.id = "ai-toast"; document.body.appendChild(el); }
    el.textContent = t.text; el.className = t.cls || ""; void el.offsetWidth; el.classList.add("on");
    chime(t.cls ? [988, 1319, 1760] : [880, 1320]);
    setTimeout(() => { el.classList.remove("on"); setTimeout(nextToast, 400); }, 3000);
  }
  let chimeCtx = null;
  function chime(notes) {
    try {
      if (!window.AudioContext) return;
      chimeCtx = chimeCtx || new AudioContext();
      const c = chimeCtx, o = c.createOscillator(), g = c.createGain();
      o.type = "triangle";
      notes.forEach((f, i) => o.frequency.setValueAtTime(f, c.currentTime + i * 0.12));
      g.gain.setValueAtTime(0.05, c.currentTime); g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.14 * notes.length + 0.2);
      o.connect(g).connect(c.destination); o.start(); o.stop(c.currentTime + 0.14 * notes.length + 0.22);
    } catch { /* ignore */ }
  }
  function checkTrofei() {
    const list = trofei(); if (!list) return;
    const fresh = markSeen(list);
    for (const t of fresh) toast(`🏆 ${t.icon} Trofeo ${t.name.toLowerCase()} sbloccato!`);
  }
  function trofeiHTML() {
    const list = trofei(); if (!list) return "";
    return list.map((t) => `<span class="${t.got ? "got" : ""}" title="${t.name}: ${t.text}">${t.icon} ${t.got ? "✓ " : ""}${t.text}</span>`).join("");
  }
  // the trophy row in the title, game over and pause screens
  function showTrofei(ov) {
    if (!trofeiReady) return;
    const anchor = ov.querySelector("[data-start]") || ov.querySelector("[data-resume]") || ov.querySelector("p.blink");
    let box = ov.querySelector(".ai-trofei");
    if (!anchor) { if (box) box.remove(); return; }
    const html = trofeiHTML();
    if (!html) return;
    if (!box) { box = document.createElement("div"); box.className = "ai-trofei"; }
    if (box.innerHTML !== html) box.innerHTML = html;
    const before = anchor.matches("[data-resume]") ? null : anchor;
    if (before) { if (box.nextElementSibling !== before) before.insertAdjacentElement("beforebegin", box); }
    else { const after = ov.querySelector(".ai-pad") || ov.querySelector(".ai-quit") || anchor; if (after.nextElementSibling !== box) after.insertAdjacentElement("afterend", box); }
  }
  function loadTrofei() {
    if (window.SalaTrofei) { trofeiReady = true; markSeen(trofei() || []); decorate(); }
    else {
      const sc = document.createElement("script");
      try { sc.src = new URL("trofei.js", me.src).href; } catch { return; }
      sc.onload = () => { trofeiReady = true; markSeen(trofei() || []); decorate(); };
      document.head.appendChild(sc);
    }
    loadImprese();
  }

  // ---------- Feats (shared/imprese.js) ----------
  // The game sends "sala:impresa" with the feat's id at the moment it happens; it is saved once and announced.
  let impReady = false, impQueue = [];
  function imprese() { return window.SalaImprese && BASE ? window.SalaImprese.status(BASE) : null; }
  function gotFeat(id) {
    if (!impReady) { impQueue.push(id); return; }
    const f = window.SalaImprese.unlock(BASE, id);
    if (!f) return;
    toast(`🏅 Impresa: ${f.name}!`, "imp");
    const ov = document.getElementById("overlay"); if (ov) showImprese(ov);
  }
  window.addEventListener("sala:impresa", (e) => gotFeat(String(e.detail)));
  function loadImprese() {
    const ready = () => { impReady = true; const q = impQueue; impQueue = []; q.forEach(gotFeat); decorate(); };
    if (window.SalaImprese) { ready(); return; }
    const sc = document.createElement("script");
    try { sc.src = new URL("imprese.js", me.src).href; } catch { return; }
    sc.onload = ready;
    document.head.appendChild(sc);
  }
  // one short row of names; a tap on a name shows what the feat asks for
  let impSel = -1;
  function impreseHTML() {
    const list = imprese(); if (!list) return "";
    const sel = list[impSel];
    return list.map((f, i) => `<button type="button" data-imp="${i}" class="${f.got ? "got" : ""}${i === impSel ? " ai-sel" : ""}" title="${f.desc}">🏅 ${f.name}${f.got ? " ✓" : ""}</button>`).join("")
      + (sel ? `<p>${sel.name}: ${sel.desc}${sel.got ? " · fatta!" : ""}</p>` : "");
  }
  // the feats sit just under the trophies in the title, game over and pause screens
  function showImprese(ov) {
    if (!impReady) return;
    const html = impreseHTML();
    let box = ov.querySelector(".ai-imprese");
    const after = ov.querySelector(".ai-trofei");
    if (!html || !after) { if (box) box.remove(); return; }
    if (!box) { box = document.createElement("div"); box.className = "ai-imprese"; }
    if (box.innerHTML !== html) box.innerHTML = html;
    if (after.nextElementSibling !== box) after.insertAdjacentElement("afterend", box);
  }

  // ---------- Ending the game from the pause menu ----------
  // The pause screen (the overlay with a "continua" button) gets two more buttons. The game listens for
  // "sala:termina" and ends itself the usual way, so the score is saved as a record, and the initials asked
  // for, exactly as after a real game over. The hall link does the same while the game is paused.
  let leaveAfter = false, goingHome = false;
  const paused = () => { const ov = document.getElementById("overlay"); return !!(ov && !ov.classList.contains("hidden") && ov.querySelector("[data-resume]")); };
  function extendPause() {
    const ov = document.getElementById("overlay");
    const resume = ov && ov.querySelector("[data-resume]");
    if (!resume || ov.querySelector("[data-quit]")) return;
    const box = document.createElement("div");
    box.className = "ai-quit";
    box.innerHTML = `<button type="button" data-quit>TERMINA PARTITA</button><button type="button" data-leave>ESCI ALLA SALA GIOCHI</button>`;
    resume.insertAdjacentElement("afterend", box);
    if (sticks().length) {
      const pad = document.createElement("div");
      pad.className = "ai-pad"; pad.innerHTML = padHTML();
      box.insertAdjacentElement("afterend", pad);
    }
  }
  function endGame() { window.dispatchEvent(new CustomEvent("sala:termina")); }
  function goHome() {
    const a = document.getElementById("homeLink");
    if (!a) return;
    goingHome = true;
    a.click();
    goingHome = false;
  }
  function leave() {
    endGame();
    // wait for the record to be written; if it was, the initials screen opens and we leave after it
    setTimeout(() => { if (modal || pending.length) leaveAfter = true; else goHome(); }, 600);
  }
  document.addEventListener("click", (e) => {
    const ib = e.target.closest("[data-imp]");
    if (ib) {
      e.stopPropagation(); e.preventDefault();
      impSel = impSel === +ib.dataset.imp ? -1 : +ib.dataset.imp;
      const ov = document.getElementById("overlay"); if (ov) showImprese(ov);
      return;
    }
    const pb = e.target.closest("[data-pad]");
    if (pb) {
      e.stopPropagation(); e.preventDefault(); set(PAD_KEY, pb.dataset.pad); applyPad();
      document.querySelectorAll(".ai-pad").forEach((n) => { n.innerHTML = padHTML(); });
      return;
    }
    if (e.target.closest("[data-quit]")) { e.stopPropagation(); e.preventDefault(); endGame(); }
    else if (e.target.closest("[data-leave]")) { e.stopPropagation(); e.preventDefault(); leave(); }
    else if (!goingHome && e.target.closest("#homeLink") && paused()) { e.stopImmediatePropagation(); e.preventDefault(); leave(); }
  }, true);
  // the hall may change the setting in another tab
  window.addEventListener("storage", (e) => { if (e.key === PAD_KEY) applyPad(); });
  function start() {
    injectCss();
    applyPad();
    loadTrofei();
    const ov = document.getElementById("overlay");
    if (!ov) return;
    observer = new MutationObserver(() => { extendPause(); decorate(); });
    extendPause();
    decorate();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
