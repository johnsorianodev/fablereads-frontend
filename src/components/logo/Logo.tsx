import Image from "next/image";
import React from "react";
import { LOGO_URL } from "../../constants";
import { twMerge } from "tailwind-merge";

export type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({
  width = 140,
  height = 80,
  className,
}): React.ReactElement => (
  <Image
    width={width}
    height={height}
    src={LOGO_URL}
    alt="FableReads Logo"
    className={twMerge("w-auto", className)}
  />
);

export default Logo;
