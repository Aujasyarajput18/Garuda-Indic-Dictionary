import React from 'react';

/**
 * Authentic Indic Manuscript Doodles & Vignettes
 * Inspired by ancient Nalanda palm-leaf pothis, classical Sanskrit calligraphy,
 * and vintage Indian manuscript engravings.
 */

// 🪶 1. Peacock Feather (मयूर पिच्छ)
export function PeacockFeather({ className = "w-8 h-8", opacity = "opacity-90" }) {
  return (
    <svg 
      viewBox="0 0 100 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${opacity}`}
    >
      {/* Central Quill Stem */}
      <path d="M50 115 C50 90 48 40 50 15" stroke="#342A1F" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Outer Feather Barbs */}
      <path d="M50 85 C35 78 20 65 15 50 C12 40 18 30 28 32 C38 35 46 48 50 60" fill="#296A42" fillOpacity="0.4" stroke="#174228" strokeWidth="1.2" />
      <path d="M50 85 C65 78 80 65 85 50 C88 40 82 30 72 32 C62 35 54 48 50 60" fill="#296A42" fillOpacity="0.4" stroke="#174228" strokeWidth="1.2" />
      
      {/* Mid Feather Halo (Gold) */}
      <ellipse cx="50" cy="42" rx="22" ry="26" fill="#F6E3B3" fillOpacity="0.85" stroke="#B8860B" strokeWidth="1.5" />
      
      {/* Deep Emerald Ring */}
      <ellipse cx="50" cy="43" rx="16" ry="19" fill="#1F5333" stroke="#0E2E1A" strokeWidth="1.2" />
      
      {/* Deep Indigo/Sapphire Eye Core - traditional peacock eye */}
      <ellipse cx="50" cy="45" rx="10" ry="12" fill="#174228" />
      <ellipse cx="50" cy="45" rx="6" ry="8" fill="#B8860B" />
      <circle cx="50" cy="44" r="3" fill="#221B13" />
      
      {/* Delicate Feather Filaments */}
      <path d="M48 95 C38 90 28 82 22 72 M49 80 C36 74 24 64 20 54 M49 68 C38 60 30 50 26 40" stroke="#174228" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M52 95 C62 90 72 82 78 72 M51 80 C64 74 76 64 80 54 M51 68 C62 60 70 50 74 40" stroke="#174228" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

// 📜 2. Ancient Grantha / Open Palm-leaf Pothi (प्राचीन पोथी / ग्रन्थ)
export function AncientGrantha({ className = "w-8 h-8", opacity = "opacity-90" }) {
  return (
    <svg 
      viewBox="0 0 120 90" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${opacity}`}
    >
      {/* Bottom Shadow Paper */}
      <path d="M12 70 C35 66 55 68 60 76 C65 68 85 66 108 70 L102 24 C82 20 65 22 60 28 C55 22 38 20 18 24 Z" fill="#DFCFAF" stroke="#524332" strokeWidth="1" />
      
      {/* Main Open Pages */}
      <path d="M15 67 C36 62 55 64 60 72 C65 64 84 62 105 67 L99 20 C80 16 64 18 60 25 C56 18 40 16 21 20 Z" fill="#FAF6ED" stroke="#342A1F" strokeWidth="1.5" />
      
      {/* Center Crease / Thread Binding */}
      <path d="M60 25 L60 72" stroke="#8B331B" strokeWidth="2" strokeDasharray="3 2" />
      
      {/* Miniature Sanskrit Text Lines */}
      <line x1="28" y1="30" x2="52" y2="30" stroke="#524332" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="26" y1="38" x2="54" y2="38" stroke="#524332" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="28" y1="46" x2="50" y2="46" stroke="#524332" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="27" y1="54" x2="48" y2="54" stroke="#524332" strokeWidth="1.2" strokeLinecap="round" />

      <line x1="68" y1="30" x2="92" y2="30" stroke="#524332" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="66" y1="38" x2="94" y2="38" stroke="#524332" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="70" y1="46" x2="92" y2="46" stroke="#524332" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="68" y1="54" x2="88" y2="54" stroke="#524332" strokeWidth="1.2" strokeLinecap="round" />
      
      {/* Sanskrit Sacred Sutra Mark (Red Rubrication) */}
      <circle cx="40" cy="24" r="1.8" fill="#8B331B" />
      <circle cx="80" cy="24" r="1.8" fill="#8B331B" />
      
      {/* Binding Ribbon Tassel */}
      <path d="M60 72 C62 82 66 86 70 88" stroke="#8B331B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 🪷 3. Hand-drawn Lotus (कमल पुष्प)
export function LotusFlower({ className = "w-7 h-7", opacity = "opacity-90" }) {
  return (
    <svg 
      viewBox="0 0 100 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${opacity}`}
    >
      {/* Base Stem & Sepals */}
      <path d="M50 75 L50 65" stroke="#1F5333" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M35 64 C42 66 58 66 65 64 C62 70 38 70 35 64 Z" fill="#296A42" stroke="#174228" strokeWidth="1" />

      {/* Side Petals */}
      <path d="M20 54 C15 44 22 34 32 38 C38 42 42 52 46 60 C36 60 26 58 20 54 Z" fill="#EBBCAD" fillOpacity="0.75" stroke="#8B331B" strokeWidth="1.2" />
      <path d="M80 54 C85 44 78 34 68 38 C62 42 58 52 54 60 C64 60 74 58 80 54 Z" fill="#EBBCAD" fillOpacity="0.75" stroke="#8B331B" strokeWidth="1.2" />

      {/* Mid Petals */}
      <path d="M30 48 C28 32 38 22 46 30 C50 36 52 48 52 58 C44 58 36 55 30 48 Z" fill="#F5DDD5" stroke="#8B331B" strokeWidth="1.2" />
      <path d="M70 48 C72 32 62 22 54 30 C50 36 48 48 48 58 C56 58 64 55 70 48 Z" fill="#F5DDD5" stroke="#8B331B" strokeWidth="1.2" />

      {/* Center Crown Petal */}
      <path d="M50 16 C42 28 44 46 50 58 C56 46 58 28 50 16 Z" fill="#FAF0ED" stroke="#8B331B" strokeWidth="1.4" />
      
      {/* Gold Pericarp core */}
      <circle cx="50" cy="52" r="3" fill="#B8860B" />
    </svg>
  );
}

// 🎻 4. Classical Saraswati Veena (सरस्वती वीणा)
export function SaraswatiVeena({ className = "w-8 h-8", opacity = "opacity-90" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${opacity}`}
    >
      {/* Diagonal Neck (Dandi) */}
      <line x1="22" y1="80" x2="82" y2="20" stroke="#342A1F" strokeWidth="4" strokeLinecap="round" />
      <line x1="23" y1="79" x2="81" y2="21" stroke="#DFCFAF" strokeWidth="1.2" />

      {/* Main Large Resonator (Kudam) */}
      <circle cx="24" cy="78" r="16" fill="#DFCFAF" stroke="#342A1F" strokeWidth="2" />
      <ellipse cx="23" cy="77" rx="12" ry="10" fill="#EBDDC7" stroke="#8B331B" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="23" cy="77" r="4" fill="#342A1F" />

      {/* Upper Gourd Resonator */}
      <circle cx="70" cy="30" r="9" fill="#DFCFAF" stroke="#342A1F" strokeWidth="1.8" />
      <circle cx="70" cy="30" r="5" fill="#EBDDC7" />

      {/* Dragon Head (Yali) at the top */}
      <path d="M82 20 C86 16 92 18 94 22 C96 26 92 28 88 26" stroke="#342A1F" strokeWidth="2.5" strokeLinecap="round" fill="#8B331B" />
      
      {/* Tuning Pegs */}
      <circle cx="76" cy="18" r="2" fill="#B8860B" />
      <circle cx="82" cy="24" r="2" fill="#B8860B" />
      <circle cx="79" cy="27" r="2" fill="#B8860B" />
      
      {/* Strings */}
      <line x1="28" y1="74" x2="80" y2="22" stroke="#B8860B" strokeWidth="0.8" />
      <line x1="30" y1="76" x2="82" y2="24" stroke="#B8860B" strokeWidth="0.8" />
    </svg>
  );
}

// ✒️ 5. Inkpot & Quill Pen (मसिपात्र व लेखनी)
export function InkpotQuill({ className = "w-7 h-7", opacity = "opacity-90" }) {
  return (
    <svg 
      viewBox="0 0 80 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${opacity}`}
    >
      {/* Inkpot Bottle */}
      <path d="M22 64 L22 46 C22 42 26 38 32 38 L48 38 C54 38 58 42 58 46 L58 64 C58 68 54 70 48 70 L32 70 C26 70 22 68 22 64 Z" fill="#DFCFAF" stroke="#342A1F" strokeWidth="1.8" />
      <rect x="28" y="32" width="24" height="6" rx="2" fill="#342A1F" />
      
      {/* Ink Level inside bottle */}
      <path d="M24 54 C30 52 50 52 56 54 L56 64 C56 66 52 68 48 68 L32 68 C28 68 24 66 24 64 Z" fill="#221B13" />

      {/* Quill Pen resting inside */}
      <path d="M42 40 L64 12 C66 9 70 10 71 13 C72 16 68 20 62 25 L46 45" fill="#FAF6ED" stroke="#1F5333" strokeWidth="1.5" />
      <path d="M60 17 C64 14 68 15 69 18" stroke="#B8860B" strokeWidth="1.2" />
    </svg>
  );
}

// ⚜️ 6. Corner Filigree / Manuscript Rosette (पाण्डुलिपि हस्तशिल्प अलंकरण)
export function ManuscriptCorner({ className = "w-6 h-6", flip = "" }) {
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
