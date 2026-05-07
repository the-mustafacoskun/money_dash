import { ChipCardIcon } from "./icons/ChipCardIcon";
import { MasterCardIcon } from "./icons/MasterCardIcon";

export const MyCreditCard = () => {
  return (
    
    <div className="flex flex-col p-6 gap-y-6 aspect-3/2 w-full max-w-87.5 bg-[linear-gradient(107.38deg,#4C49ED_2.61%,#0A06F4_101.2%)] rounded-3xl shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[12px] text-white/70">Balance</span>
          <span className="font-semibold text-[20px] text-white">$5,300</span>
        </div>
        <ChipCardIcon className="text-white" />
      </div>

      <div className="grid grid-cols-2 gap-x-4">
        <span className="text-[12px] text-white/70 uppercase">Card Holder</span>
        <span className="text-[12px] text-white/70 uppercase">Valid Thru</span>
        <span className="font-semibold text-[15px] text-white truncate">Mustafa Coskun</span>
        <span className="font-semibold text-[15px] text-white">12/22</span>
      </div>
      
      <div className="flex justify-between items-center mt-auto  text-white">
        <span className="font-semibold text-[18px] md:text-[22px]">3778 **** **** 1234</span>
        <MasterCardIcon />
      </div>
    </div>
  );
};