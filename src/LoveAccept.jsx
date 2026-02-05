import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import bgVideo from "./153977-806571978.mp4";

function LoveAccept() {
  const location = useLocation();
  const name = location.state?.name || "My Love";

  const [pos, setPos] = useState({ x: 50, y: 70 });
  const [message, setMessage] = useState("Will you be my Valentine? 💖");

  const escape = () => {
    const x = Math.random() * 80 + 5; // 5% – 85%
    const y = Math.random() * 25 + 60; // bottom area

    setPos({ x, y });
    setMessage("Haha 😝 you can’t say NO today!");
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-md p-6 text-white shadow-2xl border border-white/20 text-center">

          {/* Title */}
          <h1 className="text-2xl font-bold mb-3">
            {name} 💖
          </h1>

          {/* Dynamic Text */}
          <p className="text-lg text-pink-200 mb-6 transition-all duration-300">
            {message}
          </p>

          {/* Button Area */}
          <div
            className="relative h-44"
            onMouseEnter={() =>
              setMessage("Hey… don’t even think about saying no 😏💘")
            }
            onMouseLeave={() =>
              setMessage("Will you be my Valentine? 💖")
            }
          >
            {/* YES Button */}
            <div className="flex justify-center">
              <button
                onClick={() =>
                  setMessage("YAYYY 🥹💖 I knew it!")
                }
                className="px-8 py-2 rounded-full bg-pink-500 text-white font-semibold shadow-md hover:bg-pink-600 active:scale-95 transition"
              >
                YES 💖
              </button>
            </div>

            {/* NO Button (RUNS AWAY 😈) */}
            <button
              onMouseEnter={escape}
              onMouseMove={escape}
              onTouchStart={escape}
              className="px-6 py-2 rounded-full border border-white/40 text-white absolute transition-all duration-200"
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
