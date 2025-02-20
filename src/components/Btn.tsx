import React from "react";

interface BtnProps {
  text: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Btn: React.FC<BtnProps> = ({ text, icon, iconPosition = "right" }) => {
  return (
    <div className="justify-start items-center gap-6 inline-flex">
      <div className="justify-start items-center gap-6 flex">
        <button
          className="px-6 py-4 bg-gradient-to-b from-[#2c2758] to-[#3b357a] rounded-3xl justify-center items-center gap-2.5 flex"
        >
          {icon && iconPosition === "left" && <div className="relative">{icon}</div>}
          <span className="text-white text-lg font-normal">{text}</span>
          {icon && iconPosition === "right" && <div className="relative">{icon}</div>}
        </button>
      </div>
    </div>
  );
};

export default Btn;
