import BalanceHistory from "../components/BalanceHistory";
import ExpensePieChart from "../components/charts/ExpensesChart";
import { MyCards } from "../components/MyCards";
import { QuickTransfer } from "../components/QuickTransfer";
import { ReceiverInfo } from "../components/ReceiverInfo";
import { RecentTransactions } from "../components/RecentTransactions";
import { WeekleyActivity } from "../components/WeekleyActivity";

export const Dashboard = () => {
  return (
    <div className="flex flex-col px-8 py-10 w-full mx-auto">
      {/* ÜST BÖLÜM: My Cards (2 birim) ve Recent Transactions (1 birim) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {/* My Cards: 3 sütunluk grid'in 2 sütununu kaplar */}
        <div className="lg:col-span-2">
          <MyCards />
        </div>

        {/* Recent Transactions: 3 sütunluk grid'in kalan 1 sütununu kaplar */}
        <div className="lg:col-span-1 w-full">
          <RecentTransactions />
        </div>
      </div>

      {/* ALT BÖLÜM: Weekly Activity ve Expense Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mt-10">
        {/* Weekly Activity (Geniş) */}
        <div className="lg:col-span-2 flex flex-col">
          <h2 className="text-[22px] font-semibold mb-5 text-[#343C6A]">
            Weekly Activity
          </h2>
          <div className="bg-white p-6 rounded-3xl shadow-sm flex-1 min-h-87.5">
            <WeekleyActivity />
          </div>
        </div>

        {/* Expense Statistics (Dar) */}
        <div className="lg:col-span-1 flex flex-col">
          <h2 className="text-[22px] font-semibold mb-5 text-[#343C6A]">
            Expense Statistics
          </h2>
          <div className="bg-white p-6 rounded-3xl shadow-sm flex-1 min-h-87.5 flex items-center justify-center">
            <ExpensePieChart />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mt-10">
        {/* Quick Transfer Bölümü */}
        <div className="lg:col-span-1 flex flex-col min-w-0">
          <h2 className="text-[22px] font-semibold mb-5 text-[#343C6A]">
            Quick Transfer
          </h2>
          {/* Bileşenin kendi içindeki p-6 ve bg-white yeterli olacaktır */}
          <QuickTransfer className="h-full" />
        </div>

        {/* Balance History Bölümü */}
        <div className="lg:col-span-2 flex flex-col min-w-0">
          <h2 className="text-[22px] font-semibold mb-5 text-[#343C6A]">
            Balance History
          </h2>
          {/* Üstteki Weekly Activity ile aynı stili uyguluyoruz */}
          <div className="bg-white p-6 rounded-3xl shadow-sm flex-1 min-h-62.5 overflow-hidden">
            <BalanceHistory className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
