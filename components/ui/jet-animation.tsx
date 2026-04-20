"use client";

import React from "react";

export default function JetAnimation() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-[3rem] pointer-events-none">
      <style>{`
        @keyframes flyUp {
          0% {
            transform: translateY(150px) scale(0.6);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-400px) scale(1.2);
            opacity: 0;
          }
        }
        @keyframes trailFade {
          0% { opacity: 0; height: 0; }
          20% { opacity: 0.8; height: 100px; }
          80% { opacity: 0.8; height: 150px; }
          100% { opacity: 0; height: 0; }
        }
        .jet-wrapper {
          position: absolute;
        }
        .jet-1 {
          left: 20%;
          bottom: -20%;
          animation: flyUp 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .jet-2 {
          left: 50%;
          bottom: -20%;
          animation: flyUp 4s cubic-bezier(0.4, 0, 0.2, 1) infinite 1.2s;
        }
        .jet-3 {
          left: 80%;
          bottom: -20%;
          animation: flyUp 3s cubic-bezier(0.4, 0, 0.2, 1) infinite 2.5s;
        }
      `}</style>
      
      {/* Rocket 1 */}
      <div className="jet-wrapper jet-1 flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 text-violet-500 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)] -rotate-45"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
        </svg>
        <div className="w-[3px] h-[80px] bg-gradient-to-t from-transparent via-violet-400 to-violet-600 rounded-full animate-[trailFade_3.5s_infinite] shadow-[0_0_10px_rgba(139,92,246,0.6)]"></div>
      </div>

      {/* Rocket 2 */}
      <div className="jet-wrapper jet-2 flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-indigo-500 drop-shadow-[0_0_20px_rgba(99,102,241,0.6)] -rotate-45"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
        </svg>
        <div className="w-[4px] h-[120px] bg-gradient-to-t from-transparent via-indigo-400 to-indigo-600 rounded-full animate-[trailFade_4s_infinite_1.2s] shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>
      </div>

      {/* Rocket 3 */}
      <div className="jet-wrapper jet-3 flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 text-fuchsia-500 drop-shadow-[0_0_15px_rgba(217,70,239,0.5)] -rotate-45"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
        </svg>
        <div className="w-[3px] h-[60px] bg-gradient-to-t from-transparent via-fuchsia-400 to-fuchsia-600 rounded-full animate-[trailFade_3s_infinite_2.5s] shadow-[0_0_10px_rgba(217,70,239,0.5)]"></div>
      </div>
    </div>
  );
}
