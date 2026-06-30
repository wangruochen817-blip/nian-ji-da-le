import React, { forwardRef } from 'react';
import { useCoverStore } from '../store';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CoverPreview = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const { title, subtitle, theme, fontFamily, pattern, colorAccent } = useCoverStore();

  const getThemeClasses = () => {
    switch (theme) {
      case 'minimal':
        return 'bg-white text-zinc-900 border border-zinc-200';
      case 'dark':
        return 'bg-zinc-950 text-white';
      case 'gradient':
        return 'text-white';
      case 'solid':
        return `text-white`;
      case 'glass':
        return 'bg-gradient-to-tr from-white/40 to-white/10 backdrop-blur-xl border border-white/20 text-zinc-800 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]';
      default:
        return 'bg-white text-zinc-900';
    }
  };

  const getPatternStyles = () => {
    switch (pattern) {
      case 'dots':
        return {
          backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)',
          backgroundSize: '30px 30px',
          opacity: 0.1,
        };
      case 'grid':
        return {
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.1,
        };
      case 'waves':
        return {
          backgroundImage:
            'repeating-radial-gradient(circle at 0 0, transparent 0, currentColor 14px, transparent 15px)',
          opacity: 0.05,
        };
      default:
        return {};
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'relative w-full aspect-[2/1] overflow-hidden flex flex-col justify-center p-16 md:p-24 transition-all duration-300',
        getThemeClasses(),
        fontFamily === 'sans' && 'font-sans',
        fontFamily === 'serif' && 'font-serif',
        fontFamily === 'zcool' && 'font-zcool',
        fontFamily === 'mashan' && 'font-mashan'
      )}
      style={{
        backgroundColor: theme === 'solid' ? colorAccent : undefined,
        backgroundImage: theme === 'gradient' ? `linear-gradient(to bottom right, ${colorAccent}, #000000)` : undefined,
      }}
    >
      {/* Pattern Overlay */}
      {pattern !== 'none' && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={getPatternStyles()}
        />
      )}

      {/* Glass Overlay for Glass Theme */}
      {theme === 'glass' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] -z-10" />
      )}

      {/* Decorative Element */}
      <div 
        className={cn(
          "absolute top-0 left-0 w-32 h-2",
          theme === 'minimal' && "bg-zinc-900",
          theme === 'dark' && "bg-white",
          (theme === 'gradient' || theme === 'solid') && "bg-white/50",
          theme === 'glass' && "bg-zinc-800"
        )}
        style={{
          backgroundColor: (theme === 'minimal' || theme === 'dark') ? colorAccent : undefined
        }}
      />

      <div className="relative z-10 flex flex-col gap-6">
        <h1 
          className={cn(
            "text-5xl md:text-7xl font-bold leading-tight tracking-tight max-w-[90%]",
            fontFamily === 'zcool' && "font-normal",
            fontFamily === 'mashan' && "font-normal text-6xl md:text-8xl tracking-normal"
          )}
        >
          {title || 'Enter a title'}
        </h1>
        
        {subtitle && (
          <p 
            className={cn(
              "text-xl md:text-2xl font-medium tracking-wide max-w-[80%] opacity-80 mt-4 border-l-4 pl-4",
              theme === 'minimal' && "border-zinc-300 text-zinc-600",
              theme === 'dark' && "border-zinc-700 text-zinc-400",
              (theme === 'gradient' || theme === 'solid') && "border-white/30",
              theme === 'glass' && "border-zinc-400"
            )}
            style={{
              borderColor: (theme === 'minimal' || theme === 'dark') ? colorAccent : undefined
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-8 right-12 flex items-center gap-2 opacity-50 font-sans tracking-widest text-sm uppercase">
        <span>COVER GENERATOR</span>
        <div className="w-8 h-[1px] bg-current" />
      </div>
    </div>
  );
});

CoverPreview.displayName = 'CoverPreview';

export default CoverPreview;
