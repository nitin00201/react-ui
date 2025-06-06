'use client'
import { cn } from "@/lib/utils";

interface SwooshTextProps {
  text?: string;
  className?: string;
}

export default function SwooshText({
  text = "HONGDAE",
  className = "",
}: SwooshTextProps) {
  return (
    <div className="relative w-full text-center">
      {/* Motion Blur Filter */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="motion-blur" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="2 0" />
            <feOffset dx="-6" />
            <feBlend in="SourceGraphic" mode="normal" />
          </filter>
        </defs>
      </svg>

      {/* Main Text Container */}
      <div className={cn("relative text-3xl font-bold text-black dark:text-white", className)}>
        {/* Motion Blur Streaks with Animation */}
        <div className="absolute inset-0 opacity-5 flex flex-col justify-center gap-4">
          {[15, 40, 65].map((top, i) => (
            <span
              key={i}
              className="absolute right-[55%] h-2 animate-pulse"
              style={{
                top: `${top}%`,
                width: `${30 - i * 2.5}%`,
                filter: "url(#motion-blur)",
                transform: "translateX(-6px)",
                background: "linear-gradient(to left, currentColor, transparent)",
                animation: `swooshStreak ${1.5 + i * 0.3}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Main Text with Hover Animation */}
        <span 
          className="relative italic text-emerald-400 transition-all duration-500 ease-out hover:scale-105 hover:text-emerald-300 inline-block"
          style={{
            animation: "textPulse 3s ease-in-out infinite",
          }}
        >
          {text}
        </span>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes swooshStreak {
          0% {
            opacity: 0.05;
            transform: translateX(-6px) scaleX(0.8);
          }
          50% {
            opacity: 0.15;
            transform: translateX(-2px) scaleX(1);
          }
          100% {
            opacity: 0.08;
            transform: translateX(-8px) scaleX(0.9);
          }
        }

        @keyframes textPulse {
          0%, 100% {
            text-shadow: 0 0 5px rgba(52, 211, 153, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(52, 211, 153, 0.6), 0 0 30px rgba(52, 211, 153, 0.4);
          }
        }

        .relative:hover .absolute span {
          animation-duration: 0.8s !important;
        }
      `}</style>
    </div>
  );
}