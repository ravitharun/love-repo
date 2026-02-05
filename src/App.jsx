import React, { useState } from 'react'
import bgVideo from "./153977-806571978.mp4";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Loader from './Loader';

function App() {
  const [lovelyName, setlvlyName] = useState("")
  console.log(lovelyName)
  const [showPreview, setShowPreview] = useState(false);

  const naviaget = useNavigate("")
  const HandelLovely = () => {
    if (lovelyName === "") {
      return toast.custom((t) => (
        <div
          className={`${t.visible ? "animate-enter" : "animate-leave"
            } max-w-sm w-full bg-pink-100 text-pink-900 rounded-xl shadow-md p-4 flex items-center gap-3 border border-pink-200`}
        >
          <span className="text-2xl">💔</span>

          <div className="flex-1">
            <p className="font-semibold">Name missing, dear! 🥹🥹🥹</p>
            <p className="text-sm text-pink-700">
              Please enter your lovely name to continue 💖
            </p>
          </div>

          <button
            onClick={() => toast.dismiss(t.id)}
            className="text-pink-400 hover:text-pink-600 transition"
          >
            ✖
          </button>
        </div>
      ));
    }
    toast.success(`For ${lovelyName} 💖`, {
      style: {
        background: "#fff1f2",
        color: "#9d174d",
      },
    });
    setShowPreview(true);
    setTimeout(() => {
      toast.success("Please wait a moment… 💖", {
        duration: 2000,
        style: {
          background: "#fff1f2",   // light pink
          color: "#9d174d",        // rose text
          padding: "8px 14px",
          borderRadius: "10px",
          fontSize: "14px",
        },
        iconTheme: {
          primary: "#ec4899",
          secondary: "#fff",
        },
      });

    }, 1500);
    setTimeout(() => {
      // window.location.href = "/love"
      naviaget("/love", {
        state: {
          name:lovelyName
        }
      })
    }, 3000);

  }
  return (
    <>
      <Toaster position="top-center" />
      <div className="relative w-screen h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Content on top */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-md p-6 text-white shadow-2xl border border-white/20">

            <h1 className="text-3xl font-bold text-center mb-4">
              Happy Valentine 💖
            </h1>

            <h2 className="text-center text-lg mb-2">
              Who is this <b className="text-red-400">for</b>?
            </h2>

            <p className="text-center text-sm text-gray-200 mb-4" >
              Enter your lovely name
            </p>

            <input
              type="text"
              placeholder="Enter your lovely name, dear 💖"
              onChange={(e) => setlvlyName(e.target.value)}
              className="w-full rounded-lg bg-white/20 px-4 py-2 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-pink-400"
            />

            <button
              className="mt-5 w-full rounded-lg bg-pink-500 py-2 font-semibold text-white transition hover:bg-pink-600 active:scale-95"
              // disabled={!lovelyName}
              onClick={HandelLovely}
            >
              Reveal the Love 💖
            </button>

            {showPreview && (
              <div className="mt-5 text-center animate-fade-in">
                <p className="text-lg text-pink-200">Made with love for</p>
                <h2 className="text-3xl font-bold text-pink-400 mt-1">
                  {lovelyName} 💖
                </h2>
                <p className="mt-2 text-sm text-gray-200">
                  You are truly special 🌹
                </p>
              </div>
            )}


          </div>
        </div>

      </div>

    </>)
}

export default App