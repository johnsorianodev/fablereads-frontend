import React from "react";
import ImageTile from "../ImageTile";
import Image from "next/image";
import Button from "../ui/button";

export const Hero: React.FC = (): React.ReactElement => {
  return (
    <section className="h-screen overflow-hidden flex justify-center items-center ">
      <div className="grid grid-cols-3 gap-1.5 scale-200 rotate-20 sm:grid-cols-6 sm:scale-250 md:scale-250 lg:scale-200 xl:scale-200 2xl:scale-130  w-full  opacity-50">
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
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#16181f] to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#16181f] to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center space-y-2">
        <div className="relative w-full h-1/3 sm:h-1/3 md:h-1/2">
          <Image
            alt="Lion image"
            src="https://d2ernfhqd0mjj5.cloudfront.net/68693d77f9a56751f17fcbe2_lion-reading-with-mouse.webp"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="text-center text-white mt-4">
          <h1 className="text-6xl font-bold">Enjoy Hundreds of Fables</h1>
          <h2 className="text-3xl font-bold mt-2">Free & No Advertising</h2>
          <p className="text-lg mt-2 max-w-prose">
            Timeless stories from around the world in basic, fun and rhyme
            version to read or listen to. Provide for free, with no advertising
          </p>
        </div>
        <Button variant="secondary" className="px-6 py-4 font-bold">
          See More
        </Button>
      </div>
    </section>
  );
};

export default Hero;
