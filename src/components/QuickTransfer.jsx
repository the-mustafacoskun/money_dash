import React from "react";
import { ReceiverInfo } from "./ReceiverInfo";
import { TransferInput } from "./TransferInput";
import { ChevronRight } from "lucide-react";

export function QuickTransfer() {
  return (
    /* w-fit kaldırıldı, w-full ve min-w-0 eklendi */
    <div className="flex flex-col w-full bg-white gap-10 p-6 rounded-3xl h-full min-w-0">
      
      {/* Yatay hizalamada elemanların sıkışmasını/kaymasını yönetiyoruz */}
      <div className="flex gap-4 sm:gap-10 justify-between items-center overflow-x-auto no-scrollbar">
        <ReceiverInfo />
        <ReceiverInfo />
        <ReceiverInfo />
        
        {/* Butonun küçülmesini engellemek için flex-shrink-0 */}
        <button className="rounded-full aspect-square flex shrink-0 justify-center items-center w-12 h-12 sm:w-16 sm:h-16 bg-amber-50 hover:bg-amber-100 transition-colors">
          <ChevronRight className="w-6 h-6 sm:w-10 sm:h-10 text-slate-500" />
        </button>
      </div>

      <TransferInput />
    </div>
  );
}