import { useState } from "react";

// ─── Brand tokens ──────────────────────────────────────────
const C = {
  navy:   "#0C1B38",
  navy2:  "#152B52",
  gold:   "#C9A84C",
  goldL:  "#E2C56A",
  goldP:  "#F5E8BF",
  cream:  "#FAF7EE",
  warm:   "#F2EAD6",
  sage:   "#E8F0F8",
  green:  "#2A7D50",
  greenL: "#D8F0E5",
  red:    "#C03030",
  redL:   "#FDECEC",
  mist:   "#8090A8",
  white:  "#FFFFFF",
};

const gf = `@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&family=Caveat:wght@600;700&display=swap');`;

// ─── SVG Illustrations ─────────────────────────────────────
const IlluCoin = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="36" fill="#E8C96A" stroke="#C9A84C" strokeWidth="3"/>
    <circle cx="40" cy="40" r="28" fill="#C9A84C"/>
    <text x="40" y="48" textAnchor="middle" fill="#0C1B38" fontSize="22" fontWeight="900" fontFamily="Arial">$</text>
    <ellipse cx="40" cy="14" rx="8" ry="4" fill="rgba(255,255,255,0.3)"/>
  </svg>
);

const IlluTree = () => (
  <svg width="90" height="100" viewBox="0 0 90 100" fill="none">
    <rect x="38" y="65" width="14" height="28" rx="4" fill="#8B6040"/>
    <circle cx="45" cy="50" r="28" fill="#2A7D50"/>
    <circle cx="32" cy="60" r="18" fill="#33975F"/>
    <circle cx="58" cy="60" r="18" fill="#33975F"/>
    <circle cx="45" cy="32" r="20" fill="#3AAD6A"/>
    <circle cx="30" cy="42" r="5" fill="#F5E8BF" opacity="0.6"/>
    <circle cx="58" cy="45" r="4" fill="#F5E8BF" opacity="0.5"/>
    <circle cx="45" cy="25" r="3" fill="#F5E8BF" opacity="0.7"/>
  </svg>
);

const IlluRocket = () => (
  <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
    <path d="M40 8 C40 8 58 28 58 52 L40 64 L22 52 C22 28 40 8 40 8Z" fill="#152B52"/>
    <circle cx="40" cy="42" r="10" fill="#E2C56A"/>
    <circle cx="40" cy="42" r="6" fill="#0C1B38"/>
    <path d="M22 52 L14 68 L28 60Z" fill="#C9A84C"/>
    <path d="M58 52 L66 68 L52 60Z" fill="#C9A84C"/>
    <path d="M32 62 L40 76 L48 62" fill="#E74C3C"/>
    <path d="M36 66 L40 78 L44 66" fill="#F39C12"/>
    <circle cx="24" cy="20" r="3" fill="#E2C56A" opacity="0.8"/>
    <circle cx="58" cy="30" r="2" fill="#E2C56A" opacity="0.6"/>
    <circle cx="16" cy="40" r="2" fill="#E2C56A" opacity="0.5"/>
  </svg>
);

const IlluStar = ({ size = 40, color = "#C9A84C" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <path d="M20 3 L24.1 14.5 L36.6 14.5 L26.8 21.5 L30.9 33 L20 26 L9.1 33 L13.2 21.5 L3.4 14.5 L15.9 14.5 Z"
      fill={color}/>
  </svg>
);

const IlluHouse = () => (
  <svg width="90" height="80" viewBox="0 0 90 80" fill="none">
    <path d="M45 8 L82 38 L8 38Z" fill="#C9A84C"/>
    <rect x="15" y="36" width="60" height="38" rx="3" fill="#152B52"/>
    <rect x="35" y="48" width="20" height="26" rx="4" fill="#8B6040"/>
    <rect x="18" y="42" width="16" height="14" rx="2" fill="#E2C56A"/>
    <rect x="56" y="42" width="16" height="14" rx="2" fill="#E2C56A"/>
    <circle cx="52" cy="62" r="2" fill="#C9A84C"/>
    <rect x="40" y="6" width="10" height="14" rx="2" fill="#E2C56A" opacity="0.3"/>
    <path d="M45 4 L47 10 L43 10Z" fill="#C9A84C"/>
  </svg>
);

const IlluTrophy = () => (
  <svg width="80" height="90" viewBox="0 0 80 90" fill="none">
    <path d="M18 12 Q8 12 8 24 Q8 36 20 40 Q24 50 40 52 Q56 50 60 40 Q72 36 72 24 Q72 12 62 12Z"
      fill="#E2C56A" stroke="#C9A84C" strokeWidth="2"/>
    <path d="M18 12 Q8 12 8 24 Q8 36 20 40" fill="none" stroke="#C9A84C" strokeWidth="2"/>
    <path d="M62 12 Q72 12 72 24 Q72 36 60 40" fill="none" stroke="#C9A84C" strokeWidth="2"/>
    <ellipse cx="40" cy="30" rx="18" ry="22" fill="#C9A84C"/>
    <ellipse cx="40" cy="26" rx="12" ry="8" fill="#E2C56A" opacity="0.6"/>
    <rect x="34" y="52" width="12" height="18" rx="3" fill="#8B6040"/>
    <rect x="24" y="68" width="32" height="8" rx="4" fill="#C9A84C"/>
    <text x="40" y="36" textAnchor="middle" fill="#0C1B38" fontSize="16" fontWeight="900" fontFamily="Arial">★</text>
  </svg>
);

const IlluPlant = () => (
  <svg width="70" height="90" viewBox="0 0 70 90" fill="none">
    <rect x="28" y="60" width="14" height="25" rx="4" fill="#8B6040"/>
    <ellipse cx="35" cy="62" rx="20" ry="8" fill="#8B6040" opacity="0.4"/>
    <path d="M35 55 Q20 40 22 20 Q30 25 35 38 Q40 25 48 20 Q50 40 35 55Z" fill="#2A7D50"/>
    <path d="M35 50 Q10 38 15 10 Q28 18 35 40Z" fill="#33975F"/>
    <path d="M35 45 Q60 38 55 8 Q42 18 35 40Z" fill="#2A7D50"/>
    <circle cx="35" cy="18" r="4" fill="#F5E8BF" opacity="0.8"/>
  </svg>
);

const IlluBook = () => (
  <svg width="85" height="80" viewBox="0 0 85 80" fill="none">
    <rect x="8" y="12" width="34" height="56" rx="4" fill="#152B52"/>
    <rect x="10" y="14" width="30" height="52" rx="3" fill="#1E3A6E"/>
    <rect x="12" y="18" width="26" height="3" rx="1" fill="#E2C56A" opacity="0.7"/>
    <rect x="12" y="24" width="20" height="2" rx="1" fill="#E2C56A" opacity="0.4"/>
    <rect x="12" y="29" width="22" height="2" rx="1" fill="#E2C56A" opacity="0.4"/>
    <rect x="42" y="12" width="34" height="56" rx="4" fill="#C9A84C"/>
    <rect x="44" y="14" width="30" height="52" rx="3" fill="#E2C56A"/>
    <rect x="46" y="20" width="22" height="3" rx="1" fill="#0C1B38" opacity="0.5"/>
    <rect x="46" y="27" width="18" height="2" rx="1" fill="#0C1B38" opacity="0.3"/>
    <rect x="46" y="32" width="20" height="2" rx="1" fill="#0C1B38" opacity="0.3"/>
    <text x="57" y="55" textAnchor="middle" fill="#0C1B38" fontSize="18" opacity="0.6">✦</text>
    <rect x="40" y="10" width="5" height="60" fill="#0C1B38" opacity="0.2"/>
  </svg>
);

const IlluChart = () => (
  <svg width="85" height="70" viewBox="0 0 85 70" fill="none">
    <rect x="5" y="5" width="75" height="55" rx="8" fill="#E8F0F8"/>
    <line x1="15" y1="50" x2="75" y2="50" stroke="#8090A8" strokeWidth="1.5"/>
    <line x1="15" y1="10" x2="15" y2="50" stroke="#8090A8" strokeWidth="1.5"/>
    <rect x="20" y="38" width="10" height="12" rx="3" fill="#C9A84C" opacity="0.7"/>
    <rect x="34" y="28" width="10" height="22" rx="3" fill="#C9A84C" opacity="0.8"/>
    <rect x="48" y="18" width="10" height="32" rx="3" fill="#C9A84C"/>
    <rect x="62" y="10" width="10" height="40" rx="3" fill="#2A7D50"/>
    <polyline points="25,36 39,26 53,16 67,8" stroke="#E2C56A" strokeWidth="2" strokeDasharray="3,3" fill="none"/>
    <circle cx="25" cy="36" r="3" fill="#C9A84C"/>
    <circle cx="39" cy="26" r="3" fill="#C9A84C"/>
    <circle cx="53" cy="16" r="3" fill="#C9A84C"/>
    <circle cx="67" cy="8" r="3" fill="#2A7D50"/>
  </svg>
);

const IlluPiggy = () => (
  <svg width="90" height="80" viewBox="0 0 90 80" fill="none">
    <ellipse cx="44" cy="46" rx="28" ry="24" fill="#F4A7B9"/>
    <ellipse cx="44" cy="44" rx="26" ry="22" fill="#F8C8D4"/>
    <circle cx="60" cy="36" r="10" fill="#F8C8D4"/>
    <circle cx="62" cy="34" r="3" fill="#E8A0B0"/>
    <circle cx="66" cy="30" r="5" fill="#F4A7B9"/>
    <circle cx="68" cy="28" r="2.5" fill="#E8A0B0"/>
    <ellipse cx="30" cy="34" rx="8" ry="10" fill="#F4A7B9"/>
    <ellipse cx="36" cy="30" rx="7" ry="9" fill="#F8C8D4"/>
    <circle cx="38" cy="42" r="5" fill="#E8A0B0" opacity="0.5"/>
    <circle cx="50" cy="42" r="5" fill="#E8A0B0" opacity="0.5"/>
    <ellipse cx="42" cy="48" rx="6" ry="4" fill="#F4A7B9"/>
    <circle cx="40" cy="46" r="1.5" fill="#C06080"/>
    <circle cx="44" cy="47" r="1.5" fill="#C06080"/>
    <rect x="40" y="60" width="8" height="12" rx="4" fill="#F4A7B9"/>
    <rect x="52" y="62" width="8" height="10" rx="4" fill="#F4A7B9"/>
    <rect x="28" y="62" width="8" height="10" rx="4" fill="#F4A7B9"/>
    <rect x="64" y="62" width="8" height="10" rx="4" fill="#F4A7B9"/>
    <path d="M44 20 L46 28 L42 28Z" fill="#C9A84C"/>
    <circle cx="44" cy="18" r="3" fill="#C9A84C"/>
    <circle cx="36" cy="36" r="2" fill="#C06080"/>
    <circle cx="52" cy="36" r="2" fill="#C06080"/>
    <path d="M38 44 Q44 48 50 44" stroke="#C06080" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

const IlluCompass = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="34" fill="#152B52" stroke="#C9A84C" strokeWidth="3"/>
    <circle cx="40" cy="40" r="28" fill="#1E3A6E"/>
    <text x="40" y="20" textAnchor="middle" fill="#C9A84C" fontSize="10" fontWeight="700">N</text>
    <text x="40" y="66" textAnchor="middle" fill="#8090A8" fontSize="10" fontWeight="700">S</text>
    <text x="66" y="44" textAnchor="middle" fill="#8090A8" fontSize="10" fontWeight="700">E</text>
    <text x="14" y="44" textAnchor="middle" fill="#8090A8" fontSize="10" fontWeight="700">O</text>
    <polygon points="40,18 43,42 40,46 37,42" fill="#E74C3C"/>
    <polygon points="40,62 43,38 40,34 37,38" fill="#C9A84C"/>
    <circle cx="40" cy="40" r="5" fill="#E2C56A" stroke="#C9A84C" strokeWidth="2"/>
  </svg>
);

const IlluEnvelope = () => (
  <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
    <rect x="5" y="12" width="80" height="52" rx="8" fill="#E2C56A"/>
    <rect x="7" y="14" width="76" height="48" rx="6" fill="#F5E8BF"/>
    <path d="M7 16 L45 42 L83 16" stroke="#C9A84C" strokeWidth="2.5" fill="none"/>
    <path d="M7 62 L28 40" stroke="#C9A84C" strokeWidth="1.5"/>
    <path d="M83 62 L62 40" stroke="#C9A84C" strokeWidth="1.5"/>
    <path d="M30 10 Q45 4 60 10" stroke="#C9A84C" strokeWidth="2" fill="none"/>
    <circle cx="45" cy="6" r="3" fill="#C9A84C"/>
  </svg>
);

// ─── Decorative elements ───────────────────────────────────
const Sparkles = ({ top, left, size = 1, color = C.gold, opacity = 0.6 }) => (
  <div style={{ position: "absolute", top, left, opacity, transform: `scale(${size})`, pointerEvents: "none" }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 20 L10.5 12.5 L3 11 L10.5 9.5Z" fill={color}/>
    </svg>
  </div>
);

const Dots = () => (
  <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
    {[...Array(12)].map((_, i) => (
      <div key={i} style={{
        position: "absolute",
        width: 6 + (i%3)*4,
        height: 6 + (i%3)*4,
        borderRadius: "50%",
        background: C.gold,
        opacity: 0.08 + (i%4)*0.05,
        top: `${(i*17+10)%90}%`,
        left: `${(i*23+5)%95}%`,
      }}/>
    ))}
  </div>
);

// ─── Chapter page wrapper ──────────────────────────────────
const ChapterHero = ({ num, icon: Icon, title, subtitle, gradient }) => (
  <div style={{
    background: gradient || `linear-gradient(135deg, ${C.navy} 0%, ${C.navy2} 100%)`,
    borderRadius: 20,
    padding: "28px 24px 22px",
    position: "relative",
    overflow: "hidden",
    marginBottom: 20,
  }}>
    <Dots />
    <Sparkles top="10%" left="85%" size={0.7} opacity={0.4}/>
    <Sparkles top="70%" left="8%"  size={0.5} opacity={0.3}/>

    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: C.gold, borderRadius: 20, padding: "4px 14px",
      marginBottom: 14,
    }}>
      <span style={{ fontFamily: "'Fredoka One',cursive", fontSize: 12, color: C.navy }}>CHAPITRE {num}</span>
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
      <div style={{ flexShrink: 0 }}>
        {Icon && <Icon />}
      </div>
      <div>
        <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 22, color: C.white, lineHeight: 1.2, marginBottom: 6 }}>{title}</div>
        <div style={{ fontFamily: "'Caveat',cursive", fontSize: 15, color: C.goldL }}>{subtitle}</div>
      </div>
    </div>
  </div>
);

// ─── Shared components ─────────────────────────────────────
const Card = ({ children, style: s = {}, bg }) => (
  <div style={{
    background: bg || C.white,
    borderRadius: 16,
    padding: "18px 20px",
    marginBottom: 16,
    boxShadow: "0 2px 16px rgba(12,27,56,0.07)",
    border: `1.5px solid rgba(201,168,76,0.18)`,
    ...s,
  }}>{children}</div>
);

const SectionTitle = ({ children, icon, color }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
    {icon && <span style={{ fontSize: 20 }}>{icon}</span>}
    <span style={{ fontFamily: "'Fredoka One',cursive", fontSize: 16, color: color || C.navy }}>{children}</span>
  </div>
);

const WLine = ({ label, n = 1 }) => (
  <div style={{ marginBottom: 14 }}>
    {label && <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 11, color: C.mist, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</div>}
    {[...Array(n)].map((_, i) => (
      <div key={i} style={{ borderBottom: `2px dashed ${C.gold}40`, height: 30, marginBottom: 6, background: `${C.gold}06`, borderRadius: 4 }}/>
    ))}
  </div>
);

const CheckItem = ({ text }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
    <div style={{
      width: 22, height: 22, border: `2.5px solid ${C.gold}`, borderRadius: 6,
      background: C.white, flexShrink: 0, marginTop: 1,
    }}/>
    <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 14, color: C.navy, lineHeight: 1.5 }}>{text}</span>
  </div>
);

const InfoChip = ({ icon, title, body, bg }) => (
  <div style={{
    background: bg || C.sage, borderRadius: 12, padding: "12px 14px",
    display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10,
  }}>
    <span style={{ fontSize: 22, flexShrink: 0 }}>{icon}</span>
    <div>
      <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 13, color: C.navy, marginBottom: 2 }}>{title}</div>
      <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 12, color: C.mist, lineHeight: 1.5 }}>{body}</div>
    </div>
  </div>
);

const QuoteBox = ({ quote, author }) => (
  <div style={{
    background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navy2} 100%)`,
    borderRadius: 16, padding: "20px 22px", marginBottom: 16, position: "relative", overflow: "hidden",
  }}>
    <div style={{ position: "absolute", top: -10, left: -10, fontSize: 60, color: C.gold, opacity: 0.15, fontFamily: "Georgia,serif" }}>"</div>
    <div style={{ fontFamily: "'Caveat',cursive", fontSize: 16, color: C.white, lineHeight: 1.6, marginBottom: 10, position: "relative" }}>« {quote} »</div>
    <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, color: C.goldL }}>— {author}</div>
  </div>
);

const GoldBanner = ({ text }) => (
  <div style={{
    background: C.gold, borderRadius: 12, padding: "12px 18px",
    fontFamily: "'Fredoka One',cursive", fontSize: 14, color: C.navy,
    textAlign: "center", marginBottom: 16,
  }}>{text}</div>
);

const TwoCol = ({ l_title, l_items, l_bg, r_title, r_items, r_bg }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
    <div style={{ background: l_bg || C.redL, borderRadius: 12, padding: 14 }}>
      <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 13, color: C.red, marginBottom: 8 }}>{l_title}</div>
      {l_items.map((it, i) => <div key={i} style={{ fontFamily: "'Nunito',sans-serif", fontSize: 12, color: C.navy, marginBottom: 4 }}>· {it}</div>)}
    </div>
    <div style={{ background: r_bg || C.greenL, borderRadius: 12, padding: 14 }}>
      <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 13, color: C.green, marginBottom: 8 }}>{r_title}</div>
      {r_items.map((it, i) => <div key={i} style={{ fontFamily: "'Nunito',sans-serif", fontSize: 12, color: C.navy, marginBottom: 4 }}>· {it}</div>)}
    </div>
  </div>
);

const NavyBox = ({ title, children }) => (
  <div style={{
    background: `linear-gradient(135deg, ${C.navy}, ${C.navy2})`,
    borderRadius: 16, padding: "18px 20px", marginBottom: 16,
    border: `2px solid ${C.gold}44`,
  }}>
    {title && <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 14, color: C.gold, marginBottom: 10 }}>{title}</div>}
    {children}
  </div>
);

const GrowBar = ({ label, val, pct }) => (
  <div style={{ marginBottom: 10 }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
      <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 12, color: C.mist }}>{label}</span>
      <span style={{ fontFamily: "'Fredoka One',cursive", fontSize: 13, color: C.green }}>{val}</span>
    </div>
    <div style={{ background: C.sage, borderRadius: 20, height: 14 }}>
      <div style={{ background: `linear-gradient(90deg, ${C.green}, #3AAD6A)`, width: `${pct}%`, height: "100%", borderRadius: 20 }}/>
    </div>
  </div>
);

const CompanyBadge = ({ icon, name, ticker, bg }) => (
  <div style={{
    background: bg || C.sage, borderRadius: 12, padding: "14px 10px",
    textAlign: "center", flex: "1 1 0",
  }}>
    <div style={{ fontSize: 28, marginBottom: 6 }}>{icon}</div>
    <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 13, color: C.navy, marginBottom: 2 }}>{name}</div>
    <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: C.mist, background: C.navy, color: C.gold, borderRadius: 8, padding: "2px 6px" }}>{ticker}</div>
  </div>
);

const Stamp = ({ text, sub, color }) => (
  <div style={{
    border: `3px solid ${color || C.gold}`, borderRadius: "50%",
    width: 90, height: 90, display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center", textAlign: "center",
    flexShrink: 0,
  }}>
    <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 11, color: color || C.gold, letterSpacing: "0.5px" }}>{text}</div>
    <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 9, color: C.mist, marginTop: 2 }}>{sub}</div>
  </div>
);

// ─── Cover ─────────────────────────────────────────────────
function Cover() {
  return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(160deg, ${C.navy} 0%, ${C.navy2} 60%, #0A1226 100%)` }}>
      {/* Decorative rings */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {[1,2,3,4].map(i => (
          <div key={i} style={{
            position: "absolute", borderRadius: "50%",
            border: `1px solid rgba(201,168,76,${0.04 + i*0.03})`,
            width: 100+i*110, height: 100+i*110,
            top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          }}/>
        ))}
        <Sparkles top="8%" left="10%"  size={1.2} opacity={0.5}/>
        <Sparkles top="15%" left="80%" size={0.8} opacity={0.4}/>
        <Sparkles top="75%" left="88%" size={0.6} opacity={0.3}/>
        <Sparkles top="80%" left="5%"  size={1.0} opacity={0.4}/>
      </div>

      {/* Top brand bar */}
      <div style={{ background: C.gold, padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'Fredoka One',cursive", fontSize: 13, color: C.navy }}>FUTURE WEALTH</span>
        <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: C.navy2, fontWeight: 700 }}>KIDS</span>
        <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: C.navy2 }}>MDPL Publishing</span>
      </div>

      <div style={{ padding: "40px 24px", textAlign: "center", position: "relative" }}>
        {/* Main illustration */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 24, alignItems: "flex-end" }}>
          <div style={{ transform: "rotate(-8deg)", marginBottom: 8 }}><IlluTree /></div>
          <div><IlluBook /></div>
          <div style={{ transform: "rotate(8deg)", marginBottom: 8 }}><IlluRocket /></div>
        </div>

        {/* Coin row */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 20 }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ transform: `translateY(${Math.sin(i)*6}px)` }}>
              <IlluStar size={24} color={i === 2 ? C.gold : C.goldL}/>
            </div>
          ))}
        </div>

        <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, color: C.goldL, letterSpacing: 3, marginBottom: 8 }}>MON PREMIER</div>
        <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 44, color: C.white, lineHeight: 1, marginBottom: 4 }}>LIVRE</div>
        <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 26, color: C.gold, marginBottom: 16 }}>D'INVESTISSEMENT</div>

        <div style={{ width: 60, height: 2, background: C.gold, margin: "0 auto 16px", borderRadius: 2 }}/>
        <div style={{ fontFamily: "'Caveat',cursive", fontSize: 18, color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>
          Apprendre · Investir · Grandir
        </div>

        {/* Stars */}
        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 24 }}>
          {[...Array(5)].map((_, i) => <IlluStar key={i} size={22} color={C.gold}/>)}
        </div>

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          background: C.gold, borderRadius: 30, padding: "12px 24px",
        }}>
          <span style={{ fontSize: 18 }}>🏆</span>
          <span style={{ fontFamily: "'Fredoka One',cursive", fontSize: 14, color: C.navy }}>Pour les 8 à 14 ans</span>
        </div>

        {/* Floating coins decoration */}
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 30 }}>
          {["💰","📈","⭐","💡","🎯"].map((e, i) => (
            <div key={i} style={{
              background: `rgba(201,168,76,0.12)`, borderRadius: "50%",
              width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20, border: `1px solid ${C.gold}33`,
              transform: `translateY(${Math.cos(i)*5}px)`,
            }}>{e}</div>
          ))}
        </div>
      </div>

      {/* Ownership */}
      <div style={{ margin: "0 20px 24px" }}>
        <div style={{ background: `rgba(201,168,76,0.12)`, borderRadius: 16, padding: "18px 20px", border: `1.5px solid ${C.gold}44` }}>
          <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 12, color: C.gold, textAlign: "center", marginBottom: 10, letterSpacing: 2 }}>
            CE LIVRE APPARTIENT À
          </div>
          <div style={{ borderBottom: `2px dashed ${C.gold}55`, height: 36, marginBottom: 12, borderRadius: 4 }}/>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1, borderBottom: `1.5px dashed ${C.gold}44`, height: 28 }}/>
            <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, color: C.mist, flexShrink: 0 }}>âge ___</span>
            <div style={{ flex: 1, borderBottom: `1.5px dashed ${C.gold}44`, height: 28 }}/>
          </div>
        </div>
      </div>

      {/* Promise */}
      <div style={{ margin: "0 20px 20px" }}>
        <div style={{ background: C.goldP, borderRadius: 16, padding: "16px 18px", border: `2px solid ${C.gold}` }}>
          <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 12, color: C.gold, marginBottom: 8 }}>⚡ MA PROMESSE D'INVESTISSEUR(E)</div>
          <div style={{ fontFamily: "'Caveat',cursive", fontSize: 14, color: C.navy, lineHeight: 1.6, marginBottom: 14 }}>
            « Je m'engage à apprendre, à être patient(e), à rêver grand et à construire mon avenir financier pas à pas. »
          </div>
          <WLine label="Ma signature" n={1}/>
          <WLine label="Date de début" n={1}/>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ background: C.gold, padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'Fredoka One',cursive", fontSize: 11, color: C.navy }}>FUTURE WEALTH KIDS</span>
        <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: C.navy2 }}>MDPL Publishing</span>
      </div>
    </div>
  );
}

// ─── Table des Matières ────────────────────────────────────
function TOC({ onNav }) {
  const chapters = [
    ["1","🌟","Bienvenue dans ton aventure !","5"],
    ["2","💭","Qu'est-ce qu'un rêve ?","7"],
    ["3","🔮","Ton futur idéal","9"],
    ["4","💰","Qu'est-ce que l'argent ?","11"],
    ["5","📈","Qu'est-ce qu'investir ?","13"],
    ["6","🏢","Qu'est-ce qu'une entreprise ?","15"],
    ["7","🍎","Les entreprises que tu connais","17"],
    ["8","🌱","Comment l'argent grandit","19"],
    ["9","📊","Les actions et la Bourse","21"],
    ["10","🏆","Mon certificat d'investisseur","23"],
    ["11","📋","Mon suivi d'investissements","25"],
    ["12","⭐","Mes entreprises préférées","27"],
    ["13","🚀","Si je créais une entreprise…","29"],
    ["14","🎯","Mes objectifs à 18 ans","31"],
    ["15","🧠","Ce que j'ai appris","33"],
    ["16","✉️","Lettre à mon futur moi","35"],
    ["17","📅","Pages d'investissement annuel","37"],
    ["18","🔢","Les intérêts composés","39"],
    ["19","⚖️","Dépenser ou investir ?","41"],
    ["20","🌈","Rêve grand — Bilan final","43"],
  ];
  return (
    <div style={{ background: C.cream, minHeight: "100vh", paddingBottom: 30 }}>
      <div style={{
        background: `linear-gradient(135deg, ${C.navy}, ${C.navy2})`,
        padding: "32px 24px", textAlign: "center", position: "relative",
      }}>
        <Dots/>
        <div style={{ fontSize: 36, marginBottom: 10 }}>📚</div>
        <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 26, color: C.white, marginBottom: 4 }}>Table des Matières</div>
        <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, color: C.gold, letterSpacing: 2 }}>TON AVENTURE EN 20 CHAPITRES</div>
      </div>
      <div style={{ padding: "20px 16px" }}>
        {chapters.map(([num, icon, title, pg], i) => (
          <div key={i} onClick={() => onNav(i + 2)}
            style={{
              display: "flex", alignItems: "center", gap: 12, padding: "12px 16px",
              background: C.white, borderRadius: 14, marginBottom: 8, cursor: "pointer",
              border: `1.5px solid rgba(201,168,76,0.2)`,
              boxShadow: "0 2px 8px rgba(12,27,56,0.06)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.transform = "translateX(4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"; e.currentTarget.style.transform = "none"; }}
          >
            <div style={{
              width: 34, height: 34, background: C.gold, borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Fredoka One',cursive", fontSize: 13, color: C.navy, flexShrink: 0,
            }}>{num}</div>
            <div style={{ fontSize: 20 }}>{icon}</div>
            <div style={{ flex: 1, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13, color: C.navy }}>{title}</div>
            <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 13, color: C.gold }}>→</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Chapter pages ─────────────────────────────────────────
function Ch1() {
  return (
    <div style={{ background: C.cream, padding: "20px 18px" }}>
      <ChapterHero num="1" icon={IlluBook} title="Bienvenue dans ton aventure !" subtitle="« Chaque grand voyage commence par un premier pas. »"/>
      <QuoteBox quote="Warren Buffett a acheté sa première action à 11 ans. Il a commencé avec 114 $ et est devenu milliardaire grâce à la patience et à l'investissement." author="Warren Buffett"/>
      <Card>
        <SectionTitle icon="🎯">Dans ce livre, tu vas :</SectionTitle>
        {["Découvrir comment fonctionne l'argent","Apprendre ce qu'est une action boursière","Connaître des entreprises célèbres","Fixer tes objectifs financiers","Écrire ta lettre à ton futur toi","Suivre tes premiers investissements"].map((t,i) => <CheckItem key={i} text={t}/>)}
      </Card>
      <Card bg={C.sage}>
        <SectionTitle icon="✏️">Activité — Qui es-tu ?</SectionTitle>
        <WLine label="Mon prénom"/>
        <WLine label="Mon âge"/>
        <WLine label="Ce qui me rend unique"/>
        <WLine label="Pourquoi j'apprends l'investissement" n={2}/>
      </Card>
      <Card bg={C.goldP} style={{ border: `2px solid ${C.gold}` }}>
        <SectionTitle icon="💡">Mes 3 mots pour mon futur financier</SectionTitle>
        <div style={{ display: "flex", gap: 10 }}>
          {["Mot 1","Mot 2","Mot 3"].map(m => (
            <div key={m} style={{ flex: 1, background: C.white, borderRadius: 10, padding: "10px 8px" }}>
              <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: C.mist, marginBottom: 6 }}>{m}</div>
              <div style={{ borderBottom: `2px dashed ${C.gold}66`, height: 28 }}/>
            </div>
          ))}
        </div>
      </Card>
      <NavyBox title="💡 Le saviez-vous ?">
        {[["🏆","Warren Buffett","1ère action à 11 ans"],["📱","Steve Jobs","a fondé Apple dans un garage"],["📦","Jeff Bezos","a commencé Amazon dans son salon"]].map(([ic,nm,ft],i) => (
          <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: "8px 12px" }}>
            <span style={{ fontSize: 18 }}>{ic}</span>
            <div>
              <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 12, color: C.gold }}>{nm}</div>
              <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.7)" }}>{ft}</div>
            </div>
          </div>
        ))}
      </NavyBox>
    </div>
  );
}

function Ch2() {
  return (
    <div style={{ background: C.cream, padding: "20px 18px" }}>
      <ChapterHero num="2" icon={IlluCompass} title="Qu'est-ce qu'un rêve ?" subtitle="« Tous les grands accomplissements ont commencé par un rêve. »"/>
      <Card>
        <SectionTitle icon="🌈">Les 3 types de rêves</SectionTitle>
        {[
          {icon:"🏠",t:"Rêves de confort",d:"Avoir une belle maison, voyager, aider sa famille",bg:"#E5F0E8",c:"#2A7D50"},
          {icon:"🚀",t:"Rêves d'aventure",d:"Créer une entreprise, changer le monde, innover",bg:"#E5ECF6",c:"#1E3A6E"},
          {icon:"❤️",t:"Rêves de partage",d:"Aider les autres, laisser un héritage, donner",bg:"#F6EBE5",c:"#C03030"},
        ].map((r,i) => (
          <div key={i} style={{ background: r.bg, borderRadius: 12, padding: "12px 14px", marginBottom: 10, display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span style={{ fontSize: 26, flexShrink: 0 }}>{r.icon}</span>
            <div>
              <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 14, color: r.c, marginBottom: 2 }}>{r.t}</div>
              <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 12, color: C.navy }}>{r.d}</div>
            </div>
          </div>
        ))}
      </Card>
      <Card>
        <SectionTitle icon="☁️">Mon nuage de rêves</SectionTitle>
        <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 12, color: C.mist, marginBottom: 12 }}>Écris tes rêves dans les bulles — sois sans limite !</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{
              background: `linear-gradient(135deg, ${C.sage}, white)`, borderRadius: "50%",
              aspectRatio: "1.2/1", display: "flex", alignItems: "center", justifyContent: "center",
              border: `2px dashed ${C.gold}55`,
              fontFamily: "'Nunito',sans-serif", fontSize: 11, color: C.mist,
            }}>Rêve {i+1}</div>
          ))}
        </div>
      </Card>
      <Card bg={C.sage}>
        <SectionTitle icon="🎯">Mon rêve #1 en détail</SectionTitle>
        <WLine label="Mon plus grand rêve"/>
        <WLine label="Pourquoi il est important" n={2}/>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <WLine label="À quel âge"/>
          <WLine label="Coût estimé ($)"/>
        </div>
      </Card>
      <QuoteBox quote="Un rêve sans plan n'est qu'un souhait. Un rêve avec un plan devient un objectif." author="Future Wealth Kids"/>
    </div>
  );
}

function Ch3() {
  return (
    <div style={{ background: C.cream, padding: "20px 18px" }}>
      <ChapterHero num="3" icon={IlluHouse} title="Ton futur idéal" subtitle="« Visualiser ton futur est la première étape pour le créer. »"/>
      <Card>
        <SectionTitle icon="🏠">Ma vie idéale à 25 ans</SectionTitle>
        <WLine label="Où j'habite"/>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <WLine label="Mon travail"/>
          <WLine label="Mon transport"/>
        </div>
        <WLine label="Avec qui je vis"/>
        <WLine label="Comment j'aide ma famille" n={2}/>
        <WLine label="Mon compte en banque ($)"/>
      </Card>
      <Card>
        <SectionTitle icon="🎨">Mon Vision Board</SectionTitle>
        <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 12, color: C.mist, marginBottom: 12 }}>Dessine ou écris dans chaque case :</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[["🏡","Maison"],["✈️","Voyages"],["💼","Carrière"],["❤️","Famille"],["🎓","Études"],["🤝","Partage"]].map(([ic,lb],i) => (
            <div key={i} style={{ background: C.sage, borderRadius: 10, padding: "10px 8px", border: `1.5px dashed ${C.gold}44` }}>
              <div style={{ fontSize: 20, textAlign: "center", marginBottom: 4 }}>{ic}</div>
              <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 11, color: C.navy, textAlign: "center", marginBottom: 6 }}>{lb}</div>
              <div style={{ borderBottom: `1.5px dashed ${C.gold}55`, height: 20, marginBottom: 4 }}/>
              <div style={{ borderBottom: `1.5px dashed ${C.gold}55`, height: 20 }}/>
            </div>
          ))}
        </div>
      </Card>
      <div style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.navy2})`, borderRadius: 16, padding: "20px 22px", textAlign: "center", border: `2px solid ${C.gold}44` }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
          <IlluStar size={30} color={C.gold}/>
        </div>
        <div style={{ fontFamily: "'Caveat',cursive", fontSize: 18, color: C.gold, lineHeight: 1.5 }}>
          « Ce que tu fais aujourd'hui construit le monde<br/>dans lequel tu vivras demain. »
        </div>
      </div>
    </div>
  );
}

function Ch4() {
  return (
    <div style={{ background: C.cream, padding: "20px 18px" }}>
      <ChapterHero num="4" icon={IlluPiggy} title="Qu'est-ce que l'argent ?" subtitle="L'histoire de l'argent en 60 secondes !"/>
      <Card>
        <SectionTitle icon="📖">L'histoire de l'argent</SectionTitle>
        {[
          ["🐄","Le troc","On échangeait vaches, blé, poissons. Difficile à transporter !"],
          ["🐚","Les pièces","Coquillages, métaux précieux, puis pièces en métal."],
          ["📜","Les billets","Un papier représentant de la valeur. Révolutionnaire !"],
          ["💳","Aujourd'hui","Cartes, virements, crypto… L'argent devient numérique."],
        ].map(([ic,era,desc],i) => (
          <InfoChip key={i} icon={ic} title={era} body={desc} bg={i%2===0 ? C.sage : C.warm}/>
        ))}
      </Card>
      <Card>
        <SectionTitle icon="🧠">Les 3 choses que tu peux faire avec l'argent</SectionTitle>
        <div style={{ display: "flex", gap: 10 }}>
          {[["🛒","Dépenser","Acheter maintenant",C.redL],["🏦","Épargner","Garder pour plus tard",C.sage],["📈","Investir","Faire grandir !",C.greenL]].map(([ic,lb,sub,bg],i) => (
            <div key={i} style={{ flex: 1, background: bg, borderRadius: 12, padding: "14px 8px", textAlign: "center" }}>
              <div style={{ fontSize: 28, marginBottom: 6 }}>{ic}</div>
              <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 13, color: C.navy, marginBottom: 4 }}>{lb}</div>
              <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, color: C.mist }}>{sub}</div>
            </div>
          ))}
        </div>
      </Card>
      <NavyBox title="💡 La règle 50/30/20">
        <div style={{ display: "flex", gap: 10 }}>
          {[["50%","🛒 Dépenses","#E74C3C"],["30%","🏦 Épargne","#F39C12"],["20%","📈 Investir",C.green]].map(([pct,lb,col],i) => (
            <div key={i} style={{ flex: 1, background: "rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px 6px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 22, color: col }}>{pct}</div>
              <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.75)", marginTop: 4 }}>{lb}</div>
            </div>
          ))}
        </div>
      </NavyBox>
      <Card bg={C.sage}>
        <SectionTitle icon="✏️">Mon budget de poche</SectionTitle>
        <WLine label="Je reçois ($) par mois"/>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          <WLine label="Dépenses (50%)"/>
          <WLine label="Épargne (30%)"/>
          <WLine label="Investir (20%)"/>
        </div>
      </Card>
    </div>
  );
}

function Ch5() {
  return (
    <div style={{ background: C.cream, padding: "20px 18px" }}>
      <ChapterHero num="5" icon={IlluPlant} title="Qu'est-ce qu'investir ?" subtitle="« L'argent investi est comme une graine qui grandit seule. »"/>
      <div style={{ textAlign: "center", padding: "16px 0" }}>
        <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 22, color: C.navy }}>🌱 → 🌿 → 🌳</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 10 }}>
          {[["Ta mise","La graine"],["Temps + patience","L'eau"],["Argent multiplié","L'arbre !"]].map(([a,b],i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 11, color: C.navy }}>{a}</div>
              <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: C.mist }}>{b}</div>
            </div>
          ))}
        </div>
      </div>
      <TwoCol
        l_title="💤 Argent sous le matelas"
        l_items={["100$ en 2010 = 100$ en 2024","L'inflation le ronge","Aucune croissance"]}
        l_bg={C.redL}
        r_title="📈 Argent investi"
        r_items={["100$ en 2010 ≈ 350$ en 2024","Croissance automatique","L'argent travaille pour toi !"]}
        r_bg={C.greenL}
      />
      <NavyBox title="🏆 Les 4 façons d'investir">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[["📊","Actions","Parts d'une entreprise"],["🏠","Immobilier","Acheter & louer"],["🪙","Obligations","Prêter de l'argent"],["📦","ETF / Fonds","Panier diversifié"]].map(([ic,nm,desc],i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 10, padding: "10px 12px" }}>
              <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 12, color: C.gold }}>{ic} {nm}</div>
              <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>{desc}</div>
            </div>
          ))}
        </div>
      </NavyBox>
      <Card bg={C.sage}>
        <SectionTitle icon="✏️">Mon plan d'investissement</SectionTitle>
        <WLine label="Je veux investir ($)"/>
        <WLine label="Dans quoi"/>
        <WLine label="Mon objectif dans 10 ans ($)"/>
        <WLine label="Ce que je peux mettre de côté chaque mois ($)"/>
      </Card>
    </div>
  );
}

function Ch8() {
  return (
    <div style={{ background: C.cream, padding: "20px 18px" }}>
      <ChapterHero num="8" icon={IlluChart} title="Comment l'argent grandit" subtitle="« La patience est l'ingrédient secret de tous les grands investisseurs. »"/>
      <Card>
        <SectionTitle icon="📈">La magie du temps — 100 $ à 10 %/an</SectionTitle>
        {[["1 an","110 $",12],["5 ans","161 $",22],["10 ans","259 $",36],["20 ans","673 $",55],["30 ans","1 745 $",75],["40 ans","4 526 $",100]].map(([label,val,pct],i) => (
          <GrowBar key={i} label={label} val={val} pct={pct}/>
        ))}
        <div style={{ textAlign: "center", fontFamily: "'Fredoka One',cursive", fontSize: 16, color: C.green, marginTop: 8 }}>
          100 $ → 4 526 $ en 40 ans 🤯
        </div>
      </Card>
      <Card bg={C.goldP} style={{ border: `2px solid ${C.gold}` }}>
        <SectionTitle>💡 La Règle des 72</SectionTitle>
        <div style={{ textAlign: "center", padding: "10px 0" }}>
          <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 18, color: C.navy, marginBottom: 8 }}>
            72 ÷ taux % = années pour doubler ton argent
          </div>
          <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 12, color: C.mist }}>
            Exemple : 72 ÷ 10% = 7,2 ans pour doubler !
          </div>
        </div>
      </Card>
      <NavyBox title="⏰ Le pouvoir de commencer tôt">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px", textAlign: "center" }}>
            <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 12, color: C.gold, marginBottom: 6 }}>Emma commence à 10 ans</div>
            <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 18, color: C.green }}>226 000 $</div>
            <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.6)" }}>à 40 ans (100$/mois, 10%)</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "12px", textAlign: "center" }}>
            <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 12, color: C.mist, marginBottom: 6 }}>Lucas commence à 30 ans</div>
            <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 18, color: C.mist }}>19 000 $</div>
            <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.5)" }}>à 40 ans (100$/mois, 10%)</div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 10, fontFamily: "'Fredoka One',cursive", fontSize: 13, color: C.gold }}>
          Commencer tôt = 12× plus d'argent ! 🚀
        </div>
      </NavyBox>
      <Card bg={C.sage}>
        <SectionTitle icon="🔮">Calcule ton futur argent !</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <WLine label="Je veux investir ($)"/>
          <WLine label="À un taux de (%)"/>
          <WLine label="Dans (années)"/>
          <WLine label="J'aurai environ ($)"/>
        </div>
      </Card>
    </div>
  );
}

function Ch10Cert() {
  return (
    <div style={{ background: C.cream, padding: "20px 18px", paddingBottom: 30 }}>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, color: C.mist, letterSpacing: 2 }}>CHAPITRE 10</div>
        <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 22, color: C.navy }}>Mon Certificat d'Investisseur</div>
      </div>

      {/* Certificate */}
      <div style={{
        background: `linear-gradient(135deg, #FAF7EE 0%, #F5E8BF 100%)`,
        borderRadius: 20, padding: "28px 20px",
        border: `3px solid ${C.gold}`,
        boxShadow: `0 0 0 6px ${C.gold}22, 0 8px 32px rgba(12,27,56,0.15)`,
        textAlign: "center", position: "relative", overflow: "hidden", marginBottom: 20,
      }}>
        {/* Corner ornaments */}
        {[{top:8,left:8},{top:8,right:8},{bottom:8,left:8},{bottom:8,right:8}].map((pos,i) => (
          <div key={i} style={{ position: "absolute", fontSize: 18, color: C.gold, ...pos }}>✦</div>
        ))}

        <div style={{ marginBottom: 10 }}>
          <IlluTrophy />
        </div>

        <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: C.mist, letterSpacing: 3, marginBottom: 6 }}>CERTIFICAT OFFICIEL</div>
        <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 26, color: C.navy, marginBottom: 4 }}>FÉLICITATIONS !</div>

        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 14 }}>
          {[...Array(5)].map((_,i) => <IlluStar key={i} size={18} color={C.gold}/>)}
        </div>

        <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 12, color: C.mist, marginBottom: 8 }}>Ce certificat est décerné à</div>
        <div style={{ borderBottom: `2px solid ${C.gold}`, width: "80%", margin: "0 auto 6px", height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "'Caveat',cursive", fontSize: 20, color: C.mist }}>Ton prénom ici</span>
        </div>
        <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, color: C.mist, marginBottom: 14, lineHeight: 1.6 }}>
          pour avoir complété le programme<br/>
          <strong style={{ color: C.navy }}>Future Wealth Kids</strong><br/>
          et être officiellement un(e)
        </div>
        <div style={{
          background: `linear-gradient(135deg, ${C.navy}, ${C.navy2})`,
          color: C.gold, borderRadius: 20, padding: "10px 20px",
          display: "inline-block", fontFamily: "'Fredoka One',cursive", fontSize: 16,
          border: `2px solid ${C.gold}`,
        }}>⭐ JEUNE INVESTISSEUR(E) ⭐</div>

        <div style={{ display: "flex", justifyContent: "space-around", marginTop: 24 }}>
          {["Date","Signature"].map(lb => (
            <div key={lb}>
              <div style={{ borderTop: `1.5px solid ${C.gold}`, width: 100, marginBottom: 4 }}/>
              <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: C.mist }}>{lb}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 10, fontFamily: "'Nunito',sans-serif", fontSize: 9, color: C.mist }}>MDPL Publishing · Future Wealth Kids</div>
      </div>

      <Card bg={C.sage}>
        <SectionTitle icon="📝">Mon premier investissement officiel</SectionTitle>
        <WLine label="Action / Fonds acheté"/>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <WLine label="Symbole (ticker)"/>
          <WLine label="Prix d'achat ($)"/>
          <WLine label="Date"/>
          <WLine label="Objectif ($)"/>
        </div>
        <WLine label="Pourquoi j'ai choisi cette entreprise" n={2}/>
      </Card>
    </div>
  );
}

function Ch16Letter() {
  return (
    <div style={{ background: C.cream, padding: "20px 18px" }}>
      <ChapterHero num="16" icon={IlluEnvelope} title="Lettre à mon futur moi" subtitle="« Imagine que tu reçois une lettre de toi-même dans 10 ans… »"/>
      <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, color: C.mist, textAlign: "center", marginBottom: 16 }}>
        Écris cette lettre ! Tes rêves, tes espoirs, tes engagements. Tu la reliras avec émerveillement.
      </div>
      <div style={{
        background: `linear-gradient(135deg, #FAF7EE 0%, white 100%)`,
        borderRadius: 16, padding: "24px 20px",
        border: `1.5px solid ${C.gold}44`,
        boxShadow: "0 4px 20px rgba(12,27,56,0.08)",
        marginBottom: 16,
      }}>
        <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 16, color: C.navy, marginBottom: 14, textAlign: "center" }}>
          📝 Ma lettre à mon futur moi…
        </div>
        <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, color: C.navy, marginBottom: 12 }}>Cher(e) moi du futur,</div>
        {[...Array(10)].map((_,i) => (
          <div key={i} style={{ borderBottom: `1.5px dashed ${C.gold}44`, height: 30, marginBottom: 4, background: `${C.gold}04`, borderRadius: 3 }}/>
        ))}
        <div style={{ marginTop: 16, fontFamily: "'Nunito',sans-serif", fontSize: 13, color: C.navy }}>Avec amour et fierté,</div>
        <div style={{ borderBottom: `1.5px solid ${C.gold}55`, width: "60%", marginTop: 8 }}/>
        <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: C.mist, marginTop: 4 }}>(Ton prénom & date)</div>
      </div>
      <Card style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.navy2})` }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 28, marginBottom: 8 }}>🔐</div>
          <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 14, color: C.gold, marginBottom: 6 }}>Scelle cette lettre !</div>
          <div style={{ fontFamily: "'Caveat',cursive", fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
            Écris « À ouvrir en ____ » (dans 5 ans) et garde-la précieusement !
          </div>
        </div>
      </Card>
    </div>
  );
}

function Ch20Final() {
  return (
    <div style={{ background: C.cream, padding: "20px 18px" }}>
      <ChapterHero num="20" icon={IlluRocket} title="Rêve Grand — Bilan Final !" subtitle="Tu as terminé ! Tu es un(e) vrai(e) investisseur(e) !"/>

      <div style={{
        background: `linear-gradient(135deg, ${C.navy}, ${C.navy2})`,
        borderRadius: 20, padding: "24px 20px", textAlign: "center", marginBottom: 20,
        border: `3px solid ${C.gold}`,
      }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 14 }}>
          <IlluTrophy />
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 12 }}>
          {[...Array(5)].map((_,i) => <IlluStar key={i} size={20} color={C.gold}/>)}
        </div>
        <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 22, color: C.white, marginBottom: 8 }}>FÉLICITATIONS !</div>
        <div style={{ fontFamily: "'Caveat',cursive", fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 14 }}>
          Tu fais partie des rares personnes qui comprennent<br/>comment construire leur avenir financier.
        </div>
        <div style={{ background: C.gold, borderRadius: 20, padding: "10px 20px", display: "inline-block", fontFamily: "'Fredoka One',cursive", fontSize: 14, color: C.navy }}>
          🏆 FUTUR INVESTISSEUR(E)
        </div>
      </div>

      <Card>
        <SectionTitle icon="🎮">Jeopardy de l'investissement !</SectionTitle>
        {[
          ["Mettre son argent dans une entreprise pour qu'il grandisse","Qu'est-ce qu'investir ?"],
          ["Le code court d'une action (ex: AAPL pour Apple)","Qu'est-ce qu'un ticker ?"],
          ["La 8ème merveille du monde selon Einstein","Les intérêts composés !"],
          ["L'âge de la 1ère action de Buffett","11 ans !"],
        ].map(([q,a],i) => (
          <div key={i} style={{ background: i%2===0 ? C.sage : C.warm, borderRadius: 10, padding: "10px 14px", marginBottom: 8 }}>
            <div style={{ fontFamily: "'Caveat',cursive", fontSize: 13, color: C.mist, marginBottom: 2 }}>❓ {q}</div>
            <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 13, color: C.green }}>✅ {a}</div>
          </div>
        ))}
      </Card>

      <Card bg={C.sage}>
        <SectionTitle icon="⭐">Mon Bilan Final</SectionTitle>
        <WLine label="La plus grande chose que j'ai apprise" n={2}/>
        <WLine label="Ma prochaine étape concrète" n={2}/>
        <WLine label="Mon engagement d'investisseur(e)" n={2}/>
      </Card>

      <div style={{
        background: `linear-gradient(135deg, ${C.navy}, ${C.navy2})`,
        borderRadius: 16, padding: "22px 20px", textAlign: "center",
      }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 10 }}>
          {[...Array(5)].map((_,i) => <IlluStar key={i} size={18} color={C.gold}/>)}
        </div>
        <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 16, color: C.white, marginBottom: 6 }}>Tu es EXTRAORDINAIRE !</div>
        <div style={{ fontFamily: "'Caveat',cursive", fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
          Continue d'apprendre, de rêver et d'investir en toi.<br/>Le meilleur est à venir !
        </div>
        <div style={{ marginTop: 12, fontFamily: "'Nunito',sans-serif", fontSize: 10, color: C.gold }}>
          Future Wealth Kids · MDPL Publishing
        </div>
      </div>
    </div>
  );
}

// ─── Chapter registry ──────────────────────────────────────
const CHAPTERS = [
  { label: "Couverture",         Component: Cover },
  { label: "Table des Matières", Component: null  },
  { label: "Ch.1 — Bienvenue",  Component: Ch1   },
  { label: "Ch.2 — Rêves",      Component: Ch2   },
  { label: "Ch.3 — Futur",      Component: Ch3   },
  { label: "Ch.4 — L'Argent",   Component: Ch4   },
  { label: "Ch.5 — Investir",   Component: Ch5   },
  { label: "Ch.8 — Croissance", Component: Ch8   },
  { label: "Ch.10 — Certificat",Component: Ch10Cert },
  { label: "Ch.16 — Ma Lettre", Component: Ch16Letter },
  { label: "Ch.20 — Bilan Final",Component: Ch20Final },
];

// ─── Navigation ────────────────────────────────────────────
function TopNav({ page, total, onPrev, onNext, label, onMenu }) {
  return (
    <div style={{
      position: "sticky", top: 0, zIndex: 100,
      background: `linear-gradient(90deg, ${C.navy}, ${C.navy2})`,
      padding: "10px 16px", display: "flex", alignItems: "center",
      justifyContent: "space-between", borderBottom: `3px solid ${C.gold}`,
      boxShadow: "0 2px 16px rgba(12,27,56,0.35)",
    }}>
      <button onClick={onPrev} disabled={page === 0} style={{
        background: page === 0 ? "rgba(255,255,255,0.08)" : C.gold,
        border: "none", borderRadius: 10, padding: "8px 14px",
        fontFamily: "'Fredoka One',cursive", fontSize: 16,
        color: page === 0 ? "#555" : C.navy, cursor: page === 0 ? "default" : "pointer",
      }}>◀</button>
      <button onClick={onMenu} style={{
        background: "transparent", border: `2px solid ${C.gold}66`, borderRadius: 10,
        padding: "6px 14px", fontFamily: "'Fredoka One',cursive", fontSize: 12,
        color: C.gold, cursor: "pointer", maxWidth: 180, overflow: "hidden",
        textOverflow: "ellipsis", whiteSpace: "nowrap",
      }}>{label}</button>
      <button onClick={onNext} disabled={page === total - 1} style={{
        background: page === total - 1 ? "rgba(255,255,255,0.08)" : C.gold,
        border: "none", borderRadius: 10, padding: "8px 14px",
        fontFamily: "'Fredoka One',cursive", fontSize: 16,
        color: page === total - 1 ? "#555" : C.navy, cursor: page === total - 1 ? "default" : "pointer",
      }}>▶</button>
    </div>
  );
}

function ProgressBar({ page, total }) {
  return (
    <div style={{ height: 4, background: `rgba(201,168,76,0.2)` }}>
      <div style={{ height: "100%", width: `${(page / (total-1)) * 100}%`, background: `linear-gradient(90deg, ${C.gold}, ${C.goldL})`, transition: "width 0.4s ease" }}/>
    </div>
  );
}

function BottomNav({ page, total, onPrev, onNext }) {
  return (
    <div style={{
      background: `linear-gradient(90deg, ${C.navy}, ${C.navy2})`,
      padding: "14px 20px", display: "flex", alignItems: "center",
      justifyContent: "space-between", borderTop: `3px solid ${C.gold}`,
    }}>
      <button onClick={onPrev} disabled={page===0} style={{
        background: page===0 ? "rgba(255,255,255,0.06)" : C.gold,
        border: "none", borderRadius: 12, padding: "10px 18px",
        fontFamily: "'Fredoka One',cursive", fontSize: 13,
        color: page===0 ? "#555" : C.navy, cursor: page===0 ? "default" : "pointer",
      }}>◀ Précédent</button>
      <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 12, color: C.gold }}>{page+1} / {total}</div>
      <button onClick={onNext} disabled={page===total-1} style={{
        background: page===total-1 ? "rgba(255,255,255,0.06)" : C.gold,
        border: "none", borderRadius: 12, padding: "10px 18px",
        fontFamily: "'Fredoka One',cursive", fontSize: 13,
        color: page===total-1 ? "#555" : C.navy, cursor: page===total-1 ? "default" : "pointer",
      }}>Suivant ▶</button>
    </div>
  );
}

// ─── Slide-in menu ─────────────────────────────────────────
function Menu({ open, onClose, onNav, current }) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.5)" }} onClick={onClose}>
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0,
        width: "78%", maxWidth: 320, background: C.cream,
        overflowY: "auto", padding: 16, boxShadow: "-8px 0 32px rgba(0,0,0,0.25)",
      }} onClick={e => e.stopPropagation()}>
        <div style={{
          fontFamily: "'Fredoka One',cursive", color: C.navy, fontSize: 18,
          textAlign: "center", marginBottom: 16, paddingBottom: 12,
          borderBottom: `2px solid ${C.gold}44`,
        }}>📚 Navigation</div>
        {CHAPTERS.map((ch, i) => (
          <div key={i} onClick={() => { onNav(i); onClose(); }} style={{
            padding: "10px 14px", marginBottom: 6, borderRadius: 10, cursor: "pointer",
            background: i === current ? `linear-gradient(90deg, ${C.gold}, ${C.goldL})` : C.white,
            color: i === current ? C.navy : "#333",
            fontFamily: "'Nunito',sans-serif", fontWeight: i === current ? 900 : 600, fontSize: 13,
            border: `1.5px solid ${i === current ? C.gold : "rgba(201,168,76,0.2)"}`,
          }}>{ch.label}</div>
        ))}
      </div>
    </div>
  );
}

// ─── Main App ──────────────────────────────────────────────
export default function App() {
  const [page, setPage]     = useState(0);
  const [menu, setMenu]     = useState(false);

  const go = (p) => { setPage(p); setMenu(false); window.scrollTo(0,0); };
  const prev = () => { if (page > 0) go(page - 1); };
  const next = () => { if (page < CHAPTERS.length - 1) go(page + 1); };

  const { label, Component } = CHAPTERS[page];

  return (
    <div style={{ fontFamily: "'Nunito',sans-serif", background: C.cream, minHeight: "100vh" }}>
      <style>{`
        ${gf}
        * { box-sizing: border-box; }
        body { margin: 0; background: ${C.cream}; }
        button:hover { opacity: 0.88; }
      `}</style>

      <TopNav page={page} total={CHAPTERS.length} onPrev={prev} onNext={next} label={label} onMenu={() => setMenu(true)}/>
      <ProgressBar page={page} total={CHAPTERS.length}/>
      <Menu open={menu} onClose={() => setMenu(false)} onNav={go} current={page}/>

      {/* Content */}
      {page === 1
        ? <TOC onNav={(i) => go(i)}/>
        : Component ? <Component/> : null
      }

      <BottomNav page={page} total={CHAPTERS.length} onPrev={prev} onNext={next}/>
    </div>
  );
}
