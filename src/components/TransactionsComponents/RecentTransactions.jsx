import React from "react";
import { allTransactions } from "../../data/transactionsData";
import { useTransactions } from "../../hooks/useTransactions";

export function RecentTransactions() {
  const {data:transactions, isLoading, error} = useTransactions();

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error loading transactions</div>

  return (
    <div className="w-full">
      <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">
        Recent Transactions
      </h2>
      
      {/* Kart Konteynırı */}
      <div className="bg-white rounded-3xl p-6 shadow-sm overflow-x-auto">
        {/* Tablo Başlıkları (Hizalamayı sağlamak için satırla aynı grid yapısında) */}
        <div className="grid grid-cols-8 gap-4 pb-4 border-b border-gray-100 text-[#718EBF] text-sm font-medium min-w-200">
          <div className="col-span-2">Description</div>
          <div>Transaction ID</div>
          <div>Type</div>
          <div>Card</div>
          <div>Date</div>
          <div className="text-right">Amount</div>
          <div className="text-center">Receipt</div>
        </div>

        {/* Transaction Satırları */}
        <div className="flex flex-col ">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="grid grid-cols-8 gap-4 items-center py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
            >
              {/* Açıklama ve İkon (2 Sütun Kaplar) */}
              <div className="col-span-2 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${transaction.color}`}>
                  {transaction.type === "card" && <i className="fas fa-credit-card text-xs"></i>}
                  {transaction.type === "paypal" && <i className="fab fa-paypal text-xs"></i>}
                  {transaction.type === "transfer" && <i className="fas fa-exchange-alt text-xs"></i>}
                </div>
                <span className="text-sm text-[#232323] font-medium truncate">
                  {transaction.title}
                </span>
              </div>

              {/* ID */}
              <div className="text-sm text-[#232323]">#{transaction.id}</div>

              {/* Kategori */}
              <div className="text-sm text-[#232323]">{transaction.category}</div>

              {/* Kart (Veride yoksa default gösterim) */}
              <div className="text-sm text-[#232323]">{transaction.card}</div>

              {/* Tarih */}
              <div className="text-sm text-[#718EBF]">{transaction.date}</div>

              {/* Tutar */}
              <div className={`text-sm font-semibold text-right ${
                transaction.amount > 0 ? "text-[#41D4A8]" : "text-[#FF4B4A]"
              }`}>
                ${transaction.amount}
              </div>

              {/* Buton */}
              <div className="flex justify-center">
                <button className="text-[12px] text-[#123288] border border-[#123288] rounded-full px-4 py-1 hover:bg-[#123288] hover:text-white transition-all duration-300">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}