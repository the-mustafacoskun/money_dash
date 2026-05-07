import React, { useState } from "react";

function Security() {
  const [twoFactorAuthentication, setTwoFactorAuthentication] = useState(true);
  const handleToggleTwoFactorAuthentication = () => {
    setTwoFactorAuthentication(!twoFactorAuthentication);
  };
  return (
    <div className="p-4 md:p-8">
      {/* Currency & Time Zone Grid */}
      <div className="flex flex-col gap-4">
        <h3 className="text-[#343C6A] text-lg font-semibold mb-2">
          Two-factor Authentication
        </h3>

        <div className="flex items-center gap-4">
          {/* Toggle Switch */}
          <div
            className={`relative w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              twoFactorAuthentication ? "bg-[#16DBCC]" : "bg-[#BDC3C7]"
            }`}
            onClick={handleToggleTwoFactorAuthentication}
          >
            {/* Switch Knob (Top) */}
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                twoFactorAuthentication ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </div>

          <span className="text-[#343C6A] text-sm font-medium">
            Enable or disable two factor authentication
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8 my-8">
        <h3 className="text-[#343C6A] text-lg font-semibold mb-2">
          Change Password
        </h3>
        <div className="flex flex-col gap-2 w-1/2">
          <label className="text-[#343C6A] text-sm font-medium">
            Current Password
          </label>
          <input
            type="password"
            placeholder="***********"
            className="rounded-2xl border h-12 px-5 outline-none transition-all border-[#DFEAF2] focus:border-[#1814F3] text-[#718EBF] text-sm"
          />
        </div>

        <div className="flex flex-col gap-2 w-1/2">
          <label className="text-[#343C6A] text-sm font-medium">
            New Password
          </label>
          <input
            type="password"
            placeholder="***********"
            className="rounded-2xl border h-12 px-5 outline-none transition-all border-[#DFEAF2] focus:border-[#1814F3] text-[#718EBF] text-sm"
          />
        </div>
      </div>

      {/* Notification Settings Area */}

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

export default Security;
