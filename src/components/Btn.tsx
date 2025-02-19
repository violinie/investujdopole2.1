import React from "react";

type BtnProps = {
  text: string;
  onClick?: () => void;
};

const Btn: React.FC<BtnProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 bg-indigo-950"
    >
      {text}
    </button>
  );
};

export default Btn;
