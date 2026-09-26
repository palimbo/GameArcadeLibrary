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
  .ai-name { color: #ffd34d; font-weight: 800; letter-spacing: 1px; }`;
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
      markNewRecord(name);
      decorate();
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
    if (observer) observer.observe(ov, { childList: true, subtree: true, characterData: true });
  }
  function start() {
    injectCss();
    const ov = document.getElementById("overlay");
    if (!ov) return;
    observer = new MutationObserver(() => decorate());
    decorate();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
