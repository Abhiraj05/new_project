import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <span className="w-3 h-12 bg-[#FE9D1B]/40 rounded-md animate-pulse [animation-delay:0s]" />
          <span className="w-3 h-12 bg-[#FE9D1B]/60 rounded-md animate-pulse [animation-delay:0.15s]" />
          <span className="w-3 h-12 bg-[#FE9D1B]/80 rounded-md animate-pulse [animation-delay:0.3s]" />
          <span className="w-3 h-12 bg-[#FE9D1B]/100 rounded-md animate-pulse [animation-delay:0.45s]" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
