import Header from "../components/Header";
import { Sidebar } from "../components/SideBar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F7FA]">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-[#F5F7FA]">
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
};
export default MainLayout;
