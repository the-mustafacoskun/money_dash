import React from "react";

export function ReceiverInfo() {
  return (
    <div className="flex flex-col text-center items-center">
      <img src="src/assets/profilePhoto.jpg" className="rounded-full w-12 h-12  block object-cover"></img>
      <div className="flex flex-col text-[12px]">
        <span className="">Name Surname</span>
        <span className="text-[#718EBF]">Occupation</span>
      </div>
    </div>
  );
}
