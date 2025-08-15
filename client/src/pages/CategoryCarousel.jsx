import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

const CategoryCarousel = () => {
  const category = [
    "Fronend Development",
    "Backend Development",
    "Full-Stack Development",
    "Machine Learning",
    "Cloud Engineering",
  ];

  return (
    <div className="mt-16">
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent className="flex justify-evenly">
          {category.map((cat, idx) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={idx}>
              <Button variant="outline" className="rounded-full">
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
