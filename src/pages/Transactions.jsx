import React from "react";
import { MyCards } from "../components/dashboardComponents/MyCards";
import { RecentTransactions } from "../components/dashboardComponents/RecentTransactions";
// 1. Ensure the alias starts with a Capital Letter (PascalCase)
import { RecentTransactions as TransactionsList } from "../components/TransactionsComponents/RecentTransactions";

function Transactions() {
  return (
    <div className="m-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        <div className="lg:col-span-2">
          <MyCards />
        </div>

        <div className="lg:col-span-1 w-full">
          <RecentTransactions />
        </div>
      </div>

      <div className="mt-8">
    
        <TransactionsList />
      </div>
    </div>
  );
}

export default Transactions;