import React from "react";
import ImageTile from "../ImageTile";

export const CallToAction: React.FC = (): React.ReactElement => {
  return (
    <section className="grid grid-cols-2 py-32">
      <div className="grid grid-cols-3 gap-1.5 scale-200 sm:grid-cols-6 sm:scale-250 md:scale-250 lg:scale-200 xl:scale-200 2xl:scale-130  w-full  opacity-50">
        <ImageTile
          className="cursor-pointer"
          url="https://d2ernfhqd0mjj5.cloudfront.net/vintage-the-wise-goat-and-the-wolf-1-300x300.webp"
        />
        <ImageTile
          className="cursor-pointer"
          url="https://d2ernfhqd0mjj5.cloudfront.net/vintage-the-wise-goat-and-the-wolf-1-300x300.webp"
        />
        <ImageTile
          className="cursor-pointer"
          url="https://d2ernfhqd0mjj5.cloudfront.net/vintage-the-wise-goat-and-the-wolf-1-300x300.webp"
        />
        <ImageTile
          className="cursor-pointer"
          url="https://d2ernfhqd0mjj5.cloudfront.net/vintage-the-wise-goat-and-the-wolf-1-300x300.webp"
        />
        <ImageTile
          className="cursor-pointer"
          url="https://d2ernfhqd0mjj5.cloudfront.net/vintage-the-wise-goat-and-the-wolf-1-300x300.webp"
        />
        <ImageTile
          className="cursor-pointer"
          url="https://d2ernfhqd0mjj5.cloudfront.net/vintage-the-wise-goat-and-the-wolf-1-300x300.webp"
        />
        <ImageTile
          className="cursor-pointer"
          url="https://d2ernfhqd0mjj5.cloudfront.net/vintage-the-wise-goat-and-the-wolf-1-300x300.webp"
        />
        <ImageTile
          className="cursor-pointer"
          url="https://d2ernfhqd0mjj5.cloudfront.net/vintage-the-wise-goat-and-the-wolf-1-300x300.webp"
        />
        <ImageTile
          className="cursor-pointer"
          url="https://d2ernfhqd0mjj5.cloudfront.net/vintage-the-wise-goat-and-the-wolf-1-300x300.webp"
        />
      </div>
      <div></div>
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#16181f] to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[16181f] to-transparent"></div>
    </section>
  );
};

export default CallToAction;
