import React from "react";

export function RecentTransaction() {
  return (
    <div className="flex justify-center items-center w-full gap-x-4 m-3 pr-5">
      <div className="w-10 h-10 bg-amber-700 rounded-full"></div>
      <div className="flex flex-col">
        <span className="font-medium">Deposit From...</span>
        <span className="text-[15px] ">Transc. Date</span>
      </div>
      <span className="font-medium">Trans Amount</span>
    </div>
  );
}
