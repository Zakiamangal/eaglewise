"use client";

import { useState, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  { id: "1rH3K_qdN-0h8IDvSPIfIERF968XUHxqW", name: "005" },
  { id: "1cFUjHd2LiGoHhKvZ5zDk4FGGSuPKK4LX", name: "Product Reel" },
  { id: "1q4JOOrQVCO4Z7eYfKlIfbSEfWmn0vLVu", name: "006" },
  { id: "1g3AqXWhjSAmQ5NFuxiIP4CV4opjbfYBT", name: "011 (a)" },
  { id: "1GQHl8zY2KVb3a8Zv8KcjPJzynqEZZw-Q", name: "011 (b)" },
  { id: "1lDubst95adjMkhEbSX_0j_IjxzTnSS2f", name: "0056 (a)" },
  { id: "1PvjDWgg-I34J1rr1w-681vrFyPsGm8Bg", name: "0056 (b)" },
  { id: "100FH2miJEVITDWXv-OHUWD5AwPyS9wjH", name: "Oud Intense" },
  { id: "1iS4BNJkJ6bERkog_YYDkPlDnTsOaHyC2", name: "Reel 04" },
  { id: "1z3c8iLZd6yWTqH_qJESR43aXE4dcx-rH", name: "VID-20251218" },
  { id: "1HN--ZHRqjPa9E5mwg58ZmYQDvysbvMBX", name: "Vitamin C" },
  { id: "1qwDJCmh5jCnMwIUBBnZJsze6Cnntwwo9", name: "Wicked Noir" },
];

export default function VideoSlideshow() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? videos.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === videos.length - 1 ? 0 : c + 1));
  }, []);

  const video = videos[current];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative overflow-hidden rounded-2xl bg-black md:rounded-3xl">
        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Previous video"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white/90 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 hover:bg-black/70 hover:scale-110 md:left-4 md:h-14 md:w-14"
          style={{ opacity: 1 }}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next video"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white/90 backdrop-blur-md transition-all hover:bg-black/70 hover:scale-110 md:right-4 md:h-14 md:w-14"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Video counter badge */}
        <div className="absolute top-3 right-3 z-10 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md md:top-4 md:right-4">
          {current + 1} / {videos.length}
        </div>

        {/* Video player */}
        <AnimatePresence mode="wait">
          <motion.div
            key={video.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              controls
              preload="auto"
              onEnded={next}
              className="aspect-video w-full bg-black"
            >
              <source
                src={`https://drive.google.com/uc?export=download&id=${video.id}`}
                type="video/mp4"
              />
            </video>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail strip */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {videos.map((v, i) => (
          <button
            key={v.id}
            onClick={() => goTo(i)}
            className={`flex-shrink-0 rounded-lg px-4 py-2 text-xs font-medium transition-all ${
              i === current
                ? "bg-[#C9873B] text-white shadow-lg shadow-[#C9873B]/25"
                : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-700"
            }`}
          >
            {v.name}
          </button>
        ))}
      </div>
    </div>
  );
}
