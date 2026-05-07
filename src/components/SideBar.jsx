import { House, Settings } from "lucide-react";
import { TransactionsIcon } from "./icons/TransactionsIcon";
import { UserIcon } from "./icons/UserIcon";
import { InvestmentsIcon } from "./icons/InvestmentsIcon";
import { CreditCardsIcon } from "./icons/CreditCardsIcon";
import { LoanIcon } from "./icons/LoanIcon";
import { ServicesIcon } from "./icons/ServicesIcon";
import { MyPrivilegesIcon } from "./icons/MyPrivilegesIcon";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside  >
      <div className="flex flex-col sticky top-0 pt-7.5 font-medium text-[18px] gap-10.5 w-62.5 [&>div]:ml-10 [&>div]:gap-x-10 [&_>div]:flex bg-white h-screen text-[#B1B1B1] [&_>div]:hover:text-[#2D60FF]">
        
        <div >
          
          <div><House className="w-6.25 h-6.25 "/></div>
          <div>Dashboard</div>
          
        </div>
        
        <div >
          <div><TransactionsIcon /></div>
          <div>Transactions</div>
        </div>
        <div >
          <div><UserIcon/></div>
          <div>Accounts</div>
        </div>
        <div >
          <div><InvestmentsIcon/></div>
          <div>Investments</div>
        </div>
        <div >
          <div><CreditCardsIcon/></div>
          <div>Credit Cards</div>
        </div>
        <div >
          <div><LoanIcon/></div>
          <div>Loans</div>
        </div>
        <div >
          <div><ServicesIcon/></div>
          <div>Services</div>
        </div>
        <div >
          <div><MyPrivilegesIcon/></div>
          <div>My Privileges</div>
        </div>
        <div >
          <div><Settings strokeWidth={3} className="w-6.25 h-6.25"/></div>
          <div>Setting</div>
        </div>
      </div>
    </aside>
  );
};
