import { ReactNode, useState } from "react";
import { cn } from "../lib/utils";

interface TooltipProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
}

const Tooltip = ({ text, position = "bottom", children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2",
    bottom: "top-full left-1/2 transform -translate-x-1/2",
    left: "right-full top-1/2 transform -translate-y-1/2",
    right: "left-full top-1/2 transform -translate-y-1/2",
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onTouchStart={() => setIsVisible(!isVisible)}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute whitespace-nowrap bg-gray-800 text-white text-xs rounded p-1 shadow-lg z-10 max-w-xs",
            positionClasses[position]
          )}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
