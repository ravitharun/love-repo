import React from "react";

function Loader({ name = "My Love" }) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-pink-50 z-50">
      {/* Big Spinner */}
      <div className="h-24 w-24 animate-spin rounded-full border-8 border-pink-600 border-t-transparent mb-6"></div>

      {/* Loading Text */}
      <p className="text-2xl font-bold text-pink-600 animate-pulse">
        Loading, {name}...
      </p>

      {/* Optional Cute Subtext */}
      <p className="mt-2 text-sm text-pink-400 animate-pulse">
        Please wait, something special is coming 💖
      </p>
    </div>
  );
}

export default Loader;
