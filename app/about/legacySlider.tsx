"use client";

import { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    title: "Our Legacy",
    description:
      "Building on years of excellence and innovation in delivering outstanding solutions.",
    icon: "🏛️",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2940",
  },
  {
    title: "Our Mission",
    description:
      "Empowering businesses through cutting-edge technology and strategic insights.",
    icon: "🎯",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2940",
  },
  {
    title: "Our Vision",
    description:
      "Shaping the future of digital transformation with innovative solutions.",
    icon: "👁️",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=2940",
  },
  {
    title: "Our Values",
    description:
      "Committed to excellence, integrity, and sustainable growth for our clients.",
    icon: "💫",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=2940",
  },
];

export default function Legacy() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [
    emblaApi,
  ]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-full px-[200px]">
        <h1 className="text-4xl font-normal mb-4 text-center">Our Legacy</h1>
        <p className="mb-10 w-full text-center">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <div className="w-full ">
          <div className="relative overflow-hidden">
            {/* Navigation Bar */}
            <div className="absolute inset-x-0 pt-7 z-10 bg-gradient-to-b from-black/50 to-transparent">
              <div className="w-full px-4">
                <nav className="flex items-center justify-center w-full">
                  {slides.map((slide, index) => (
                    <button
                      key={index}
                      onClick={() => scrollTo(index)}
                      className={cn(
                        "group flex items-center gap-2 px-4 py-3 text-sm transition-all",
                        "border-t-2 hover:bg-white/5",
                        index === activeIndex
                          ? "border-t-white text-white"
                          : "border-t-transparent text-white/70 hover:text-white"
                      )}
                    >
                      <span className="text-lg">{slide.icon}</span>
                      <span className="font-medium">{slide.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Slider Content */}
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {slides.map((slide, index) => (
                  <div key={index} className="relative flex-[0_0_100%] min-w-0">
                    <div className="relative h-[600px] w-full">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                      >
                        <div className="absolute inset-0 bg-black/50" />
                      </div>
                      <div className="relative h-full flex items-center">
                        <div className="container mx-auto px-6">
                          <div className="max-w-2xl text-white">
                            <div className="flex items-center gap-3 mb-4">
                              {/* <span className="text-3xl">{slide.icon}</span> */}
                              {/* <h2 className="text-4xl font-bold tracking-tight">
                              {slide.title}
                            </h2> */}
                            </div>
                            {/* <p className="text-lg text-gray-200 leading-relaxed">
                            {slide.description}
                          </p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className={cn(
                "absolute left-4 top-1/2 -translate-y-1/2",
                "flex h-10 w-10 items-center justify-center rounded-sm",
                "bg-yellow-500 text-white  transition-all",
                "hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
              )}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={scrollNext}
              className={cn(
                "absolute right-4 top-1/2 -translate-y-1/2",
                "flex h-10 w-10 items-center justify-center rounded-sm",
                "bg-yellow-500 text-white  transition-all",
                "hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
              )}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
