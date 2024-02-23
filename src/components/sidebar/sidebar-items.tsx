import { ReactNode } from "react";

interface Props {
  label: string;
  path: string;
  icon: ReactNode;
}
const SidebarItems = ({ label, icon }: Props) => {
  return (
    <div className="flex flex-row items-center justify-center">
      {/* MOBILE SIDEBAR ITEM */}
      <div className="h-12 relative lg:hidden flex items-center gap-4 rounded-[12px] hover:bg-[#F8FAFC] font-medium text-[14px] hover:font-bold px-4 py-[13px] cursor-pointer  text-[#64748B] hover:text-[#2563EB]">
        <span>{icon}</span>
      </div>
      {/* DESKTOP SIDEBAR ITEM */}
      <div className="w-[218px] h-12  relative hidden lg:flex items-center gap-4 rounded-[12px] hover:bg-[#F8FAFC] font-medium text-[14px] hover:font-bold px-4 py-[13px] cursor-pointer  text-[#64748B] hover:text-[#2563EB] ">
        <span> {icon}</span>
        <p className="hidden lg:block text-[14px]">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItems;
