"use client";

import React from "react";

export default function JetAnimation() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-[3rem] pointer-events-none">
      <style>{`
        @keyframes flyUp {
          0% {
            transform: translateY(150px) scale(0.6) rotate(-45deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-400px) scale(1.2) rotate(-45deg);
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
          /* Rocket points up/right normally, so rotate to point fully UP */
        }
        .jet-1 {
          left: 15%;
          bottom: -20%;
          animation: flyUp 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .jet-2 {
          left: 50%;
          bottom: -20%;
          animation: flyUp 4s cubic-bezier(0.4, 0, 0.2, 1) infinite 1.2s;
        }
        .jet-3 {
          left: 75%;
          bottom: -20%;
          animation: flyUp 3s cubic-bezier(0.4, 0, 0.2, 1) infinite 2.5s;
        }
      `}</style>
      
      {/* Jet 1 */}
      <div className="jet-wrapper jet-1 flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 text-violet-500 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)] transform -rotate-[45deg]"
        >
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1.3 2.6c-.2.4-.1.9.3 1.1L9 14l-3.5 3.5-2.6-.9c-.4-.1-.9.1-1.1.5l-.6 1.2c-.2.4 0 .9.4 1.1l4 .8 2.6-2.6 2.6 2.6.8 4c.2.4.7.6 1.1.4l1.2-.6c.4-.2.6-.7.5-1.1l-.9-2.6 3.5-3.5 3.4 6.3c.2.4.7.5 1.1.3l2.6-1.3c.5-.2.8-.6.7-1.1z" />
        </svg>
        <div className="w-[2px] h-[80px] bg-gradient-to-t from-transparent via-violet-400 to-violet-600 rounded-full mt-2 animate-[trailFade_3.5s_infinite] shadow-[0_0_10px_rgba(139,92,246,0.6)]"></div>
      </div>

      {/* Jet 2 */}
      <div className="jet-wrapper jet-2 flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-indigo-500 drop-shadow-[0_0_20px_rgba(99,102,241,0.6)] transform -rotate-[45deg]"
        >
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1.3 2.6c-.2.4-.1.9.3 1.1L9 14l-3.5 3.5-2.6-.9c-.4-.1-.9.1-1.1.5l-.6 1.2c-.2.4 0 .9.4 1.1l4 .8 2.6-2.6 2.6 2.6.8 4c.2.4.7.6 1.1.4l1.2-.6c.4-.2.6-.7.5-1.1l-.9-2.6 3.5-3.5 3.4 6.3c.2.4.7.5 1.1.3l2.6-1.3c.5-.2.8-.6.7-1.1z" />
        </svg>
        <div className="w-[3px] h-[120px] bg-gradient-to-t from-transparent via-indigo-400 to-indigo-600 rounded-full mt-2 animate-[trailFade_4s_infinite_1.2s] shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>
      </div>

      {/* Jet 3 */}
      <div className="jet-wrapper jet-3 flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 text-fuchsia-500 drop-shadow-[0_0_15px_rgba(217,70,239,0.5)] transform -rotate-[45deg]"
        >
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1.3 2.6c-.2.4-.1.9.3 1.1L9 14l-3.5 3.5-2.6-.9c-.4-.1-.9.1-1.1.5l-.6 1.2c-.2.4 0 .9.4 1.1l4 .8 2.6-2.6 2.6 2.6.8 4c.2.4.7.6 1.1.4l1.2-.6c.4-.2.6-.7.5-1.1l-.9-2.6 3.5-3.5 3.4 6.3c.2.4.7.5 1.1.3l2.6-1.3c.5-.2.8-.6.7-1.1z" />
        </svg>
        <div className="w-[2px] h-[60px] bg-gradient-to-t from-transparent via-fuchsia-400 to-fuchsia-600 rounded-full mt-2 animate-[trailFade_3s_infinite_2.5s] shadow-[0_0_10px_rgba(217,70,239,0.5)]"></div>
      </div>
    </div>
  );
}
