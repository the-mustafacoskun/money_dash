import React from "react";
import { RecentTransaction } from "./RecentTransaction";
import { useTransactions } from "../../hooks/useTransactions";

export function RecentTransactions() {
  const {data:transactions, isLoading, error} = useTransactions();

  const sortedTransactions = transactions ? [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date)) : []; 
  const recentTransactions = sortedTransactions.slice(0, 3);

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error loading transactions</div>  
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
      {recentTransactions.length > 0 ? (
        <div className="flex flex-col gap-y-2  bg-white rounded-3xl shadow-sm flex-1">
          {recentTransactions.map(transaction => (  
            <RecentTransaction key={transaction.id} transaction={transaction} />
          ))}
        </div>
      ) : (
          <div className="flex items-center justify-center h-full bg-white rounded-3xl shadow-sm">
            <span className="text-sm text-[#718EBF]">No recent transactions</span>
          </div>
      )}
     
    </div>
  );
}