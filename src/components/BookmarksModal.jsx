import React from 'react';
import { X, Bookmark, Trash2, ArrowRight, BookOpen, Download } from 'lucide-react';

export default function BookmarksModal({
  isOpen,
  onClose,
  bookmarkedEntries,
  onRemoveBookmark,
  onClearBookmarks,
  onSelectWord
}) {
  if (!isOpen) return null;

  const handleExport = () => {
    const textContent = bookmarkedEntries.map(e => (
      `${e.devanagari} (${e.iast})\n` +
      `Category: ${e.category}\n` +
      `Root: ${e.rootEtymology.formula}\n` +
      `Hindi: ${e.meanings.hindi}\n` +
      `English: ${e.meanings.english}\n` +
      `----------------------------------------\n`
    )).join('\n');

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `garuda_saved_words_${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white dark:bg-[#121c15] border border-stone-200 dark:border-stone-800 rounded-2xl max-w-xl w-full max-h-[85vh] flex flex-col shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-100 dark:border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-emerald-800 fill-emerald-800" />
            <h3 className="font-sanskrit text-lg font-bold text-stone-900 dark:text-stone-100">
              सहेजे गए शब्द (Saved Vocabulary)
            </h3>
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300">
              {bookmarkedEntries.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {bookmarkedEntries.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-10 h-10 text-stone-300 dark:text-stone-600 mx-auto mb-2.5" />
              <p className="font-devanagari text-stone-600 dark:text-stone-400 font-medium">
                कोई शब्द सहेजा नहीं गया है।
              </p>
              <p className="text-xs text-stone-400 dark:text-stone-500 mt-1">
                शब्द कार्ड पर बुकमार्क आइकन दबाकर अपने अध्ययन के लिए शब्द सहेजें।
              </p>
            </div>
          ) : (
            bookmarkedEntries.map((entry) => (
              <div
                key={entry.id}
                className="p-3.5 rounded-lg bg-stone-50 dark:bg-[#16231a] border border-stone-200 dark:border-stone-800 flex items-center justify-between gap-3 hover:border-emerald-600 transition-all"
              >
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-devanagari text-xl font-bold text-stone-900 dark:text-stone-100">
                      {entry.devanagari}
                    </span>
                    <span className="font-display text-sm italic font-semibold text-emerald-800 dark:text-emerald-400">
                      {entry.iast}
                    </span>
                    <span className="text-[10px] text-stone-500 font-devanagari">
                      ({entry.category})
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-1 mt-0.5">
                    {entry.meanings.english}
                  </p>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => {
                      onSelectWord(entry);
                      onClose();
                    }}
                    className="p-1.5 rounded text-emerald-800 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-stone-800 transition-all"
                    title="View details"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveBookmark(entry.id)}
                    className="p-1.5 rounded text-stone-400 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/40 transition-all"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {bookmarkedEntries.length > 0 && (
          <div className="px-6 py-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between bg-stone-50 dark:bg-[#0f1712]">
            <button
              onClick={handleExport}
              className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-400 hover:underline transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export as Text (.txt)</span>
            </button>
            <button
              onClick={onClearBookmarks}
              className="text-xs font-semibold text-stone-500 hover:text-red-700 transition-colors"
            >
              Clear All (सब हटाएं)
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
