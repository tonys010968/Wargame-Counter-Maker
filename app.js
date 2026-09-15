(() => {
  const $ = id => document.getElementById(id);

  const SYMBOLS = {
    infantry: `<svg viewBox="0 0 100 60" aria-hidden="true"><g fill="currentColor"><circle cx="50" cy="11" r="8"/><path d="M43 21h14l7 15-8 4v18H44V40l-8-4z"/><path d="M41 25 23 44l6 5 18-17zM59 25l18 19-6 5-18-17z"/></g></svg>`,
    tank: `<svg viewBox="0 0 120 60"><g fill="currentColor"><rect x="20" y="28" width="70" height="20" rx="4"/><rect x="42" y="17" width="35" height="14" rx="4"/><rect x="71" y="21" width="42" height="5"/><circle cx="34" cy="50" r="7"/><circle cx="52" cy="50" r="7"/><circle cx="70" cy="50" r="7"/><circle cx="88" cy="50" r="7"/></g></svg>`,
    artillery: `<svg viewBox="0 0 120 60"><g fill="currentColor"><circle cx="38" cy="45" r="12"/><circle cx="82" cy="45" r="12"/><rect x="30" y="26" width="55" height="10" rx="3"/><rect x="72" y="23" width="43" height="5"/><rect x="55" y="15" width="12" height="18"/></g></svg>`,
    truck: `<svg viewBox="0 0 120 60"><g fill="currentColor"><rect x="12" y="24" width="58" height="22" rx="3"/><path d="M70 29h25l13 17H70z"/><circle cx="31" cy="49" r="8"/><circle cx="86" cy="49" r="8"/></g></svg>`,
    fighter: `<svg viewBox="0 0 120 60"><path fill="currentColor" d="M8 31 48 24 64 4h8l-5 21 42 7v5l-42 4 5 15h-8L48 42 8 36z"/></svg>`,
    bomber: `<svg viewBox="0 0 120 60"><path fill="currentColor" d="M6 31 40 24 53 9h14l-4 15 49 8v5l-49 5 4 11H53L40 42 6 36z"/></svg>`,
    destroyer: `<svg viewBox="0 0 120 60"><path fill="currentColor" d="M7 43h96l11-9H95l-8-8H65v-9H55v9H36l-8 8H8z"/></svg>`,
    cruiser: `<svg viewBox="0 0 120 60"><path fill="currentColor" d="M5 43h100l10-10H92l-8-10H67v-9H54v9H34l-8 10H7z"/><rect fill="currentColor" x="37" y="18" width="10" height="6"/><rect fill="currentColor" x="76" y="18" width="10" height="6"/></svg>`,
    battleship: `<svg viewBox="0 0 120 60"><path fill="currentColor" d="M4 44h101l11-11H91l-7-12H68V10H53v11H35l-7 12H7z"/><rect fill="currentColor" x="28" y="18" width="16" height="7"/><rect fill="currentColor" x="78" y="18" width="16" height="7"/></svg>`,
    carrier: `<svg viewBox="0 0 120 60"><g fill="currentColor"><path d="M5 39h102l8-8H8z"/><rect x="18" y="22" width="80" height="9"/><rect x="76" y="14" width="14" height="8"/><rect x="80" y="9" width="3" height="8"/></g></svg>`,
    submarine: `<svg viewBox="0 0 120 60"><g fill="currentColor"><path d="M8 36c7-15 25-18 50-18h22c16 0 28 5 34 16-8 12-24 14-42 14H37C22 48 13 44 8 36z"/><rect x="53" y="9" width="18" height="13" rx="3"/><rect x="61" y="3" width="3" height="8"/><rect x="67" y="5" width="3" height="6"/><path d="M11 31 1 24v24l10-8z"/></g></svg>`,
    helicopter: `<svg viewBox="0 0 120 60"><g fill="currentColor"><path d="M24 32c7-9 17-13 31-13h22l16 10-4 8H57l-15 8H20l-8-6z"/><rect x="55" y="12" width="8" height="10"/><rect x="22" y="8" width="76" height="4" rx="2"/><rect x="84" y="31" width="27" height="4"/><path d="M105 22h4v24h-4z"/><path d="M96 32h22v4H96z"/><circle cx="39" cy="47" r="5"/><circle cx="81" cy="43" r="4"/></g></svg>`
  };

  const defaultCounter = () => ({
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()),
    name: "1/506 PIR",
    type: "INF",
    quantity: 1,
    infoText: "",
    template: "classic",
    topLeft: "",
    topRight: "",
    attack: "5",
    defense: "4",
    move: "6",

    topLeftColor: "#111111",
    topLeftHighlight: false,
    topLeftHighlightColor: "#fff59d",
    topRightColor: "#111111",
    topRightHighlight: false,
    topRightHighlightColor: "#fff59d",
    attackColor: "#111111",
    attackHighlight: false,
    attackHighlightColor: "#fff59d",
    defenseColor: "#111111",
    defenseHighlight: false,
    defenseHighlightColor: "#fff59d",
    moveColor: "#111111",
    moveHighlight: false,
    moveHighlightColor: "#fff59d",

    symbol: "infantry",
    customSymbolId: "",
    size: 0.625,
    bleed: 0.0625,
    safeInset: 0.04,
    bg: "#d7d1a8",
    stripeOrientation: "none",
    stripePosition: "center",
    stripeColor: "#ffffff",
    border: "#111111",
    text: "#111111",
    labelTextScale: 100,
    numberTextScale: 100,
    twoSided: false,
    back: null
  });

  let state = {
    counters: [defaultCounter()],
    selectedId: null,
    editingSide: "front",
    customSymbols: [],
    sheet: {
      paper: "letter",
      orientation: "portrait",
      margin: 0.375,
      gutter: 0.0625,
      cropMarks: true,
      guides: true,
      superiorBackMode: "blank",
      superiorLayoutMode: "auto",
      superiorManualPages: [],
      superiorManualPageIndex: 0,
      superiorSelectedSlotIndex: 0
    }
  };
  state.selectedId = state.counters[0].id;

  const controls = {
    twoSidedCheck: $("twoSidedCheck"),
    templateSelect: $("templateSelect"),
    sizePreset: $("sizePreset"),
    quantityValue: $("quantityValue"),
    bgColor: $("bgColor"),
    stripeOrientation: $("stripeOrientation"),
    stripePosition: $("stripePosition"),
    stripeColor: $("stripeColor"),
    borderColor: $("borderColor"),
    textColor: $("textColor"),
    labelTextScale: $("labelTextScale"),
    numberTextScale: $("numberTextScale"),
    unitName: $("unitName"),
    unitType: $("unitType"),
    infoText: $("infoText"),
    symbolSelect: $("symbolSelect"),
    customSymbolSelect: $("customSymbolSelect"),
    topLeftValue: $("topLeftValue"),
    topRightValue: $("topRightValue"),
    attackValue: $("attackValue"),
    defenseValue: $("defenseValue"),
    moveValue: $("moveValue"),
    topLeftColor: $("topLeftColor"),
    topLeftHighlight: $("topLeftHighlight"),
    topLeftHighlightColor: $("topLeftHighlightColor"),
    topRightColor: $("topRightColor"),
    topRightHighlight: $("topRightHighlight"),
    topRightHighlightColor: $("topRightHighlightColor"),
    attackColor: $("attackColor"),
    attackHighlight: $("attackHighlight"),
    attackHighlightColor: $("attackHighlightColor"),
    defenseColor: $("defenseColor"),
    defenseHighlight: $("defenseHighlight"),
    defenseHighlightColor: $("defenseHighlightColor"),
    moveColor: $("moveColor"),
    moveHighlight: $("moveHighlight"),
    moveHighlightColor: $("moveHighlightColor"),
    bleedSelect: $("bleedSelect"),
    safeInsetSelect: $("safeInsetSelect")
  };

  function cloneSideData(c) {
    const keys = [
      "name","type","infoText","template","topLeft","topRight","attack","defense","move",
      "topLeftColor","topLeftHighlight","topLeftHighlightColor",
      "topRightColor","topRightHighlight","topRightHighlightColor",
      "attackColor","attackHighlight","attackHighlightColor",
      "defenseColor","defenseHighlight","defenseHighlightColor",
      "moveColor","moveHighlight","moveHighlightColor",
      "symbol","customSymbolId","size","bleed","safeInset","bg","stripeOrientation",
      "stripePosition","stripeColor","border","text","labelTextScale","numberTextScale"
    ];
    const side = {};
    for (const k of keys) side[k] = c[k];
    return side;
  }

  function normalizeSideData(side, fallback) {
    const base = fallback || defaultCounter();
    const out = {...cloneSideData(base), ...(side || {})};
    if (!["none","vertical","horizontal"].includes(out.stripeOrientation)) out.stripeOrientation = "none";
    if (!["start","center","end"].includes(out.stripePosition)) out.stripePosition = "center";
    out.stripeColor ||= "#ffffff";
    out.labelTextScale = Math.max(50, Math.min(200, Number(out.labelTextScale) || 100));
    out.numberTextScale = Math.max(50, Math.min(200, Number(out.numberTextScale) || 100));
    return out;
  }

  function currentSideData(counter = selectedCounter()) {
    if (!counter) return null;
    if ((state.editingSide || "front") === "back" && counter.twoSided) {
      if (!counter.back) counter.back = cloneSideData(counter);
      return counter.back;
    }
    return counter;
  }

  function sideForExport(counter, side) {
    if (side === "back" && counter.twoSided && counter.back) return {...counter, ...counter.back};
    return counter;
  }

  function selectedCounter() {
    return state.counters.find(c => c.id === state.selectedId) || state.counters[0];
  }

  function renderCustomSymbolOptions() {
    const sel = $("customSymbolSelect");
    if (!sel) return;
    const current = sel.value;
    sel.innerHTML = '<option value="">None</option>';
    for (const s of (state.customSymbols || [])) {
      const opt = document.createElement("option");
      opt.value = s.id;
      opt.textContent = s.name;
      sel.appendChild(opt);
    }
    if ([...sel.options].some(o => o.value === current)) sel.value = current;
  }

  function syncControlsFromCounter() {
    const base = selectedCounter();
    if (!base) return;
    if (!base.twoSided && state.editingSide === "back") state.editingSide = "front";
    const c = currentSideData(base);

    controls.twoSidedCheck.checked = !!base.twoSided;
    $("sideEditorControls").hidden = !base.twoSided;
    $("editFrontBtn").classList.toggle("active", state.editingSide !== "back");
    $("editBackBtn").classList.toggle("active", state.editingSide === "back");

    controls.templateSelect.value = c.template || "classic";
    document.body.classList.toggle("template-sixValue", (c.template || "classic") === "sixValue");
    document.body.classList.toggle("template-information", (c.template || "classic") === "information");

    controls.sizePreset.value = String(c.size);
    controls.quantityValue.value = String(Math.max(1, Math.floor(Number(base.quantity) || 1)));
    controls.bgColor.value = c.bg;
    controls.stripeOrientation.value = c.stripeOrientation || "none";
    controls.stripePosition.value = c.stripePosition || "center";
    controls.stripeColor.value = c.stripeColor || "#ffffff";
    controls.borderColor.value = c.border;
    controls.textColor.value = c.text;
    controls.labelTextScale.value = String(Math.max(50, Math.min(200, Number(c.labelTextScale) || 100)));
    controls.numberTextScale.value = String(Math.max(50, Math.min(200, Number(c.numberTextScale) || 100)));
    controls.unitName.value = c.name;
    controls.unitType.value = c.type;
    controls.infoText.value = c.infoText || "";
    controls.symbolSelect.value = c.symbol || "infantry";
    renderCustomSymbolOptions();
    controls.customSymbolSelect.value = c.customSymbolId || "";

    controls.topLeftValue.value = c.topLeft || "";
    controls.topRightValue.value = c.topRight || "";
    controls.attackValue.value = c.attack || "";
    controls.defenseValue.value = c.defense || "";
    controls.moveValue.value = c.move || "";

    controls.topLeftColor.value = c.topLeftColor || "#111111";
    controls.topLeftHighlight.checked = !!c.topLeftHighlight;
    controls.topLeftHighlightColor.value = c.topLeftHighlightColor || "#fff59d";
    controls.topRightColor.value = c.topRightColor || "#111111";
    controls.topRightHighlight.checked = !!c.topRightHighlight;
    controls.topRightHighlightColor.value = c.topRightHighlightColor || "#fff59d";
    controls.attackColor.value = c.attackColor || "#111111";
    controls.attackHighlight.checked = !!c.attackHighlight;
    controls.attackHighlightColor.value = c.attackHighlightColor || "#fff59d";
    controls.defenseColor.value = c.defenseColor || "#111111";
    controls.defenseHighlight.checked = !!c.defenseHighlight;
    controls.defenseHighlightColor.value = c.defenseHighlightColor || "#fff59d";
    controls.moveColor.value = c.moveColor || "#111111";
    controls.moveHighlight.checked = !!c.moveHighlight;
    controls.moveHighlightColor.value = c.moveHighlightColor || "#fff59d";

    controls.bleedSelect.value = String(c.bleed);
    controls.safeInsetSelect.value = String(c.safeInset);
  }

  function updateCounterFromControls() {
    const base = selectedCounter();
    if (!base) return;

    const wantsTwoSided = controls.twoSidedCheck.checked;
    if (wantsTwoSided && !base.twoSided) {
      base.twoSided = true;
      base.back = cloneSideData(base);
    } else if (!wantsTwoSided && base.twoSided) {
      base.twoSided = false;
      base.back = null;
      state.editingSide = "front";
    }
    const c = currentSideData(base);

    c.template = controls.templateSelect.value || "classic";
    document.body.classList.toggle("template-sixValue", c.template === "sixValue");
    document.body.classList.toggle("template-information", c.template === "information");

    c.size = Number(controls.sizePreset.value);
    base.quantity = Math.max(1, Math.min(999, Math.floor(Number(controls.quantityValue.value) || 1)));
    controls.quantityValue.value = String(base.quantity);
    c.bg = controls.bgColor.value;
    c.stripeOrientation = controls.stripeOrientation.value || "none";
    c.stripePosition = controls.stripePosition.value || "center";
    c.stripeColor = controls.stripeColor.value || "#ffffff";
    c.border = controls.borderColor.value;
    c.text = controls.textColor.value;
    c.labelTextScale = Math.max(50, Math.min(200, Number(controls.labelTextScale.value) || 100));
    controls.labelTextScale.value = String(c.labelTextScale);
    c.numberTextScale = Math.max(50, Math.min(200, Number(controls.numberTextScale.value) || 100));
    controls.numberTextScale.value = String(c.numberTextScale);
    c.name = controls.unitName.value || "Unnamed Unit";
    c.type = controls.unitType.value || "";
    c.infoText = controls.infoText.value || "";
    c.symbol = controls.symbolSelect.value;
    c.customSymbolId = controls.customSymbolSelect.value || "";

    c.topLeft = controls.topLeftValue.value;
    c.topRight = controls.topRightValue.value;
    c.attack = controls.attackValue.value;
    c.defense = controls.defenseValue.value;
    c.move = controls.moveValue.value;

    c.topLeftColor = controls.topLeftColor.value;
    c.topLeftHighlight = controls.topLeftHighlight.checked;
    c.topLeftHighlightColor = controls.topLeftHighlightColor.value;

    c.topRightColor = controls.topRightColor.value;
    c.topRightHighlight = controls.topRightHighlight.checked;
    c.topRightHighlightColor = controls.topRightHighlightColor.value;

    c.attackColor = controls.attackColor.value;
    c.attackHighlight = controls.attackHighlight.checked;
    c.attackHighlightColor = controls.attackHighlightColor.value;

    c.defenseColor = controls.defenseColor.value;
    c.defenseHighlight = controls.defenseHighlight.checked;
    c.defenseHighlightColor = controls.defenseHighlightColor.value;

    c.moveColor = controls.moveColor.value;
    c.moveHighlight = controls.moveHighlight.checked;
    c.moveHighlightColor = controls.moveHighlightColor.value;

    c.bleed = Number(controls.bleedSelect.value);
    c.safeInset = Number(controls.safeInsetSelect.value);

    // Paired sides must use identical physical geometry for reliable registration.
    base.size = c.size;
    base.bleed = c.bleed;
    base.safeInset = c.safeInset;
    if (base.back) {
      base.back.size = base.size;
      base.back.bleed = base.bleed;
      base.back.safeInset = base.safeInset;
    }

    renderAll();
  }

  function escapeHtml(s) {
    return String(s ?? "").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
  }

  function numberMarkup(value, textColor, highlighted, highlightColor) {
    const content = escapeHtml(value || "");
    const style = `color:${textColor || "#111111"};${highlighted ? `background:${highlightColor || "#fff59d"};` : ""}`;
    return `<span class="number-pill" style="${style}">${content}</span>`;
  }

  function stripeMarkup(c) {
    const orientation = c.stripeOrientation || "none";
    if (orientation === "none") return "";
    const position = c.stripePosition || "center";
    const cls = `${orientation === "vertical" ? "counter-stripe vertical" : "counter-stripe horizontal"} ${position}`;
    return `<div class="${cls}" style="background:${c.stripeColor || "#ffffff"}"></div>`;
  }

  function getSymbolMarkup(c) {
    if (c.customSymbolId) {
      const s = (state.customSymbols || []).find(x => x.id === c.customSymbolId);
      if (s?.dataUrl) {
        return `<img class="custom-symbol-img" src="${s.dataUrl}" alt="">`;
      }
    }
    if (!c.symbol) return "";
    return SYMBOLS[c.symbol] || SYMBOLS.infantry;
  }

  function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error || new Error("Could not read file."));
      reader.readAsDataURL(file);
    });
  }

  function counterMarkup(c, pxPerInch, showGuides = true) {
    const sizePx = c.size * pxPerInch;
    const bleedPx = c.bleed * pxPerInch;
    const safePx = c.safeInset * pxPerInch;
    const guideDisplay = showGuides ? "" : "display:none;";
    const template = c.template || "classic";
    const labelScale = Math.max(50, Math.min(200, Number(c.labelTextScale) || 100)) / 100;
    const numberScale = Math.max(50, Math.min(200, Number(c.numberTextScale) || 100)) / 100;
    const artClass = template === "sixValue" ? "counter-art six-template" : "counter-art";

    let content = "";
    if (template === "sixValue") {
      content = `
        <div class="top-stat left" style="font-size:${Math.max(6, sizePx * .11 * numberScale)}px">${numberMarkup(c.topLeft || "", c.topLeftColor, c.topLeftHighlight, c.topLeftHighlightColor)}</div>
        <div class="top-stat right" style="font-size:${Math.max(6, sizePx * .11 * numberScale)}px">${numberMarkup(c.topRight || "", c.topRightColor, c.topRightHighlight, c.topRightHighlightColor)}</div>
        <div class="symbol-wrap">${getSymbolMarkup(c)}</div>
        <div class="unit-name" style="font-size:${Math.max(6, sizePx * .085 * labelScale)}px">${escapeHtml(c.name || "")}</div>
        <div class="stat attack" style="font-size:${Math.max(6, sizePx * .13 * numberScale)}px">${numberMarkup(c.attack || "", c.attackColor, c.attackHighlight, c.attackHighlightColor)}</div>
        <div class="stat defense" style="font-size:${Math.max(6, sizePx * .13 * numberScale)}px">${numberMarkup(c.defense || "", c.defenseColor, c.defenseHighlight, c.defenseHighlightColor)}</div>
        <div class="stat move" style="font-size:${Math.max(6, sizePx * .13 * numberScale)}px">${numberMarkup(c.move || "", c.moveColor, c.moveHighlight, c.moveHighlightColor)}</div>`;
    } else if (template === "information") {
      const hasImage = !!(c.customSymbolId || c.symbol);
      const imageMarkup = hasImage ? `<div class="symbol-wrap">${getSymbolMarkup(c)}</div>` : "";
      const infoClass = hasImage ? "counter-art info-template" : "counter-art info-template no-image";
      content = `
        ${imageMarkup}
        <div class="info-text" style="font-size:${Math.max(6, sizePx * .13 * labelScale)}px">${escapeHtml(c.infoText || c.name || "")}</div>`;
      return `
        <div class="bleed-outline" style="${guideDisplay}left:${-bleedPx}px;top:${-bleedPx}px;width:${sizePx + 2 * bleedPx}px;height:${sizePx + 2 * bleedPx}px"></div>
        <div class="${infoClass}" style="width:${sizePx}px;height:${sizePx}px;background:${c.bg};border-color:${c.border};color:${c.text};">
          ${stripeMarkup(c)}
          <div class="safe-outline" style="${guideDisplay}left:${safePx}px;top:${safePx}px;width:${Math.max(0, sizePx - 2 * safePx)}px;height:${Math.max(0, sizePx - 2 * safePx)}px"></div>
          ${content}
        </div>`;
    } else {
      content = `
        <div class="unit-name" style="font-size:${Math.max(6, sizePx * .11 * labelScale)}px">${escapeHtml(c.name || "")}</div>
        <div class="symbol-wrap">${getSymbolMarkup(c)}</div>
        <div class="unit-type" style="font-size:${Math.max(5, sizePx * .075 * labelScale)}px">${escapeHtml(c.type || "")}</div>
        <div class="stat attack" style="font-size:${Math.max(6, sizePx * .13 * numberScale)}px">${numberMarkup(c.attack || "", c.attackColor, c.attackHighlight, c.attackHighlightColor)}</div>
        <div class="stat defense" style="font-size:${Math.max(6, sizePx * .13 * numberScale)}px">${numberMarkup(c.defense || "", c.defenseColor, c.defenseHighlight, c.defenseHighlightColor)}</div>
        <div class="stat move" style="font-size:${Math.max(6, sizePx * .13 * numberScale)}px">${numberMarkup(c.move || "", c.moveColor, c.moveHighlight, c.moveHighlightColor)}</div>`;
    }

    return `
      <div class="bleed-outline" style="${guideDisplay}left:${-bleedPx}px;top:${-bleedPx}px;width:${sizePx + 2 * bleedPx}px;height:${sizePx + 2 * bleedPx}px"></div>
      <div class="${artClass}" style="width:${sizePx}px;height:${sizePx}px;background:${c.bg};border-color:${c.border};color:${c.text};">
        ${stripeMarkup(c)}
        <div class="safe-outline" style="${guideDisplay}left:${safePx}px;top:${safePx}px;width:${Math.max(0, sizePx - 2 * safePx)}px;height:${Math.max(0, sizePx - 2 * safePx)}px"></div>
        ${content}
      </div>`;
  }

  function renderPreview() {
    const base = selectedCounter();
    if (!base) return;
    const c = currentSideData(base);
    const ppi = Number($("zoomSelect").value) * 96;
    const sizePx = c.size * ppi;
    const el = $("counterPreview");
    el.style.width = `${sizePx}px`;
    el.style.height = `${sizePx}px`;
    el.innerHTML = counterMarkup(c, ppi, $("showGuidesCheck").checked);
  }

  function moveCounter(id, direction) {
    const from = state.counters.findIndex(c => c.id === id);
    if (from < 0) return;
    const to = from + direction;
    if (to < 0 || to >= state.counters.length) return;

    const [counter] = state.counters.splice(from, 1);
    state.counters.splice(to, 0, counter);
    state.selectedId = id;
    renderAll();
  }

  function renderCounterList() {
    const list = $("counterList");
    list.innerHTML = "";

    state.counters.forEach((c, index) => {
      const row = document.createElement("div");
      row.className = "counter-list-item" + (c.id === state.selectedId ? " active" : "");

      row.innerHTML = `
        <button type="button" class="counter-select-button" title="Edit ${escapeHtml(c.name)}">
          <span class="mini-swatch" style="background:${c.bg}"></span>
          <span class="counter-list-main">
            <span class="counter-list-name">${escapeHtml(c.name)} <span class="quantity-badge">×${Math.max(1, Math.floor(Number(c.quantity) || 1))}</span>${c.twoSided ? '<span class="counter-side-badge">2-sided</span>' : ''}</span>
            <span class="counter-list-values">${escapeHtml(c.attack)}-${escapeHtml(c.defense)}-${escapeHtml(c.move)} · ${escapeHtml(c.type || c.template)}</span>
          </span>
        </button>
        <span class="counter-order-controls">
          <button type="button" class="counter-move-up" title="Move up" aria-label="Move ${escapeHtml(c.name)} up">▲</button>
          <button type="button" class="counter-move-down" title="Move down" aria-label="Move ${escapeHtml(c.name)} down">▼</button>
        </span>`;

      const selectBtn = row.querySelector(".counter-select-button");
      const upBtn = row.querySelector(".counter-move-up");
      const downBtn = row.querySelector(".counter-move-down");

      upBtn.disabled = index === 0;
      downBtn.disabled = index === state.counters.length - 1;

      selectBtn.addEventListener("click", () => {
        state.selectedId = c.id;
        state.editingSide = "front";
        syncControlsFromCounter();
        renderAll();
      });

      upBtn.addEventListener("click", () => moveCounter(c.id, -1));
      downBtn.addEventListener("click", () => moveCounter(c.id, 1));

      list.appendChild(row);
    });
  }

  function paperInches() {
    let w, h;
    if (state.sheet.paper === "a4") { w = 8.2677; h = 11.6929; }
    else { w = 8.5; h = 11; }
    if (state.sheet.orientation === "landscape") [w, h] = [h, w];
    return { w, h };
  }

  function getSheetLayout() {
    const { w, h } = paperInches();
    const c = state.counters[0] || defaultCounter();
    const pitch = c.size + state.sheet.gutter;
    const cols = Math.max(1, Math.floor((w - 2 * state.sheet.margin + state.sheet.gutter) / pitch));
    const rows = Math.max(1, Math.floor((h - 2 * state.sheet.margin + state.sheet.gutter) / pitch));
    const cap = cols * rows;
    return { w, h, cols, rows, cap, pitch };
  }

  function addCropMarks(page, x, y, size) {
    if (!state.sheet.cropMarks) return;
    const len = 8, off = 3;
    const coords = [
      [x - off - len, y, "h"], [x, y - off - len, "v"],
      [x + size + off, y, "h"], [x + size, y - off - len, "v"],
      [x - off - len, y + size, "h"], [x, y + size + off, "v"],
      [x + size + off, y + size, "h"], [x + size, y + size + off, "v"]
    ];
    for (const [cx, cy, t] of coords) {
      const d = document.createElement("div");
      d.className = "crop " + t;
      d.style.left = `${cx}px`;
      d.style.top = `${cy}px`;
      page.appendChild(d);
    }
  }

  function expandedSheetCounters() {
    const expanded = [];
    for (const c of state.counters) {
      const qty = Math.max(1, Math.min(999, Math.floor(Number(c.quantity) || 1)));
      for (let i = 0; i < qty; i++) expanded.push(c);
    }
    return expanded;
  }

  function podSlotCount() {
    return superiorFrontSlots().length;
  }

  function blankPodPage() {
    return Array(podSlotCount()).fill(null);
  }

  function ensurePodManualPages() {
    state.sheet.superiorManualPages ||= [];
    if (!state.sheet.superiorManualPages.length) state.sheet.superiorManualPages = [blankPodPage()];
    state.sheet.superiorManualPages = state.sheet.superiorManualPages.map(page => {
      const p = Array.isArray(page) ? page.slice(0, podSlotCount()) : [];
      while (p.length < podSlotCount()) p.push(null);
      return p;
    });
    state.sheet.superiorManualPageIndex = Math.max(
      0,
      Math.min(Number(state.sheet.superiorManualPageIndex) || 0, state.sheet.superiorManualPages.length - 1)
    );
  }

  function counterQuantity(c) {
    return Math.max(1, Math.min(999, Math.floor(Number(c.quantity) || 1)));
  }

  function podAssignedCounts() {
    ensurePodManualPages();
    const counts = new Map();
    for (const page of state.sheet.superiorManualPages) {
      for (const id of page) {
        if (!id) continue;
        counts.set(id, (counts.get(id) || 0) + 1);
      }
    }
    return counts;
  }

  function seedPodManualLayout(groupByColor=false) {
    let expanded = [];
    for (const c of state.counters) {
      for (let i=0; i<counterQuantity(c); i++) expanded.push(c);
    }

    if (groupByColor) {
      expanded.sort((a,b) => {
        const aKey = `${String(a.bg||"").toLowerCase()}|${a.stripeOrientation||"none"}|${String(a.stripeColor||"").toLowerCase()}|${a.name||""}`;
        const bKey = `${String(b.bg||"").toLowerCase()}|${b.stripeOrientation||"none"}|${String(b.stripeColor||"").toLowerCase()}|${b.name||""}`;
        return aKey.localeCompare(bKey);
      });
    }

    const perSheet = podSlotCount();
    const pageCount = Math.max(1, Math.ceil(expanded.length / perSheet));
    state.sheet.superiorManualPages = Array.from({length:pageCount}, () => blankPodPage());

    expanded.forEach((c,i) => {
      const p = Math.floor(i/perSheet);
      const slot = i % perSheet;
      state.sheet.superiorManualPages[p][slot] = c.id;
    });

    state.sheet.superiorManualPageIndex = 0;
    renderPodLayoutPlanner();
  }

  function renderPodUsageSummary() {
    const box = $("podUsageSummary");
    if (!box) return;
    const counts = podAssignedCounts();
    box.innerHTML = "";

    for (const c of state.counters) {
      const used = counts.get(c.id) || 0;
      const qty = counterQuantity(c);
      const chip = document.createElement("span");
      chip.className = "pod-usage-chip" + (used > qty ? " over" : (used < qty ? " missing" : ""));
      chip.title = used > qty ? "More copies are assigned than the counter quantity allows." :
                   used < qty ? "Some copies are not yet assigned to POD slots." : "All copies assigned.";
      chip.innerHTML = `<span class="pod-chip-swatch" style="background:${c.bg || "#ffffff"}"></span>${escapeHtml(c.name)} ${used}/${qty}`;
      box.appendChild(chip);
    }
  }

  function podPlannerScale() {
    // Exact 18x12 proportions, scaled to a practical on-screen width.
    return 1037 / SUPERIOR_POD.pageWidthPt;
  }

  function podShortName(c) {
    if (!c) return "";
    const text = String(c.name || c.type || c.template || "Counter");
    return text.length > 11 ? text.slice(0,10) + "…" : text;
  }

  function renderPodSelectedSlotEditor() {
    ensurePodManualPages();
    const idx = Math.max(0, Math.min(podSlotCount()-1, Number(state.sheet.superiorSelectedSlotIndex) || 0));
    state.sheet.superiorSelectedSlotIndex = idx;

    const page = state.sheet.superiorManualPages[state.sheet.superiorManualPageIndex];
    const currentId = page[idx] || "";

    $("podSelectedSlotLabel").textContent = `Selected slot: ${idx+1}`;

    const select = $("podSelectedSlotCounter");
    select.innerHTML = "";

    const empty = document.createElement("option");
    empty.value = "";
    empty.textContent = "— Empty —";
    select.appendChild(empty);

    state.counters.forEach((c,index) => {
      const opt = document.createElement("option");
      opt.value = c.id;
      opt.textContent = `${index+1}. ${c.name} ×${counterQuantity(c)} · ${c.bg || ""}`;
      select.appendChild(opt);
    });

    select.value = currentId;
  }

  function renderPodExactSheet() {
    const sheet = $("podExactSheet");
    if (!sheet) return;

    // Keep the permanent labels, clear generated slots.
    sheet.querySelectorAll(".pod-exact-slot,.pod-exact-sheet-midline").forEach(el => el.remove());

    const midline = document.createElement("div");
    midline.className = "pod-exact-sheet-midline";
    sheet.appendChild(midline);

    ensurePodManualPages();
    const page = state.sheet.superiorManualPages[state.sheet.superiorManualPageIndex];
    const slots = superiorFrontSlots();
    const scale = podPlannerScale();
    const slotSize = SUPERIOR_POD.counterPt * scale;
    const selected = Number(state.sheet.superiorSelectedSlotIndex) || 0;

    slots.forEach((slot, i) => {
      const id = page[i] || null;
      const c = state.counters.find(x => x.id === id);

      const front = document.createElement("div");
      front.className = "pod-exact-slot front" + (c ? "" : " empty") + (i === selected ? " selected" : "");
      front.style.left = `${slot.x * scale}px`;
      front.style.top = `${slot.y * scale}px`;
      front.style.width = `${slotSize}px`;
      front.style.height = `${slotSize}px`;
      front.style.background = c?.bg || "rgba(255,255,255,.72)";
      front.title = c ? `Slot ${i+1}: ${c.name}` : `Slot ${i+1}: Empty`;
      front.innerHTML = `<span class="pod-exact-slot-number">${i+1}</span><span class="pod-exact-slot-name">${escapeHtml(podShortName(c) || "Empty")}</span>`;
      front.addEventListener("click", () => {
        state.sheet.superiorSelectedSlotIndex = i;
        renderPodExactSheet();
        renderPodSelectedSlotEditor();
      });
      sheet.appendChild(front);

      const backSlot = superiorBackSlot(slot);
      const backCounter = c
        ? ((state.sheet.superiorBackMode || "blank") === "repeat"
            ? c
            : (c.twoSided && c.back ? sideForExport(c,"back") : c))
        : null;

      const back = document.createElement("div");
      back.className = "pod-exact-slot back" + (backCounter ? "" : " empty");
      back.style.left = `${backSlot.x * scale}px`;
      back.style.top = `${backSlot.y * scale}px`;
      back.style.width = `${slotSize}px`;
      back.style.height = `${slotSize}px`;
      back.style.background = backCounter?.bg || "rgba(255,255,255,.72)";
      back.title = c
        ? `Linked back for front slot ${i+1}: ${backCounter?.name || c.name}`
        : `Linked back for front slot ${i+1}: Empty`;
      back.innerHTML = `<span class="pod-exact-slot-number">${i+1}</span><span class="pod-exact-slot-name">${escapeHtml(podShortName(backCounter) || "Empty")}</span>`;
      sheet.appendChild(back);
    });
  }


  function renderPodLayoutPlanner() {
    const planner = $("podLayoutPlanner");
    if (!planner) return;

    const manual = (state.sheet.superiorLayoutMode || "auto") === "manual";
    planner.hidden = !manual;
    if (!manual) return;

    ensurePodManualPages();
    const idx = state.sheet.superiorManualPageIndex;
    $("podPageLabel").textContent = `Sheet ${idx+1} of ${state.sheet.superiorManualPages.length}`;
    $("podPrevPageBtn").disabled = idx <= 0;
    $("podNextPageBtn").disabled = idx >= state.sheet.superiorManualPages.length - 1;
    $("podRemovePageBtn").disabled = state.sheet.superiorManualPages.length <= 1;

    renderPodUsageSummary();
    renderPodSelectedSlotEditor();
    renderPodExactSheet();
  }

  function podManualValidation() {
    ensurePodManualPages();
    const counts = podAssignedCounts();
    const over = [];
    const missing = [];
    for (const c of state.counters) {
      const used = counts.get(c.id) || 0;
      const qty = counterQuantity(c);
      if (used > qty) over.push(`${c.name}: ${used}/${qty}`);
      if (used < qty) missing.push(`${c.name}: ${used}/${qty}`);
    }
    return {counts, over, missing};
  }

  function manualPodPlacements() {
    ensurePodManualPages();
    const slots = superiorFrontSlots();
    const pages = [];

    for (const page of state.sheet.superiorManualPages) {
      const counters = [];
      const usedSlots = [];
      for (let i=0; i<page.length && i<slots.length; i++) {
        const id = page[i];
        if (!id) continue;
        const c = state.counters.find(x => x.id === id);
        if (!c) continue;
        counters.push(c);
        usedSlots.push(slots[i]);
      }
      if (counters.length) pages.push({counters, slots:usedSlots});
    }
    return pages;
  }

  function renderSheet() {
    renderPodLayoutPlanner();
    const preview = $("sheetPreview");
    preview.innerHTML = "";
    const layout = getSheetLayout();
    const sheetCounters = expandedSheetCounters();
    const displayPpi = 72;
    const pageW = layout.w * displayPpi, pageH = layout.h * displayPpi;
    const pages = Math.max(1, Math.ceil(sheetCounters.length / layout.cap));
    $("sheetCounterCount").textContent = sheetCounters.length;
    $("sheetCapacity").textContent = layout.cap;
    $("sheetPageCount").textContent = pages;

    for (let p = 0; p < pages; p++) {
      const page = document.createElement("div");
      page.className = "paper-page";
      page.style.width = `${pageW}px`;
      page.style.height = `${pageH}px`;

      const start = p * layout.cap;
      const subset = sheetCounters.slice(start, start + layout.cap);
      subset.forEach((c, i) => {
        const col = i % layout.cols, row = Math.floor(i / layout.cols);
        const x = (state.sheet.margin + col * layout.pitch) * displayPpi;
        const y = (state.sheet.margin + row * layout.pitch) * displayPpi;
        const wrap = document.createElement("div");
        wrap.className = "sheet-counter";
        wrap.style.left = `${x}px`;
        wrap.style.top = `${y}px`;
        wrap.style.width = `${c.size * displayPpi}px`;
        wrap.style.height = `${c.size * displayPpi}px`;
        wrap.innerHTML = counterMarkup(c, displayPpi, state.sheet.guides);
        page.appendChild(wrap);
        addCropMarks(page, x, y, c.size * displayPpi);
      });

      preview.appendChild(page);

      if (subset.some(c => c.twoSided && c.back)) {
        const backPage=document.createElement("div");
        backPage.className="paper-page back-page";
        backPage.style.width=`${pageW}px`; backPage.style.height=`${pageH}px`;
        subset.forEach((c,i)=>{
          const col=i%layout.cols, row=Math.floor(i/layout.cols);
          const mirroredCol=(layout.cols-1)-col;
          const x=(state.sheet.margin + mirroredCol*layout.pitch)*displayPpi;
          const y=(state.sheet.margin + row*layout.pitch)*displayPpi;
          const wrap=document.createElement("div");
          wrap.className="sheet-counter";
          wrap.style.left=`${x}px`; wrap.style.top=`${y}px`;
          wrap.style.width=`${c.size*displayPpi}px`; wrap.style.height=`${c.size*displayPpi}px`;
          if (c.twoSided && c.back) {
            wrap.innerHTML=counterMarkup(sideForExport(c,"back"),displayPpi,state.sheet.guides);
          } else {
            const oneSide={...c,name:"",type:"",infoText:"",topLeft:"",topRight:"",attack:"",defense:"",move:"",symbol:"none",customSymbolId:""};
            wrap.innerHTML=counterMarkup(oneSide,displayPpi,state.sheet.guides);
          }
          backPage.appendChild(wrap);
          addCropMarks(backPage,x,y,c.size*displayPpi);
        });
        preview.appendChild(backPage);
      }
    }
  }

  function renderAll() {
    renderCustomSymbolOptions();
    renderCounterList();
    renderPreview();
    renderSheet();
  }

  $("editFrontBtn").addEventListener("click", () => {
    state.editingSide = "front";
    syncControlsFromCounter();
    renderAll();
  });

  $("editBackBtn").addEventListener("click", () => {
    const c = selectedCounter();
    if (!c || !c.twoSided) return;
    if (!c.back) c.back = cloneSideData(c);
    state.editingSide = "back";
    syncControlsFromCounter();
    renderAll();
  });

  $("copyFrontToBackBtn").addEventListener("click", () => {
    const c = selectedCounter();
    if (!c || !c.twoSided) return;
    c.back = cloneSideData(c);
    if (state.editingSide === "back") syncControlsFromCounter();
    renderAll();
  });

  // Input bindings
  for (const ctl of Object.values(controls)) {
    if (!ctl) continue;
    ctl.addEventListener("input", updateCounterFromControls);
    ctl.addEventListener("change", updateCounterFromControls);
  }

  $("zoomSelect").addEventListener("change", renderPreview);
  $("showGuidesCheck").addEventListener("change", renderPreview);

  $("addCounterBtn").addEventListener("click", () => {
    const base = selectedCounter() || defaultCounter();
    const c = structuredClone ? structuredClone(base) : JSON.parse(JSON.stringify(base));
    c.id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random());
    c.name = "New Unit";
    state.counters.push(c);
    state.selectedId = c.id;
    state.editingSide = "front";
    syncControlsFromCounter();
    renderAll();
  });

  $("duplicateCounterBtn").addEventListener("click", () => {
    const base = selectedCounter();
    if (!base) return;
    const c = structuredClone ? structuredClone(base) : JSON.parse(JSON.stringify(base));
    c.id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random());
    c.name = base.name + " Copy";
    state.counters.push(c);
    state.selectedId = c.id;
    state.editingSide = "front";
    syncControlsFromCounter();
    renderAll();
  });

  $("deleteCounterBtn").addEventListener("click", () => {
    if (state.counters.length <= 1) {
      alert("A project must contain at least one counter.");
      return;
    }
    const idx = state.counters.findIndex(c => c.id === state.selectedId);
    state.counters.splice(idx, 1);
    state.selectedId = state.counters[Math.max(0, idx - 1)].id;
    syncControlsFromCounter();
    renderAll();
  });

  document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(x => x.classList.remove("active"));
      document.querySelectorAll(".workspace").forEach(x => x.classList.remove("active"));
      btn.classList.add("active");
      $(btn.dataset.tab + "Tab").classList.add("active");
      if (btn.dataset.tab === "sheet") renderSheet();
    });
  });

  const sheetBindings = [
    ["paperSize", "paper", v => v],
    ["orientation", "orientation", v => v],
    ["marginSelect", "margin", Number],
    ["gutterSelect", "gutter", Number]
  ];
  sheetBindings.forEach(([id, key, cast]) => {
    $(id).addEventListener("change", () => {
      state.sheet[key] = cast($(id).value);
      renderSheet();
    });
  });
  $("cropMarksCheck").addEventListener("change", () => { state.sheet.cropMarks = $("cropMarksCheck").checked; renderSheet(); });
  $("sheetGuidesCheck").addEventListener("change", () => { state.sheet.guides = $("sheetGuidesCheck").checked; renderSheet(); });
  $("superiorBackMode").addEventListener("change", () => { state.sheet.superiorBackMode = $("superiorBackMode").value; });
  $("superiorLayoutMode").addEventListener("change", () => {
    state.sheet.superiorLayoutMode = $("superiorLayoutMode").value;
    if (state.sheet.superiorLayoutMode === "manual") {
      ensurePodManualPages();
      const hasAssignments = state.sheet.superiorManualPages.some(p => p.some(Boolean));
      if (!hasAssignments) seedPodManualLayout(false);
    }
    renderSheet();
  });

  $("podSelectedSlotCounter").addEventListener("change", () => {
    ensurePodManualPages();
    const page = state.sheet.superiorManualPages[state.sheet.superiorManualPageIndex];
    const slotIndex = Math.max(0, Math.min(podSlotCount()-1, Number(state.sheet.superiorSelectedSlotIndex) || 0));
    page[slotIndex] = $("podSelectedSlotCounter").value || null;
    renderPodUsageSummary();
    renderPodExactSheet();
  });

  $("podClearSelectedSlotBtn").addEventListener("click", () => {
    ensurePodManualPages();
    const page = state.sheet.superiorManualPages[state.sheet.superiorManualPageIndex];
    const slotIndex = Math.max(0, Math.min(podSlotCount()-1, Number(state.sheet.superiorSelectedSlotIndex) || 0));
    page[slotIndex] = null;
    renderPodSelectedSlotEditor();
    renderPodUsageSummary();
    renderPodExactSheet();
  });

  $("podSeedOrderBtn").addEventListener("click", () => {
    if (state.sheet.superiorManualPages?.some(p => p.some(Boolean)) &&
        !confirm("Replace the current manual POD layout with the counter-list order?")) return;
    seedPodManualLayout(false);
  });
  $("podSeedColorBtn").addEventListener("click", () => {
    if (state.sheet.superiorManualPages?.some(p => p.some(Boolean)) &&
        !confirm("Replace the current manual POD layout with a color-grouped layout?")) return;
    seedPodManualLayout(true);
  });
  $("podPrevPageBtn").addEventListener("click", () => {
    ensurePodManualPages();
    state.sheet.superiorManualPageIndex = Math.max(0, state.sheet.superiorManualPageIndex - 1);
    state.sheet.superiorSelectedSlotIndex = 0;
    renderPodLayoutPlanner();
  });
  $("podNextPageBtn").addEventListener("click", () => {
    ensurePodManualPages();
    state.sheet.superiorManualPageIndex = Math.min(state.sheet.superiorManualPages.length - 1, state.sheet.superiorManualPageIndex + 1);
    state.sheet.superiorSelectedSlotIndex = 0;
    renderPodLayoutPlanner();
  });
  $("podAddPageBtn").addEventListener("click", () => {
    ensurePodManualPages();
    state.sheet.superiorManualPages.push(blankPodPage());
    state.sheet.superiorManualPageIndex = state.sheet.superiorManualPages.length - 1;
    state.sheet.superiorSelectedSlotIndex = 0;
    renderPodLayoutPlanner();
  });
  $("podClearPageBtn").addEventListener("click", () => {
    ensurePodManualPages();
    const idx = state.sheet.superiorManualPageIndex;
    if (state.sheet.superiorManualPages[idx].some(Boolean) &&
        !confirm(`Clear all assignments from POD sheet ${idx+1}?`)) return;
    state.sheet.superiorManualPages[idx] = blankPodPage();
    renderPodLayoutPlanner();
  });
  $("podRemovePageBtn").addEventListener("click", () => {
    ensurePodManualPages();
    if (state.sheet.superiorManualPages.length <= 1) return;
    const idx = state.sheet.superiorManualPageIndex;
    if (state.sheet.superiorManualPages[idx].some(Boolean) &&
        !confirm(`Remove POD sheet ${idx+1} and all assignments on it?`)) return;
    state.sheet.superiorManualPages.splice(idx,1);
    state.sheet.superiorManualPageIndex = Math.min(idx, state.sheet.superiorManualPages.length - 1);
    renderPodLayoutPlanner();
  });

  $("refreshSheetBtn").addEventListener("click", renderSheet);

  $("newProjectBtn").addEventListener("click", () => {
    if (!confirm("Start a new project? Unsaved changes will be lost.")) return;
    state.counters = [defaultCounter()];
    state.customSymbols = [];
    state.sheet.superiorManualPages = [];
    state.sheet.superiorManualPageIndex = 0;
    state.sheet.superiorSelectedSlotIndex = 0;
    state.selectedId = state.counters[0].id;
    syncControlsFromCounter();
    renderAll();
  });

  $("saveProjectBtn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "wargame-counter-project.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  function syncSheetControls() {
    $("paperSize").value = state.sheet.paper;
    $("orientation").value = state.sheet.orientation;
    $("marginSelect").value = String(state.sheet.margin);
    $("gutterSelect").value = String(state.sheet.gutter);
    $("cropMarksCheck").checked = !!state.sheet.cropMarks;
    $("sheetGuidesCheck").checked = !!state.sheet.guides;
    $("superiorBackMode").value = state.sheet.superiorBackMode || "blank";
    $("superiorLayoutMode").value = state.sheet.superiorLayoutMode || "auto";
    renderPodLayoutPlanner();
  }

  function csvEscape(value) {
    const s = String(value ?? "");
    return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '\"\"')}"` : s;
  }

  function exportedSymbolName(c) {
    if (c.customSymbolId) {
      const custom = (state.customSymbols || []).find(s => s.id === c.customSymbolId);
      if (custom) return custom.name;
    }
    return c.symbol || "";
  }

  $("exportCsvBtn").addEventListener("click", () => {
    const headers = [
      "Counter Number","Quantity","Template","Counter Size (in)","Background Color","Stripe Orientation","Stripe Color","Border Color","Main Text Color","Label Font Size (%)","Number Font Size (%)",
      "Unit Name","Unit Type","Information Text","Symbol",
      "Top Left","Top Left Text Color","Top Left Highlight","Top Left Highlight Color",
      "Top Right","Top Right Text Color","Top Right Highlight","Top Right Highlight Color",
      "Bottom Left","Bottom Left Text Color","Bottom Left Highlight","Bottom Left Highlight Color",
      "Bottom Center","Bottom Center Text Color","Bottom Center Highlight","Bottom Center Highlight Color",
      "Bottom Right","Bottom Right Text Color","Bottom Right Highlight","Bottom Right Highlight Color"
    ];

    const rows = state.counters.map((c, index) => [
      index + 1, Math.max(1, Math.floor(Number(c.quantity) || 1)), c.template || "classic", c.size ?? "", c.bg || "", c.stripeOrientation || "none", c.stripeColor || "#ffffff", c.border || "", c.text || "", Math.max(50, Math.min(200, Number(c.labelTextScale) || 100)), Math.max(50, Math.min(200, Number(c.numberTextScale) || 100)),
      c.name || "", c.type || "", c.infoText || "", exportedSymbolName(c),
      c.topLeft || "", c.topLeftColor || "#111111", c.topLeftHighlight ? "Yes" : "No", c.topLeftHighlightColor || "",
      c.topRight || "", c.topRightColor || "#111111", c.topRightHighlight ? "Yes" : "No", c.topRightHighlightColor || "",
      c.attack || "", c.attackColor || "#111111", c.attackHighlight ? "Yes" : "No", c.attackHighlightColor || "",
      c.defense || "", c.defenseColor || "#111111", c.defenseHighlight ? "Yes" : "No", c.defenseHighlightColor || "",
      c.move || "", c.moveColor || "#111111", c.moveHighlight ? "Yes" : "No", c.moveHighlightColor || ""
    ]);

    const csvText = [headers, ...rows].map(row => row.map(csvEscape).join(",")).join("\r\n");
    const blob = new Blob(["\ufeff" + csvText], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "wargame-counters.csv";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  $("loadProjectInput").addEventListener("change", async e => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      if (!Array.isArray(data.counters) || !data.counters.length) throw new Error("No counters found.");
      state = data;
      state.customSymbols ||= [];
      state.sheet ||= { paper: "letter", orientation: "portrait", margin: .375, gutter: .0625, cropMarks: true, guides: true, superiorBackMode: "blank" };
      state.sheet.superiorBackMode ||= "blank";
      state.sheet.superiorLayoutMode ||= "auto";
      state.sheet.superiorManualPages ||= [];
      state.sheet.superiorManualPageIndex = Math.max(0, Number(state.sheet.superiorManualPageIndex) || 0);
      state.sheet.superiorSelectedSlotIndex = Math.max(0, Number(state.sheet.superiorSelectedSlotIndex) || 0);
      state.counters.forEach(c => {
        if (c.customSymbolId == null) c.customSymbolId = "";
        c.quantity = Math.max(1, Math.min(999, Math.floor(Number(c.quantity) || 1)));
        c.labelTextScale = Math.max(50, Math.min(200, Number(c.labelTextScale) || 100));
        c.numberTextScale = Math.max(50, Math.min(200, Number(c.numberTextScale) || 100));
        if (!["none","vertical","horizontal"].includes(c.stripeOrientation)) c.stripeOrientation = "none";
        if (!["start","center","end"].includes(c.stripePosition)) c.stripePosition = "center";
        c.stripeColor ||= "#ffffff";
        c.twoSided = !!c.twoSided;
        if (c.twoSided) c.back = normalizeSideData(c.back, c);
        else c.back = null;
        if (!c.template) c.template = "classic";
        if (c.infoText == null) c.infoText = "";
        if (c.topLeft == null) c.topLeft = "";
        if (c.topRight == null) c.topRight = "";

        c.topLeftColor ||= "#111111";
        if (c.topLeftHighlight == null) c.topLeftHighlight = false;
        c.topLeftHighlightColor ||= "#fff59d";

        c.topRightColor ||= "#111111";
        if (c.topRightHighlight == null) c.topRightHighlight = false;
        c.topRightHighlightColor ||= "#fff59d";

        c.attackColor ||= "#111111";
        if (c.attackHighlight == null) c.attackHighlight = false;
        c.attackHighlightColor ||= "#fff59d";

        c.defenseColor ||= "#111111";
        if (c.defenseHighlight == null) c.defenseHighlight = false;
        c.defenseHighlightColor ||= "#fff59d";

        c.moveColor ||= "#111111";
        if (c.moveHighlight == null) c.moveHighlight = false;
        c.moveHighlightColor ||= "#fff59d";
      });
      state.selectedId = state.selectedId && state.counters.some(c => c.id === state.selectedId)
        ? state.selectedId
        : state.counters[0].id;
      syncSheetControls();
      syncControlsFromCounter();
      renderAll();
    } catch (err) {
      alert("Could not load project: " + err.message);
    }
    e.target.value = "";
  });

  $("symbolImportInput").addEventListener("change", async e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const allowed = ["image/png", "image/jpeg", "image/svg+xml"];
    if (!allowed.includes(file.type)) {
      alert("Please import a PNG, JPG, or SVG file.");
      e.target.value = "";
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert("Please use a symbol file smaller than 2 MB.");
      e.target.value = "";
      return;
    }
    try {
      const dataUrl = await readFileAsDataURL(file);
      const id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random());
      state.customSymbols ||= [];
      state.customSymbols.push({
        id,
        name: file.name.replace(/\.[^.]+$/, ""),
        fileName: file.name,
        mimeType: file.type,
        dataUrl
      });
      const c = selectedCounter();
      c.customSymbolId = id;
      renderCustomSymbolOptions();
      controls.customSymbolSelect.value = id;
      renderAll();
    } catch (err) {
      alert("Could not import symbol: " + err.message);
    }
    e.target.value = "";
  });

  $("customSymbolSelect").addEventListener("change", () => {
    const c = selectedCounter();
    if (!c) return;
    c.customSymbolId = $("customSymbolSelect").value || "";
    renderAll();
  });

  $("removeSymbolBtn").addEventListener("click", () => {
    const id = $("customSymbolSelect").value;
    if (!id) {
      alert("No imported symbol is selected.");
      return;
    }
    const sym = (state.customSymbols || []).find(s => s.id === id);
    if (!confirm(`Remove imported symbol "${sym?.name || "symbol"}" from the project?`)) return;
    state.customSymbols = (state.customSymbols || []).filter(s => s.id !== id);
    state.counters.forEach(c => {
      if (c.customSymbolId === id) c.customSymbolId = "";
    });
    renderCustomSymbolOptions();
    controls.customSymbolSelect.value = "";
    renderAll();
  });


  // Superior POD 5/8-inch chit-sheet export. Geometry is matched to the supplied
  // 18 x 12 inch manufacturer template (1296 x 864 PDF points at 72 pt/inch).
  const SUPERIOR_POD = {
    pageWidthPt: 1296,
    pageHeightPt: 864,
    counterPt: 45,
    safeInsetPt: 3.375, // 3/64 inch
    bleedPt: 3.375,
    topY: 55,
    bottomY: 450,
    rowsPerBlock: 8,
    frontColumns: [37, 82, 136, 181, 251, 296, 350, 395, 450, 495, 567],
    backColumns: [1216, 1170, 1117, 1071, 1002, 956, 903, 857, 803, 758, 686]
  };

  function superiorFrontSlots() {
    const slots = [];
    for (const y0 of [SUPERIOR_POD.topY, SUPERIOR_POD.bottomY]) {
      for (let row = 0; row < SUPERIOR_POD.rowsPerBlock; row++) {
        for (let col = 0; col < SUPERIOR_POD.frontColumns.length; col++) {
          slots.push({ x: SUPERIOR_POD.frontColumns[col], y: y0 + row * SUPERIOR_POD.counterPt, col, row, y0 });
        }
      }
    }
    return slots;
  }

  function superiorBackSlot(frontSlot) {
    // Manufacturer back sheet is a horizontal mirror of the front sheet.
    return { ...frontSlot, x: SUPERIOR_POD.backColumns[frontSlot.col] };
  }

  function superiorGroupEdges(slot) {
    const groups = [[0,1],[2,3],[4,5],[6,7],[8,9],[10,10]];
    const g = groups.find(([a,b]) => slot.col >= a && slot.col <= b) || [slot.col, slot.col];
    return {
      left: slot.col === g[0], right: slot.col === g[1],
      top: slot.row === 0, bottom: slot.row === SUPERIOR_POD.rowsPerBlock - 1
    };
  }

  function hexToRgb(hex) {
    let h = String(hex || "#000000").replace("#", "");
    if (h.length === 3) h = h.split("").map(x => x + x).join("");
    const n = parseInt(h, 16);
    return { r:(n>>16)&255, g:(n>>8)&255, b:n&255 };
  }

  function drawRoundedRect(ctx, x, y, w, h, radius, fill) {
    const r = Math.min(radius, w/2, h/2);
    ctx.beginPath();
    ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r);
    ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath();
    ctx.fillStyle = fill; ctx.fill();
  }

  function wrapCanvasText(ctx, text, maxWidth, maxLines=4) {
    const words = String(text || "").split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    const lines=[]; let line="";
    for (const word of words) {
      const test = line ? line + " " + word : word;
      if (ctx.measureText(test).width <= maxWidth || !line) line=test;
      else { lines.push(line); line=word; if (lines.length >= maxLines-1) break; }
    }
    if (line && lines.length < maxLines) lines.push(line);
    return lines;
  }

  function loadImageUrl(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error("Could not render a counter image."));
      img.src = url;
    });
  }

  async function canvasSymbolImage(c) {
    if (c.customSymbolId) {
      const custom = (state.customSymbols || []).find(s => s.id === c.customSymbolId);
      if (custom?.dataUrl) return loadImageUrl(custom.dataUrl);
    }
    if (!c.symbol || !SYMBOLS[c.symbol]) return null;
    const color = c.text || "#111111";
    let svg = SYMBOLS[c.symbol].replace(/currentColor/g, color);
    if (!/^<svg[^>]*xmlns=/.test(svg)) svg = svg.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
    return loadImageUrl("data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg));
  }

  function drawFitImage(ctx, img, x, y, w, h) {
    const scale = Math.min(w / img.width, h / img.height);
    const dw = img.width * scale, dh = img.height * scale;
    ctx.drawImage(img, x + (w-dw)/2, y + (h-dh)/2, dw, dh);
  }

  function drawValue(ctx, value, cx, cy, fontPx, color, highlighted, highlightColor, scale) {
    if (value === "" || value == null) return;
    ctx.save();
    ctx.font = `700 ${fontPx}px Arial, sans-serif`;
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    const text = String(value);
    if (highlighted) {
      const m = ctx.measureText(text);
      const padX=1.8*scale, padY=1.2*scale;
      drawRoundedRect(ctx, cx-m.width/2-padX, cy-fontPx*.55-padY, m.width+padX*2, fontPx*1.1+padY*2, 1.5*scale, highlightColor || "#fff59d");
    }
    ctx.fillStyle = color || "#111111";
    ctx.fillText(text, cx, cy);
    ctx.restore();
  }

  function superiorColor(c) {
    return (c && c.bg) ? c.bg : "#ffffff";
  }

  function superiorAllSameColor(counters) {
    if (!counters.length) return null;
    const first = superiorColor(counters[0]).toLowerCase();
    return counters.every(c => superiorColor(c).toLowerCase() === first) ? first : null;
  }

  function superiorSlotKey(slot) {
    return `${slot.y0}|${slot.row}|${slot.col}`;
  }

  function superiorBleedTerritories(counters, slots) {
    // Return one background rectangle per occupied chit. Each rectangle extends
    // halfway into a gap when the immediately adjacent template position is
    // occupied. If there is no occupied neighbor, use the manufacturer's
    // standard bleed distance at that outer edge.
    const count = Math.min(counters.length, slots.length);
    const occupied = new Map();
    for (let i=0; i<count; i++) occupied.set(superiorSlotKey(slots[i]), i);

    const byRow = new Map();
    const byCol = new Map();

    for (let i=0; i<count; i++) {
      const s = slots[i];
      const rowKey = `${s.y0}|${s.row}`;
      if (!byRow.has(rowKey)) byRow.set(rowKey, []);
      byRow.get(rowKey).push({slot:s,index:i});

      // Physical x is used so this works for the horizontally mirrored back side too.
      const colKey = `${Math.round(s.x * 1000) / 1000}`;
      if (!byCol.has(colKey)) byCol.set(colKey, []);
      byCol.get(colKey).push({slot:s,index:i});
    }

    for (const arr of byRow.values()) arr.sort((a,b) => a.slot.x - b.slot.x);
    for (const arr of byCol.values()) arr.sort((a,b) => a.slot.y - b.slot.y);

    const bleed = SUPERIOR_POD.bleedPt;
    const size = SUPERIOR_POD.counterPt;
    const result = [];

    for (let i=0; i<count; i++) {
      const s = slots[i];
      let left = s.x - bleed;
      let right = s.x + size + bleed;
      let top = s.y - bleed;
      let bottom = s.y + size + bleed;

      const rowArr = byRow.get(`${s.y0}|${s.row}`) || [];
      const rowPos = rowArr.findIndex(v => v.index === i);

      if (rowPos > 0) {
        const n = rowArr[rowPos-1].slot;
        // Only bridge the gap if the neighbor is the immediately adjacent
        // occupied template position. A missing chit position stays blank.
        const logicalGap = Math.abs(s.col - n.col);
        if (logicalGap === 1) left = ((n.x + size) + s.x) / 2;
      }
      if (rowPos >= 0 && rowPos < rowArr.length-1) {
        const n = rowArr[rowPos+1].slot;
        const logicalGap = Math.abs(s.col - n.col);
        if (logicalGap === 1) right = ((s.x + size) + n.x) / 2;
      }

      const colArr = byCol.get(`${Math.round(s.x * 1000) / 1000}`) || [];
      const colPos = colArr.findIndex(v => v.index === i);

      if (colPos > 0) {
        const n = colArr[colPos-1].slot;
        // Adjacent rows within a block, or the bottom row of the upper block
        // directly above the first row of the lower block.
        const sameBlockAdjacent = s.y0 === n.y0 && Math.abs(s.row - n.row) === 1;
        const bridgeBlocks = n.y0 === SUPERIOR_POD.topY && n.row === SUPERIOR_POD.rowsPerBlock-1 &&
                             s.y0 === SUPERIOR_POD.bottomY && s.row === 0;
        if (sameBlockAdjacent || bridgeBlocks) top = ((n.y + size) + s.y) / 2;
      }
      if (colPos >= 0 && colPos < colArr.length-1) {
        const n = colArr[colPos+1].slot;
        const sameBlockAdjacent = s.y0 === n.y0 && Math.abs(s.row - n.row) === 1;
        const bridgeBlocks = s.y0 === SUPERIOR_POD.topY && s.row === SUPERIOR_POD.rowsPerBlock-1 &&
                             n.y0 === SUPERIOR_POD.bottomY && n.row === 0;
        if (sameBlockAdjacent || bridgeBlocks) bottom = ((s.y + size) + n.y) / 2;
      }

      result.push({left,right,top,bottom,color:superiorColor(counters[i])});
    }
    return result;
  }

  function drawSuperiorBleedBackground(ctx, counters, slots, dpi) {
    const scale = dpi / 72;
    const pt = v => v * scale;
    const territories = superiorBleedTerritories(counters, slots);
    for (const t of territories) {
      ctx.fillStyle = t.color;
      ctx.fillRect(pt(t.left), pt(t.top), pt(t.right - t.left), pt(t.bottom - t.top));
    }
  }

  function drawCounterStripe(ctx, c, x, y, size) {
    const orientation = c.stripeOrientation || "none";
    if (orientation === "none") return;
    const position = c.stripePosition || "center";
    const offset = position === "start" ? 0 : (position === "end" ? 0.80 : 0.40);
    ctx.save();
    ctx.fillStyle = c.stripeColor || "#ffffff";
    if (orientation === "vertical") {
      ctx.fillRect(x + size * offset, y, size * 0.20, size);
    } else if (orientation === "horizontal") {
      ctx.fillRect(x, y + size * offset, size, size * 0.20);
    }
    ctx.restore();
  }

  async function drawSuperiorCounter(ctx, c, slot, dpi) {
    const scale = dpi / 72;
    const pt = v => v * scale;
    const x = pt(slot.x), y = pt(slot.y), size = pt(SUPERIOR_POD.counterPt);
    ctx.fillStyle = c.bg || "#ffffff";
    ctx.fillRect(x, y, size, size);
    drawCounterStripe(ctx, c, x, y, size);
    // Keep a subtle border only inside the actual finished chit edge.
    ctx.strokeStyle = c.border || "#111111";
    ctx.lineWidth = Math.max(0.35*scale, 1);
    ctx.strokeRect(x, y, size, size);

    const inset = pt(SUPERIOR_POD.safeInsetPt);
    const sx=x+inset, sy=y+inset, sw=size-2*inset, sh=size-2*inset;
    const textColor=c.text || "#111111";
    const labelScale=Math.max(50,Math.min(200,Number(c.labelTextScale)||100))/100;
    const numberScale=Math.max(50,Math.min(200,Number(c.numberTextScale)||100))/100;
    const symbol = await canvasSymbolImage(c);
    const template=c.template || "classic";

    if (template === "information") {
      const hasImage=!!symbol;
      if (symbol) drawFitImage(ctx, symbol, sx+sw*.12, sy, sw*.76, sh*.43);
      ctx.fillStyle=textColor;
      ctx.textAlign="center"; ctx.textBaseline="middle";
      const fontPx=Math.max(3.2*scale, size*.115*labelScale);
      ctx.font=`700 ${fontPx}px Arial, sans-serif`;
      const lines=wrapCanvasText(ctx, c.infoText || c.name || "", sw*.95, hasImage?3:5);
      const lineH=fontPx*1.05;
      const areaTop=hasImage ? sy+sh*.52 : sy+sh*.12;
      const areaH=hasImage ? sh*.43 : sh*.76;
      let yy=areaTop + areaH/2 - (lines.length-1)*lineH/2;
      for (const line of lines) { ctx.fillText(line, x+size/2, yy); yy+=lineH; }
      return;
    }

    if (template === "sixValue") {
      drawValue(ctx,c.topLeft,x+size*.18,y+size*.13,size*.105*numberScale,c.topLeftColor,c.topLeftHighlight,c.topLeftHighlightColor,scale);
      drawValue(ctx,c.topRight,x+size*.82,y+size*.13,size*.105*numberScale,c.topRightColor,c.topRightHighlight,c.topRightHighlightColor,scale);
      if (symbol) drawFitImage(ctx,symbol,x+size*.20,y+size*.17,size*.60,size*.36);
      ctx.fillStyle=textColor; ctx.textAlign="center"; ctx.textBaseline="middle";
      ctx.font=`700 ${size*.09*labelScale}px Arial, sans-serif`;
      ctx.fillText(String(c.name || "").slice(0,24),x+size/2,y+size*.58);
      drawValue(ctx,c.attack,x+size*.17,y+size*.84,size*.12*numberScale,c.attackColor,c.attackHighlight,c.attackHighlightColor,scale);
      drawValue(ctx,c.defense,x+size*.50,y+size*.84,size*.12*numberScale,c.defenseColor,c.defenseHighlight,c.defenseHighlightColor,scale);
      drawValue(ctx,c.move,x+size*.83,y+size*.84,size*.12*numberScale,c.moveColor,c.moveHighlight,c.moveHighlightColor,scale);
      return;
    }

    ctx.fillStyle=textColor; ctx.textAlign="center"; ctx.textBaseline="middle";
    ctx.font=`700 ${size*.105*labelScale}px Arial, sans-serif`;
    ctx.fillText(String(c.name || "").slice(0,24),x+size/2,y+size*.12);
    if (symbol) drawFitImage(ctx,symbol,x+size*.17,y+size*.21,size*.66,size*.37);
    ctx.font=`600 ${size*.072*labelScale}px Arial, sans-serif`;
    ctx.fillText(String(c.type || "").slice(0,18),x+size/2,y+size*.64);
    drawValue(ctx,c.attack,x+size*.17,y+size*.84,size*.12*numberScale,c.attackColor,c.attackHighlight,c.attackHighlightColor,scale);
    drawValue(ctx,c.defense,x+size*.50,y+size*.84,size*.12*numberScale,c.defenseColor,c.defenseHighlight,c.defenseHighlightColor,scale);
    drawValue(ctx,c.move,x+size*.83,y+size*.84,size*.12*numberScale,c.moveColor,c.moveHighlight,c.moveHighlightColor,scale);
  }

  function drawSuperiorSolidBack(ctx, c, slot, dpi) {
    const scale = dpi / 72;
    const pt = v => v * scale;
    const x = pt(slot.x), y = pt(slot.y), size = pt(SUPERIOR_POD.counterPt);
    ctx.fillStyle = c.bg || "#ffffff";
    ctx.fillRect(x, y, size, size);
    drawCounterStripe(ctx, c, x, y, size);

    // Keep the same finished-edge border as the front, but no text or symbol.
    ctx.strokeStyle = c.border || "#111111";
    ctx.lineWidth = Math.max(0.35 * scale, 1);
    ctx.strokeRect(x, y, size, size);
  }

  function binaryConcat(chunks) {
    const total=chunks.reduce((n,c)=>n+c.length,0); const out=new Uint8Array(total); let off=0;
    for (const c of chunks) { out.set(c,off); off+=c.length; } return out;
  }

  function asciiBytes(s) { return new TextEncoder().encode(s); }

  function canvasToJpegBytes(canvas, quality=0.92) {
    return new Promise((resolve, reject) => {
      canvas.toBlob(async blob => {
        if (!blob) {
          reject(new Error("Could not convert the PDF page canvas to JPEG."));
          return;
        }
        try {
          const buffer = await blob.arrayBuffer();
          resolve(new Uint8Array(buffer));
        } catch (err) {
          reject(err);
        }
      }, "image/jpeg", quality);
    });
  }

  function buildJpegPdf(jpegs, imageWidthPx, imageHeightPx, pageWidthPt=imageWidthPx, pageHeightPt=imageHeightPx) {
    // imageWidthPx/imageHeightPx describe the JPEG raster.
    // pageWidthPt/pageHeightPt describe the physical PDF page.
    // Keeping these separate is essential: PDF points are 1/72 inch, not pixels.
    const enc = new TextEncoder();
    const chunks = [];
    const offsets = [0];
    let bytePos = 0;

    function pushText(text) {
      const bytes = enc.encode(text);
      chunks.push(bytes);
      bytePos += bytes.length;
    }

    function pushBytes(bytes) {
      chunks.push(bytes);
      bytePos += bytes.length;
    }

    function addObj(objNum, bodyParts) {
      offsets[objNum] = bytePos;
      pushText(`${objNum} 0 obj\n`);
      for (const part of bodyParts) {
        if (typeof part === "string") pushText(part);
        else pushBytes(part);
      }
      pushText("\nendobj\n");
    }

    pushText("%PDF-1.4\n");

    const pageCount = jpegs.length;
    const catalogObj = 1;
    const pagesObj = 2;
    let nextObj = 3;

    const pageObjs = [];
    const imageObjs = [];
    const contentObjs = [];

    for (let i=0; i<pageCount; i++) {
      pageObjs.push(nextObj++);
      imageObjs.push(nextObj++);
      contentObjs.push(nextObj++);
    }

    addObj(catalogObj, [`<< /Type /Catalog /Pages ${pagesObj} 0 R >>`]);

    addObj(pagesObj, [
      `<< /Type /Pages /Count ${pageCount} /Kids [${pageObjs.map(n => `${n} 0 R`).join(" ")}] >>`
    ]);

    for (let i=0; i<pageCount; i++) {
      const imgObj = imageObjs[i];
      const contentObj = contentObjs[i];
      const pageObj = pageObjs[i];
      const jpeg = jpegs[i];

      addObj(imgObj, [
        `<< /Type /XObject /Subtype /Image /Width ${imageWidthPx} /Height ${imageHeightPx} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n`,
        jpeg,
        "\nendstream"
      ]);

      const content = `q\n${pageWidthPt} 0 0 ${pageHeightPt} 0 0 cm\n/Im0 Do\nQ\n`;
      const contentBytes = enc.encode(content);
      addObj(contentObj, [
        `<< /Length ${contentBytes.length} >>\nstream\n`,
        contentBytes,
        "\nendstream"
      ]);

      addObj(pageObj, [
        `<< /Type /Page /Parent ${pagesObj} 0 R /MediaBox [0 0 ${pageWidthPt} ${pageHeightPt}] `,
        `/Resources << /XObject << /Im0 ${imgObj} 0 R >> >> /Contents ${contentObj} 0 R >>`
      ]);
    }

    const xrefPos = bytePos;
    pushText(`xref\n0 ${nextObj}\n`);
    pushText("0000000000 65535 f \n");
    for (let i=1; i<nextObj; i++) {
      pushText(`${String(offsets[i] || 0).padStart(10,"0")} 00000 n \n`);
    }
    pushText(`trailer\n<< /Size ${nextObj} /Root ${catalogObj} 0 R >>\nstartxref\n${xrefPos}\n%%EOF`);

    return binaryConcat(chunks);
  }


  function generalPdfPaperPoints() {
    const paper = state.sheet.paper || "letter";
    const orientation = state.sheet.orientation || "portrait";
    let wIn = paper === "a4" ? 8.2677165354 : 8.5;
    let hIn = paper === "a4" ? 11.6929133858 : 11;
    if (orientation === "landscape") [wIn, hIn] = [hIn, wIn];
    return {wIn, hIn, wPt:wIn*72, hPt:hIn*72};
  }

  function generalPdfPlacements(counters) {
    const paper = generalPdfPaperPoints();
    const margin = Math.max(0, Number(state.sheet.margin) || 0);
    const gutter = Math.max(0, Number(state.sheet.gutter) || 0);
    const pages = [];
    let page = [];
    let x = margin;
    let y = margin;
    let rowHeight = 0;

    for (const c of counters) {
      const size = Math.max(0.1, Number(c.size) || 0.625);

      if (x + size > paper.wIn - margin + 1e-6) {
        x = margin;
        y += rowHeight + gutter;
        rowHeight = 0;
      }

      if (y + size > paper.hIn - margin + 1e-6) {
        pages.push(page);
        page = [];
        x = margin;
        y = margin;
        rowHeight = 0;
      }

      page.push({counter:c, xIn:x, yIn:y, sizeIn:size});
      x += size + gutter;
      rowHeight = Math.max(rowHeight, size);
    }

    if (page.length || !pages.length) pages.push(page);
    return {paper, pages};
  }

  function generalBackCounter(c) {
    if (c.twoSided && c.back) return sideForExport(c, "back");
    return {
      ...c,
      name:"",
      type:"",
      infoText:"",
      topLeft:"",
      topRight:"",
      attack:"",
      defense:"",
      move:"",
      symbol:"none",
      customSymbolId:""
    };
  }

  async function drawGenericCounter(ctx, c, xPx, yPx, sizePx, dpi) {
    const size = sizePx;
    const textColor = c.text || "#111111";
    const labelScale = Math.max(50, Math.min(200, Number(c.labelTextScale) || 100)) / 100;
    const numberScale = Math.max(50, Math.min(200, Number(c.numberTextScale) || 100)) / 100;
    const template = c.template || "classic";

    ctx.save();

    // Hard clip: no text, symbol, stripe, highlight or other artwork may extend
    // beyond the finished counter square.
    ctx.beginPath();
    ctx.rect(xPx, yPx, size, size);
    ctx.clip();

    // Background and stripe.
    ctx.fillStyle = c.bg || "#ffffff";
    ctx.fillRect(xPx, yPx, size, size);
    drawCounterStripe(ctx, c, xPx, yPx, size);

    const symbol = await canvasSymbolImage(c);

    function drawSymbol(cx, cy, maxW, maxH) {
      if (!symbol) return;
      const ratio = Math.min(maxW / symbol.width, maxH / symbol.height);
      const w = symbol.width * ratio;
      const h = symbol.height * ratio;
      ctx.drawImage(symbol, cx - w/2, cy - h/2, w, h);
    }

    function fittedFontPx(text, desiredPx, maxWidth, weight="700", minPx=4) {
      const str = String(text ?? "");
      let px = Math.max(minPx, desiredPx);
      ctx.font = `${weight} ${px}px Arial, sans-serif`;
      let width = ctx.measureText(str).width;
      if (width <= maxWidth || width <= 0) return px;

      px = Math.max(minPx, px * (maxWidth / width));
      ctx.font = `${weight} ${px}px Arial, sans-serif`;

      // One extra pass handles rounding/font metric differences.
      width = ctx.measureText(str).width;
      if (width > maxWidth && width > 0) {
        px = Math.max(minPx, px * (maxWidth / width));
      }
      return px;
    }

    function drawCenteredText(text, cx, cy, desiredPx, maxWidth, weight="700", minPx=4) {
      if (!text) return;
      const px = fittedFontPx(text, desiredPx, maxWidth, weight, minPx);
      ctx.fillStyle = textColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `${weight} ${px}px Arial, sans-serif`;
      ctx.fillText(String(text), cx, cy);
    }

    function drawStat(text, cx, cy, desiredPx, color, highlight, highlightColor, maxWidth=size*0.25) {
      if (text == null || text === "") return;
      ctx.save();

      const str = String(text);
      const px = fittedFontPx(str, desiredPx, maxWidth, "700", Math.max(4, size*0.055));
      ctx.font = `700 ${px}px Arial, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      if (highlight) {
        const m = ctx.measureText(str);
        const padX = Math.max(2, px * 0.16);
        const padY = Math.max(1, px * 0.10);
        const h = px * 1.05;
        ctx.fillStyle = highlightColor || "#ffff00";
        ctx.fillRect(
          cx - m.width/2 - padX,
          cy - h/2 - padY/2,
          m.width + padX*2,
          h + padY
        );
      }

      ctx.fillStyle = color || textColor;
      ctx.fillText(str, cx, cy);
      ctx.restore();
    }

    if (template === "information") {
      if (symbol) drawSymbol(xPx + size*0.5, yPx + size*0.34, size*0.54, size*0.32);

      drawCenteredText(
        c.infoText || c.name || "",
        xPx + size*0.5,
        yPx + size*0.67,
        Math.max(6, size*0.13*labelScale),
        size*0.84,
        "700",
        Math.max(4, size*0.055)
      );

    } else if (template === "sixValue") {
      drawStat(c.topLeft,  xPx + size*0.18, yPx + size*0.13, size*0.12*numberScale, c.topLeftColor, c.topLeftHighlight, c.topLeftHighlightColor, size*0.27);
      drawStat(c.topRight, xPx + size*0.82, yPx + size*0.13, size*0.12*numberScale, c.topRightColor, c.topRightHighlight, c.topRightHighlightColor, size*0.27);

      if (symbol) drawSymbol(xPx + size*0.5, yPx + size*0.33, size*0.56, size*0.28);

      drawCenteredText(
        c.name || "",
        xPx + size*0.5,
        yPx + size*0.56,
        Math.max(6, size*0.085*labelScale),
        size*0.86,
        "700",
        Math.max(4, size*0.05)
      );

      drawStat(c.attack,  xPx + size*0.175, yPx + size*0.86, size*0.14*numberScale, c.attackColor, c.attackHighlight, c.attackHighlightColor, size*0.27);
      drawStat(c.defense, xPx + size*0.50,  yPx + size*0.86, size*0.14*numberScale, c.defenseColor, c.defenseHighlight, c.defenseHighlightColor, size*0.27);
      drawStat(c.move,    xPx + size*0.825, yPx + size*0.86, size*0.14*numberScale, c.moveColor, c.moveHighlight, c.moveHighlightColor, size*0.27);

    } else {
      // Classic/default
      drawCenteredText(
        c.name || "",
        xPx + size*0.5,
        yPx + size*0.11,
        Math.max(6, size*0.11*labelScale),
        size*0.88,
        "700",
        Math.max(4, size*0.05)
      );

      drawCenteredText(
        c.type || "",
        xPx + size*0.5,
        yPx + size*0.22,
        Math.max(5, size*0.075*labelScale),
        size*0.86,
        "600",
        Math.max(4, size*0.045)
      );

      if (symbol) drawSymbol(xPx + size*0.5, yPx + size*0.48, size*0.58, size*0.36);

      drawStat(c.attack,  xPx + size*0.175, yPx + size*0.86, size*0.14*numberScale, c.attackColor, c.attackHighlight, c.attackHighlightColor, size*0.27);
      drawStat(c.defense, xPx + size*0.50,  yPx + size*0.86, size*0.14*numberScale, c.defenseColor, c.defenseHighlight, c.defenseHighlightColor, size*0.27);
      drawStat(c.move,    xPx + size*0.825, yPx + size*0.86, size*0.14*numberScale, c.moveColor, c.moveHighlight, c.moveHighlightColor, size*0.27);
    }

    ctx.restore();

    // Border is drawn after restoring the clip so it remains crisp and fully visible.
    ctx.save();
    ctx.strokeStyle = c.border || "#111111";
    ctx.lineWidth = Math.max(1, size * 0.012);
    ctx.strokeRect(xPx, yPx, size, size);
    ctx.restore();
  }


  async function exportGeneralDoubleSidedPdf() {
    const counters = expandedSheetCounters();
    if (!counters.length) {
      alert("There are no counters to export.");
      return;
    }

    const {paper, pages} = generalPdfPlacements(counters);
    const dpi = 300;
    const width = Math.round(paper.wIn * dpi);
    const height = Math.round(paper.hIn * dpi);
    const jpegs = [];

    const btn = $("generalPdfBtn");
    const oldText = btn.textContent;
    btn.disabled = true;

    try {
      for (let p=0; p<pages.length; p++) {
        const placements = pages[p];

        // Front
        btn.textContent = `General PDF front ${p+1}/${pages.length}...`;
        let canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext("2d", {alpha:false});
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0,0,width,height);

        for (const item of placements) {
          // Physical size is explicit: inches × DPI.
          // Example: 0.625" × 300 DPI = 187.5 px.
          await drawGenericCounter(
            ctx,
            item.counter,
            item.xIn * dpi,
            item.yIn * dpi,
            item.sizeIn * dpi,
            dpi
          );
        }
        jpegs.push(await canvasToJpegBytes(canvas));

        // Back: horizontally mirrored for duplex registration
        btn.textContent = `General PDF back ${p+1}/${pages.length}...`;
        canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext("2d", {alpha:false});
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0,0,width,height);

        for (const item of placements) {
          const s = item.sizeIn * dpi;
          const frontX = item.xIn * dpi;
          const x = width - frontX - s;
          const y = item.yIn * dpi;
          const back = generalBackCounter(item.counter);

          await drawGenericCounter(ctx, back, x, y, s, dpi);
        }
        jpegs.push(await canvasToJpegBytes(canvas));
      }

      // Raster is 300 DPI, but physical PDF page remains true Letter/A4 size
      // in 72-point-per-inch PDF coordinates.
      const pdf = buildJpegPdf(jpegs, width, height, paper.wPt, paper.hPt);
      const blob = new Blob([pdf], {type:"application/pdf"});
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `starfall-counter-sheet-${state.sheet.paper || "letter"}-${state.sheet.orientation || "portrait"}-duplex.pdf`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1500);
    } catch (err) {
      console.error(err);
      alert("Could not create the general double-sided PDF: " + err.message);
    } finally {
      btn.disabled = false;
      btn.textContent = oldText;
    }
  }

  async function exportSuperiorPodPdf() {
    const manualMode = (state.sheet.superiorLayoutMode || "auto") === "manual";
    let exportPages = [];

    if (manualMode) {
      const validation = podManualValidation();
      if (validation.over.length) {
        alert("The manual POD layout uses more copies than the defined quantity for:\n\n" + validation.over.join("\n") + "\n\nAdjust the slot assignments before exporting.");
        return;
      }
      if (validation.missing.length) {
        const ok = confirm(
          "Some counter copies are not assigned to a POD slot:\n\n" +
          validation.missing.slice(0,12).join("\n") +
          (validation.missing.length > 12 ? `\n…and ${validation.missing.length-12} more.` : "") +
          "\n\nExport only the counters currently assigned?"
        );
        if (!ok) return;
      }
      exportPages = manualPodPlacements();
      if (!exportPages.length) {
        alert("The manual Superior POD layout has no assigned counters.");
        return;
      }
    } else {
      const counters = expandedSheetCounters();
      if (!counters.length) { alert("There are no counters to export."); return; }
      const slots = superiorFrontSlots();
      const perSheet = slots.length;
      const pageCount = Math.ceil(counters.length / perSheet);
      for (let page=0; page<pageCount; page++) {
        const subset = counters.slice(page*perSheet,(page+1)*perSheet);
        exportPages.push({counters:subset, slots:slots.slice(0,subset.length)});
      }
    }

    const usedCounters = exportPages.flatMap(p => p.counters);
    if (usedCounters.some(c => Math.abs(Number(c.size)-0.625) > 0.0001)) {
      alert('Superior POD export requires every assigned counter to use the 5/8 inch size.');
      return;
    }

    const dpi=300, scale=dpi/72;
    const width=Math.round(SUPERIOR_POD.pageWidthPt*scale);
    const height=Math.round(SUPERIOR_POD.pageHeightPt*scale);
    const jpegs=[];
    const btn=$("superiorPodBtn");
    const old=btn.textContent;
    btn.disabled=true;

    try {
      for (let page=0; page<exportPages.length; page++) {
        btn.textContent=`Building POD ${page+1}/${exportPages.length}...`;

        const canvas=document.createElement("canvas");
        canvas.width=width; canvas.height=height;
        const ctx=canvas.getContext("2d",{alpha:false});

        const subset=exportPages[page].counters;
        const frontSlots=exportPages[page].slots;
        const repeatedBacks=(state.sheet.superiorBackMode || "blank") === "repeat";
        const backSubset=subset.map(c => repeatedBacks ? c : (c.twoSided && c.back ? sideForExport(c,"back") : c));
        const backSlots=frontSlots.map(superiorBackSlot);

        const sameColor=superiorAllSameColor(subset);
        const backSameColor=superiorAllSameColor(backSubset);
        const wholeSheetColor =
          sameColor && backSameColor && sameColor.toLowerCase() === backSameColor.toLowerCase()
            ? sameColor : null;

        ctx.fillStyle=wholeSheetColor || "#ffffff";
        ctx.fillRect(0,0,width,height);

        if (!wholeSheetColor) {
          drawSuperiorBleedBackground(ctx,subset,frontSlots,dpi);
          drawSuperiorBleedBackground(ctx,backSubset,backSlots,dpi);
        }

        for (let i=0;i<subset.length;i++) {
          await drawSuperiorCounter(ctx,subset[i],frontSlots[i],dpi);
        }

        for (let i=0;i<subset.length;i++) {
          const c=subset[i];
          if (repeatedBacks) {
            await drawSuperiorCounter(ctx,c,backSlots[i],dpi);
          } else if (c.twoSided && c.back) {
            await drawSuperiorCounter(ctx,sideForExport(c,"back"),backSlots[i],dpi);
          } else {
            drawSuperiorSolidBack(ctx,c,backSlots[i],dpi);
          }
        }

        jpegs.push(await canvasToJpegBytes(canvas));
      }

      const pdf=buildJpegPdf(jpegs,width,height,SUPERIOR_POD.pageWidthPt,SUPERIOR_POD.pageHeightPt);
      const blob=new Blob([pdf],{type:"application/pdf"});
      const a=document.createElement("a");
      a.href=URL.createObjectURL(blob);
      a.download="starfall-superior-pod-5-8-chit-sheet.pdf";
      a.click();
      setTimeout(()=>URL.revokeObjectURL(a.href),1500);
    } catch (err) {
      console.error(err);
      alert("Could not create the Superior POD PDF: " + err.message);
    } finally {
      btn.disabled=false;
      btn.textContent=old;
    }
  }

  $("generalPdfBtn").addEventListener("click", exportGeneralDoubleSidedPdf);
  $("superiorPodBtn").addEventListener("click", exportSuperiorPodPdf);

  $("printBtn").addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(x => x.classList.toggle("active", x.dataset.tab === "sheet"));
    document.querySelectorAll(".workspace").forEach(x => x.classList.toggle("active", x.id === "sheetTab"));
    renderSheet();
    setTimeout(() => window.print(), 50);
  });

  syncSheetControls();
  syncControlsFromCounter();
  renderAll();
})();
