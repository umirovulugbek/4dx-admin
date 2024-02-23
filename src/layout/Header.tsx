import Avatar from "@mui/material/Avatar";
import Button from "../UI/button";
import useCreateModal from "@/hooks/useCreateModal";
import { useCallback } from "react";
import CreateModal from "@/components/modals/create-modal";

interface Props {
  label: string;
  filter?: boolean;
  desc?: string;
}

const Header = ({ label, filter = false, desc }: Props) => {
  const createmodal = useCreateModal();

  const onOpenCreateModal = useCallback(() => {
    createmodal.onOpen();
  }, [createmodal]);

  return (
    <>
      <CreateModal />
      <div className="bg-white p-[20px]">
        <div className=" flex flex-row justify-between items-center w-full ">
          <div>
            <div className="text-[#0F172A] text-[24px] font-bold">{label}</div>
            <div className="text-[12px] text-[#64748B]">{desc}</div>
          </div>
          <div>
            <div className="flex">
              <img
                src="/image/icon.svg"
                alt=""
                className="mr-[24px] ml-[32px"
              />
              <div className=" flex gap-[10px] h-[43px] ">
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  className="border-[1.5px] border-[#F8FAFC]"
                  sx={{ height: 43, width: 43 }}
                />
                <div className="flex flex-col gap-[2px]">
                  <b className="text-[14px] font-bold">Sam Smith</b>
                  <p className="text-[12px] text-[#64748B]">Project Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {filter === true ? (
          <div className="mt-[24px] flex justify-between">
            <div></div>
            <Button title={<> + New Project</>} onClick={onOpenCreateModal} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Header;
