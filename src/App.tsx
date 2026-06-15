import { useState } from "react";

const FRUITS_PT = [
  { id: "abacate",    namePt: "Abacate",    nameEn: "Avocado",       emoji: "🥑",  kcal: 96  },
  { id: "abacaxi",    namePt: "Abacaxi",    nameEn: "Pineapple",     emoji: "🍍",  kcal: 48  },
  { id: "acerola",    namePt: "Acerola",    nameEn: "Acerola",       emoji: "🍒",  kcal: 33  },
  { id: "ameixa",     namePt: "Ameixa",     nameEn: "Plum",          emoji: "🫐",  kcal: 53  },
  { id: "banana",     namePt: "Banana",     nameEn: "Banana",        emoji: "🍌",  kcal: 74  },
  { id: "caju",       namePt: "Caju",       nameEn: "Cashew fruit",  emoji: "🟠",  kcal: 43  },
  { id: "caqui",      namePt: "Caqui",      nameEn: "Persimmon",     emoji: "🍊",  kcal: 71  },
  { id: "carambola",  namePt: "Carambola",  nameEn: "Star fruit",    emoji: "⭐",  kcal: 46  },
  { id: "seriguela",  namePt: "Seriguela",  nameEn: "Seriguela",     emoji: "🍑",  kcal: 76  },
  { id: "cupuacu",    namePt: "Cupuaçu",    nameEn: "Cupuaçu",       emoji: "🟤",  kcal: 49  },
  { id: "figo",       namePt: "Figo",       nameEn: "Fig",           emoji: "🫐",  kcal: 41  },
  { id: "goiaba",     namePt: "Goiaba",     nameEn: "Guava",         emoji: "🟢",  kcal: 54  },
  { id: "graviola",   namePt: "Graviola",   nameEn: "Soursop",       emoji: "🍈",  kcal: 62  },
  { id: "jabuticaba", namePt: "Jabuticaba", nameEn: "Jabuticaba",    emoji: "🟣",  kcal: 58  },
  { id: "jaca",       namePt: "Jaca",       nameEn: "Jackfruit",     emoji: "🟡",  kcal: 88  },
  { id: "jambo",      namePt: "Jambo",      nameEn: "Rose apple",    emoji: "🔴",  kcal: 27  },
  { id: "jamelao",    namePt: "Jamelão",    nameEn: "Jambolan",      emoji: "🫐",  kcal: 41  },
  { id: "kiwi",       namePt: "Kiwi",       nameEn: "Kiwi",          emoji: "🥝",  kcal: 51  },
  { id: "laranja",    namePt: "Laranja",    nameEn: "Orange",        emoji: "🍊",  kcal: 33  },
  { id: "limao",      namePt: "Limão",      nameEn: "Lemon",         emoji: "🍋",  kcal: 32  },
  { id: "maca",       namePt: "Maçã",       nameEn: "Apple",         emoji: "🍎",  kcal: 53  },
  { id: "mamao",      namePt: "Mamão",      nameEn: "Papaya",        emoji: "🧡",  kcal: 45  },
  { id: "manga",      namePt: "Manga",      nameEn: "Mango",         emoji: "🥭",  kcal: 72  },
  { id: "maracuja",   namePt: "Maracujá",   nameEn: "Passion fruit", emoji: "🟡",  kcal: 68  },
  { id: "melancia",   namePt: "Melancia",   nameEn: "Watermelon",    emoji: "🍉",  kcal: 33  },
  { id: "melao",      namePt: "Melão",      nameEn: "Melon",         emoji: "🍈",  kcal: 29  },
  { id: "mexerica",   namePt: "Mexerica",   nameEn: "Tangerine",     emoji: "🍊",  kcal: 58  },
  { id: "morango",    namePt: "Morango",    nameEn: "Strawberry",    emoji: "🍓",  kcal: 30  },
  { id: "pequi",      namePt: "Pequi",      nameEn: "Pequi",         emoji: "🟡",  kcal: 205 },
  { id: "pera",       namePt: "Pêra",       nameEn: "Pear",          emoji: "🍐",  kcal: 53  },
  { id: "pessego",    namePt: "Pêssego",    nameEn: "Peach",         emoji: "🍑",  kcal: 36  },
  { id: "pinha",      namePt: "Pinha",      nameEn: "Sugar apple",   emoji: "🟢",  kcal: 88  },
  { id: "pitanga",    namePt: "Pitanga",    nameEn: "Pitanga",       emoji: "🔴",  kcal: 41  },
  { id: "roma",       namePt: "Romã",       nameEn: "Pomegranate",   emoji: "🔴",  kcal: 56  },
  { id: "tamarindo",  namePt: "Tamarindo",  nameEn: "Tamarind",      emoji: "🟤",  kcal: 276 },
  { id: "tangerina",  namePt: "Tangerina",  nameEn: "Tangerine",     emoji: "🍊",  kcal: 58  },
  { id: "umbu",       namePt: "Umbu",       nameEn: "Umbu",          emoji: "🟢",  kcal: 37  },
  { id: "uva",        namePt: "Uva",        nameEn: "Grape",         emoji: "🍇",  kcal: 53  },
];

const UI = {
  pt: {
    title: "Troca de Frutas",
    subtitle: "Porção equivalente em calorias",
    labelHave: "Fruta prescrita",
    labelSwap: "Fruta escolhida",
    equivalent: "Porção equivalente",
    kcalBoth: "kcal nos dois casos",
    byWeight: "em peso",
    note: "kcal/100g conforme Tabela de Referência · porções aproximadas",
    swap: "Trocar",
  },
  en: {
    title: "Fruit Swap Calculator",
    subtitle: "Calorie-equivalent portion finder",
    labelHave: "Prescribed fruit",
    labelSwap: "Chosen fruit",
    equivalent: "Equivalent portion",
    kcalBoth: "kcal either way",
    byWeight: "by weight",
    note: "kcal/100g from Reference Table · portions are approximate",
    swap: "Swap",
  },
};

type Lang = "pt" | "en";
interface Fruit { id: string; namePt: string; nameEn: string; emoji: string; kcal: number; }

const getFruit = (id: string): Fruit => FRUITS_PT.find((f) => f.id === id)!;

export default function App() {
  const [lang, setLang] = useState<Lang>("pt");
  const [sourceId, setSourceId] = useState("banana");
  const [sourceGrams, setSourceGrams] = useState(100);
  const [targetId, setTargetId] = useState("morango");

  const t = UI[lang];
  const sourceFruit = getFruit(sourceId);
  const targetFruit = getFruit(targetId);

  const sourceKcal = Math.round((sourceFruit.kcal * sourceGrams) / 100);
  const targetGrams = Math.round((sourceGrams * sourceFruit.kcal) / targetFruit.kcal);

  const handleSourceChange = (id: string) => {
    setSourceId(id);
    if (id === targetId) setTargetId(sourceId);
  };
  const handleTargetChange = (id: string) => {
    setTargetId(id);
    if (id === sourceId) setSourceId(targetId);
  };
  const handleSwap = () => {
    setSourceId(targetId);
    setTargetId(sourceId);
  };

  return (
    <div className="app-wrapper">
      <div className="card">

        {/* Header */}
        <div className="header">
          <div>
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </div>
          <LangToggle lang={lang} onChange={setLang} />
        </div>

        {/* Source fruit */}
        <label className="field-label">{t.labelHave}</label>
        <div className="source-row">
          <FruitSelect value={sourceId} onChange={handleSourceChange} fruits={FRUITS_PT} lang={lang} exclude={targetId} />
          <GramInput value={sourceGrams} onChange={setSourceGrams} />
        </div>
        <CalNote fruit={sourceFruit} grams={sourceGrams} kcal={sourceKcal} lang={lang} />

        {/* Swap button */}
        <div className="swap-row">
          <button className="swap-btn" onClick={handleSwap} aria-label={t.swap}>⇅</button>
        </div>

        {/* Target fruit */}
        <label className="field-label">{t.labelSwap}</label>
        <FruitSelect value={targetId} onChange={handleTargetChange} fruits={FRUITS_PT} lang={lang} exclude={sourceId} />
        <CalNote fruit={targetFruit} grams={targetGrams} kcal={sourceKcal} lang={lang} />

        {/* Result */}
        <div className="result-card">
          <div className="result-label">{t.equivalent}</div>
          <div className="result-pills">
            <Pill fruit={sourceFruit} grams={sourceGrams} lang={lang} highlight={false} />
            <span className="result-arrow">→</span>
            <Pill fruit={targetFruit} grams={targetGrams} lang={lang} highlight={true} />
          </div>
          <div className="result-kcal">
            <strong>{sourceKcal} kcal</strong> {t.kcalBoth}
          </div>
        </div>

        <p className="footer-note">{t.note}</p>
      </div>
    </div>
  );
}

function LangToggle({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <div className="lang-toggle">
      {(["pt", "en"] as Lang[]).map(l => (
        <button key={l} className={`lang-btn${lang === l ? " active" : ""}`} onClick={() => onChange(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function FruitSelect({ value, onChange, fruits, lang, exclude }: {
  value: string; onChange: (id: string) => void; fruits: Fruit[]; lang: Lang; exclude: string;
}) {
  return (
    <select className="fruit-select" value={value} onChange={e => onChange(e.target.value)}>
      {fruits.filter(f => f.id !== exclude).map(f => (
        <option key={f.id} value={f.id}>
          {f.emoji} {lang === "pt" ? f.namePt : f.nameEn}
        </option>
      ))}
    </select>
  );
}

function GramInput({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="gram-wrap">
      <input
        className="gram-input"
        type="number" min={1} max={9999} value={value}
        onChange={e => onChange(Math.max(1, Number(e.target.value)))}
      />
      <span className="gram-unit">g</span>
    </div>
  );
}

function CalNote({ fruit, grams, kcal, lang }: { fruit: Fruit; grams: number; kcal: number; lang: Lang }) {
  const fruitName = lang === "pt" ? fruit.namePt : fruit.nameEn;
  return (
    <div className="cal-note">
      {fruit.emoji} {fruitName} · {fruit.kcal} kcal/100g · <strong>{kcal} kcal</strong> em {grams}g
    </div>
  );
}

function Pill({ fruit, grams, lang, highlight }: { fruit: Fruit; grams: number; lang: Lang; highlight: boolean }) {
  const fruitName = lang === "pt" ? fruit.namePt : fruit.nameEn;
  return (
    <div className={`pill ${highlight ? "pill-highlight" : "pill-default"}`}>
      <span className="pill-emoji">{fruit.emoji}</span>
      <span className="pill-grams">{grams}g</span>
      <span className="pill-name">{fruitName}</span>
    </div>
  );
}
