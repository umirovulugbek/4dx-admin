import Sidebar from "../components/sidebar/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className="bg-[#F8FAFC] w-full ">{children}</div>
    </div>
  );
};

export default Layout;
