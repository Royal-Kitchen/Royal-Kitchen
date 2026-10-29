import React from 'react';

export const FoodSafetyBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`relative inline-flex flex-col items-center select-none filter drop-shadow-xl transform hover:scale-105 transition-transform duration-200 cursor-default ${className}`}
      title="FSSAI & FoSCoS Food Safety Verified Registration"
    >
      {/* SVG Ribbon Tails */}
      <svg
        className="absolute -bottom-3.5 w-16 h-8 pointer-events-none z-0"
        viewBox="0 0 64 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Ribbon */}
        <path
          d="M12 0L24 0L20 28L10 22L2 28L12 0Z"
          fill="#14532d"
        />
        <path
          d="M10 22L2 28L12 0Z"
          fill="#052e16"
          opacity="0.3"
        />
        {/* Right Ribbon */}
        <path
          d="M52 0L40 0L44 28L54 22L62 28L52 0Z"
          fill="#14532d"
        />
        <path
          d="M54 22L62 28L52 0Z"
          fill="#052e16"
          opacity="0.3"
        />
      </svg>

      {/* Main Circular Medallion */}
      <div className="relative z-10 w-[88px] h-[88px] sm:w-[94px] sm:h-[94px] rounded-full bg-gradient-to-br from-[#f59e0b] via-[#d97706] to-[#92400e] p-[3px] shadow-lg flex items-center justify-center">
        {/* Outer Golden Notched Border */}
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#052e16] via-[#14532d] to-[#15803d] p-1.5 flex flex-col items-center justify-center text-center border border-dashed border-[#fde68a]">
          {/* Inner Badge Details */}
          <div className="flex flex-col items-center justify-center leading-none text-white w-full">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-1">
              <span className="text-[#fde68a] text-[8px] leading-none">★</span>
              <span className="text-[#fde68a] text-[10px] leading-none">★</span>
              <span className="text-[#fde68a] text-[8px] leading-none">★</span>
            </div>

            {/* Food Safety Title */}
            <span className="text-[8px] sm:text-[8.5px] font-black uppercase tracking-wider text-[#fde68a] drop-shadow-sm">
              FOOD SAFETY
            </span>

            {/* Verified Pill */}
            <div className="my-1 bg-gradient-to-r from-[#fef08a] via-[#fde047] to-[#eab308] text-[#14532d] px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs border border-white/50">
              <svg
                className="w-2.5 h-2.5 text-[#14532d] fill-current flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[8px] sm:text-[9px] font-extrabold tracking-wider uppercase text-[#14532d]">
                VERIFIED
              </span>
            </div>

            {/* FSSAI • FoSCoS Label */}
            <span className="text-[6.5px] sm:text-[7px] font-bold text-emerald-100/90 tracking-widest uppercase">
              FoSCoS • FSSAI
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
