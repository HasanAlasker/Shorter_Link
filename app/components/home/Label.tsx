import React from "react";

export default function Label() {
  return (
    <div className="flex flex-row gap-2 items-center justify-center w-fit px-4 py-2 border border-accent/20 bg-accent/5 rounded-full">
      <div className="flex bg-accent aspect-square h-1.5 rounded-full md:h-2"></div>
      <span className="text-accent tracking-widest text-[9px] md:text-[12px]">FREE - URL SHORTNER</span>
    </div>
  );
}
