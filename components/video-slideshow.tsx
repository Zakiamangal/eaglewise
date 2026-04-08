"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c === videos.length - 1 ? 0 : c + 1));
    }, 30000);
    return () => clearInterval(timer);
  }, [current]);

  const video = videos[current];

  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl md:rounded-3xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={video.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src={`https://drive.google.com/file/d/${video.id}/preview`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="aspect-video w-full bg-black"
            title={video.name}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
