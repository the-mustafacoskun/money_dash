import React from "react";
import { MyCreditCard } from "./MyCreditCard";

export function MyCards() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-[22px] font-semibold text-[#343C6A]">My Cards</h2>
        <button className="text-[17px] font-semibold text-[#343C6A] hover:underline">
          See All
        </button>
      </div>
      
      {/* no-scrollbar sınıfını buraya ekledik */}
      <div className="flex overflow-x-auto gap-5 pb-2 no-scrollbar">
        {/* Kartların genişliğini alanınıza göre ayarlayın (örn: 350px) */}
        <div className="min-w-[320px] md:min-w-87.5 shrink-0">
          <MyCreditCard />
        </div>
        <div className="min-w-[320px] md:min-w-87.5 shrink-0">
          <MyCreditCard />
        </div>
        {/* Bu 3. kartın sadece bir kısmı görünecek */}
        <div className="min-w-[320px] md:min-w-87.5 shrink-0">
          <MyCreditCard />
        </div>
      </div>
    </div>
  );
}