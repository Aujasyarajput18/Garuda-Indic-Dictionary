import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { AncientGrantha, PeacockFeather, LotusFlower } from './Doodles';

export default function WordOfTheDay({ entry, onSelectWord }) {
  if (!entry) return null;

  const today = new Date().toLocaleDateString('hi-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="relative overflow-hidden rounded-lg bg-[#FAF4E8] dark:bg-[#1A140F] border border-[#CEBC95] dark:border-[#3E3123] p-5 sm:p-6 shadow-xs transition-all mb-8">
      
      {/* Subtle Doodle Accent in Corner */}
      <div className="absolute -top-1 -right-1 opacity-20 pointer-events-none hidden sm:block">
        <AncientGrantha className="w-24 h-24" />
      </div>

      <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-[#D8C7A3] dark:border-[#3E3123]">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1F5333] dark:text-[#99C7A2]">
          <PeacockFeather className="w-4 h-4" />
          <span className="font-devanagari">आज का शब्द • Word of the Day</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#7D6B56] dark:text-[#8C7A65]">
          <Calendar className="w-3.5 h-3.5" />
          <span className="font-devanagari">{today}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="text-3xl sm:text-4xl font-bold font-devanagari text-[#221B13] dark:text-[#FAF6ED]">
              {entry.devanagari}
            </h3>
            <span className="text-xl font-display font-semibold italic text-[#8B331B] dark:text-[#EBBCAD]">
              {entry.iast}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-[#EBDDC7] dark:bg-[#2A2118] text-[#1F5333] dark:text-[#99C7A2] font-devanagari font-medium border border-[#CEBC95]">
              {entry.category}
            </span>
          </div>

          <p className="mt-2 text-sm sm:text-base font-devanagari text-[#342A1F] dark:text-[#EBDDC7] line-clamp-2 max-w-2xl leading-relaxed">
            {entry.meanings.hindi}
          </p>

          <p className="mt-1 text-xs sm:text-sm text-[#524332] dark:text-[#A8987E] italic line-clamp-1 max-w-2xl">
            "{entry.meanings.english}"
          </p>
        </div>

        <button
          onClick={() => onSelectWord(entry)}
          className="self-start sm:self-center shrink-0 flex items-center gap-2 px-4 py-2 rounded bg-[#1F5333] hover:bg-[#174228] text-[#FAF6ED] font-semibold text-xs sm:text-sm shadow-2xs transition-all font-devanagari"
        >
          <span>विस्तृत विवरण</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
