import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import bgVideo from "./153977-806571978.mp4";

function LoveAccept() {
  const location = useLocation();
  const name = location.state?.name || "My Love";

  const buttonRef = useRef(null);
  const [pos, setPos] = useState({ x: 60, y: 70 });
  const [message, setMessage] = useState("Will you be my Valentine? 💖");

  const moveRandomly = () => {
    const x = Math.random() * 80 + 5;
    const y = Math.random() * 35 + 55;

    setPos({ x, y });
    setMessage(`😝 Nope… you can’t say NO! ${name}`);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const btnX = rect.left + rect.width / 2;
      const btnY = rect.top + rect.height / 2;

      const distance = Math.hypot(e.clientX - btnX, e.clientY - btnY);

      if (distance < 80) {
        moveRandomly();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Back */}
      <Link to="/">
        <button className="fixed top-5 left-5 z-50 px-4 py-2 rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-md hover:scale-105 transition">
          ← Back
        </button>
      </Link>

      {/* Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="flex items-center justify-center h-full px-4">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white text-center border border-white/20 shadow-2xl">

          <h1 className="text-2xl font-bold mb-2">{name} 💖</h1>

          <p className="text-pink-200 text-lg mb-6 transition-all duration-300">
            {message}
          </p>

          <div className="relative h-44">
            {/* YES */}
            <div className="flex justify-center">
              <Link to="/accept">
                <button className="px-8 py-2 rounded-full bg-pink-500 hover:bg-pink-600 active:scale-95 transition font-semibold">
                  YES 💖
                </button>
              </Link>
            </div>

            {/* NO (INTELLIGENT ESCAPE 😈) */}
            <button
              ref={buttonRef}
              onClick={(e) => e.preventDefault()}
              className="absolute px-6 py-2 rounded-full border border-white/40 text-white cursor-not-allowed select-none transition-all duration-300 ease-out"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              No 🙈
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoveAccept;
