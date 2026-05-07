import { BellDot, Menu, Search, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="flex flex-col p-6 gap-5 bg-white">
      <div className="flex w-full justify-between items-center py-1 ">
        <img src="./iconfinder_vector.png"></img>
        <h1 className=" font-extrabold text-[25px] text-[#343C6A] mx-5">BankDash.</h1>
        <h2 className=" font-semibold text-[28px] text-[#343C6A] mr-auto ml-10">Overview</h2>
        <div className="flex justify-end items-center gap-8 ">
        <label className="flex focus-within:bg-blue-100  bg-blue-50 items-center gap-1 h-10 rounded-3xl border-blue-200">
          <Search className="shrink-0 ml-4 h-4 w-4 text-[#8BA3CB]"/>
          <input placeholder="Search for something" className="flex-1 outline-none text-[#8BA3CB] bg-transparent px-1 ml-2 h-full  "></input>
      </label>
      <Settings className="text-[#718EBF]"/>
      <BellDot  className="text-[#FE5C73]"/>
        <img src="src/assets/profilePhoto.jpg" alt="resim" className="rounded-full block object-cover w-9 h-9"/>
      </div>
      </div>
      
    </header>
  );
};
export default Header;
