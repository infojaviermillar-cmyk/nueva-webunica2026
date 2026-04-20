"use client";

import React from "react";

const RocketSvg = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

export default function JetAnimation() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden h-full w-full">
      <style>{`
        @keyframes flyUpRight {
          0% { transform: translateY(100px) translateX(0) scale(0.8); opacity: 0; }
          15% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateY(-1100px) translateX(200px) scale(1.2); opacity: 0; }
        }
        @keyframes flyUpLeft {
          0% { transform: translateY(100px) translateX(0) scale(0.8); opacity: 0; }
          20% { opacity: 0.9; }
          75% { opacity: 0.9; }
          100% { transform: translateY(-1200px) translateX(-250px) scale(1.5); opacity: 0; }
        }
        @keyframes flyUpStraight {
          0% { transform: translateY(150px) scale(0.6); opacity: 0; }
          15% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-1000px) scale(1.1); opacity: 0; }
        }
        @keyframes trailFade {
          0% { opacity: 0; transform: scaleY(0); }
          15% { opacity: 0.6; transform: scaleY(1); }
          80% { opacity: 0.6; transform: scaleY(1); }
          100% { opacity: 0; transform: scaleY(0); }
        }

        .jet-wrapper {
          position: absolute;
          bottom: -100px;
        }
        
        /* Drifting combinations */
        .jet-1 { left: 15%; animation: flyUpRight 6.2s cubic-bezier(0.4, 0, 0.2, 1) infinite -1.5s; }
        .jet-1-trail { animation: trailFade 6.2s cubic-bezier(0.4, 0, 0.2, 1) infinite -1.5s; height: 90px; transform-origin: top; }
        
        .jet-2 { left: 40%; animation: flyUpLeft 8.5s cubic-bezier(0.3, 0.1, 0.3, 1) infinite -4.0s; }
        .jet-2-trail { animation: trailFade 8.5s cubic-bezier(0.3, 0.1, 0.3, 1) infinite -4.0s; height: 160px; transform-origin: top; }
        
        .jet-3 { left: 60%; animation: flyUpStraight 5.8s cubic-bezier(0.4, 0, 0.2, 1) infinite -2.2s; }
        .jet-3-trail { animation: trailFade 5.8s cubic-bezier(0.4, 0, 0.2, 1) infinite -2.2s; height: 110px; transform-origin: top; }
        
        .jet-4 { left: 80%; animation: flyUpRight 7.1s cubic-bezier(0.4, 0, 0.2, 1) infinite -0.5s; }
        .jet-4-trail { animation: trailFade 7.1s cubic-bezier(0.4, 0, 0.2, 1) infinite -0.5s; height: 130px; transform-origin: top; }
        
        .jet-5 { left: 85%; animation: flyUpLeft 6.9s cubic-bezier(0.4, 0, 0.2, 1) infinite -5.1s; }
        .jet-5-trail { animation: trailFade 6.9s cubic-bezier(0.4, 0, 0.2, 1) infinite -5.1s; height: 80px; transform-origin: top; }
        
        .jet-6 { left: 25%; animation: flyUpStraight 5.5s cubic-bezier(0.4, 0, 0.2, 1) infinite -3.8s; }
        .jet-6-trail { animation: trailFade 5.5s cubic-bezier(0.4, 0, 0.2, 1) infinite -3.8s; height: 100px; transform-origin: top; }
      `}</style>
      
      {/* Rocket 1 (Small - drifts right) */}
      <div className="jet-wrapper jet-1 flex flex-col items-center">
        <RocketSvg className="w-10 h-10 text-violet-400 drop-shadow-[0_0_10px_rgba(167,139,250,0.5)] -rotate-45" />
        <div className="w-[2px] jet-1-trail bg-gradient-to-t from-transparent via-violet-400 to-violet-600 rounded-full mt-1"></div>
      </div>

      {/* Rocket 2 (XLarge - drifts left) */}
      <div className="jet-wrapper jet-2 flex flex-col items-center">
        <RocketSvg className="w-24 h-24 text-indigo-500 drop-shadow-[0_0_20px_rgba(99,102,241,0.6)] -rotate-45" />
        <div className="w-[4px] jet-2-trail bg-gradient-to-t from-transparent via-indigo-400 to-indigo-600 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)] mt-2"></div>
      </div>

      {/* Rocket 3 (Medium - straight) */}
      <div className="jet-wrapper jet-3 flex flex-col items-center">
        <RocketSvg className="w-14 h-14 text-fuchsia-500 drop-shadow-[0_0_15px_rgba(217,70,239,0.5)] -rotate-45" />
        <div className="w-[3px] jet-3-trail bg-gradient-to-t from-transparent via-fuchsia-400 to-fuchsia-600 rounded-full mt-1.5"></div>
      </div>

      {/* Rocket 4 (Large - drifts right) */}
      <div className="jet-wrapper jet-4 flex flex-col items-center">
        <RocketSvg className="w-20 h-20 text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.5)] -rotate-45" />
        <div className="w-[3px] jet-4-trail bg-gradient-to-t from-transparent via-purple-400 to-purple-600 rounded-full shadow-[0_0_12px_rgba(192,132,252,0.5)] mt-2"></div>
      </div>

      {/* Rocket 5 (Tiny - drifts left) */}
      <div className="jet-wrapper jet-5 flex flex-col items-center">
        <RocketSvg className="w-8 h-8 text-violet-300 drop-shadow-[0_0_8px_rgba(196,181,253,0.5)] -rotate-45" />
        <div className="w-[1.5px] jet-5-trail bg-gradient-to-t from-transparent via-violet-300 to-violet-500 rounded-full mt-1"></div>
      </div>

      {/* Rocket 6 (Small-Medium - straight) */}
      <div className="jet-wrapper jet-6 flex flex-col items-center">
        <RocketSvg className="w-12 h-12 text-rose-500/80 drop-shadow-[0_0_12px_rgba(244,63,94,0.5)] -rotate-45" />
        <div className="w-[2.5px] jet-6-trail bg-gradient-to-t from-transparent via-rose-400 to-rose-600 rounded-full mt-1"></div>
      </div>
    </div>
  );
}
