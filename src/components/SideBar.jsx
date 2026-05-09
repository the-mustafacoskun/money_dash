import { House, Settings } from "lucide-react";
import { TransactionsIcon } from "./icons/TransactionsIcon";
import { UserIcon } from "./icons/UserIcon";
import { InvestmentsIcon } from "./icons/InvestmentsIcon";
import { CreditCardsIcon } from "./icons/CreditCardsIcon";
import { LoanIcon } from "./icons/LoanIcon";
import { ServicesIcon } from "./icons/ServicesIcon";
import { MyPrivilegesIcon } from "./icons/MyPrivilegesIcon";
import { Link, NavLink } from "react-router-dom";

export const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <House className="w-6.25 h-6.25 " />,
      path: "/",
    },
    { name: "Transactions", icon: <TransactionsIcon />, path: "/transactions" },
    { name: "Accounts", icon: <UserIcon />, path: "/accounts" },
    { name: "Investments", icon: <InvestmentsIcon />, path: "/investments" },
    { name: "Credit Cards", icon: <CreditCardsIcon />, path: "/credit-cards" },
    { name: "Loans", icon: <LoanIcon />, path: "/loans" },
    { name: "Services", icon: <ServicesIcon />, path: "/services" },
    {
      name: "My Privileges",
      icon: <MyPrivilegesIcon />,
      path: "/my-privileges",
    },
    {
      name: "Settings",
      icon: <Settings strokeWidth={3} className="w-6.25 h-6.25" />,
      path: "/settings",
    },
  ];

  return (
    <aside>
      <div className="flex flex-col sticky top-0 px-8 pt-7.5 font-medium text-[18px] gap-10.5 w-62.5  bg-white h-screen text-[#B1B1B1]">
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            exact={item.path === "/"}
            activeClassName="text-[#2D60FF] border-l-[6px] border-[#2D60FF] -ml-8 pl-[26px] "
            className="flex items-center transition-colors hover:text-[#2D60FF] "
          >
            {item.icon}
            <span className="ml-4">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};
