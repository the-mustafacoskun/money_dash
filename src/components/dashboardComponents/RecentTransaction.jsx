import React from "react";

export function RecentTransaction({transaction}) {
  return (
    <div className="flex justify-between items-center w-full gap-x-4 m-3 pr-5">
      <div className={`w-10 h-10 rounded-full ${transaction.color}`}></div>
      <div className="flex flex-col">
        <span className="font-medium">{transaction.title.replace(/Deposit/ig,'').replace(/from/ig,'').trim()}</span>
        <span className="text-[15px] ">{transaction.date}</span>
      </div>
      <span className={`font-medium  ${
                transaction.amount > 0 ? "text-[#41D4A8]" : "text-[#FF4B4A]"
              }`}>${transaction.amount}</span>
    </div>
  );
}
