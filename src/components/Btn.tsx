import React, { PropsWithChildren } from "react";
import { cn } from "../lib/utils";

type BtnProps = PropsWithChildren<{
  size?: "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}>;

const Btn: React.FC<BtnProps> = ({
  children,
  icon,
  iconPosition = "right",
  size = "md",
}) => {
  return (
    <button
      className={cn(
        "group whitespace-nowrap flex items-center justify-center gap-1 rounded-full bg-gradient-to-b from-primary-blue to-primary-blue-light py-3 transition hover:from-primary-blue-light hover:to-primary-blue-light hover:shadow-lg",
        {
          "gap-2 px-6 py-4": size === "lg",
          "pl-4 pr-5": iconPosition === "left",
          "pl-5 pr-4": iconPosition === "right",
        },
      )}
    >
      {icon && iconPosition === "left" && (
        <span className="scale-100 transition group-hover:scale-125">
          {icon}
        </span>
      )}
      <span
        className={cn("text-sm font-medium text-white", {
          "text-base": size === "lg",
        })}
      >
        {children}
      </span>
      {icon && iconPosition === "right" && (
        <span className="scale-100 transition group-hover:scale-125">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Btn;
