import React, { ReactElement } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  body?: ReactElement;
  footer?: ReactElement;
  header?: ReactElement;
  isStep?: boolean;
  step?: number;

  isEditing?: boolean;
}
const Modal = ({
  isOpen,
  onClose,
  body,
  footer,
  header,
  isEditing,
}: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "p-0   ",
          isEditing && "h-[80vh] overflow-x-hidden overflow-y-auto"
        )}
      >
        <div className="flex justify-between items-center px-[24px] py-[15px]">
          <div className="text-[#0F172A] font-bold text-[18px]">{header}</div>
          <button
            onClick={onClose}
            className=" rounded-[8px] bg-[#F8FAFC] border-0  hover:opacity-70 transition w-fit text-[#64748B] p-[13px]"
          >
            <X
              size={14}
              style={{
                backgroundColor: "#F8FAFC",
              }}
            />
          </button>
        </div>
        <div className="h-[500px]  border-t-[1px] border-t-[#F1F5F9]  p-6  lg:max-w-screen-lg overflow-y-scroll max-h-screen">
          {body}
        </div>
        {footer && <div>{footer}</div>}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
