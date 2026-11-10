import React from 'react';

/**
 * Authentic Hand-drawn Indic Manuscript Doodles & Cultural Vignettes
 * Pure vector SVG line-art and miniature illustration that blends seamlessly into parchment.
 * NO rectangular photo edges, NO dark boxes, NO clipped backgrounds.
 */

// 🧘 1. Ancient Indian Rishi / Scholar Writing on Bhojpatra (ऋषि / आचार्य)
export function RishiScholar({ className = "w-28 h-auto" }) {
  return (
    <svg 
      viewBox="0 0 160 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Soft halo glow behind rishi */}
      <circle cx="80" cy="55" r="42" fill="#F8E5BD" fillOpacity="0.45" />

      {/* Kusha Grass Mat / Asana */}
      <ellipse cx="80" cy="162" rx="68" ry="14" fill="#E8D5B0" stroke="#8C6E42" strokeWidth="1.2" />
      <path d="M25 162 C40 156 120 156 135 162" stroke="#AA8C5B" strokeWidth="1" strokeDasharray="3 3" />

      {/* Legs in Ardha-Padmasana / Dhoti */}
      <path 
        d="M28 152 C26 140 38 128 55 125 C70 123 90 123 105 125 C122 128 134 140 132 152 C128 162 105 166 80 166 C55 166 32 162 28 152 Z" 
        fill="#F3E3C8" 
        stroke="#42301F" 
        strokeWidth="1.5" 
      />
      {/* Dhoti folds */}
      <path d="M48 135 C58 145 72 150 80 158" stroke="#AA8253" strokeWidth="1.2" />
      <path d="M112 135 C102 145 88 150 80 158" stroke="#AA8253" strokeWidth="1.2" />
      <path d="M65 130 C75 140 85 140 95 130" stroke="#AA8253" strokeWidth="1.2" />

      {/* Writing Desk (Chowki / Peetham) */}
      <path d="M52 145 L108 145 L114 158 L46 158 Z" fill="#D29A5B" stroke="#42301F" strokeWidth="1.5" />
      <line x1="50" y1="158" x2="50" y2="164" stroke="#42301F" strokeWidth="2" strokeLinecap="round" />
      <line x1="110" y1="158" x2="110" y2="164" stroke="#42301F" strokeWidth="2" strokeLinecap="round" />

      {/* Manuscript / Bhojpatra on Desk */}
      <rect x="56" y="140" width="48" height="12" rx="1.5" fill="#FAF5E8" stroke="#523F28" strokeWidth="1.2" />
      <line x1="60" y1="144" x2="100" y2="144" stroke="#8C6E42" strokeWidth="1" strokeLinecap="round" />
      <line x1="60" y1="148" x2="94" y2="148" stroke="#8C6E42" strokeWidth="1" strokeLinecap="round" />

      {/* Torso & Saffron Angavastram */}
      <path 
        d="M58 86 C54 98 50 115 54 128 C64 130 96 130 106 128 C110 115 106 98 102 86 Z" 
        fill="#E8C9A3" 
        stroke="#42301F" 
        strokeWidth="1.5" 
      />
      {/* Saffron Angavastram draped from left shoulder across chest */}
      <path 
        d="M62 86 C58 98 62 118 68 128 C74 128 82 126 86 118 C82 106 78 94 76 86 Z" 
        fill="#DD7B2F" 
        fillOpacity="0.88" 
        stroke="#8B331B" 
        strokeWidth="1.2" 
      />
      {/* Yajnopavita (Sacred Thread) */}
      <path d="M68 86 C72 98 84 116 94 128" stroke="#FAF5E8" strokeWidth="1.4" strokeDasharray="2 1" />
      <path d="M68 86 C72 98 84 116 94 128" stroke="#42301F" strokeWidth="0.5" />

      {/* Rudraksha Mala */}
      <path d="M72 78 C72 88 88 88 88 78" stroke="#8B331B" strokeWidth="1.8" strokeDasharray="1.5 2" />

      {/* Left Arm resting on table */}
      <path d="M102 88 C112 98 116 112 110 126 C106 134 96 142 86 144" stroke="#42301F" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <path d="M102 88 C112 98 116 112 110 126 C106 134 96 142 86 144" stroke="#E8C9A3" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Right Arm holding Quill writing */}
      <path d="M58 88 C48 102 52 118 64 130 C70 136 78 138 82 142" stroke="#42301F" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <path d="M58 88 C48 102 52 118 64 130 C70 136 78 138 82 142" stroke="#E8C9A3" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Peacock Quill in Hand */}
      <path d="M82 142 L94 126" stroke="#2D1F13" strokeWidth="1.4" />
      {/* Feather vanes */}
      <path d="M94 126 C90 122 92 114 98 112 C104 112 106 120 102 126 Z" fill="#1F5333" stroke="#0E2E1A" strokeWidth="0.8" />
      <circle cx="98" cy="118" r="2.5" fill="#D97706" />
      <circle cx="98" cy="118" r="1" fill="#1F5333" />

      {/* Neck & Head */}
      <path d="M74 72 L74 82 L86 82 L86 72 Z" fill="#E8C9A3" stroke="#42301F" strokeWidth="1.2" />
      
      {/* Head / Face */}
      <ellipse cx="80" cy="58" rx="14" ry="16" fill="#F0D3B0" stroke="#42301F" strokeWidth="1.5" />
      
      {/* Ear with Kundala */}
      <ellipse cx="66" cy="58" rx="2" ry="4" fill="#F0D3B0" stroke="#42301F" strokeWidth="1" />
      <circle cx="66" cy="62" r="1.5" fill="#D97706" />

      {/* Shikhā (Topknot Hair tuft) */}
      <path d="M76 43 C72 32 88 28 84 43 Z" fill="#2D1F13" stroke="#1A120B" strokeWidth="1.2" />
      {/* Small strand tied behind */}
      <path d="M84 36 C92 34 94 44 88 46" stroke="#2D1F13" strokeWidth="1.5" strokeLinecap="round" />

      {/* Gentle Facial Features */}
      {/* Eyes looking down at pothi */}
      <path d="M72 58 C74 61 78 61 80 58" stroke="#42301F" strokeWidth="1.2" fill="none" />
      {/* Eyebrows */}
      <path d="M72 54 C75 53 78 54 80 55" stroke="#42301F" strokeWidth="1" fill="none" />
      {/* Nose */}
      <path d="M79 56 L81 62 L78 63" stroke="#42301F" strokeWidth="0.9" fill="none" />
      {/* Serene Smile */}
      <path d="M76 66 C78 68 82 68 84 66" stroke="#8B331B" strokeWidth="1" fill="none" />

      {/* Urdhva Pundra / Chandan Tilak on Forehead */}
      <path d="M78 48 L78 53 M82 48 L82 53" stroke="#FAF5E8" strokeWidth="1" />
      <circle cx="80" cy="52" r="0.8" fill="#8B331B" />
    </svg>
  );
}

// 🪕 2. Saraswati Veena (सरस्वती वीणा)
export function SaraswatiVeena({ className = "w-10 h-auto" }) {
  return (
    <svg 
      viewBox="0 0 100 220" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Upper Resonator (Surai / Gourd) */}
      <circle cx="50" cy="42" r="16" fill="#8B4513" stroke="#3E1F09" strokeWidth="1.5" />
      <circle cx="50" cy="42" r="11" fill="#A75924" />
      <path d="M42 36 C46 32 54 32 58 36" stroke="#E6BF70" strokeWidth="1" />

      {/* Carved Dragon/Yali Head at Top Finial */}
      <path d="M50 26 C46 20 40 16 36 12 C44 14 50 18 52 24 Z" fill="#5A2E0D" stroke="#3E1F09" strokeWidth="1.2" />
      <circle cx="43" cy="15" r="1.5" fill="#E6BF70" />

      {/* Long Neck (Dandi / Fretboard) */}
      <rect x="46" y="42" width="8" height="110" rx="2" fill="#5A2E0D" stroke="#3E1F09" strokeWidth="1.5" />
      
      {/* Frets along Neck */}
      {[52, 62, 72, 82, 92, 102, 112, 122, 132, 142].map((y) => (
        <line key={y} x1="45" y1={y} x2="55" y2={y} stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      ))}

      {/* Tuning Pegs (Birudais) */}
      <line x1="38" y1="56" x2="46" y2="56" stroke="#3E1F09" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="37" cy="56" r="2.5" fill="#D4AF37" />
      <line x1="54" y1="64" x2="62" y2="64" stroke="#3E1F09" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="63" cy="64" r="2.5" fill="#D4AF37" />

      <line x1="38" y1="74" x2="46" y2="74" stroke="#3E1F09" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="37" cy="74" r="2.5" fill="#D4AF37" />
      <line x1="54" y1="82" x2="62" y2="82" stroke="#3E1F09" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="63" cy="82" r="2.5" fill="#D4AF37" />

      {/* Main Resonator Bowl (Kudam) */}
      <ellipse cx="50" cy="178" rx="28" ry="32" fill="#8B4513" stroke="#3E1F09" strokeWidth="2" />
      {/* Inlaid Ivory Floral Band */}
      <path d="M26 172 C34 164 66 164 74 172" stroke="#F5ECD7" strokeWidth="3" strokeDasharray="3 3" />
      <ellipse cx="50" cy="180" rx="20" ry="24" fill="#A75924" />

      {/* Bridge (Kudhire) */}
      <rect x="42" y="172" width="16" height="8" rx="1.5" fill="#2D1F13" stroke="#E6BF70" strokeWidth="1" />

      {/* Strings (Tantris) */}
      <line x1="48" y1="46" x2="48" y2="176" stroke="#FAF5E8" strokeWidth="0.8" opacity="0.9" />
      <line x1="50" y1="46" x2="50" y2="176" stroke="#FAF5E8" strokeWidth="0.8" opacity="0.9" />
      <line x1="52" y1="46" x2="52" y2="176" stroke="#FAF5E8" strokeWidth="0.8" opacity="0.9" />

      {/* Langot (Tailpiece attachment at bottom) */}
      <path d="M46 206 C48 212 52 212 54 206 Z" fill="#D4AF37" stroke="#3E1F09" strokeWidth="1" />
    </svg>
  );
}

// 🪷 3. Classical Blooming Pink Indian Lotus (कमल पुष्प)
export function BloomingLotus({ className = "w-12 h-auto" }) {
  return (
    <svg 
      viewBox="0 0 120 140" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Graceful S-Curved Stem */}
      <path d="M60 135 C58 115 64 95 60 75" stroke="#1F5333" strokeWidth="3" strokeLinecap="round" />
      
      {/* Small curled lotus leaf bud */}
      <path d="M60 105 C68 102 76 106 78 112 C74 116 66 114 60 108" fill="#296A42" stroke="#174228" strokeWidth="1" />

      {/* Base Sepals */}
      <path d="M48 76 C54 78 66 78 72 76 C68 84 52 84 48 76 Z" fill="#296A42" stroke="#174228" strokeWidth="1.2" />

      {/* Outermost Petals (Soft watercolor pink) */}
      <path d="M25 64 C20 48 32 38 46 46 C52 52 56 65 60 74 C48 75 34 72 25 64 Z" fill="#F4B8AA" fillOpacity="0.85" stroke="#8B331B" strokeWidth="1.2" />
      <path d="M95 64 C100 48 88 38 74 46 C68 52 64 65 60 74 C72 75 86 72 95 64 Z" fill="#F4B8AA" fillOpacity="0.85" stroke="#8B331B" strokeWidth="1.2" />

      {/* Mid Petals */}
      <path d="M36 55 C34 35 48 24 58 35 C62 42 63 56 61 70 C51 70 42 65 36 55 Z" fill="#F9CBC2" stroke="#8B331B" strokeWidth="1.2" />
      <path d="M84 55 C86 35 72 24 62 35 C58 42 57 56 59 70 C69 70 78 65 84 55 Z" fill="#F9CBC2" stroke="#8B331B" strokeWidth="1.2" />

      {/* Center Crown Petal */}
      <path d="M60 18 C50 30 52 52 60 68 C68 52 70 30 60 18 Z" fill="#FFF0EC" stroke="#8B331B" strokeWidth="1.4" />
      
      {/* Golden Lotus Core / Seedpod */}
      <ellipse cx="60" cy="58" rx="7" ry="5" fill="#D97706" />
      <circle cx="58" cy="57" r="0.8" fill="#FAF5E8" />
      <circle cx="62" cy="57" r="0.8" fill="#FAF5E8" />
      <circle cx="60" cy="59" r="0.8" fill="#FAF5E8" />
    </svg>
  );
}

// 🪶 4. Peacock Feather Quill (मयूर पिच्छ लेखनी)
export function PeacockFeather({ className = "w-6 h-6" }) {
  return (
    <svg 
      viewBox="0 0 100 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central Quill Stem */}
      <path d="M50 115 C50 90 48 40 50 15" stroke="#342A1F" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Outer Feather Barbs */}
      <path d="M50 85 C35 78 20 65 15 50 C12 40 18 30 28 32 C38 35 46 48 50 60" fill="#296A42" fillOpacity="0.3" stroke="#174228" strokeWidth="1.2" />
      <path d="M50 85 C65 78 80 65 85 50 C88 40 82 30 72 32 C62 35 54 48 50 60" fill="#296A42" fillOpacity="0.3" stroke="#174228" strokeWidth="1.2" />
      
      {/* Mid Feather Halo (Gold) */}
      <ellipse cx="50" cy="42" rx="20" ry="24" fill="#F6E3B3" fillOpacity="0.8" stroke="#B8860B" strokeWidth="1.5" />
      
      {/* Deep Emerald Ring */}
      <ellipse cx="50" cy="43" rx="14" ry="17" fill="#1F5333" stroke="#0E2E1A" strokeWidth="1.2" />
      
      {/* Saffron & Deep Core */}
      <ellipse cx="50" cy="45" rx="9" ry="11" fill="#B8860B" />
      <circle cx="50" cy="45" r="4" fill="#342A1F" />
      
      {/* Delicate Feather Filaments */}
      <path d="M48 95 C38 90 28 82 22 72 M49 80 C36 74 24 64 20 54 M49 68 C38 60 30 50 26 40" stroke="#174228" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M52 95 C62 90 72 82 78 72 M51 80 C64 74 76 64 80 54 M51 68 C62 60 70 50 74 40" stroke="#174228" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

// 📜 5. Ancient Palm-Leaf Pothi (प्राचीन पोथी / ग्रन्थ)
export function AncientGrantha({ className = "w-7 h-7" }) {
  return (
    <svg 
      viewBox="0 0 120 90" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Bottom Shadow Paper */}
      <path d="M12 70 C35 66 55 68 60 76 C65 68 85 66 108 70 L102 24 C82 20 65 22 60 28 C55 22 38 20 18 24 Z" fill="#DFCFAF" stroke="#524332" strokeWidth="1" />
      
      {/* Main Open Pages */}
      <path d="M15 67 C36 62 55 64 60 72 C65 64 84 62 105 67 L99 20 C80 16 64 18 60 25 C56 18 40 16 21 20 Z" fill="#FAF6ED" stroke="#342A1F" strokeWidth="1.5" />
      
      {/* Center Crease / Thread Binding */}
      <path d="M60 25 L60 72" stroke="#8B331B" strokeWidth="2" strokeDasharray="3 2" />
      
      {/* Sanskrit Text Lines */}
      <line x1="28" y1="30" x2="52" y2="30" stroke="#524332" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="26" y1="38" x2="54" y2="38" stroke="#524332" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="28" y1="46" x2="50" y2="46" stroke="#524332" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="27" y1="54" x2="48" y2="54" stroke="#524332" strokeWidth="1.2" strokeLinecap="round" />

      <line x1="68" y1="30" x2="92" y2="30" stroke="#524332" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="66" y1="38" x2="94" y2="38" stroke="#524332" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="70" y1="46" x2="92" y2="46" stroke="#524332" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="68" y1="54" x2="88" y2="54" stroke="#524332" strokeWidth="1.2" strokeLinecap="round" />
      
      {/* Red Rubrication Dots */}
      <circle cx="40" cy="24" r="2" fill="#8B331B" />
      <circle cx="80" cy="24" r="2" fill="#8B331B" />
    </svg>
  );
}

// ☁️ 6. Classical Nalanda / Indic Cloud Swirls (प्राचीन मेघ वल्लरी)
export function ManuscriptClouds({ className = "w-20 h-auto" }) {
  return (
    <svg 
      viewBox="0 0 160 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M10 45 C15 35 25 32 35 36 C38 24 50 18 64 22 C70 12 85 8 98 16 C110 8 126 12 134 24 C145 22 154 30 152 42 C145 50 120 52 90 50 C60 52 30 50 10 45 Z" 
        fill="#FAF5EB" 
        fillOpacity="0.75" 
        stroke="#8B6E4E" 
        strokeWidth="1.2" 
      />
      {/* Interior Cloud Spiral Lines */}
      <path d="M35 36 C42 38 45 45 42 50" stroke="#B89B77" strokeWidth="1" fill="none" />
      <path d="M64 22 C72 26 75 35 70 42" stroke="#B89B77" strokeWidth="1" fill="none" />
      <path d="M98 16 C105 20 108 30 104 38" stroke="#B89B77" strokeWidth="1" fill="none" />
      <path d="M134 24 C140 30 140 38 135 44" stroke="#B89B77" strokeWidth="1" fill="none" />
    </svg>
  );
}

// 🌿 7. Antique Manuscript Botanical Vine Flourish (प्राचीन पत्र-वल्लरी)
export function BotanicalVine({ className = "w-16 h-8" }) {
  return (
    <svg 
      viewBox="0 0 160 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M10 25 C40 15 60 35 90 25 C120 15 140 30 150 25" stroke="#524332" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M35 22 C30 15 35 8 45 14 C48 18 42 22 35 22 Z" fill="#296A42" fillOpacity="0.5" stroke="#174228" strokeWidth="1" />
      <path d="M70 28 C75 35 70 42 60 36 C57 32 63 28 70 28 Z" fill="#296A42" fillOpacity="0.5" stroke="#174228" strokeWidth="1" />
      <path d="M110 20 C105 13 110 6 120 12 C123 16 117 20 110 20 Z" fill="#296A42" fillOpacity="0.5" stroke="#174228" strokeWidth="1" />
      <circle cx="85" cy="18" r="2.5" fill="#8B331B" />
      <circle cx="135" cy="32" r="2.5" fill="#8B331B" />
    </svg>
  );
}

// ⚜️ 8. Manuscript Corner Rosette (पाण्डुलिपि कोण अलंकरण)
export function ManuscriptCorner({ className = "w-5 h-5", flip = "" }) {
  return (
    <svg 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${flip}`}
    >
      <path d="M4 36 L4 8 C4 5.8 5.8 4 8 4 L36 4" stroke="#8B331B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 32 L8 10 C8 8.9 8.9 8 10 8 L32 8" stroke="#1F5333" strokeWidth="1" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" fill="#B8860B" />
      <circle cx="6" cy="6" r="1.5" fill="#342A1F" />
    </svg>
  );
}

// 🪷 9. Compact Lotus Icon
export function LotusFlower({ className = "w-6 h-6" }) {
  return <BloomingLotus className={className} />;
}

// 🕉️ 10. Sacred Pranava / Om Inscription (ॐ)
export function SacredOm({ className = "w-6 h-6" }) {
  return (
    <span className={`font-sanskrit text-xl font-bold text-[#8B331B] select-none ${className}`}>
      ॐ
    </span>
  );
}
