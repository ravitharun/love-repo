import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import bgVideo from "./153977-806571978.mp4";
import loveAudio from "./voice.mp3"; // your audio file
function Accept() {
    const location = useLocation();
    const name = location.state?.name || "My Love";
    const audioRef = useRef(null);
    // Play audio when page loads (user already clicked YES)
    useEffect(() => {
        audioRef.current?.play().catch(() => { });
    }, []);

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10"
            >
                <source src={bgVideo} type="video/mp4" />
            </video>

            {/* Audio */}
            <audio ref={audioRef} src={loveAudio} loop />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-md p-8 text-white shadow-2xl border border-white/20 text-center">

                    <div className="text-5xl mb-4 animate-pulse">💖</div>

                    <h1 className="text-3xl font-bold mb-3">Yayyy! 🥹💘</h1>

                    <p className="text-pink-200 text-lg mb-6 leading-relaxed">
                        {name}, you just made my heart skip a beat 💓
                        Thank you for being my Valentine.
                    </p>

                    <div className="flex flex-col gap-3">
                        <Link to="/">
                            <button className="w-full rounded-full bg-pink-500 py-2 font-semibold hover:bg-pink-600 active:scale-95 transition">
                                Go Back Home 🏠
                            </button>
                        </Link>

                        <button
                            onClick={() => audioRef.current?.play()}
                            className="w-full rounded-full border border-white/40 py-2 hover:bg-white/10 transition"
                        >
                            🔊 Play Music
                        </button>
                    </div>

                    <p className="mt-6 text-xs text-white/70">
                        Made with 💖 just for you
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Accept;
