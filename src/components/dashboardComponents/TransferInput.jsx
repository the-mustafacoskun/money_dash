import { Send } from "lucide-react";
import React from "react";

export function TransferInput() {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[#718EBF] text-[16px]">Write Amount</span>
      <div className="flex bg-[#EDF1F7] rounded-full overflow-hidden max-w-75">
        <input
          step="0.01"
          min="0"
          type="number"
          placeholder="amount"
          className="bg-transparent border-none text-center outline-none text-[#718EBF] w-full placeholder:text-[#718EBF]/70 text-[16px]"
        />
        <button className="flex items-center gap-3 bg-[#1814F3] hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all ml-2 font-medium">
          Send
          <Send fill="currentColor" className="w-3.5 h-3.5  rotate-[-10deg]" />
        </button>
      </div>
    </div>
  );
}
