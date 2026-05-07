import React, { useState } from "react";

function Preferences() {
  const [digitalCurrency, setDigitalCurrency] = useState(true);
  const [merchantOrder, setMerchantOrder] = useState(true);
  const [accountRecommendation, setAccountRecommendation] = useState(true);

  const handleToggleDigitalCurrency = () => {
    setDigitalCurrency(!digitalCurrency);
  };
  const handleToggleMerchantOrder = () => {
    setMerchantOrder(!merchantOrder);
  };
  const handleToggleAccountRecommendation = () => {
    setAccountRecommendation(!accountRecommendation);
  };

  return (
    <div className="p-4 md:p-8">
      {/* Currency & Time Zone Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 w-full mb-8">
        <div className="flex flex-col gap-2">
          <label className="text-[#343C6A] text-sm font-medium">Currency</label>
          <input
            type="text"
            placeholder="USD"
            className="rounded-2xl border h-12 px-5 outline-none transition-all border-[#DFEAF2] focus:border-[#1814F3] text-[#718EBF] text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#343C6A] text-sm font-medium">
            Time Zone
          </label>
          <input
            type="text"
            placeholder="(GMT-12:00) International Date Line West"
            className="rounded-2xl border h-12 px-5 outline-none transition-all border-[#DFEAF2] focus:border-[#1814F3] text-[#718EBF] text-sm"
          />
        </div>
      </div>

      {/* Notification Settings Area */}
      <div className="flex flex-col gap-4">
        <h3 className="text-[#343C6A] text-lg font-semibold mb-2">
          Notification
        </h3>

        <div className="flex items-center gap-4">
          {/* Toggle Switch */}
          <div
            className={`relative w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              digitalCurrency ? "bg-[#16DBCC]" : "bg-[#BDC3C7]"
            }`}
            onClick={handleToggleDigitalCurrency}
          >
            {/* Switch Knob (Top) */}
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                digitalCurrency ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </div>

          <span className="text-[#343C6A] text-sm font-medium">
            I send or receive digital currency
          </span>
        </div>
        <div className="flex items-center gap-4">
          {/* Toggle Switch */}
          <div
            className={`relative w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              merchantOrder ? "bg-[#16DBCC]" : "bg-[#BDC3C7]"
            }`}
            onClick={handleToggleMerchantOrder}
          >
            {/* Switch Knob (Top) */}
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                merchantOrder ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </div>

          <span className="text-[#343C6A] text-sm font-medium">
            I receive merchant order
          </span>
        </div>
        <div className="flex items-center gap-4">
          {/* Toggle Switch */}
          <div
            className={`relative w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              accountRecommendation ? "bg-[#16DBCC]" : "bg-[#BDC3C7]"
            }`}
            onClick={handleToggleAccountRecommendation}
          >
            {/* Switch Knob (Top) */}
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                accountRecommendation ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </div>

          <span className="text-[#343C6A] text-sm font-medium">
            There are recommendation for my account
          </span>
        </div>
      </div>
      <div className="flex justify-end mt-10">
        <button
          type="submit"
          className="w-full md:w-48 h-12 text-white rounded-2xl font-medium transition-all bg-[#1814F3] hover:bg-[#1210c4]"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Preferences;
