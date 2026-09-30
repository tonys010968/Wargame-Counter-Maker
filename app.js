(() => {
  const $ = id => document.getElementById(id);

  const SYMBOLS = {
    infantry: `<svg viewBox="0 0 100 60" aria-hidden="true"><g fill="currentColor"><circle cx="50" cy="11" r="8"/><path d="M43 21h14l7 15-8 4v18H44V40l-8-4z"/><path d="M41 25 23 44l6 5 18-17zM59 25l18 19-6 5-18-17z"/></g></svg>`,
    oldSchoolInfantry: `<svg viewBox="0 0 100 60" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="square"><rect x="26" y="10" width="48" height="34"/><path d="M31 15 69 39M69 15 31 39"/></g></svg>`,
    oldSchoolCavalry: `<svg viewBox="0 0 100 60" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="square"><rect x="26" y="10" width="48" height="34"/><path d="M31 39 69 15"/></g></svg>`,
    oldSchoolArtillery: `<svg viewBox="0 0 100 60" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="square"><rect x="26" y="10" width="48" height="34"/></g><circle cx="50" cy="27" r="6" fill="currentColor"/></svg>`,
    oldSchoolArmor: `<svg viewBox="0 0 100 60" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="4"><rect x="26" y="10" width="48" height="34"/><rect x="35" y="20" width="30" height="12" rx="6" ry="6"/></g></svg>`,
    oldSchoolJetFighter: `<svg viewBox="0 0 100 60" aria-hidden="true"><path fill="currentColor" d="M50 6 57 22 70 35 58 35 58 48 42 48 42 35 30 35 43 22Z"/></svg>`,
    oldSchoolSupportPlane: `<svg viewBox="0 0 100 60" aria-hidden="true"><path fill="currentColor" d="M48 12H52V21L78 28V35L52 32V47H48V32L22 35V28L48 21Z"/></svg>`,
    oldSchoolHeavyBomber: `<svg viewBox="0 0 100 60" aria-hidden="true"><path fill="currentColor" d="M48 10H52V18L60 23 70 28 82 34V39L68 35 63 33V39L59 39V31L52 28V48H48V28L41 31V39H37V33L32 35 18 39V34L30 28 40 23 48 18Z"/><rect x="27" y="22" width="4" height="8" fill="currentColor"/><rect x="69" y="22" width="4" height="8" fill="currentColor"/></svg>`,
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


  const NATO_SYMBOL_CATALOG = [
    {name:"Infantry", sidc:"SFGPUCI-----", category:"combat", keywords:"rifle foot infantry"},
    {name:"Light Infantry", sidc:"SFGPUCIL----", category:"combat", keywords:"light infantry"},
    {name:"Motorized Infantry", sidc:"SFGPUCIM----", category:"combat", keywords:"motorized motorised infantry"},
    {name:"Mountain Infantry", sidc:"SFGPUCIO----", category:"combat", keywords:"mountain alpine infantry"},
    {name:"Airborne Infantry", sidc:"SFGPUCIA----", category:"combat", keywords:"airborne parachute infantry"},
    {name:"Air Assault Infantry", sidc:"SFGPUCIS----", category:"combat", keywords:"air assault helicopter infantry"},
    {name:"Mechanized Infantry", sidc:"SFGPUCIZ----", category:"combat", keywords:"mechanized mechanised armored infantry"},
    {name:"Naval Infantry", sidc:"SFGPUCIN----", category:"combat", keywords:"marine naval infantry"},
    {name:"Armor", sidc:"SFGPUCA-----", category:"combat", keywords:"armor armour tank"},
    {name:"Tracked Armor", sidc:"SFGPUCAT----", category:"combat", keywords:"tracked armor armour tank"},
    {name:"Wheeled Armor", sidc:"SFGPUCAW----", category:"combat", keywords:"wheeled armor armoured car"},
    {name:"Anti-Armor", sidc:"SFGPUCAA----", category:"combat", keywords:"anti tank antiarmor"},
    {name:"Reconnaissance", sidc:"SFGPUCR-----", category:"combat", keywords:"recon scout cavalry"},
    {name:"Cavalry Reconnaissance", sidc:"SFGPUCRV----", category:"combat", keywords:"cavalry reconnaissance"},
    {name:"Armored Cavalry", sidc:"SFGPUCRVA---", category:"combat", keywords:"armored armoured cavalry"},
    {name:"Field Artillery", sidc:"SFGPUCF-----", category:"combat", keywords:"artillery cannon gun"},
    {name:"Air Defense", sidc:"SFGPUCD-----", category:"combat", keywords:"air defence anti aircraft"},
    {name:"Engineer", sidc:"SFGPUCE-----", category:"combat", keywords:"engineer combat engineer"},
    {name:"Combat Engineer", sidc:"SFGPUCEC----", category:"combat", keywords:"combat engineer"},
    {name:"Aviation", sidc:"SFGPUCV-----", category:"aviation", keywords:"aviation helicopter aircraft"},

    {name:"Military Intelligence", sidc:"SFGPUUM-----", category:"combat-support", keywords:"intelligence mi"},
    {name:"CBRN Nuclear", sidc:"SFGPUUAN----", category:"combat-support", keywords:"cbrn nbc nuclear"},
    {name:"CBRN Biological", sidc:"SFGPUUAB----", category:"combat-support", keywords:"cbrn nbc biological"},
    {name:"CBRN Decontamination", sidc:"SFGPUUAD----", category:"combat-support", keywords:"cbrn decon decontamination"},
    {name:"Military Police", sidc:"SFGPUULM----", category:"combat-support", keywords:"military police mp"},
    {name:"Signal Support", sidc:"SFGPUUSS----", category:"combat-support", keywords:"signal communications comms"},
    {name:"Radio", sidc:"SFGPUUSR----", category:"combat-support", keywords:"radio signal communications"},
    {name:"Information Warfare", sidc:"SFGPUUI-----", category:"combat-support", keywords:"information warfare cyber"},

    {name:"Medical", sidc:"SFGPUSM-----", category:"service-support", keywords:"medical health"},
    {name:"Medical Treatment Facility", sidc:"SFGPUSMM----", category:"service-support", keywords:"hospital aid medical"},
    {name:"Supply", sidc:"SFGPUSS-----", category:"service-support", keywords:"supply logistics sustainment"},
    {name:"Supply Class III", sidc:"SFGPUSS3----", category:"service-support", keywords:"fuel petroleum"},
    {name:"Supply Class V", sidc:"SFGPUSS5----", category:"service-support", keywords:"ammunition ammo"},
    {name:"Supply Class VIII", sidc:"SFGPUSS8----", category:"service-support", keywords:"medical supply"},
    {name:"Water Supply", sidc:"SFGPUSSW----", category:"service-support", keywords:"water supply"},
    {name:"Transportation Railhead", sidc:"SFGPUSTR----", category:"service-support", keywords:"transport railhead logistics"},
    {name:"Maintenance Heavy", sidc:"SFGPUSXH----", category:"service-support", keywords:"maintenance heavy repair"},
    {name:"Maintenance Recovery", sidc:"SFGPUSXR----", category:"service-support", keywords:"maintenance recovery repair"},
    {name:"Ordnance", sidc:"SFGPUSXO----", category:"service-support", keywords:"ordnance maintenance weapons"},

    {name:"Headquarters / Command", sidc:"SFGPUH------", category:"command", keywords:"headquarters hq command control c2"}
  ];

  function natoCategoryLabel(category) {
    return ({
      "combat":"Combat",
      "combat-support":"Combat Support",
      "service-support":"Combat Service Support",
      "command":"Command & Control",
      "aviation":"Aviation"
    })[category] || category;
  }

  function filteredNatoCatalog() {
    const query = String(controls.natoSearch?.value || "").trim().toLowerCase();
    const category = controls.natoCategory?.value || "all";

    return NATO_SYMBOL_CATALOG.filter(item => {
      if (category !== "all" && item.category !== category) return false;
      if (!query) return true;
      const haystack = `${item.name} ${item.sidc} ${item.keywords || ""}`.toLowerCase();
      return query.split(/\s+/).every(term => haystack.includes(term));
    });
  }

  function renderNatoSearchResults() {
    const select = controls.natoResultSelect;
    if (!select) return;

    const currentSidc = String(controls.natoSidc?.value || "").trim();
    const matches = filteredNatoCatalog();
    select.innerHTML = "";

    if (!matches.length) {
      const option = document.createElement("option");
      option.value = "";
      option.textContent = "No matches — enter a SIDC below";
      select.appendChild(option);
      select.disabled = true;
      return;
    }

    select.disabled = false;
    matches.forEach(item => {
      const option = document.createElement("option");
      option.value = item.sidc;
      option.textContent = `${item.name} — ${natoCategoryLabel(item.category)}`;
      select.appendChild(option);
    });

    if ([...select.options].some(o => o.value === currentSidc)) {
      select.value = currentSidc;
    } else {
      select.selectedIndex = -1;
    }
  }


  const NATO_UNIT_SIZE_OPTIONS = [
    { value:"", label:"None", mark:"" },
    { value:"team", label:"Team / Crew", mark:"•" },
    { value:"squad", label:"Squad / Detachment", mark:"••" },
    { value:"section", label:"Section", mark:"•••" },
    { value:"platoon", label:"Platoon / Troop", mark:"|" },
    { value:"company", label:"Company / Battery / Squadron", mark:"||" },
    { value:"battalion", label:"Battalion / Squadron", mark:"|||" },
    { value:"regiment", label:"Regiment / Group", mark:"|X|" },
    { value:"brigade", label:"Brigade", mark:"X" },
    { value:"division", label:"Division", mark:"XX" },
    { value:"corps", label:"Corps", mark:"XXX" },
    { value:"army", label:"Army", mark:"XXXX" },
    { value:"armygroup", label:"Army Group / Front", mark:"XXXXX" }
  ];

  function natoUnitSizeMark(value) {
    const match = NATO_UNIT_SIZE_OPTIONS.find(x => x.value === String(value || ""));
    return match ? match.mark : "";
  }

  function natoUnitSizeLabel(value) {
    const match = NATO_UNIT_SIZE_OPTIONS.find(x => x.value === String(value || ""));
    return match ? match.label : "";
  }

  function normalizeNatoUnitSize(value, fallback = "") {
    const raw = String(value ?? "").trim();
    if (!raw) return fallback;
    const s = raw.toLowerCase();

    const aliases = {
      "none":"",
      "team":"team",
      "team / crew":"team",
      "team/crew":"team",
      "crew":"team",
      "•":"team",
      ".":"team",
      "squad":"squad",
      "detachment":"squad",
      "squad / detachment":"squad",
      "squad/detachment":"squad",
      "••":"squad",
      "..":"squad",
      "section":"section",
      "•••":"section",
      "...":"section",
      "platoon":"platoon",
      "troop":"platoon",
      "platoon / troop":"platoon",
      "platoon/troop":"platoon",
      "|":"platoon",
      "company":"company",
      "battery":"company",
      "squadron":"company",
      "company / battery / squadron":"company",
      "company/battery/squadron":"company",
      "||":"company",
      "battalion":"battalion",
      "battalion / squadron":"battalion",
      "battalion/squadron":"battalion",
      "|||":"battalion",
      "regiment":"regiment",
      "group":"regiment",
      "regiment / group":"regiment",
      "regiment/group":"regiment",
      "|x|":"regiment",
      "x":"brigade",
      "brigade":"brigade",
      "xx":"division",
      "division":"division",
      "xxx":"corps",
      "corps":"corps",
      "xxxx":"army",
      "army":"army",
      "xxxxx":"armygroup",
      "armygroup":"armygroup",
      "army group":"armygroup",
      "front":"armygroup",
      "army group / front":"armygroup",
      "army group/front":"armygroup"
    };

    return aliases[s] != null ? aliases[s] : fallback;
  }

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

    shipTopLeft1: "",
    shipTopLeft2: "",
    shipCountry: "",
    shipTopRight1: "",
    shipTopRight2: "",
    shipLetter: "",
    shipBottomLeft1: "",
    shipBottomLeft2: "",
    shipType: "",
    shipBottomRight1: "",
    shipBottomRight2: "",

    shipTopLeft1Color: "#111111",
    shipTopLeft1Highlight: false,
    shipTopLeft1HighlightColor: "#fff59d",
    shipTopLeft2Color: "#111111",
    shipTopLeft2Highlight: false,
    shipTopLeft2HighlightColor: "#fff59d",
    shipTopRight1Color: "#111111",
    shipTopRight1Highlight: false,
    shipTopRight1HighlightColor: "#fff59d",
    shipTopRight2Color: "#111111",
    shipTopRight2Highlight: false,
    shipTopRight2HighlightColor: "#fff59d",
    shipBottomLeft1Color: "#111111",
    shipBottomLeft1Highlight: false,
    shipBottomLeft1HighlightColor: "#fff59d",
    shipBottomLeft2Color: "#111111",
    shipBottomLeft2Highlight: false,
    shipBottomLeft2HighlightColor: "#fff59d",
    shipBottomRight1Color: "#111111",
    shipBottomRight1Highlight: false,
    shipBottomRight1HighlightColor: "#fff59d",
    shipBottomRight2Color: "#111111",
    shipBottomRight2Highlight: false,
    shipBottomRight2HighlightColor: "#fff59d",

    symbol: "infantry",
    customSymbolId: "",
    natoSidc: "SFGPUCI-----",
    natoUnitSize: "",
    natoFrame: false,
    size: 0.625,
    bleed: 0.0625,
    safeInset: 0.04,
    bg: "#d7d1a8",
    stripeOrientation: "none",
    stripePosition: "center",
    stripeColor: "#ffffff",
    border: "#111111",
    text: "#111111",
    symbolColor: "#000000",
    damageExplosion: false,
    damageExplosionColor: "#ff8a00",
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
      superiorPodSize: "0.625",
      superiorBackMode: "blank",
      superiorLayoutMode: "auto",
      superiorManualPages: [],
      superiorManualPageIndex: 0,
      superiorSelectedSlotIndex: 0,
      superiorManualLayouts: {}
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
    symbolColor: $("symbolColor"),
    damageExplosion: $("damageExplosion"),
    damageExplosionColor: $("damageExplosionColor"),
    labelTextScale: $("labelTextScale"),
    numberTextScale: $("numberTextScale"),
    unitName: $("unitName"),
    unitType: $("unitType"),
    infoText: $("infoText"),
    symbolSelect: $("symbolSelect"),
    customSymbolSelect: $("customSymbolSelect"),
    natoSearch: $("natoSearch"),
    natoCategory: $("natoCategory"),
    natoResultSelect: $("natoResultSelect"),
    natoSidc: $("natoSidc"),
    natoUnitSize: $("natoUnitSize"),
    natoFrame: $("natoFrame"),

    shipTopLeft1Value: $("shipTopLeft1Value"),
    shipTopLeft2Value: $("shipTopLeft2Value"),
    shipCountry: $("shipCountry"),
    shipTopRight1Value: $("shipTopRight1Value"),
    shipTopRight2Value: $("shipTopRight2Value"),
    shipLetter: $("shipLetter"),
    shipBottomLeft1Value: $("shipBottomLeft1Value"),
    shipBottomLeft2Value: $("shipBottomLeft2Value"),
    shipType: $("shipType"),
    shipBottomRight1Value: $("shipBottomRight1Value"),
    shipBottomRight2Value: $("shipBottomRight2Value"),

    shipTopLeft1Color: $("shipTopLeft1Color"),
    shipTopLeft1Highlight: $("shipTopLeft1Highlight"),
    shipTopLeft1HighlightColor: $("shipTopLeft1HighlightColor"),
    shipTopLeft2Color: $("shipTopLeft2Color"),
    shipTopLeft2Highlight: $("shipTopLeft2Highlight"),
    shipTopLeft2HighlightColor: $("shipTopLeft2HighlightColor"),
    shipTopRight1Color: $("shipTopRight1Color"),
    shipTopRight1Highlight: $("shipTopRight1Highlight"),
    shipTopRight1HighlightColor: $("shipTopRight1HighlightColor"),
    shipTopRight2Color: $("shipTopRight2Color"),
    shipTopRight2Highlight: $("shipTopRight2Highlight"),
    shipTopRight2HighlightColor: $("shipTopRight2HighlightColor"),
    shipBottomLeft1Color: $("shipBottomLeft1Color"),
    shipBottomLeft1Highlight: $("shipBottomLeft1Highlight"),
    shipBottomLeft1HighlightColor: $("shipBottomLeft1HighlightColor"),
    shipBottomLeft2Color: $("shipBottomLeft2Color"),
    shipBottomLeft2Highlight: $("shipBottomLeft2Highlight"),
    shipBottomLeft2HighlightColor: $("shipBottomLeft2HighlightColor"),
    shipBottomRight1Color: $("shipBottomRight1Color"),
    shipBottomRight1Highlight: $("shipBottomRight1Highlight"),
    shipBottomRight1HighlightColor: $("shipBottomRight1HighlightColor"),
    shipBottomRight2Color: $("shipBottomRight2Color"),
    shipBottomRight2Highlight: $("shipBottomRight2Highlight"),
    shipBottomRight2HighlightColor: $("shipBottomRight2HighlightColor"),

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
      "shipTopLeft1","shipTopLeft2","shipCountry","shipTopRight1","shipTopRight2","shipLetter",
      "shipBottomLeft1","shipBottomLeft2","shipType","shipBottomRight1","shipBottomRight2",
      "shipTopLeft1Color","shipTopLeft1Highlight","shipTopLeft1HighlightColor",
      "shipTopLeft2Color","shipTopLeft2Highlight","shipTopLeft2HighlightColor",
      "shipTopRight1Color","shipTopRight1Highlight","shipTopRight1HighlightColor",
      "shipTopRight2Color","shipTopRight2Highlight","shipTopRight2HighlightColor",
      "shipBottomLeft1Color","shipBottomLeft1Highlight","shipBottomLeft1HighlightColor",
      "shipBottomLeft2Color","shipBottomLeft2Highlight","shipBottomLeft2HighlightColor",
      "shipBottomRight1Color","shipBottomRight1Highlight","shipBottomRight1HighlightColor",
      "shipBottomRight2Color","shipBottomRight2Highlight","shipBottomRight2HighlightColor",
      "symbol","customSymbolId","natoSidc","natoUnitSize","natoFrame","size","bleed","safeInset","bg","stripeOrientation",
      "stripePosition","stripeColor","border","text","symbolColor","damageExplosion","damageExplosionColor","labelTextScale","numberTextScale"
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
    out.symbolColor ||= "#000000";
    out.natoSidc ||= "SFGPUCI-----";
    out.natoUnitSize = normalizeNatoUnitSize(out.natoUnitSize, "");
    out.natoFrame = !!out.natoFrame;
    out.damageExplosion = !!out.damageExplosion;
    out.damageExplosionColor ||= "#ff8a00";
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
    document.body.classList.toggle("template-largeShip", (c.template || "classic") === "largeShip");

    controls.sizePreset.value = String(c.size);
    controls.quantityValue.value = String(Math.max(1, Math.floor(Number(base.quantity) || 1)));
    controls.bgColor.value = c.bg;
    controls.stripeOrientation.value = c.stripeOrientation || "none";
    controls.stripePosition.value = c.stripePosition || "center";
    controls.stripeColor.value = c.stripeColor || "#ffffff";
    controls.borderColor.value = c.border;
    controls.textColor.value = c.text;
    controls.symbolColor.value = c.symbolColor || "#000000";
    controls.damageExplosion.checked = !!c.damageExplosion;
    controls.damageExplosionColor.value = c.damageExplosionColor || "#ff8a00";
    controls.labelTextScale.value = String(Math.max(50, Math.min(200, Number(c.labelTextScale) || 100)));
    controls.numberTextScale.value = String(Math.max(50, Math.min(200, Number(c.numberTextScale) || 100)));
    controls.unitName.value = c.name;
    controls.unitType.value = c.type;
    controls.infoText.value = c.infoText || "";
    controls.symbolSelect.value = c.symbol || "infantry";
    document.body.classList.toggle("symbol-nato", c.symbol === "nato");
    renderCustomSymbolOptions();
    controls.customSymbolSelect.value = c.customSymbolId || "";
    controls.natoSidc.value = c.natoSidc || "SFGPUCI-----";
    controls.natoUnitSize.value = normalizeNatoUnitSize(c.natoUnitSize, "");
    controls.natoFrame.checked = !!c.natoFrame;
    updateNatoStatus();
    renderNatoSearchResults();

    controls.shipTopLeft1Value.value = c.shipTopLeft1 || "";
    controls.shipTopLeft2Value.value = c.shipTopLeft2 || "";
    controls.shipCountry.value = (c.shipCountry || "").slice(0,2);
    controls.shipTopRight1Value.value = c.shipTopRight1 || "";
    controls.shipTopRight2Value.value = c.shipTopRight2 || "";
    controls.shipLetter.value = (c.shipLetter || "").slice(0,1);
    controls.shipBottomLeft1Value.value = c.shipBottomLeft1 || "";
    controls.shipBottomLeft2Value.value = c.shipBottomLeft2 || "";
    controls.shipType.value = (c.shipType || "").slice(0,2);
    controls.shipBottomRight1Value.value = c.shipBottomRight1 || "";
    controls.shipBottomRight2Value.value = c.shipBottomRight2 || "";

    for (const key of ["shipTopLeft1","shipTopLeft2","shipTopRight1","shipTopRight2","shipBottomLeft1","shipBottomLeft2","shipBottomRight1","shipBottomRight2"]) {
      controls[key + "Color"].value = c[key + "Color"] || "#111111";
      controls[key + "Highlight"].checked = !!c[key + "Highlight"];
      controls[key + "HighlightColor"].value = c[key + "HighlightColor"] || "#fff59d";
    }

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
    document.body.classList.toggle("template-largeShip", c.template === "largeShip");

    c.size = Number(controls.sizePreset.value);
    if (c.template === "largeShip" && c.size < 0.75) {
      c.size = 0.75;
      controls.sizePreset.value = "0.75";
    }
    base.quantity = Math.max(1, Math.min(999, Math.floor(Number(controls.quantityValue.value) || 1)));
    controls.quantityValue.value = String(base.quantity);
    c.bg = controls.bgColor.value;
    c.stripeOrientation = controls.stripeOrientation.value || "none";
    c.stripePosition = controls.stripePosition.value || "center";
    c.stripeColor = controls.stripeColor.value || "#ffffff";
    c.border = controls.borderColor.value;
    c.text = controls.textColor.value;
    c.symbolColor = controls.symbolColor.value || "#000000";
    c.damageExplosion = !!controls.damageExplosion.checked;
    c.damageExplosionColor = controls.damageExplosionColor.value || "#ff8a00";
    c.labelTextScale = Math.max(50, Math.min(200, Number(controls.labelTextScale.value) || 100));
    controls.labelTextScale.value = String(c.labelTextScale);
    c.numberTextScale = Math.max(50, Math.min(200, Number(controls.numberTextScale.value) || 100));
    controls.numberTextScale.value = String(c.numberTextScale);
    c.name = controls.unitName.value || "Unnamed Unit";
    c.type = controls.unitType.value || "";
    c.infoText = controls.infoText.value || "";
    c.symbol = controls.symbolSelect.value;
    document.body.classList.toggle("symbol-nato", c.symbol === "nato");
    c.customSymbolId = controls.customSymbolSelect.value || "";
    c.natoSidc = (controls.natoSidc.value || "SFGPUCI-----").trim();
    c.natoUnitSize = normalizeNatoUnitSize(controls.natoUnitSize.value, "");
    c.natoFrame = !!controls.natoFrame.checked;

    c.shipTopLeft1 = controls.shipTopLeft1Value.value;
    c.shipTopLeft2 = controls.shipTopLeft2Value.value;
    c.shipCountry = (controls.shipCountry.value || "").toUpperCase().slice(0,2);
    controls.shipCountry.value = c.shipCountry;
    c.shipTopRight1 = controls.shipTopRight1Value.value;
    c.shipTopRight2 = controls.shipTopRight2Value.value;
    c.shipLetter = (controls.shipLetter.value || "").toUpperCase().slice(0,1);
    controls.shipLetter.value = c.shipLetter;
    c.shipBottomLeft1 = controls.shipBottomLeft1Value.value;
    c.shipBottomLeft2 = controls.shipBottomLeft2Value.value;
    c.shipType = (controls.shipType.value || "").toUpperCase().slice(0,2);
    controls.shipType.value = c.shipType;
    c.shipBottomRight1 = controls.shipBottomRight1Value.value;
    c.shipBottomRight2 = controls.shipBottomRight2Value.value;

    for (const key of ["shipTopLeft1","shipTopLeft2","shipTopRight1","shipTopRight2","shipBottomLeft1","shipBottomLeft2","shipBottomRight1","shipBottomRight2"]) {
      c[key + "Color"] = controls[key + "Color"].value;
      c[key + "Highlight"] = controls[key + "Highlight"].checked;
      c[key + "HighlightColor"] = controls[key + "HighlightColor"].value;
    }

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

  function natoRendererAvailable() {
    return typeof window !== "undefined" && window.ms && typeof window.ms.Symbol === "function";
  }

  function updateNatoStatus() {
    const el = $("natoStatus");
    if (!el) return;
    if (natoRendererAvailable()) {
      el.textContent = `APP-6 renderer loaded. Search ${NATO_SYMBOL_CATALOG.length} common unit symbols or enter any supported SIDC.`;
      el.classList.remove("warning");
    } else {
      el.textContent = "NATO symbols require an internet connection to load the APP-6 renderer.";
      el.classList.add("warning");
    }
  }

  function renderNatoSvg(c) {
    if (!natoRendererAvailable()) return "";
    const sidc = String(c?.natoSidc || "SFGPUCI-----").trim();
    try {
      const options = {
        size: 100,
        monoColor: c?.symbolColor || "#000000",
        frame: !!c?.natoFrame,
        fill: false,
        infoFields: false,
        outlineWidth: 0
      };
      return new window.ms.Symbol(sidc, options).asSVG();
    } catch (err) {
      console.warn("Could not render NATO SIDC", sidc, err);
      return "";
    }
  }

  function getSymbolMarkup(c) {
    const symbolColor = c.symbolColor || "#000000";
    if (c.customSymbolId) {
      const s = (state.customSymbols || []).find(x => x.id === c.customSymbolId);
      if (s?.dataUrl) {
        const url = escapeHtml(s.maskDataUrl || s.dataUrl);
        return `<span class="custom-symbol-mask" style="background:${symbolColor};-webkit-mask-image:url('${url}');mask-image:url('${url}');"></span>`;
      }
    }
    if (!c.symbol) return "";
    if (c.symbol === "nato") {
      return renderNatoSvg(c);
    }
    const svg = SYMBOLS[c.symbol] || SYMBOLS.infantry;
    return svg.replace(/currentColor/g, symbolColor);
  }

  function hasSymbol(c) {
    return !!(c && (c.customSymbolId || c.symbol));
  }

  function damageExplosionDataUrl(color) {
    const c = color || "#ff8a00";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <polygon fill="${c}" fill-opacity="0.58" points="50,3 58,20 75,8 73,28 95,25 82,40 98,50 82,60 95,75 73,72 75,92 58,80 50,97 42,80 25,92 27,72 5,75 18,60 2,50 18,40 5,25 27,28 25,8 42,20"/>
      <polygon fill="${c}" fill-opacity="0.88" points="50,18 56,30 68,22 66,36 82,34 72,45 84,50 72,55 82,66 66,64 68,78 56,70 50,82 44,70 32,78 34,64 18,66 28,55 16,50 28,45 18,34 34,36 32,22 44,30"/>
      <circle cx="50" cy="50" r="10" fill="white" fill-opacity="0.22"/>
    </svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }

  function explosionMarkup(c) {
    if (!c?.damageExplosion || !hasSymbol(c)) return "";
    const url = escapeHtml(damageExplosionDataUrl(c.damageExplosionColor || "#ff8a00"));
    return `<span class="damage-explosion" style="background-image:url('${url}')"></span>`;
  }

  function symbolWithExplosionMarkup(c) {
    return `${explosionMarkup(c)}${getSymbolMarkup(c)}`;
  }

  function natoUnitSizeMarkup(c, sizePx, template = "classic") {
    if (!c || c.symbol !== "nato") return "";
    const mark = natoUnitSizeMark(c.natoUnitSize || "");
    if (!mark) return "";
    const fontPx = Math.max(6, sizePx * (template === "largeShip" ? 0.068 : template === "sixValue" ? 0.078 : 0.082));
    return `<span class="nato-echelon" style="color:${escapeHtml(c.symbolColor || "#000000")};font-size:${fontPx}px">${escapeHtml(mark)}</span>`;
  }

  function symbolWrapInnerMarkup(c, sizePx, template = "classic") {
    if (c?.symbol === "nato" && natoUnitSizeMark(c.natoUnitSize || "")) {
      const frameClass = c.natoFrame ? " framed" : "";
      return `${explosionMarkup(c)}<span class="nato-symbol-composite${frameClass}">${natoUnitSizeMarkup(c, sizePx, template)}<span class="nato-symbol-art">${getSymbolMarkup(c)}</span></span>`;
    }
    return symbolWithExplosionMarkup(c);
  }

  function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error || new Error("Could not read file."));
      reader.readAsDataURL(file);
    });
  }

  function buildSymbolMaskDataUrl(dataUrl) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = Math.max(1, img.naturalWidth || img.width || 1);
          canvas.height = Math.max(1, img.naturalHeight || img.height || 1);
          const ctx = canvas.getContext("2d", {willReadFrequently:true});
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;

          // If the source already contains real transparency, trust it.
          // This preserves white-on-transparent artwork correctly.
          let hasTransparency = false;
          for (let i=3; i<data.length; i+=4) {
            if (data[i] < 245) {
              hasTransparency = true;
              break;
            }
          }

          if (hasTransparency) {
            for (let i=0; i<data.length; i+=4) {
              const a = data[i+3];
              data[i] = 0;
              data[i+1] = 0;
              data[i+2] = 0;
              data[i+3] = a;
            }
          } else {
            // Opaque scans/images: estimate the background color from several
            // corner samples, then turn pixels increasingly transparent as they
            // approach that background. This removes white, cream, gray, etc.
            const w = canvas.width, h = canvas.height;
            const samples = [];
            const points = [
              [0,0], [w-1,0], [0,h-1], [w-1,h-1],
              [Math.floor(w*.03), Math.floor(h*.03)],
              [Math.floor(w*.97), Math.floor(h*.03)],
              [Math.floor(w*.03), Math.floor(h*.97)],
              [Math.floor(w*.97), Math.floor(h*.97)]
            ];
            for (const [x0,y0] of points) {
              const x = Math.max(0, Math.min(w-1, x0));
              const y = Math.max(0, Math.min(h-1, y0));
              const idx = (y*w + x) * 4;
              samples.push([data[idx], data[idx+1], data[idx+2]]);
            }
            const median = arr => {
              const a = [...arr].sort((x,y)=>x-y);
              return a[Math.floor(a.length/2)];
            };
            const bgR = median(samples.map(s=>s[0]));
            const bgG = median(samples.map(s=>s[1]));
            const bgB = median(samples.map(s=>s[2]));

            // A low threshold eliminates near-background JPEG/scan noise while
            // a soft ramp retains antialiased silhouette edges.
            const transparentAt = 20;
            const opaqueAt = 85;

            for (let i=0; i<data.length; i+=4) {
              const dr = data[i]   - bgR;
              const dg = data[i+1] - bgG;
              const db = data[i+2] - bgB;
              const distance = Math.sqrt(dr*dr + dg*dg + db*db);

              let alpha;
              if (distance <= transparentAt) alpha = 0;
              else if (distance >= opaqueAt) alpha = 255;
              else alpha = Math.round(255 * (distance-transparentAt) / (opaqueAt-transparentAt));

              data[i] = 0;
              data[i+1] = 0;
              data[i+2] = 0;
              data[i+3] = alpha;
            }
          }

          ctx.putImageData(imageData, 0, 0);
          resolve(canvas.toDataURL("image/png"));
        } catch (err) {
          reject(err);
        }
      };
      img.onerror = () => reject(new Error("Could not prepare the imported silhouette."));
      img.src = dataUrl;
    });
  }

  async function ensureCustomSymbolMasks() {
    state.customSymbols ||= [];
    for (const symbol of state.customSymbols) {
      if (!symbol?.dataUrl || symbol.maskDataUrl) continue;
      try {
        symbol.maskDataUrl = await buildSymbolMaskDataUrl(symbol.dataUrl);
      } catch (err) {
        console.warn("Could not normalize imported symbol:", symbol?.name, err);
        symbol.maskDataUrl = symbol.dataUrl;
      }
    }
  }

  function counterMarkup(c, pxPerInch, showGuides = true) {
    const sizePx = c.size * pxPerInch;
    const bleedPx = c.bleed * pxPerInch;
    const safePx = c.safeInset * pxPerInch;
    const guideDisplay = showGuides ? "" : "display:none;";
    const template = c.template || "classic";
    const labelScale = Math.max(50, Math.min(200, Number(c.labelTextScale) || 100)) / 100;
    const numberScale = Math.max(50, Math.min(200, Number(c.numberTextScale) || 100)) / 100;
    const artClass = template === "sixValue"
      ? "counter-art six-template"
      : (template === "largeShip" ? "counter-art large-ship-template" : "counter-art");

    let content = "";
    if (template === "sixValue") {
      content = `
        <div class="top-stat left" style="font-size:${Math.max(6, sizePx * .11 * numberScale)}px">${numberMarkup(c.topLeft || "", c.topLeftColor, c.topLeftHighlight, c.topLeftHighlightColor)}</div>
        <div class="top-stat right" style="font-size:${Math.max(6, sizePx * .11 * numberScale)}px">${numberMarkup(c.topRight || "", c.topRightColor, c.topRightHighlight, c.topRightHighlightColor)}</div>
        <div class="symbol-wrap">${symbolWrapInnerMarkup(c, sizePx, "sixValue")}</div>
        <div class="unit-name" style="font-size:${Math.max(6, sizePx * .085 * labelScale)}px">${escapeHtml(c.name || "")}</div>
        <div class="stat attack" style="font-size:${Math.max(6, sizePx * .13 * numberScale)}px">${numberMarkup(c.attack || "", c.attackColor, c.attackHighlight, c.attackHighlightColor)}</div>
        <div class="stat defense" style="font-size:${Math.max(6, sizePx * .13 * numberScale)}px">${numberMarkup(c.defense || "", c.defenseColor, c.defenseHighlight, c.defenseHighlightColor)}</div>
        <div class="stat move" style="font-size:${Math.max(6, sizePx * .13 * numberScale)}px">${numberMarkup(c.move || "", c.moveColor, c.moveHighlight, c.moveHighlightColor)}</div>`;
    } else if (template === "largeShip") {
      content = `
        <div class="ship-top-stat ship-tl1" style="font-size:${Math.max(6, sizePx * .105 * numberScale)}px">${numberMarkup(c.shipTopLeft1 || "", c.shipTopLeft1Color, c.shipTopLeft1Highlight, c.shipTopLeft1HighlightColor)}</div>
        <div class="ship-top-stat ship-tl2" style="font-size:${Math.max(6, sizePx * .105 * numberScale)}px">${numberMarkup(c.shipTopLeft2 || "", c.shipTopLeft2Color, c.shipTopLeft2Highlight, c.shipTopLeft2HighlightColor)}</div>
        <div class="ship-country" style="font-size:${Math.max(6, sizePx * .09 * labelScale)}px">${escapeHtml((c.shipCountry || "").slice(0,2))}</div>
        <div class="ship-top-stat ship-tr1" style="font-size:${Math.max(6, sizePx * .105 * numberScale)}px">${numberMarkup(c.shipTopRight1 || "", c.shipTopRight1Color, c.shipTopRight1Highlight, c.shipTopRight1HighlightColor)}</div>
        <div class="ship-top-stat ship-tr2" style="font-size:${Math.max(6, sizePx * .105 * numberScale)}px">${numberMarkup(c.shipTopRight2 || "", c.shipTopRight2Color, c.shipTopRight2Highlight, c.shipTopRight2HighlightColor)}</div>

        <div class="symbol-wrap ship-symbol">${symbolWrapInnerMarkup(c, sizePx, "largeShip")}</div>

        <div class="ship-name" style="font-size:${Math.max(6, sizePx * .078 * labelScale)}px">${escapeHtml(c.name || "")}</div>
        <div class="ship-letter" style="font-size:${Math.max(6, sizePx * .09 * labelScale)}px">${escapeHtml((c.shipLetter || "").slice(0,1))}</div>

        <div class="ship-bottom-stat ship-bl1" style="font-size:${Math.max(6, sizePx * .105 * numberScale)}px">${numberMarkup(c.shipBottomLeft1 || "", c.shipBottomLeft1Color, c.shipBottomLeft1Highlight, c.shipBottomLeft1HighlightColor)}</div>
        <div class="ship-bottom-stat ship-bl2" style="font-size:${Math.max(6, sizePx * .105 * numberScale)}px">${numberMarkup(c.shipBottomLeft2 || "", c.shipBottomLeft2Color, c.shipBottomLeft2Highlight, c.shipBottomLeft2HighlightColor)}</div>
        <div class="ship-type-code" style="font-size:${Math.max(6, sizePx * .09 * labelScale)}px">${escapeHtml((c.shipType || "").slice(0,2))}</div>
        <div class="ship-bottom-stat ship-br1" style="font-size:${Math.max(6, sizePx * .105 * numberScale)}px">${numberMarkup(c.shipBottomRight1 || "", c.shipBottomRight1Color, c.shipBottomRight1Highlight, c.shipBottomRight1HighlightColor)}</div>
        <div class="ship-bottom-stat ship-br2" style="font-size:${Math.max(6, sizePx * .105 * numberScale)}px">${numberMarkup(c.shipBottomRight2 || "", c.shipBottomRight2Color, c.shipBottomRight2Highlight, c.shipBottomRight2HighlightColor)}</div>`;
    } else if (template === "information") {
      const hasImage = !!(c.customSymbolId || c.symbol);
      const imageMarkup = hasImage ? `<div class="symbol-wrap">${symbolWrapInnerMarkup(c, sizePx, "information")}</div>` : "";
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
        <div class="symbol-wrap">${symbolWrapInnerMarkup(c, sizePx, "classic")}</div>
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

  function podSizeKey() {
    const raw = String(state.sheet.superiorPodSize || "0.625");
    return ["0.625","0.75","1"].includes(raw) ? raw : "0.625";
  }

  function currentPodTemplate() {
    return SUPERIOR_POD_TEMPLATES[podSizeKey()] || SUPERIOR_POD_TEMPLATES["0.625"];
  }

  function podEligibleCounters() {
    const target = Number(podSizeKey());
    return state.counters.filter(c => Math.abs(Number(c.size) - target) < 0.0001);
  }

  function podSlotCount() {
    return superiorFrontSlots().length;
  }

  function blankPodPage() {
    return Array(podSlotCount()).fill(null);
  }

  function getPodManualLayout() {
    state.sheet.superiorManualLayouts ||= {};

    // Migrate the pre-v0.38 5/8 layout the first time a project is used here.
    if (!state.sheet.superiorManualLayouts["0.625"] &&
        Array.isArray(state.sheet.superiorManualPages) &&
        state.sheet.superiorManualPages.length) {
      state.sheet.superiorManualLayouts["0.625"] = {
        pages: state.sheet.superiorManualPages,
        pageIndex: Number(state.sheet.superiorManualPageIndex) || 0,
        selectedSlotIndex: Number(state.sheet.superiorSelectedSlotIndex) || 0
      };
    }

    const key = podSizeKey();
    state.sheet.superiorManualLayouts[key] ||= {
      pages: [],
      pageIndex: 0,
      selectedSlotIndex: 0
    };
    return state.sheet.superiorManualLayouts[key];
  }

  function ensurePodManualPages() {
    const layout = getPodManualLayout();
    if (!Array.isArray(layout.pages) || !layout.pages.length) layout.pages = [blankPodPage()];
    layout.pages = layout.pages.map(page => {
      const p = Array.isArray(page) ? page.slice(0, podSlotCount()) : [];
      while (p.length < podSlotCount()) p.push(null);
      return p;
    });
    layout.pageIndex = Math.max(0, Math.min(Number(layout.pageIndex) || 0, layout.pages.length - 1));
    layout.selectedSlotIndex = Math.max(0, Math.min(Number(layout.selectedSlotIndex) || 0, podSlotCount() - 1));

    // Keep legacy fields synchronized for backward-compatible saves.
    if (podSizeKey() === "0.625") {
      state.sheet.superiorManualPages = layout.pages;
      state.sheet.superiorManualPageIndex = layout.pageIndex;
      state.sheet.superiorSelectedSlotIndex = layout.selectedSlotIndex;
    }
    return layout;
  }

  function counterQuantity(c) {
    return Math.max(1, Math.min(999, Math.floor(Number(c.quantity) || 1)));
  }

  function podAssignedCounts() {
    const layout = ensurePodManualPages();
    const counts = new Map();
    for (const page of layout.pages) {
      for (const id of page) {
        if (!id) continue;
        counts.set(id, (counts.get(id) || 0) + 1);
      }
    }
    return counts;
  }

  function seedPodManualLayout(groupByColor=false) {
    let expanded = [];
    const eligible = podEligibleCounters();
    for (const c of eligible) {
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
    const layout = getPodManualLayout();
    layout.pages = Array.from({length:pageCount}, () => blankPodPage());

    expanded.forEach((c,i) => {
      const p = Math.floor(i/perSheet);
      const slot = i % perSheet;
      layout.pages[p][slot] = c.id;
    });

    layout.pageIndex = 0;
    layout.selectedSlotIndex = 0;
    renderPodLayoutPlanner();
  }

  function renderPodUsageSummary() {
    const box = $("podUsageSummary");
    if (!box) return;
    const counts = podAssignedCounts();
    const eligible = podEligibleCounters();
    box.innerHTML = "";

    if (!eligible.length) {
      const msg = document.createElement("span");
      msg.className = "pod-usage-chip missing";
      msg.textContent = `No ${currentPodTemplate().label} counters are defined in this project.`;
      box.appendChild(msg);
      return;
    }

    for (const c of eligible) {
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
    const tpl = currentPodTemplate();
    // Fit the longest page dimension into ~1037 CSS pixels while preserving exact proportions.
    return Math.min(1037 / tpl.pageWidthPt, 1037 / tpl.pageHeightPt);
  }

  function podShortName(c) {
    if (!c) return "";
    const text = String(c.name || c.type || c.template || "Counter");
    return text.length > 11 ? text.slice(0,10) + "…" : text;
  }

  function renderPodSelectedSlotEditor() {
    const layout = ensurePodManualPages();
    const idx = Math.max(0, Math.min(podSlotCount()-1, Number(layout.selectedSlotIndex) || 0));
    layout.selectedSlotIndex = idx;

    const page = layout.pages[layout.pageIndex];
    const currentId = page[idx] || "";

    $("podSelectedSlotLabel").textContent = `Selected slot: ${idx+1}`;

    const select = $("podSelectedSlotCounter");
    select.innerHTML = "";

    const empty = document.createElement("option");
    empty.value = "";
    empty.textContent = "— Empty —";
    select.appendChild(empty);

    podEligibleCounters().forEach((c,index) => {
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

    sheet.querySelectorAll(".pod-exact-slot,.pod-exact-sheet-midline").forEach(el => el.remove());

    const tpl = currentPodTemplate();
    const scale = podPlannerScale();
    sheet.style.width = `${tpl.pageWidthPt * scale}px`;
    sheet.style.height = `${tpl.pageHeightPt * scale}px`;
    sheet.style.minWidth = `${tpl.pageWidthPt * scale}px`;

    const frontLabel = $("podFrontLabel");
    const backLabel = $("podBackLabel");
    const midline = document.createElement("div");
    midline.className = "pod-exact-sheet-midline";

    if (tpl.layout === "sideBySide") {
      frontLabel.textContent = "FRONTS";
      backLabel.textContent = "LINKED BACKS";
      frontLabel.style.left = "26px";
      frontLabel.style.top = "10px";
      backLabel.style.left = `${tpl.pageWidthPt * scale * .53}px`;
      backLabel.style.top = "10px";
      midline.style.left = `${tpl.pageWidthPt * scale / 2}px`;
      midline.style.top = "0";
      midline.style.bottom = "0";
      midline.style.width = "1px";
      midline.style.height = "auto";
    } else {
      frontLabel.textContent = "FRONTS";
      backLabel.textContent = "LINKED BACKS";
      frontLabel.style.left = "18px";
      frontLabel.style.top = "8px";
      backLabel.style.left = "18px";
      backLabel.style.top = `${tpl.backLabelY * scale}px`;
      midline.style.left = "0";
      midline.style.top = `${tpl.midlineY * scale}px`;
      midline.style.width = "100%";
      midline.style.height = "1px";
      midline.style.bottom = "auto";
    }
    sheet.appendChild(midline);

    const layout = ensurePodManualPages();
    const page = layout.pages[layout.pageIndex];
    const slots = superiorFrontSlots();
    const slotSize = tpl.counterPt * scale;
    const selected = Number(layout.selectedSlotIndex) || 0;

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
        const active = getPodManualLayout();
        active.selectedSlotIndex = i;
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

    const layout = ensurePodManualPages();
    const idx = layout.pageIndex;
    const tpl = currentPodTemplate();
    $("podPageLabel").textContent = `${tpl.label} · Sheet ${idx+1} of ${layout.pages.length}`;
    $("podPrevPageBtn").disabled = idx <= 0;
    $("podNextPageBtn").disabled = idx >= layout.pages.length - 1;
    $("podRemovePageBtn").disabled = layout.pages.length <= 1;

    renderPodUsageSummary();
    renderPodSelectedSlotEditor();
    renderPodExactSheet();
  }

  function podManualValidation() {
    const counts = podAssignedCounts();
    const over = [];
    const missing = [];
    for (const c of podEligibleCounters()) {
      const used = counts.get(c.id) || 0;
      const qty = counterQuantity(c);
      if (used > qty) over.push(`${c.name}: ${used}/${qty}`);
      if (used < qty) missing.push(`${c.name}: ${used}/${qty}`);
    }
    return {counts, over, missing};
  }

  function manualPodPlacements() {
    const layout = ensurePodManualPages();
    const slots = superiorFrontSlots();
    const pages = [];

    for (const page of layout.pages) {
      const counters = [];
      const usedSlots = [];
      for (let i=0; i<page.length && i<slots.length; i++) {
        const id = page[i];
        if (!id) continue;
        const c = state.counters.find(x => x.id === id);
        if (!c || Math.abs(Number(c.size) - Number(podSizeKey())) > 0.0001) continue;
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

  $("natoSearch").addEventListener("input", renderNatoSearchResults);
  $("natoCategory").addEventListener("change", renderNatoSearchResults);
  $("natoResultSelect").addEventListener("change", () => {
    const sidc = $("natoResultSelect").value;
    if (!sidc) return;
    $("natoSidc").value = sidc;
    updateCounterFromControls();
    renderNatoSearchResults();
  });
  $("natoSidc").addEventListener("input", renderNatoSearchResults);

  window.addEventListener("load", () => {
    updateNatoStatus();
    renderNatoSearchResults();
  });

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
  $("superiorPodSize").addEventListener("change", () => {
    state.sheet.superiorPodSize = $("superiorPodSize").value || "0.625";
    ensurePodManualPages();
    renderPodLayoutPlanner();
  });

  $("superiorBackMode").addEventListener("change", () => {
    state.sheet.superiorBackMode = $("superiorBackMode").value;
    renderPodLayoutPlanner();
  });

  $("superiorLayoutMode").addEventListener("change", () => {
    state.sheet.superiorLayoutMode = $("superiorLayoutMode").value;
    if (state.sheet.superiorLayoutMode === "manual") {
      const layout = ensurePodManualPages();
      const hasAssignments = layout.pages.some(p => p.some(Boolean));
      if (!hasAssignments) seedPodManualLayout(false);
      else renderPodLayoutPlanner();
    } else {
      renderPodLayoutPlanner();
    }
  });

  $("podSelectedSlotCounter").addEventListener("change", () => {
    const layout = ensurePodManualPages();
    const page = layout.pages[layout.pageIndex];
    const slotIndex = Math.max(0, Math.min(podSlotCount()-1, Number(layout.selectedSlotIndex) || 0));
    page[slotIndex] = $("podSelectedSlotCounter").value || null;
    renderPodUsageSummary();
    renderPodExactSheet();
  });

  $("podClearSelectedSlotBtn").addEventListener("click", () => {
    const layout = ensurePodManualPages();
    const page = layout.pages[layout.pageIndex];
    const slotIndex = Math.max(0, Math.min(podSlotCount()-1, Number(layout.selectedSlotIndex) || 0));
    page[slotIndex] = null;
    renderPodUsageSummary();
    renderPodSelectedSlotEditor();
    renderPodExactSheet();
  });

  $("podSeedOrderBtn").addEventListener("click", () => {
    const layout = ensurePodManualPages();
    if (layout.pages?.some(p => p.some(Boolean)) &&
        !confirm("Replace the current manual layout for this counter size with counter-list order?")) return;
    seedPodManualLayout(false);
  });

  $("podSeedColorBtn").addEventListener("click", () => {
    const layout = ensurePodManualPages();
    if (layout.pages?.some(p => p.some(Boolean)) &&
        !confirm("Replace the current manual layout for this counter size with a color-grouped layout?")) return;
    seedPodManualLayout(true);
  });

  $("podPrevPageBtn").addEventListener("click", () => {
    const layout = ensurePodManualPages();
    layout.pageIndex = Math.max(0, layout.pageIndex - 1);
    layout.selectedSlotIndex = 0;
    renderPodLayoutPlanner();
  });

  $("podNextPageBtn").addEventListener("click", () => {
    const layout = ensurePodManualPages();
    layout.pageIndex = Math.min(layout.pages.length - 1, layout.pageIndex + 1);
    layout.selectedSlotIndex = 0;
    renderPodLayoutPlanner();
  });

  $("podAddPageBtn").addEventListener("click", () => {
    const layout = ensurePodManualPages();
    layout.pages.push(blankPodPage());
    layout.pageIndex = layout.pages.length - 1;
    layout.selectedSlotIndex = 0;
    renderPodLayoutPlanner();
  });

  $("podClearPageBtn").addEventListener("click", () => {
    const layout = ensurePodManualPages();
    const idx = layout.pageIndex;
    if (layout.pages[idx].some(Boolean) &&
        !confirm("Clear all assigned counters from this POD sheet?")) return;
    layout.pages[idx] = blankPodPage();
    renderPodLayoutPlanner();
  });

  $("podRemovePageBtn").addEventListener("click", () => {
    const layout = ensurePodManualPages();
    if (layout.pages.length <= 1) return;
    const idx = layout.pageIndex;
    if (layout.pages[idx].some(Boolean) &&
        !confirm("Remove this POD sheet and its slot assignments?")) return;
    layout.pages.splice(idx,1);
    layout.pageIndex = Math.min(idx, layout.pages.length - 1);
    layout.selectedSlotIndex = 0;
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
    state.sheet.superiorManualLayouts = {};
    state.sheet.superiorPodSize = "0.625";
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
    $("superiorPodSize").value = podSizeKey();
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
    if (c.symbol === "nato") return "NATO / APP-6";
    return c.symbol || "";
  }

  $("exportCsvBtn").addEventListener("click", () => {
    const headers = [
      "Counter Number","Quantity","Template","Counter Size (in)","Background Color","Stripe Orientation","Stripe Color","Border Color","Main Text Color","Label Font Size (%)","Number Font Size (%)",
      "Unit Name","Unit Type","Information Text","Symbol","Symbol Color","NATO SIDC","NATO Unit Size","NATO Frame","Damage Explosion","Damage Explosion Color",
      "Top Left","Top Left Text Color","Top Left Highlight","Top Left Highlight Color",
      "Top Right","Top Right Text Color","Top Right Highlight","Top Right Highlight Color",
      "Bottom Left","Bottom Left Text Color","Bottom Left Highlight","Bottom Left Highlight Color",
      "Bottom Center","Bottom Center Text Color","Bottom Center Highlight","Bottom Center Highlight Color",
      "Bottom Right","Bottom Right Text Color","Bottom Right Highlight","Bottom Right Highlight Color",
      "Ship Country","Ship Letter","Ship Type",
      "Ship Top Left 1","Ship Top Left 1 Color","Ship Top Left 1 Highlight","Ship Top Left 1 Highlight Color",
      "Ship Top Left 2","Ship Top Left 2 Color","Ship Top Left 2 Highlight","Ship Top Left 2 Highlight Color",
      "Ship Top Right 1","Ship Top Right 1 Color","Ship Top Right 1 Highlight","Ship Top Right 1 Highlight Color",
      "Ship Top Right 2","Ship Top Right 2 Color","Ship Top Right 2 Highlight","Ship Top Right 2 Highlight Color",
      "Ship Bottom Left 1","Ship Bottom Left 1 Color","Ship Bottom Left 1 Highlight","Ship Bottom Left 1 Highlight Color",
      "Ship Bottom Left 2","Ship Bottom Left 2 Color","Ship Bottom Left 2 Highlight","Ship Bottom Left 2 Highlight Color",
      "Ship Bottom Right 1","Ship Bottom Right 1 Color","Ship Bottom Right 1 Highlight","Ship Bottom Right 1 Highlight Color",
      "Ship Bottom Right 2","Ship Bottom Right 2 Color","Ship Bottom Right 2 Highlight","Ship Bottom Right 2 Highlight Color"
    ];

    const rows = state.counters.map((c, index) => [
      index + 1, Math.max(1, Math.floor(Number(c.quantity) || 1)), c.template || "classic", c.size ?? "", c.bg || "", c.stripeOrientation || "none", c.stripeColor || "#ffffff", c.border || "", c.text || "", Math.max(50, Math.min(200, Number(c.labelTextScale) || 100)), Math.max(50, Math.min(200, Number(c.numberTextScale) || 100)),
      c.name || "", c.type || "", c.infoText || "", exportedSymbolName(c), c.symbolColor || "#000000", c.natoSidc || "", natoUnitSizeLabel(c.natoUnitSize || ""), c.natoFrame ? "Yes" : "No", c.damageExplosion ? "Yes" : "No", c.damageExplosionColor || "#ff8a00",
      c.topLeft || "", c.topLeftColor || "#111111", c.topLeftHighlight ? "Yes" : "No", c.topLeftHighlightColor || "",
      c.topRight || "", c.topRightColor || "#111111", c.topRightHighlight ? "Yes" : "No", c.topRightHighlightColor || "",
      c.attack || "", c.attackColor || "#111111", c.attackHighlight ? "Yes" : "No", c.attackHighlightColor || "",
      c.defense || "", c.defenseColor || "#111111", c.defenseHighlight ? "Yes" : "No", c.defenseHighlightColor || "",
      c.move || "", c.moveColor || "#111111", c.moveHighlight ? "Yes" : "No", c.moveHighlightColor || "",
      c.shipCountry || "", c.shipLetter || "", c.shipType || "",
      c.shipTopLeft1 || "", c.shipTopLeft1Color || "#111111", c.shipTopLeft1Highlight ? "Yes" : "No", c.shipTopLeft1HighlightColor || "",
      c.shipTopLeft2 || "", c.shipTopLeft2Color || "#111111", c.shipTopLeft2Highlight ? "Yes" : "No", c.shipTopLeft2HighlightColor || "",
      c.shipTopRight1 || "", c.shipTopRight1Color || "#111111", c.shipTopRight1Highlight ? "Yes" : "No", c.shipTopRight1HighlightColor || "",
      c.shipTopRight2 || "", c.shipTopRight2Color || "#111111", c.shipTopRight2Highlight ? "Yes" : "No", c.shipTopRight2HighlightColor || "",
      c.shipBottomLeft1 || "", c.shipBottomLeft1Color || "#111111", c.shipBottomLeft1Highlight ? "Yes" : "No", c.shipBottomLeft1HighlightColor || "",
      c.shipBottomLeft2 || "", c.shipBottomLeft2Color || "#111111", c.shipBottomLeft2Highlight ? "Yes" : "No", c.shipBottomLeft2HighlightColor || "",
      c.shipBottomRight1 || "", c.shipBottomRight1Color || "#111111", c.shipBottomRight1Highlight ? "Yes" : "No", c.shipBottomRight1HighlightColor || "",
      c.shipBottomRight2 || "", c.shipBottomRight2Color || "#111111", c.shipBottomRight2Highlight ? "Yes" : "No", c.shipBottomRight2HighlightColor || ""
    ]);

    const csvText = [headers, ...rows].map(row => row.map(csvEscape).join(",")).join("\r\n");
    const blob = new Blob(["\ufeff" + csvText], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "wargame-counters.csv";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });


  function parseCsv(text) {
    const rows = [];
    let row = [];
    let field = "";
    let inQuotes = false;

    const src = String(text || "").replace(/^\uFEFF/, "");
    for (let i=0; i<src.length; i++) {
      const ch = src[i];

      if (inQuotes) {
        if (ch === '"') {
          if (src[i+1] === '"') {
            field += '"';
            i++;
          } else {
            inQuotes = false;
          }
        } else {
          field += ch;
        }
        continue;
      }

      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ",") {
        row.push(field);
        field = "";
      } else if (ch === "\r") {
        if (src[i+1] === "\n") i++;
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
      } else if (ch === "\n") {
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
      } else {
        field += ch;
      }
    }

    if (field.length || row.length) {
      row.push(field);
      rows.push(row);
    }

    return rows.filter(r => r.some(v => String(v).trim() !== ""));
  }

  function csvBool(value, fallback=false) {
    const s = String(value ?? "").trim().toLowerCase();
    if (!s) return fallback;
    if (["yes","y","true","1","on"].includes(s)) return true;
    if (["no","n","false","0","off"].includes(s)) return false;
    return fallback;
  }

  function csvColor(value, fallback) {
    const s = String(value ?? "").trim();
    if (!s) return fallback;
    if (/^#[0-9a-fA-F]{6}$/.test(s)) return s;
    if (/^#[0-9a-fA-F]{3}$/.test(s)) {
      return "#" + s.slice(1).split("").map(ch => ch + ch).join("");
    }
    return fallback;
  }

  function csvCounterSize(value, fallback) {
    const s = String(value ?? "").trim().toLowerCase();
    if (!s) return fallback;

    const aliases = {
      "1/2": 0.5, "1/2\"": 0.5, "0.5": 0.5,
      "5/8": 0.625, "5/8\"": 0.625, "0.625": 0.625,
      "3/4": 0.75, "3/4\"": 0.75, "0.75": 0.75,
      "1": 1, "1\"": 1, "1.0": 1
    };
    if (aliases[s] != null) return aliases[s];

    const n = Number(s);
    return [0.5,0.625,0.75,1].some(v => Math.abs(n-v) < 0.0001) ? n : fallback;
  }

  function csvTemplate(value, fallback) {
    const raw = String(value ?? "").trim();
    if (!raw) return fallback;
    const s = raw.toLowerCase().replace(/[\s_-]+/g, "");
    const map = {
      "classic":"classic",
      "sixvalue":"sixValue",
      "information":"information",
      "largeship":"largeShip",
      "largeship(3/4&1inch)":"largeShip"
    };
    return map[s] || fallback;
  }

  function csvSymbol(value, counter) {
    const raw = String(value ?? "").trim();
    if (!raw) {
      counter.symbol = "";
      counter.customSymbolId = "";
      return;
    }
    if (raw.toLowerCase() === "nato / app-6" || raw.toLowerCase() === "nato" || raw.toLowerCase() === "app-6") {
      counter.symbol = "nato";
      counter.customSymbolId = "";
      return;
    }

    const legacyOldSchool = {
      "old school infantry":"SFGPUCI-----",
      "old school cavalry":"SFGPUCRV----",
      "old school artillery":"SFGPUCF-----",
      "old school armor":"SFGPUCA-----"
    };
    if (legacyOldSchool[raw.toLowerCase()]) {
      counter.symbol = "nato";
      counter.customSymbolId = "";
      counter.natoSidc = legacyOldSchool[raw.toLowerCase()];
      return;
    }

    // Match built-in symbol value or visible dropdown label.
    const select = $("symbolSelect");
    if (select) {
      const option = [...select.options].find(o =>
        String(o.value).toLowerCase() === raw.toLowerCase() ||
        String(o.textContent).trim().toLowerCase() === raw.toLowerCase()
      );
      if (option) {
        counter.symbol = option.value;
        counter.customSymbolId = "";
        return;
      }
    }

    // Match an imported symbol by project name.
    const custom = (state.customSymbols || []).find(s =>
      String(s.name || "").trim().toLowerCase() === raw.toLowerCase()
    );
    if (custom) {
      counter.customSymbolId = custom.id;
      return;
    }
  }

  function importCsvValue(row, headers, name) {
    const idx = headers.indexOf(name);
    return idx >= 0 ? row[idx] : undefined;
  }

  function hasCsvColumn(headers, name) {
    return headers.indexOf(name) >= 0;
  }

  function applyCsvRowToCounter(c, row, headers) {
    const get = name => importCsvValue(row, headers, name);
    const has = name => hasCsvColumn(headers, name);

    if (has("Quantity")) c.quantity = Math.max(1, Math.min(999, Math.floor(Number(get("Quantity")) || c.quantity || 1)));
    if (has("Template")) c.template = csvTemplate(get("Template"), c.template || "classic");

    if (has("Counter Size (in)")) {
      c.size = csvCounterSize(get("Counter Size (in)"), Number(c.size) || 0.625);
      // Physical geometry must remain the same on both faces.
      if (c.back) c.back.size = c.size;
    }

    if (c.template === "largeShip" && Number(c.size) < 0.75) {
      c.size = 0.75;
      if (c.back) c.back.size = c.size;
    }

    if (has("Background Color")) c.bg = csvColor(get("Background Color"), c.bg || "#ffffff");
    if (has("Stripe Orientation")) {
      const v = String(get("Stripe Orientation") ?? "").trim();
      if (["none","vertical","horizontal"].includes(v)) c.stripeOrientation = v;
    }
    if (has("Stripe Color")) c.stripeColor = csvColor(get("Stripe Color"), c.stripeColor || "#ffffff");
    if (has("Border Color")) c.border = csvColor(get("Border Color"), c.border || "#111111");
    if (has("Main Text Color")) c.text = csvColor(get("Main Text Color"), c.text || "#111111");
    if (has("Symbol Color")) c.symbolColor = csvColor(get("Symbol Color"), c.symbolColor || "#000000");

    if (has("NATO SIDC")) c.natoSidc = String(get("NATO SIDC") ?? "").trim() || c.natoSidc || "SFGPUCI-----";
    if (has("NATO Unit Size")) c.natoUnitSize = normalizeNatoUnitSize(get("NATO Unit Size"), c.natoUnitSize || "");
    if (has("NATO Frame")) c.natoFrame = csvBool(get("NATO Frame"), !!c.natoFrame);
    if (has("Damage Explosion")) c.damageExplosion = csvBool(get("Damage Explosion"), !!c.damageExplosion);
    if (has("Damage Explosion Color")) c.damageExplosionColor = csvColor(get("Damage Explosion Color"), c.damageExplosionColor || "#ff8a00");
    if (has("Label Font Size (%)")) c.labelTextScale = Math.max(50, Math.min(200, Number(get("Label Font Size (%)")) || c.labelTextScale || 100));
    if (has("Number Font Size (%)")) c.numberTextScale = Math.max(50, Math.min(200, Number(get("Number Font Size (%)")) || c.numberTextScale || 100));

    if (has("Unit Name")) c.name = String(get("Unit Name") ?? "");
    if (has("Unit Type")) c.type = String(get("Unit Type") ?? "");
    if (has("Information Text")) c.infoText = String(get("Information Text") ?? "");
    if (has("Symbol")) csvSymbol(get("Symbol"), c);

    const standardFields = [
      ["Top Left","topLeft"],
      ["Top Right","topRight"],
      ["Bottom Left","attack"],
      ["Bottom Center","defense"],
      ["Bottom Right","move"]
    ];
    for (const [header,key] of standardFields) {
      if (has(header)) c[key] = String(get(header) ?? "");
      if (has(header + " Text Color")) c[key + "Color"] = csvColor(get(header + " Text Color"), c[key + "Color"] || "#111111");
      if (has(header + " Highlight")) c[key + "Highlight"] = csvBool(get(header + " Highlight"), !!c[key + "Highlight"]);
      if (has(header + " Highlight Color")) c[key + "HighlightColor"] = csvColor(get(header + " Highlight Color"), c[key + "HighlightColor"] || "#fff59d");
    }

    if (has("Ship Country")) c.shipCountry = String(get("Ship Country") ?? "").toUpperCase().slice(0,2);
    if (has("Ship Letter")) c.shipLetter = String(get("Ship Letter") ?? "").toUpperCase().slice(0,1);
    if (has("Ship Type")) c.shipType = String(get("Ship Type") ?? "").toUpperCase().slice(0,2);

    const shipFields = [
      ["Ship Top Left 1","shipTopLeft1"],
      ["Ship Top Left 2","shipTopLeft2"],
      ["Ship Top Right 1","shipTopRight1"],
      ["Ship Top Right 2","shipTopRight2"],
      ["Ship Bottom Left 1","shipBottomLeft1"],
      ["Ship Bottom Left 2","shipBottomLeft2"],
      ["Ship Bottom Right 1","shipBottomRight1"],
      ["Ship Bottom Right 2","shipBottomRight2"]
    ];
    for (const [header,key] of shipFields) {
      if (has(header)) c[key] = String(get(header) ?? "");
      if (has(header + " Color")) c[key + "Color"] = csvColor(get(header + " Color"), c[key + "Color"] || "#111111");
      if (has(header + " Highlight")) c[key + "Highlight"] = csvBool(get(header + " Highlight"), !!c[key + "Highlight"]);
      if (has(header + " Highlight Color")) c[key + "HighlightColor"] = csvColor(get(header + " Highlight Color"), c[key + "HighlightColor"] || "#fff59d");
    }

    // Ensure the back retains matching physical geometry after bulk edits.
    if (c.back) {
      c.back.size = c.size;
      c.back.bleed = c.bleed;
      c.back.safeInset = c.safeInset;
    }
  }

  $("importCsvInput").addEventListener("change", async e => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const rows = parseCsv(await file.text());
      if (rows.length < 2) throw new Error("The CSV does not contain any counter rows.");

      const headers = rows[0].map(h => String(h).trim());
      if (!headers.includes("Counter Number")) {
        throw new Error('The CSV must contain a "Counter Number" column. Export a CSV from this tool first, then edit and re-import it.');
      }

      const counterNumberIndex = headers.indexOf("Counter Number");
      let updated = 0;
      let skipped = 0;
      const warnings = [];

      for (let i=1; i<rows.length; i++) {
        const row = rows[i];
        const counterNumber = Math.floor(Number(row[counterNumberIndex]));
        if (!Number.isFinite(counterNumber) || counterNumber < 1 || counterNumber > state.counters.length) {
          skipped++;
          warnings.push(`Row ${i+1}: invalid Counter Number "${row[counterNumberIndex] ?? ""}"`);
          continue;
        }

        const c = state.counters[counterNumber - 1];
        applyCsvRowToCounter(c, row, headers);
        updated++;
      }

      state.editingSide = "front";
      syncControlsFromCounter();
      renderAll();

      let message = `CSV import complete.\n\nUpdated: ${updated} counter${updated === 1 ? "" : "s"}`;
      if (skipped) message += `\nSkipped: ${skipped} row${skipped === 1 ? "" : "s"}`;
      if (warnings.length) message += `\n\n${warnings.slice(0,8).join("\n")}${warnings.length > 8 ? `\n…and ${warnings.length-8} more.` : ""}`;
      alert(message);
    } catch (err) {
      alert("Could not import CSV: " + err.message);
    }

    e.target.value = "";
  });

  $("loadProjectInput").addEventListener("change", async e => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      if (!Array.isArray(data.counters) || !data.counters.length) throw new Error("No counters found.");
      state = data;
      state.customSymbols ||= [];
      await ensureCustomSymbolMasks();
      state.sheet ||= { paper: "letter", orientation: "portrait", margin: .375, gutter: .0625, cropMarks: true, guides: true, superiorBackMode: "blank" };
      state.sheet.superiorPodSize = ["0.625","0.75","1"].includes(String(state.sheet.superiorPodSize)) ? String(state.sheet.superiorPodSize) : "0.625";
      state.sheet.superiorBackMode ||= "blank";
      state.sheet.superiorLayoutMode ||= "auto";
      state.sheet.superiorManualPages ||= [];
      state.sheet.superiorManualPageIndex = Math.max(0, Number(state.sheet.superiorManualPageIndex) || 0);
      state.sheet.superiorSelectedSlotIndex = Math.max(0, Number(state.sheet.superiorSelectedSlotIndex) || 0);
      state.sheet.superiorManualLayouts ||= {};
      state.counters.forEach(c => {
        if (c.customSymbolId == null) c.customSymbolId = "";
        c.quantity = Math.max(1, Math.min(999, Math.floor(Number(c.quantity) || 1)));
        c.labelTextScale = Math.max(50, Math.min(200, Number(c.labelTextScale) || 100));
        c.numberTextScale = Math.max(50, Math.min(200, Number(c.numberTextScale) || 100));
        if (!["none","vertical","horizontal"].includes(c.stripeOrientation)) c.stripeOrientation = "none";
        if (!["start","center","end"].includes(c.stripePosition)) c.stripePosition = "center";
        c.stripeColor ||= "#ffffff";
        c.damageExplosion = !!c.damageExplosion;
        c.damageExplosionColor ||= "#ff8a00";
        c.twoSided = !!c.twoSided;
        if (c.twoSided) c.back = normalizeSideData(c.back, c);
        else c.back = null;
        const legacyOldSchoolMap = {
          oldSchoolInfantry: {symbol:"nato", natoSidc:"SFGPUCI-----"},
          oldSchoolCavalry: {symbol:"nato", natoSidc:"SFGPUCRV----"},
          oldSchoolArtillery: {symbol:"nato", natoSidc:"SFGPUCF-----"},
          oldSchoolArmor: {symbol:"nato", natoSidc:"SFGPUCA-----"},
          oldSchoolJetFighter: {symbol:"fighter"},
          oldSchoolSupportPlane: {symbol:"fighter"},
          oldSchoolHeavyBomber: {symbol:"bomber"}
        };

        if (legacyOldSchoolMap[c.symbol]) {
          const migrated = legacyOldSchoolMap[c.symbol];
          c.symbol = migrated.symbol;
          if (migrated.natoSidc) c.natoSidc = migrated.natoSidc;
        }
        if (c.back && legacyOldSchoolMap[c.back.symbol]) {
          const migrated = legacyOldSchoolMap[c.back.symbol];
          c.back.symbol = migrated.symbol;
          if (migrated.natoSidc) c.back.natoSidc = migrated.natoSidc;
        }

        c.natoUnitSize = normalizeNatoUnitSize(c.natoUnitSize, "");
        if (c.back) c.back.natoUnitSize = normalizeNatoUnitSize(c.back.natoUnitSize, "");
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

        c.symbolColor ||= "#000000";
        c.natoSidc ||= "SFGPUCI-----";
        c.natoFrame = !!c.natoFrame;
        if (c.back) {
          c.back.symbolColor ||= c.symbolColor;
          c.back.natoSidc ||= c.natoSidc;
          c.back.natoFrame = !!c.back.natoFrame;
        }

        for (const key of ["shipTopLeft1","shipTopLeft2","shipTopRight1","shipTopRight2","shipBottomLeft1","shipBottomLeft2","shipBottomRight1","shipBottomRight2"]) {
          c[key] ||= "";
          c[key + "Color"] ||= "#111111";
          if (c[key + "Highlight"] == null) c[key + "Highlight"] = false;
          c[key + "HighlightColor"] ||= "#fff59d";
          if (c.back) {
            c.back[key] ||= "";
            c.back[key + "Color"] ||= "#111111";
            if (c.back[key + "Highlight"] == null) c.back[key + "Highlight"] = false;
            c.back[key + "HighlightColor"] ||= "#fff59d";
          }
        }
        c.shipCountry ||= "";
        c.shipLetter ||= "";
        c.shipType ||= "";
        if (c.back) {
          c.back.shipCountry ||= "";
          c.back.shipLetter ||= "";
          c.back.shipType ||= "";
        }
        if (c.template === "largeShip" && Number(c.size) < 0.75) c.size = 0.75;
        if (c.back && c.back.template === "largeShip" && Number(c.back.size) < 0.75) c.back.size = 0.75;
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
      const maskDataUrl = await buildSymbolMaskDataUrl(dataUrl);
      const id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random());
      state.customSymbols ||= [];
      state.customSymbols.push({
        id,
        name: file.name.replace(/\.[^.]+$/, ""),
        fileName: file.name,
        mimeType: file.type,
        dataUrl,
        maskDataUrl
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
  const SUPERIOR_POD_TEMPLATES = {
    "0.625": {
      key: "0.625",
      label: '5/8 inch',
      pageWidthPt: 1296,
      pageHeightPt: 864,
      counterPt: 45,
      safeInsetPt: 4.5,
      bleedPt: 3.375,
      layout: "sideBySide",
      topY: 55,
      bottomY: 450,
      rowsPerBlock: 8,
      frontColumns: [37, 82, 136, 181, 251, 296, 350, 395, 450, 495, 567],
      backColumns: [1216, 1170, 1117, 1071, 1002, 956, 903, 857, 803, 758, 686],
      midlineY: 432,
      backLabelY: 12
    },
    "0.75": {
      key: "0.75",
      label: '3/4 inch',
      pageWidthPt: 864,
      pageHeightPt: 1296,
      counterPt: 54,
      safeInsetPt: 4.5,
      bleedPt: 9,
      layout: "topBottom",
      frontXs: [42, 96, 150, 204, 258, 312, 366, 446, 500, 554, 608, 662, 716, 770],
      frontYs: [36, 101.5, 167, 232.5, 297, 362, 427.5, 493, 558],
      backYs: [685, 750.5, 816, 880.5, 945.5, 1011, 1076.5, 1141.5, 1207],
      midlineY: 648,
      backLabelY: 660
    },
    "1": {
      key: "1",
      label: '1 inch',
      pageWidthPt: 864,
      pageHeightPt: 1296,
      counterPt: 72,
      safeInsetPt: 4.5,
      bleedPt: 9,
      layout: "topBottom",
      frontXs: [27, 99, 189, 261, 369, 441, 531, 603, 693, 765],
      frontYs: [36, 108, 180, 252, 324, 396, 468, 540],
      backYs: [684, 756, 828, 900, 972, 1044, 1116, 1188],
      midlineY: 648,
      backLabelY: 660
    }
  };

  function superiorFrontSlots() {
    const tpl = currentPodTemplate();
    const slots = [];

    if (tpl.key === "0.625") {
      for (const y0 of [tpl.topY, tpl.bottomY]) {
        for (let row = 0; row < tpl.rowsPerBlock; row++) {
          for (let col = 0; col < tpl.frontColumns.length; col++) {
            slots.push({
              x: tpl.frontColumns[col],
              y: y0 + row * tpl.counterPt,
              col, row, y0,
              side: "front",
              slotIndex: slots.length
            });
          }
        }
      }
      return slots;
    }

    for (let row = 0; row < tpl.frontYs.length; row++) {
      for (let col = 0; col < tpl.frontXs.length; col++) {
        slots.push({
          x: tpl.frontXs[col],
          y: tpl.frontYs[row],
          col, row,
          y0: 0,
          side: "front",
          slotIndex: slots.length
        });
      }
    }
    return slots;
  }

  function superiorBackSlot(frontSlot) {
    const tpl = currentPodTemplate();

    if (tpl.key === "0.625") {
      return { ...frontSlot, x: tpl.backColumns[frontSlot.col], side: "back" };
    }

    // The 3/4 and 1 inch manufacturer templates place backs in the lower
    // half of the sheet. Front bottom row corresponds to back top row.
    const backRow = (tpl.backYs.length - 1) - frontSlot.row;
    return {
      ...frontSlot,
      x: tpl.frontXs[frontSlot.col],
      y: tpl.backYs[backRow],
      y0: tpl.midlineY,
      physicalRow: backRow,
      side: "back"
    };
  }

  function superiorGroupEdges(slot) {
    const tpl = currentPodTemplate();
    if (tpl.key === "0.625") {
      const groups = [[0,1],[2,3],[4,5],[6,7],[8,9],[10,10]];
      const g = groups.find(([a,b]) => slot.col >= a && slot.col <= b) || [slot.col, slot.col];
      return {
        left: slot.col === g[0], right: slot.col === g[1],
        top: slot.row === 0, bottom: slot.row === tpl.rowsPerBlock - 1
      };
    }
    return {
      left: slot.col === 0,
      right: slot.col === (tpl.frontXs.length - 1),
      top: slot.row === 0,
      bottom: slot.row === (tpl.frontYs.length - 1)
    };
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

  function hexToRgb(hex) {
    const raw = String(hex || "").trim();
    const normalized = raw.startsWith("#") ? raw.slice(1) : raw;
    if (/^[0-9a-fA-F]{3}$/.test(normalized)) {
      return {
        r: parseInt(normalized[0] + normalized[0], 16),
        g: parseInt(normalized[1] + normalized[1], 16),
        b: parseInt(normalized[2] + normalized[2], 16)
      };
    }
    if (/^[0-9a-fA-F]{6}$/.test(normalized)) {
      return {
        r: parseInt(normalized.slice(0, 2), 16),
        g: parseInt(normalized.slice(2, 4), 16),
        b: parseInt(normalized.slice(4, 6), 16)
      };
    }
    return { r: 0, g: 0, b: 0 };
  }

  function loadTintedSymbolUrl(url, color="#000000") {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = Math.max(1, img.width || 1);
          canvas.height = Math.max(1, img.height || 1);
          const ctx = canvas.getContext("2d");
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);

          const { r, g, b } = hexToRgb(color);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
          for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] > 0) {
              data[i] = r;
              data[i + 1] = g;
              data[i + 2] = b;
            }
          }
          ctx.putImageData(imageData, 0, 0);

          const out = new Image();
          out.onload = () => resolve(out);
          out.onerror = () => reject(new Error("Could not recolor the imported symbol."));
          out.src = canvas.toDataURL("image/png");
        } catch (err) {
          reject(err);
        }
      };
      img.onerror = () => reject(new Error("Could not render a counter image."));
      img.src = url;
    });
  }


  async function canvasSymbolImage(c) {
    const symbolColor = c.symbolColor || "#000000";
    if (c.customSymbolId) {
      const custom = (state.customSymbols || []).find(s => s.id === c.customSymbolId);
      if (custom?.dataUrl) return loadTintedSymbolUrl(custom.maskDataUrl || custom.dataUrl, symbolColor);
    }
    if (!c.symbol) return null;
    if (c.symbol === "nato") {
      let svg = renderNatoSvg(c);
      if (!svg) return null;
      if (!/^<svg[^>]*xmlns=/.test(svg)) svg = svg.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
      return loadImageUrl("data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg));
    }
    if (!SYMBOLS[c.symbol]) return null;
    let svg = SYMBOLS[c.symbol].replace(/currentColor/g, symbolColor);
    if (!/^<svg[^>]*xmlns=/.test(svg)) svg = svg.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
    return loadImageUrl("data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg));
  }

  function drawFitImage(ctx, img, x, y, w, h) {
    const scale = Math.min(w / img.width, h / img.height);
    const dw = img.width * scale, dh = img.height * scale;
    ctx.drawImage(img, x + (w-dw)/2, y + (h-dh)/2, dw, dh);
  }

  function drawDamageExplosion(ctx, cx, cy, maxW, maxH, color) {
    const outer = Math.min(maxW, maxH) * 0.58;
    const inner = outer * 0.50;
    const spikes = 12;
    ctx.save();
    ctx.translate(cx, cy);

    function burst(radiusA, radiusB, alpha) {
      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const angle = -Math.PI / 2 + (i * Math.PI / spikes);
        const r = (i % 2 === 0) ? radiusA : radiusB;
        const px = Math.cos(angle) * r;
        const py = Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color || "#ff8a00";
      ctx.fill();
    }

    burst(outer, outer * 0.56, 0.58);
    burst(inner, inner * 0.58, 0.88);
    ctx.beginPath();
    ctx.arc(0, 0, outer * 0.18, 0, Math.PI * 2);
    ctx.globalAlpha = 0.22;
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.restore();
  }

  function drawFitSymbolWithExplosion(ctx, c, img, x, y, w, h) {
    if (!img) return;
    const scale = Math.min(w / img.width, h / img.height);
    const dw = img.width * scale, dh = img.height * scale;
    const dx = x + (w - dw) / 2;
    const dy = y + (h - dh) / 2;
    if (c?.damageExplosion) drawDamageExplosion(ctx, dx + dw / 2, dy + dh / 2, dw * 1.18, dh * 1.18, c.damageExplosionColor || "#ff8a00");
    ctx.drawImage(img, dx, dy, dw, dh);
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

    const tpl = currentPodTemplate();
    const bleed = tpl.bleedPt;
    const size = tpl.counterPt;
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
        const bridgeBlocks = n.y0 === tpl.topY && n.row === tpl.rowsPerBlock-1 &&
                             s.y0 === tpl.bottomY && s.row === 0;
        if (sameBlockAdjacent || bridgeBlocks) top = ((n.y + size) + s.y) / 2;
      }
      if (colPos >= 0 && colPos < colArr.length-1) {
        const n = colArr[colPos+1].slot;
        const sameBlockAdjacent = s.y0 === n.y0 && Math.abs(s.row - n.row) === 1;
        const bridgeBlocks = s.y0 === tpl.topY && s.row === tpl.rowsPerBlock-1 &&
                             n.y0 === tpl.bottomY && n.row === 0;
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
    const x = pt(slot.x), y = pt(slot.y), size = pt(currentPodTemplate().counterPt);
    ctx.fillStyle = c.bg || "#ffffff";
    ctx.fillRect(x, y, size, size);
    drawCounterStripe(ctx, c, x, y, size);

    // POD output should not draw dark divider lines between adjacent counters.
    // The bleed fields already define the print separation behavior.
    const inset = pt(currentPodTemplate().safeInsetPt);
    const sx = x + inset, sy = y + inset, sw = size - 2 * inset, sh = size - 2 * inset;
    const textColor = c.text || "#111111";
    const labelScale = Math.max(50, Math.min(200, Number(c.labelTextScale) || 100)) / 100;
    const numberScale = Math.max(50, Math.min(200, Number(c.numberTextScale) || 100)) / 100;
    const symbol = await canvasSymbolImage(c);
    const template = c.template || "classic";

    if (template === "information") {
      const hasImage = !!symbol;
      if (symbol) drawFitSymbolWithExplosion(ctx, c, symbol, sx + sw * .14, sy + sh * .02, sw * .72, sh * .38);
      ctx.fillStyle = textColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const fontPx = Math.max(3.0 * scale, size * .108 * labelScale);
      ctx.font = `700 ${fontPx}px Arial, sans-serif`;
      const lines = wrapCanvasText(ctx, c.infoText || c.name || "", sw * .88, hasImage ? 3 : 5);
      const lineH = fontPx * 1.04;
      const areaTop = hasImage ? sy + sh * .54 : sy + sh * .12;
      const areaH = hasImage ? sh * .34 : sh * .72;
      let yy = areaTop + areaH / 2 - (lines.length - 1) * lineH / 2;
      for (const line of lines) {
        ctx.fillText(line, x + size / 2, yy);
        yy += lineH;
      }
      return;
    }

    if (template === "sixValue") {
      drawValue(ctx, c.topLeft, x + size * .21, y + size * .17, size * .097 * numberScale, c.topLeftColor, c.topLeftHighlight, c.topLeftHighlightColor, scale);
      drawValue(ctx, c.topRight, x + size * .79, y + size * .17, size * .097 * numberScale, c.topRightColor, c.topRightHighlight, c.topRightHighlightColor, scale);
      if (symbol) drawFitSymbolWithExplosion(ctx, c, symbol, x + size * .24, y + size * .21, size * .52, size * .30);
      ctx.fillStyle = textColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `700 ${size * .082 * labelScale}px Arial, sans-serif`;
      ctx.fillText(String(c.name || "").slice(0, 24), x + size / 2, y + size * .58);
      drawValue(ctx, c.attack, x + size * .21, y + size * .80, size * .108 * numberScale, c.attackColor, c.attackHighlight, c.attackHighlightColor, scale);
      drawValue(ctx, c.defense, x + size * .50, y + size * .80, size * .108 * numberScale, c.defenseColor, c.defenseHighlight, c.defenseHighlightColor, scale);
      drawValue(ctx, c.move, x + size * .79, y + size * .80, size * .108 * numberScale, c.moveColor, c.moveHighlight, c.moveHighlightColor, scale);
      return;
    }

    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `700 ${size * .095 * labelScale}px Arial, sans-serif`;
    ctx.fillText(String(c.name || "").slice(0, 24), x + size / 2, y + size * .17);
    if (symbol) drawFitSymbolWithExplosion(ctx, c, symbol, x + size * .20, y + size * .25, size * .60, size * .31);
    ctx.font = `600 ${size * .067 * labelScale}px Arial, sans-serif`;
    ctx.fillText(String(c.type || "").slice(0, 18), x + size / 2, y + size * .61);
    drawValue(ctx, c.attack, x + size * .21, y + size * .80, size * .108 * numberScale, c.attackColor, c.attackHighlight, c.attackHighlightColor, scale);
    drawValue(ctx, c.defense, x + size * .50, y + size * .80, size * .108 * numberScale, c.defenseColor, c.defenseHighlight, c.defenseHighlightColor, scale);
    drawValue(ctx, c.move, x + size * .79, y + size * .80, size * .108 * numberScale, c.moveColor, c.moveHighlight, c.moveHighlightColor, scale);
  }

  function drawSuperiorSolidBack(ctx, c, slot, dpi) {
    const pt = v => v * (dpi / 72);
    const x = pt(slot.x), y = pt(slot.y), size = pt(currentPodTemplate().counterPt);
    ctx.fillStyle = c.bg || "#ffffff";
    ctx.fillRect(x, y, size, size);
    drawCounterStripe(ctx, c, x, y, size);

    // No border stroke here either; POD backs should remain clean.
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

  async function drawGenericCounter(ctx, c, xPx, yPx, sizePx, dpi, options={}) {
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
      const echelonMark = (c.symbol === "nato") ? natoUnitSizeMark(c.natoUnitSize || "") : "";
      const template = c.template || "classic";
      const echelonFontPx = echelonMark
        ? Math.max(6, size * (template === "largeShip" ? 0.068 : template === "sixValue" ? 0.078 : 0.082))
        : 0;
      const echelonGap = echelonMark ? Math.max(2, echelonFontPx * 0.10) : 0;
      const reservedTop = echelonMark ? (echelonFontPx + echelonGap) : 0;
      const symbolMaxH = Math.max(4, maxH - reservedTop);
      const ratio = Math.min(maxW / symbol.width, symbolMaxH / symbol.height);
      const w = symbol.width * ratio;
      const h = symbol.height * ratio;
      const symbolCy = echelonMark ? (cy + reservedTop * 0.46) : cy;

      if (c.damageExplosion) drawDamageExplosion(ctx, cx, symbolCy, w * 1.18, h * 1.18, c.damageExplosionColor || "#ff8a00");
      ctx.drawImage(symbol, cx - w/2, symbolCy - h/2, w, h);

      if (echelonMark) {
        ctx.save();
        ctx.fillStyle = c.symbolColor || "#000000";
        ctx.font = `700 ${echelonFontPx}px Arial, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        const symbolAreaTop = cy - maxH / 2;
        const markY = symbolAreaTop + Math.max(1, echelonFontPx * 0.02);
        ctx.fillText(echelonMark, cx, markY);
        ctx.restore();
      }
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

    } else if (template === "largeShip") {
      drawStat(c.shipTopLeft1,  xPx + size*0.105, yPx + size*0.10, size*0.105*numberScale, c.shipTopLeft1Color, c.shipTopLeft1Highlight, c.shipTopLeft1HighlightColor, size*0.16);
      drawStat(c.shipTopLeft2,  xPx + size*0.255, yPx + size*0.10, size*0.105*numberScale, c.shipTopLeft2Color, c.shipTopLeft2Highlight, c.shipTopLeft2HighlightColor, size*0.16);
      drawCenteredText(c.shipCountry || "", xPx + size*0.50, yPx + size*0.10, size*0.09*labelScale, size*0.18, "700", Math.max(4,size*0.045));
      drawStat(c.shipTopRight1, xPx + size*0.745, yPx + size*0.10, size*0.105*numberScale, c.shipTopRight1Color, c.shipTopRight1Highlight, c.shipTopRight1HighlightColor, size*0.16);
      drawStat(c.shipTopRight2, xPx + size*0.895, yPx + size*0.10, size*0.105*numberScale, c.shipTopRight2Color, c.shipTopRight2Highlight, c.shipTopRight2HighlightColor, size*0.16);

      if (symbol) drawSymbol(xPx + size*0.5, yPx + size*0.39, size*0.76, size*0.34);

      const shipNamePx = fittedFontPx(c.name || "", size*0.078*labelScale, size*0.72, "700", Math.max(4,size*0.04));
      ctx.fillStyle = textColor;
      ctx.font = `700 ${shipNamePx}px Arial, sans-serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "left";
      ctx.fillText(String(c.name || ""), xPx + size*0.06, yPx + size*0.64);

      const shipLetterPx = fittedFontPx(c.shipLetter || "", size*0.09*labelScale, size*0.10, "700", Math.max(4,size*0.045));
      ctx.font = `700 ${shipLetterPx}px Arial, sans-serif`;
      ctx.textAlign = "right";
      ctx.fillText(String(c.shipLetter || "").slice(0,1), xPx + size*0.94, yPx + size*0.64);

      drawStat(c.shipBottomLeft1,  xPx + size*0.105, yPx + size*0.88, size*0.105*numberScale, c.shipBottomLeft1Color, c.shipBottomLeft1Highlight, c.shipBottomLeft1HighlightColor, size*0.16);
      drawStat(c.shipBottomLeft2,  xPx + size*0.255, yPx + size*0.88, size*0.105*numberScale, c.shipBottomLeft2Color, c.shipBottomLeft2Highlight, c.shipBottomLeft2HighlightColor, size*0.16);
      drawCenteredText(c.shipType || "", xPx + size*0.50, yPx + size*0.88, size*0.09*labelScale, size*0.18, "700", Math.max(4,size*0.045));
      drawStat(c.shipBottomRight1, xPx + size*0.745, yPx + size*0.88, size*0.105*numberScale, c.shipBottomRight1Color, c.shipBottomRight1Highlight, c.shipBottomRight1HighlightColor, size*0.16);
      drawStat(c.shipBottomRight2, xPx + size*0.895, yPx + size*0.88, size*0.105*numberScale, c.shipBottomRight2Color, c.shipBottomRight2Highlight, c.shipBottomRight2HighlightColor, size*0.16);

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
    // POD templates suppress it because the manufacturer cut geometry must not
    // contain printed divider lines.
    if (!options.suppressBorder) {
      ctx.save();
      ctx.strokeStyle = c.border || "#111111";
      ctx.lineWidth = Math.max(1, size * 0.012);
      ctx.strokeRect(xPx, yPx, size, size);
      ctx.restore();
    }
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
    const tpl = currentPodTemplate();
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
        alert(`The manual ${tpl.label} Superior POD layout has no assigned counters.`);
        return;
      }
    } else {
      const counters = [];
      for (const c of podEligibleCounters()) {
        for (let i=0; i<counterQuantity(c); i++) counters.push(c);
      }
      if (!counters.length) {
        alert(`There are no ${tpl.label} counters to export.`);
        return;
      }
      const slots = superiorFrontSlots();
      const perSheet = slots.length;
      const pageCount = Math.ceil(counters.length / perSheet);
      for (let page=0; page<pageCount; page++) {
        const subset = counters.slice(page*perSheet,(page+1)*perSheet);
        exportPages.push({counters:subset, slots:slots.slice(0,subset.length)});
      }
    }

    const usedCounters = exportPages.flatMap(p => p.counters);
    if (usedCounters.some(c => Math.abs(Number(c.size)-Number(tpl.key)) > 0.0001)) {
      alert(`Superior POD ${tpl.label} export can only contain ${tpl.label} counters.`);
      return;
    }

    const dpi = 300, scale = dpi / 72;
    const width = Math.round(tpl.pageWidthPt * scale);
    const height = Math.round(tpl.pageHeightPt * scale);
    const jpegs = [];
    const btn = $("superiorPodBtn");
    const old = btn.textContent;
    btn.disabled = true;

    try {
      for (let page=0; page<exportPages.length; page++) {
        btn.textContent = `Building POD ${tpl.label} ${page+1}/${exportPages.length}...`;

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d",{alpha:false});

        const subset = exportPages[page].counters;
        const frontSlots = exportPages[page].slots;
        const repeatedBacks = (state.sheet.superiorBackMode || "blank") === "repeat";
        const backSubset = subset.map(c => repeatedBacks ? c : (c.twoSided && c.back ? sideForExport(c,"back") : c));
        const backSlots = frontSlots.map(superiorBackSlot);

        // The legacy 5/8 sheet supports the original whole-sheet same-color fill.
        // The portrait 3/4 and 1 inch templates retain their central separation.
        let wholeSheetColor = null;
        if (tpl.key === "0.625") {
          const sameColor = superiorAllSameColor(subset);
          const backSameColor = superiorAllSameColor(backSubset);
          wholeSheetColor =
            sameColor && backSameColor && sameColor.toLowerCase() === backSameColor.toLowerCase()
              ? sameColor : null;
        }

        ctx.fillStyle = wholeSheetColor || "#ffffff";
        ctx.fillRect(0,0,width,height);

        if (!wholeSheetColor) {
          drawSuperiorBleedBackground(ctx, subset, frontSlots, dpi);
          drawSuperiorBleedBackground(ctx, backSubset, backSlots, dpi);
        }

        for (let i=0; i<subset.length; i++) {
          const slot = frontSlots[i];
          if (tpl.key === "0.625") {
            await drawSuperiorCounter(ctx, subset[i], slot, dpi);
          } else {
            await drawGenericCounter(
              ctx,
              subset[i],
              slot.x * scale,
              slot.y * scale,
              tpl.counterPt * scale,
              dpi,
              {suppressBorder:true}
            );
          }
        }

        for (let i=0; i<subset.length; i++) {
          const c = subset[i];
          const slot = backSlots[i];
          if (repeatedBacks) {
            if (tpl.key === "0.625") {
              await drawSuperiorCounter(ctx, c, slot, dpi);
            } else {
              await drawGenericCounter(ctx, c, slot.x*scale, slot.y*scale, tpl.counterPt*scale, dpi, {suppressBorder:true});
            }
          } else if (c.twoSided && c.back) {
            const backCounter = sideForExport(c,"back");
            if (tpl.key === "0.625") {
              await drawSuperiorCounter(ctx, backCounter, slot, dpi);
            } else {
              await drawGenericCounter(ctx, backCounter, slot.x*scale, slot.y*scale, tpl.counterPt*scale, dpi, {suppressBorder:true});
            }
          } else {
            drawSuperiorSolidBack(ctx, c, slot, dpi);
          }
        }

        jpegs.push(await canvasToJpegBytes(canvas));
      }

      const pdf = buildJpegPdf(jpegs, width, height, tpl.pageWidthPt, tpl.pageHeightPt);
      const blob = new Blob([pdf],{type:"application/pdf"});
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      const namePart = tpl.key === "0.625" ? "5-8" : (tpl.key === "0.75" ? "3-4" : "1-inch");
      a.download = `starfall-superior-pod-${namePart}-counter-sheet.pdf`;
      a.click();
      setTimeout(()=>URL.revokeObjectURL(a.href),1500);
    } catch (err) {
      console.error(err);
      alert("Could not create the Superior POD PDF: " + err.message);
    } finally {
      btn.disabled = false;
      btn.textContent = old;
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
