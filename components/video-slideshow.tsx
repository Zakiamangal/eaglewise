"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

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

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? videos.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === videos.length - 1 ? 0 : c + 1));
  }, []);

  const video = videos[current];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Video player area */}
      <div className="relative group">
        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Previous video"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/60 hover:scale-110"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next video"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/60 hover:scale-110"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Video iframe with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={video.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              src={`https://drive.google.com/file/d/${video.id}/preview`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="aspect-video w-full rounded-2xl bg-black"
              title={video.name}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Info row: name and counter */}
      <div className="mt-4 flex items-center justify-between text-sm text-neutral-400">
        <span className="flex items-center gap-1.5">
          <Play className="h-3.5 w-3.5" />
          {video.name}
        </span>
        <span>
          {current + 1} / {videos.length}
        </span>
      </div>

      {/* Dot indicators */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {videos.map((v, i) => (
          <button
            key={v.id}
            onClick={() => setCurrent(i)}
            aria-label={`Go to video: ${v.name}`}
            className="h-2.5 w-2.5 rounded-full transition-all"
            style={{
              backgroundColor: i === current ? "#C9873B" : "#525252",
              transform: i === current ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
