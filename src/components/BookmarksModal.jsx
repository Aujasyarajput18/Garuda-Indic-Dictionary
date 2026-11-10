import React from 'react';
import { X, Bookmark, Trash2, ArrowRight, Download } from 'lucide-react';
import { AncientGrantha } from './Doodles';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14100B]/60 backdrop-blur-2xs animate-fadeIn">
      <div className="bg-[#FCF8F0] border border-[#CEBC95] rounded-lg max-w-xl w-full max-h-[85vh] flex flex-col shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-[#D8C7A3] flex items-center justify-between bg-[#FAF4E8]">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-[#1F5333] fill-[#1F5333]" />
            <h3 className="font-sanskrit text-lg font-bold text-[#221B13]">
              सहेजे गए शब्द (Saved Vocabulary)
            </h3>
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#EBDDC7] text-[#1F5333]">
              {bookmarkedEntries.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-[#7D6B56] hover:text-[#221B13] hover:bg-[#EBDDC7] transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="p-5 overflow-y-auto space-y-2.5 flex-1">
          {bookmarkedEntries.length === 0 ? (
            <div className="text-center py-10">
              <AncientGrantha className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p className="font-devanagari text-[#524332] font-medium">
                कोई शब्द सहेजा नहीं गया है।
              </p>
              <p className="text-xs text-[#7D6B56] mt-1 font-devanagari">
                शब्द कार्ड पर बुकमार्क आइकन दबाकर अपने अध्ययन के लिए शब्द सहेजें।
              </p>
            </div>
          ) : (
            bookmarkedEntries.map((entry) => (
              <div
                key={entry.id}
                className="p-3 rounded bg-[#FAF6ED] border border-[#CEBC95] flex items-center justify-between gap-3 hover:border-[#1F5333] transition-all"
              >
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-devanagari text-xl font-bold text-[#221B13]">
                      {entry.devanagari}
                    </span>
                    <span className="font-display text-sm italic font-semibold text-[#8B331B]">
                      {entry.iast}
                    </span>
                    <span className="text-[10px] text-[#7D6B56] font-devanagari">
                      ({entry.category})
                    </span>
                  </div>
                  <p className="text-xs text-[#524332] line-clamp-1 mt-0.5">
                    {entry.meanings.english}
                  </p>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => {
                      onSelectWord(entry);
                      onClose();
                    }}
                    className="p-1.5 rounded text-[#1F5333] hover:bg-[#EBDDC7] transition-all"
                    title="View details"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveBookmark(entry.id)}
                    className="p-1.5 rounded text-[#7D6B56] hover:text-[#8B331B] hover:bg-[#F5DDD5] transition-all"
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
          <div className="px-5 py-2.5 border-t border-[#D8C7A3] flex items-center justify-between bg-[#FAF4E8]">
            <button
              onClick={handleExport}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#1F5333] hover:underline transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export as Text (.txt)</span>
            </button>
            <button
              onClick={onClearBookmarks}
              className="text-xs font-semibold text-[#8B331B] hover:underline"
            >
              Clear All (सब हटाएं)
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
