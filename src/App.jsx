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
import { BookOpen, Sparkles, AlertCircle, RefreshCw, Feather } from 'lucide-react';

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
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
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
    <div className="min-h-screen bg-[#FFFDF9] dark:bg-[#0c0f17] text-slate-800 dark:text-slate-100 flex flex-col selection:bg-orange-500/20 selection:text-orange-900 transition-colors duration-200">
      
      {/* Top Navigation */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        bookmarksCount={bookmarks.length}
        onOpenBookmarks={() => setShowBookmarksModal(true)}
        onOpenAbout={() => setShowAboutModal(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-16">
        
        {/* Hero & Vedic Invocatory Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 dark:bg-amber-950/60 border border-amber-300/70 dark:border-amber-800/60 text-amber-900 dark:text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Building for Bharat in the Age of AI</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-sanskrit text-slate-900 dark:text-amber-50 tracking-tight leading-tight">
            भारतीय ज्ञान-परंपरा शब्दकोश
          </h1>

          <p className="mt-2 text-sm sm:text-base font-devanagari text-orange-800 dark:text-orange-400 font-medium">
            "धारणाद्धर्ममित्याहुर्धर्मो धारयते प्रजाः"
          </p>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Search classical Indic roots, Sanskrit etymologies (धातु), and decolonial semantic nuances in <strong>Devanagari</strong>, <strong>Phonetic Romanized (Hinglish)</strong>, or <strong>English</strong>.
          </p>
        </div>

        {/* Search Bar Section */}
        <section className="mb-6">
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
        <section className="mb-8">
          <div className="max-w-4xl mx-auto">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </section>

        {/* Word of the Day (Shown when no active search query) */}
        {!searchQuery.trim() && selectedCategory === 'all' && (
          <section className="max-w-4xl mx-auto">
            <WordOfTheDay
              entry={wordOfTheDay}
              onSelectWord={(entry) => setSearchQuery(entry.devanagari)}
            />
          </section>
        )}

        {/* Search Results Header */}
        <div className="max-w-4xl mx-auto flex items-center justify-between pb-3 mb-4 border-b border-amber-200/50 dark:border-slate-800 text-xs sm:text-sm">
          <div className="font-medium text-slate-600 dark:text-slate-400 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-orange-600" />
            <span>
              {searchQuery ? (
                <>परिणाम: <strong className="text-slate-900 dark:text-amber-100 font-devanagari">"{searchQuery}"</strong> ({searchResults.length} शब्द मिले)</>
              ) : (
                <>शब्दावली सूची ({searchResults.length} प्रविष्टियां)</>
              )}
            </span>
          </div>

          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-orange-700 dark:text-orange-400 font-semibold hover:underline flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" /> रीसेट करें (Reset)
            </button>
          )}
        </div>

        {/* Results Grid */}
        <section className="max-w-4xl mx-auto">
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {searchResults.map((entry) => (
                <WordCard
                  key={entry.id}
                  entry={entry}
                  isBookmarked={bookmarks.includes(entry.id)}
                  onToggleBookmark={toggleBookmark}
                  onSelectWord={(e) => setSearchQuery(e.devanagari)}
                  onTagClick={(tag) => setSearchQuery(tag)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-white/60 dark:bg-slate-900/60 rounded-3xl border border-amber-200/60 dark:border-slate-800">
              <AlertCircle className="w-12 h-12 text-orange-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold font-devanagari text-slate-800 dark:text-slate-200">
                कोई शब्द नहीं मिला
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                "{searchQuery}" के लिए कोई प्रविष्टि उपलब्ध नहीं है। कृपया देवनागरी या फोनेटिक अंग्रेज़ी (जैसे 'dharma', 'gyan', 'yoga') में प्रयास करें।
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-semibold hover:bg-orange-700 transition-all shadow-md"
              >
                सभी शब्द देखें (Show All Words)
              </button>
            </div>
          )}
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-amber-200/60 dark:border-slate-800 bg-[#FAF6EE] dark:bg-[#090c12] py-8 text-xs text-slate-600 dark:text-slate-400 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-sanskrit text-lg font-bold text-orange-600">ग</span>
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-200">
                गरुड़ शब्दकोश (Garuda Indic Lexicon)
              </p>
              <p className="text-[11px] text-slate-500">
                Live Project Submission for Garuda Prakashan × Rishihood University
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-center sm:text-right">
            <button
              onClick={() => setShowAboutModal(true)}
              className="hover:text-orange-600 transition-colors font-medium"
            >
              दर्शन व वास्तुकला (Architecture & Vision)
            </button>
            <span>•</span>
            <span className="text-[11px] font-devanagari text-orange-800 dark:text-orange-400">
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
