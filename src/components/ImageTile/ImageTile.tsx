"use client";

import React from "react";
import { motion } from "framer-motion";

export type ImageTileProps = {
  url: string;
  className?: string;
};

export const ImageTile: React.FC<ImageTileProps> = ({
  className,
  url,
}): React.ReactElement => {
  return (
    <motion.div
      style={{ "--image-url": `url(${url})` } as React.CSSProperties}
      className="bg-[image:var(--image-url)] hover:inset-20  bg-cover bg-center aspect-square rounded-md cursor-pointer object-cover"
      whileHover={{ scale: 1.1 }} // Zooms in by 10% on hover
      whileTap={{ scale: 1 }} // Zooms out slightly on tap
    />
  );
};

export default ImageTile;
