import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  onClick?: () => void;
}
const Button = ({ title, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#2563EB] py-[13px] px-[18px] rounded-[12px] text-white text-[14px]  font-bold"
    >
      {title}
    </button>
  );
};

export default Button;
