import { NavLink } from "react-router-dom";
import SidebarItems from "./sidebar-items";
import {
  DoshboardImg,
  GolasImg,
  MyTasksImg,
  ProductImg,
} from "../../constants/const";

const Sidebar = () => {
  const sidebarItems = [
    {
      label: "Dashboard",
      path: "/",
      icon: DoshboardImg,
    },
    {
      label: "My Tasks",
      path: `/my-tasks`,
      icon: MyTasksImg,
    },
    {
      label: "Product",
      path: `/product`,
      icon: ProductImg,
    },
    {
      label: "Goals",
      path: "/goals",
      icon: GolasImg,
    },
  ];

  const projectItem = [
    { label: "Website Design", color: "#6366F1" },
    { label: "SEO Analythics", color: "#F6A723" },
    { label: "Hiphonic App", color: "#34D399" },
  ];
  return (
    <div className="h-[100vh] justify-between p-[16px] border-r-[1px] border-r-[#F1F5F9]">
      <div className="logo mb-[23px] mt-4">
        <img src="/image/logo.png" alt="" />
      </div>
      <div className=" h-full flex flex-col justify-between">
        <div>
          <div className="border-t-[1px] border-[#F1F5F9] mb-[23px]">
            <div className="ml-4 pt-8 mb-4 text-[12px]  text-[#94A3B8] font-bold">
              MENU
            </div>
            {sidebarItems.map((item, i) => (
              <NavLink to={item?.path} key={i}>
                <SidebarItems {...item} />
              </NavLink>
            ))}
          </div>
          <div className="border-t-[1px] border-[#F1F5F9]">
            <div className="flex justify-between items-center ml-4 pt-6 mb-3 text-[12px]  text-[#94A3B8] font-bold">
              <div>PROJECTS</div>
              <div className="h-[2px] w-[10px] bg-[#b0b0b0] lg-flex  hidden"></div>
            </div>
            {projectItem.map((item, i) => (
              <div key={i} className="lg:flex flex-col  hidden">
                <div className="h-[48px] px-4 items-center flex gap-4">
                  <span
                    style={{ backgroundColor: `${item?.color}` }}
                    className={` bg-black rounded-full w-3 h-3`}
                  ></span>
                  {item?.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>setting</div>
      </div>
    </div>
  );
};

export default Sidebar;
