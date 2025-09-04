"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "@/i18n/navigation";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/utils/amplify";

export type FableItem = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  topics: string[];
  imageUrl: string;
};

export type FableCarouselProps = {
  title: string;
};

export const FableCarousel: React.FC<FableCarouselProps> = ({ title }) => {
  const { data: fables, isLoading } = useQuery({
    queryKey: ["popularFable"],
    queryFn: async () => {
      const response = await client.models.Fable.list({
        limit: 18,
        authMode: "apiKey",
      });

      if (!response.data) return null;

      return response;
    },
  });

  const popularFables: FableItem[] = fables
    ? fables.data.map((fable) => ({
        id: fable.id,
        author: fable.author,
        excerpt: fable.excerpt,
        imageUrl: fable.images?.vintage ?? "",
        slug: fable.slug,
        title: fable.title,
        topics: fable.topics as string[],
      }))
    : [];

  console.log(isLoading);
  console.log(popularFables);

  const router = useRouter();
  // State to hold the calculated drag constraint
  const [width, setWidth] = useState(0);

  // Refs to measure the container and carousel widths
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Calculate the drag constraint width on component mount
  useEffect(() => {
    if (containerRef.current && carouselRef.current) {
      const carouselWidth = carouselRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      // Calculate the maximum draggable distance
      setWidth(carouselWidth - containerWidth);
    }
  }, []);

  return (
    <section className="py-12">
      <div className="mx-auto px-4">
        <div className="mx-auto container">
          <h2 className="text-2xl font-bold mb-8">{title}</h2>
        </div>

        {/* The "Viewport" - this container masks the overflowing content */}
        {!isLoading && popularFables && (
          <motion.div
            ref={containerRef}
            className="overflow-hidden cursor-grab"
            whileTap={{ cursor: "grabbing" }}
          >
            {/* The Draggable Carousel */}
            <motion.div
              ref={carouselRef}
              className="flex gap-6" // Use gap for spacing between items
              drag="x" // Enable horizontal dragging
              dragConstraints={{ right: 0, left: -width }} // Set drag boundaries
            >
              {popularFables.map((item) => (
                <motion.div
                  key={item.id}
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                  className="relative aspect-square w-4/5 flex-shrink-0 cursor-pointer rounded-md bg-cover bg-center sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1 }}
                  onClick={() =>
                    router.push({
                      pathname: "/fable/[slug]",
                      params: {
                        slug: item.slug,
                      },
                    })
                  }
                >
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="truncate text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200">{item.author}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FableCarousel;
