import React from "react";

export default function URLinput() {
  return (
    <div className="faded-box w-full max-w-2xl p-7 pb-9 rounded-md flex flex-col gap-3">
      <label htmlFor="long" className="text-accent font-light text-xs md:text-sm">
        Long URL
      </label>
      <div className="flex flex-wrap gap-2">
        <input  id="long" type="text" placeholder="https://long-url.com/some/long/path" className="truncate" />
        <button type="button">Shorten</button>
      </div>
    </div>
  );
}
