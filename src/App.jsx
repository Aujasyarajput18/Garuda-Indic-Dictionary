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
import { AncientGrantha, PeacockFeather, LotusFlower, SaraswatiVeena } from './components/Doodles';
import { BookOpen, AlertCircle, RefreshCw } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showBookmarksModal, setShowBookmarksModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  // Dark Mode with localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('garuda_dict_dark');
    if (saved !== null) return JSON.parse(saved);
    return false;
  });

  useEffect(() => {
    localStorage.setItem('garuda_dict_dark', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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
    <div className="min-h-screen vintage-parchment-page text-[#221B13] dark:text-[#FAF6ED] flex flex-col transition-colors duration-150">
      
      {/* Top Navigation */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        bookmarksCount={bookmarks.length}
        onOpenBookmarks={() => setShowBookmarksModal(true)}
        onOpenAbout={() => setShowAboutModal(true)}
      />

      {/* Main Scrollable Content Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-8">
        
        {/* Ancient Deckled Parchment Scroll Container */}
        <div className="burnt-parchment-scroll p-4 sm:p-8 md:p-10 relative">
          
          {/* Classical Nalanda Inscription Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 relative">
            
            {/* Subtle Decorative Vintage Indic Doodles */}
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <PeacockFeather className="w-6 h-6 opacity-85" />
              <span className="h-px w-10 bg-[#CEBC95] dark:bg-[#4A3B2B]"></span>
              <LotusFlower className="w-5 h-5 opacity-75" />
              <span className="h-px w-10 bg-[#CEBC95] dark:bg-[#4A3B2B]"></span>
              <AncientGrantha className="w-6 h-6 opacity-85" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EBDDC7]/90 dark:bg-[#2A2118] border border-[#CEBC95] dark:border-[#4A3B2B] text-[#1F5333] dark:text-[#99C7A2] text-xs font-semibold mb-2">
              <span className="font-devanagari">नालन्दा वाङ्मय • Building for Bharat</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sanskrit text-[#221B13] dark:text-[#FAF6ED] tracking-tight leading-tight">
              भारतीय ज्ञान-परंपरा शब्दकोश
            </h1>

            <p className="mt-1.5 text-sm sm:text-base font-devanagari text-[#8B331B] dark:text-[#EBBCAD] font-semibold">
              "धारणाद्धर्ममित्याहुर्धर्मो धारयते प्रजाः"
            </p>

            <p className="mt-1.5 text-xs sm:text-sm text-[#524332] dark:text-[#A8987E] max-w-lg mx-auto leading-relaxed font-devanagari">
              प्राचीन धातु, पाणिनि व्युत्पत्ति एवं गैर-अनुवाद्य भारतीय शब्दों की प्रमाणिक खोज: <strong>देवनागरी</strong> अथवा <strong>Phonetic English (Hinglish)</strong> में।
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
          <div className="max-w-3xl mx-auto flex items-center justify-between pb-2 mb-3 border-b border-[#D8C7A3] dark:border-[#3E3123] text-xs sm:text-sm">
            <div className="font-medium text-[#524332] dark:text-[#A8987E] flex items-center gap-1.5 font-devanagari">
              <BookOpen className="w-3.5 h-3.5 text-[#1F5333] dark:text-[#99C7A2]" />
              <span>
                {searchQuery ? (
                  <>परिणाम: <strong className="text-[#221B13] dark:text-[#FAF6ED] font-devanagari">"{searchQuery}"</strong> ({searchResults.length} शब्द मिले)</>
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
                className="text-[#8B331B] dark:text-[#EBBCAD] font-semibold hover:underline flex items-center gap-1 font-devanagari"
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
                <h3 className="text-base font-bold font-devanagari text-[#221B13] dark:text-[#FAF6ED]">
                  कोई शब्द नहीं मिला
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#524332] dark:text-[#A8987E] max-w-md mx-auto font-devanagari">
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

          {/* Bottom Manuscript Scroll Curled Finial */}
          <div className="mt-8 pt-4 border-t border-[#D8C7A3] dark:border-[#3E3123] flex items-center justify-center gap-2 text-[11px] text-[#7D6B56] dark:text-[#8C7A65] font-devanagari">
            <span>॥ इति शुभम् ॥</span>
            <span>•</span>
            <span className="italic">गरुड़ प्रकाशन एवं ऋषिहुड विश्वविद्यालय</span>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#D8C7A3] dark:border-[#3E3123] bg-[#FAF4E8]/90 dark:bg-[#120E0A]/90 py-6 text-xs text-[#524332] dark:text-[#A8987E] transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-sanskrit text-base font-bold text-[#1F5333] dark:text-[#99C7A2]">ग</span>
            <div>
              <p className="font-semibold text-[#221B13] dark:text-[#FAF6ED]">
                गरुड़ शब्दकोश (Garuda Indic Lexicon)
              </p>
              <p className="text-[11px] text-[#7D6B56] dark:text-[#8C7A65]">
                Live Project Submission for Garuda Prakashan × Rishihood University
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-center sm:text-right">
            <button
              onClick={() => setShowAboutModal(true)}
              className="hover:text-[#1F5333] dark:hover:text-[#99C7A2] transition-colors font-medium font-devanagari"
            >
              दर्शन व वास्तुकला (Architecture)
            </button>
            <span>•</span>
            <span className="text-[11px] font-devanagari text-[#8B331B] dark:text-[#EBBCAD] font-semibold">
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
