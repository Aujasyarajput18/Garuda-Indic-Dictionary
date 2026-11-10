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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-800 rounded-3xl max-w-xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-amber-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-orange-600 fill-orange-600" />
            <h3 className="font-sanskrit text-lg font-bold text-slate-900 dark:text-amber-100">
              सहेजे गए शब्द (Saved Vocabulary)
            </h3>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-800 dark:text-orange-300">
              {bookmarkedEntries.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {bookmarkedEntries.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
              <p className="font-devanagari text-slate-600 dark:text-slate-400 font-medium">
                कोई शब्द सहेजा नहीं गया है।
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                शब्द कार्ड पर बुकमार्क आइकन दबाकर अपने अध्ययन के लिए शब्द सहेजें।
              </p>
            </div>
          ) : (
            bookmarkedEntries.map((entry) => (
              <div
                key={entry.id}
                className="p-3.5 rounded-xl bg-amber-50/60 dark:bg-slate-850 border border-amber-200/60 dark:border-slate-800 flex items-center justify-between gap-3 hover:border-orange-300 transition-all"
              >
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-devanagari text-xl font-bold text-slate-900 dark:text-amber-100">
                      {entry.devanagari}
                    </span>
                    <span className="font-display text-sm italic font-semibold text-orange-700 dark:text-orange-400">
                      {entry.iast}
                    </span>
                    <span className="text-[10px] text-slate-500 font-devanagari">
                      ({entry.category})
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-1 mt-0.5">
                    {entry.meanings.english}
                  </p>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => {
                      onSelectWord(entry);
                      onClose();
                    }}
                    className="p-1.5 rounded-lg text-orange-700 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-slate-700 transition-all"
                    title="View details"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveBookmark(entry.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition-all"
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
          <div className="px-6 py-3 border-t border-amber-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
            <button
              onClick={handleExport}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-orange-600 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export as Text (.txt)</span>
            </button>
            <button
              onClick={onClearBookmarks}
              className="text-xs font-semibold text-red-600 dark:text-red-400 hover:underline"
            >
              Clear All (सब हटाएं)
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
