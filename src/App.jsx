import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import VirtualKeyboard from './components/VirtualKeyboard';
import CategoryFilter from './components/CategoryFilter';
import WordCard from './components/WordCard';
import WordOfTheDay from './components/WordOfTheDay';
import BookmarksModal from './components/BookmarksModal';
import AboutModal from './components/AboutModal';
import { INDIC_DICTIONARY } from './data/dictionaryData';
import { searchDictionary } from './utils/transliterationEngine';
import { AncientGrantha, PeacockFeather, LotusFlower } from './components/Doodles';
import { BookOpen, AlertCircle, RefreshCw, Feather } from 'lucide-react';

// Real Bharat & Nalanda Doodle Assets
import indicRishiImg from './assets/indic_rishi.png';
import pinkLotusImg from './assets/pink_lotus.png';
import bharatCollageImg from './assets/bharat_map_collage.jpg';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showBookmarksModal, setShowBookmarksModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  // Bookmarks with localStorage
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('garuda_dict_bookmarks');
      return saved ? JSON.parse(saved) : ['dharma', 'swaraj', 'jnana'];
    } catch {
      return ['dharma', 'swaraj', 'jnana'];
    }
  });

  useEffect(() => {
    localStorage.setItem('garuda_dict_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (id) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const clearBookmarks = () => {
    setBookmarks([]);
  };

  const bookmarkedEntries = useMemo(() => {
    return INDIC_DICTIONARY.filter(entry => bookmarks.includes(entry.id));
  }, [bookmarks]);

  // Word of the Day (deterministic based on day of month)
  const wordOfTheDay = useMemo(() => {
    const day = new Date().getDate();
    return INDIC_DICTIONARY[day % INDIC_DICTIONARY.length];
  }, []);

  // Search & Filter Execution
  const searchResults = useMemo(() => {
    let results = searchDictionary(searchQuery, INDIC_DICTIONARY);
    if (selectedCategory !== 'all') {
      results = results.filter(entry => entry.category === selectedCategory);
    }
    return results;
  }, [searchQuery, selectedCategory]);

  // Virtual Keyboard Insertion
  const handleInsertChar = (char) => {
    setSearchQuery(prev => prev + char);
  };

  const handleBackspace = () => {
    setSearchQuery(prev => prev.slice(0, -1));
  };

  // Keyboard shortcut listener ('/' to focus search, Esc to close modals)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowBookmarksModal(false);
        setShowAboutModal(false);
        setShowKeyboard(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen vintage-parchment-page text-[#221B13] flex flex-col antialiased">
      
      {/* Top Navigation */}
      <Header
        bookmarksCount={bookmarks.length}
        onOpenBookmarks={() => setShowBookmarksModal(true)}
        onOpenAbout={() => setShowAboutModal(true)}
      />

      {/* Main Scrollable Content Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-7">
        
        {/* Ancient Deckled Parchment Scroll Container */}
        <div className="burnt-parchment-scroll p-4 sm:p-7 md:p-9 relative">
          
          {/* Classical Nalanda Inscription Header with Bharat Doodles */}
          <div className="relative mb-6 sm:mb-8 text-center pt-2">
            
            {/* Left Doodle: Ancient Indian Scholar/Rishi writing with Peacock Feather */}
            <div className="hidden md:block absolute -top-3 -left-3 lg:-left-6 pointer-events-none z-10">
              <img 
                src={indicRishiImg} 
                alt="Ancient Sanskrit Scholar / Rishi writing" 
                className="w-24 lg:w-28 h-auto drop-shadow-md select-none transform -rotate-3"
              />
            </div>

            {/* Right Doodle: Sacred Indian Pink Lotus in Bloom */}
            <div className="hidden md:block absolute -top-1 -right-2 lg:-right-4 pointer-events-none z-10">
              <img 
                src={pinkLotusImg} 
                alt="Sacred Pink Indian Lotus" 
                className="w-16 lg:w-20 h-auto drop-shadow-md select-none transform rotate-6"
              />
            </div>

            {/* Top Ornamental Motif */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <PeacockFeather className="w-5 h-5 opacity-85" />
              <span className="h-px w-8 bg-[#CEBC95]"></span>
              <LotusFlower className="w-4 h-4 opacity-75" />
              <span className="h-px w-8 bg-[#CEBC95]"></span>
              <AncientGrantha className="w-5 h-5 opacity-85" />
            </div>

            {/* National Civilizational Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EBDDC7] border border-[#CEBC95] text-[#1F5333] text-xs font-semibold mb-2 shadow-2xs font-devanagari">
              <span>🇮🇳 भारत की ज्ञान-परंपरा • नालन्दा वाङ्मय</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sanskrit text-[#221B13] tracking-tight leading-tight">
              भारतीय ज्ञान-परंपरा शब्दकोश
            </h1>

            {/* Shloka */}
            <p className="mt-1 text-sm sm:text-base font-devanagari text-[#8B331B] font-semibold">
              "धारणाद्धर्ममित्याहुर्धर्मो धारयते प्रजाः"
            </p>

            <p className="mt-1 text-xs sm:text-sm text-[#524332] max-w-lg mx-auto leading-relaxed font-devanagari">
              पाणिनि धातु, वैदिक व्युत्पत्ति एवं गैर-अनुवाद्य भारतीय अवधारणाओं का प्रामाणिक संकलन: <strong>देवनागरी</strong> अथवा <strong>Phonetic English (Hinglish)</strong> में।
            </p>
          </div>

          {/* Search Bar Section */}
          <section className="mb-5">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              showKeyboard={showKeyboard}
              setShowKeyboard={setShowKeyboard}
              totalResults={searchResults.length}
            />

            {/* Virtual Keyboard Drawer */}
            {showKeyboard && (
              <div className="max-w-3xl mx-auto">
                <VirtualKeyboard
                  onInsertChar={handleInsertChar}
                  onBackspace={handleBackspace}
                  onClose={() => setShowKeyboard(false)}
                />
              </div>
            )}
          </section>

          {/* Category Filters */}
          <section className="mb-6">
            <div className="max-w-3xl mx-auto">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>
          </section>

          {/* Word of the Day (Shown when no active search query) */}
          {!searchQuery.trim() && selectedCategory === 'all' && (
            <section className="max-w-3xl mx-auto">
              <WordOfTheDay
                entry={wordOfTheDay}
                onSelectWord={(entry) => setSearchQuery(entry.devanagari)}
              />
            </section>
          )}

          {/* Search Results Header */}
          <div className="max-w-3xl mx-auto flex items-center justify-between pb-2 mb-3 border-b border-[#D8C7A3] text-xs sm:text-sm">
            <div className="font-medium text-[#524332] flex items-center gap-1.5 font-devanagari">
              <BookOpen className="w-3.5 h-3.5 text-[#1F5333]" />
              <span>
                {searchQuery ? (
                  <>परिणाम: <strong className="text-[#221B13] font-devanagari">"{searchQuery}"</strong> ({searchResults.length} शब्द मिले)</>
                ) : (
                  <>शब्दावली प्रविष्टियां ({searchResults.length} शब्द)</>
                )}
              </span>
            </div>

            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-[#8B331B] font-semibold hover:underline flex items-center gap-1 font-devanagari"
              >
                <RefreshCw className="w-3 h-3" /> रीसेट करें
              </button>
            )}
          </div>

          {/* Results Grid - Fully Scrollable */}
          <section className="max-w-3xl mx-auto space-y-4">
            {searchResults.length > 0 ? (
              searchResults.map((entry) => (
                <WordCard
                  key={entry.id}
                  entry={entry}
                  isBookmarked={bookmarks.includes(entry.id)}
                  onToggleBookmark={toggleBookmark}
                  onSelectWord={(e) => setSearchQuery(e.devanagari)}
                  onTagClick={(tag) => setSearchQuery(tag)}
                />
              ))
            ) : (
              <div className="text-center py-12 px-4 folio-card rounded-lg">
                <AlertCircle className="w-8 h-8 text-[#8B331B] mx-auto mb-2" />
                <h3 className="text-base font-bold font-devanagari text-[#221B13]">
                  कोई शब्द नहीं मिला
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#524332] max-w-md mx-auto font-devanagari">
                  "{searchQuery}" के लिए कोई प्रविष्टि उपलब्ध नहीं है। कृपया देवनागरी या फोनेटिक अंग्रेज़ी (जैसे 'dharma', 'gyan', 'yoga') में प्रयास करें।
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 px-3.5 py-1.5 rounded bg-[#1F5333] text-[#FAF6ED] text-xs font-semibold hover:bg-[#174228] transition-all font-devanagari"
                >
                  सभी शब्द देखें
                </button>
              </div>
            )}
          </section>

          {/* "Building for Bharat" Cultural Dedication Banner */}
          <div className="mt-8 pt-5 border-t border-[#D8C7A3]">
            <div className="p-4 sm:p-5 rounded-lg bg-[#FAF4E8] border border-[#CEBC95] flex flex-col sm:flex-row items-center gap-4">
              <img 
                src={bharatCollageImg} 
                alt="भारत Cultural Collage" 
                className="w-24 sm:w-28 h-auto rounded border border-[#CEBC95] shadow-xs shrink-0 select-none"
              />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F5333] font-devanagari">
                  भारत के लिए निर्माण • Building for Bharat in the Age of AI
                </span>
                <p className="text-xs sm:text-sm text-[#342A1F] mt-1 font-devanagari leading-relaxed">
                  संक्रान्त सानु जी के विचारानुसार, भारतीय भाषाओं की ज्ञान-परंपरा को पश्चिमी संकीर्ण अनुवादों से मुक्त कर, उनकी स्वाभाविक धातु, व्याकरण और सभ्यतामूलक अर्थों को डिजिटल युग में स्थापित करना ही इस शब्दकोश का उद्देश्य है।
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Manuscript Scroll Curled Finial */}
          <div className="mt-6 pt-3 border-t border-[#D8C7A3] flex items-center justify-center gap-2 text-[11px] text-[#7D6B56] font-devanagari">
            <span>॥ इति शुभम् ॥</span>
            <span>•</span>
            <span className="italic">गरुड़ प्रकाशन एवं ऋषिहुड विश्वविद्यालय</span>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#D8C7A3] bg-[#FAF4E8]/90 py-5 text-xs text-[#524332] transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-sanskrit text-base font-bold text-[#1F5333]">ग</span>
            <div>
              <p className="font-semibold text-[#221B13]">
                गरुड़ शब्दकोश (Garuda Indic Lexicon)
              </p>
              <p className="text-[11px] text-[#7D6B56]">
                Live Project Submission for Garuda Prakashan × Rishihood University
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-center sm:text-right">
            <button
              onClick={() => setShowAboutModal(true)}
              className="hover:text-[#1F5333] transition-colors font-medium font-devanagari"
            >
              दर्शन व वास्तुकला (Architecture)
            </button>
            <span>•</span>
            <span className="text-[11px] font-devanagari text-[#8B331B] font-semibold">
              सत्यमेव जयते नानृतम्
            </span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <BookmarksModal
        isOpen={showBookmarksModal}
        onClose={() => setShowBookmarksModal(false)}
        bookmarkedEntries={bookmarkedEntries}
        onRemoveBookmark={toggleBookmark}
        onClearBookmarks={clearBookmarks}
        onSelectWord={(entry) => setSearchQuery(entry.devanagari)}
      />

      <AboutModal
        isOpen={showAboutModal}
        onClose={() => setShowAboutModal(false)}
      />

    </div>
  );
}
