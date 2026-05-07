import React from "react";
import { RecentTransaction } from "./RecentTransaction";

export function RecentTransactions() {
  return (
    // Dış marginleri (mt-3 vb.) kaldırıyoruz, Dashboard Grid'i bunu zaten yönetiyor
    <div className="flex flex-col h-full">
      <div className="mb-5">
        <h2 className="font-semibold text-[22px] text-[#343C6A]">Recent Transaction</h2>
      </div>
      
      {/* 
        - flex-1: Kutunun dikeyde kartlarla aynı boya uzamasını sağlar.
        - gap-y-2: İşlemlerin arasına eşit boşluk bırakır.
      */}
      <div className="flex flex-col gap-y-2  bg-white rounded-3xl shadow-sm flex-1">
        <RecentTransaction />
        <RecentTransaction />
        <RecentTransaction />
      </div>
    </div>
  );
}