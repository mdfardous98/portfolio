"use client";
import { FC } from "react";

interface PlaceholderImageProps {
  width: number;
  height: number;
  text: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const PlaceholderImage: FC<PlaceholderImageProps> = ({
  width,
  height,
  text,
  bgColor = "#3B82F6",
  textColor = "#FFFFFF",
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-center text-center p-4 ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <span className="font-semibold text-lg break-words">{text}</span>
    </div>
  );
};

export default PlaceholderImage;
