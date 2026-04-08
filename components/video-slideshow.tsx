"use client";

import { useState, useEffect, useRef } from "react";

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
  const [fade, setFade] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % videos.length);
        setFade(true);
      }, 600);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const video = videos[current];

  return (
    <div
      style={{
        perspective: "1200px",
        display: "flex",
        justifyContent: "center",
        padding: "2rem 0",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "56rem",
          borderRadius: "1.5rem",
          overflow: "hidden",
          background: "#000",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(201,135,59,0.08)",
          transform: fade
            ? "rotateY(0deg) rotateX(0deg) scale(1)"
            : "rotateY(3deg) rotateX(2deg) scale(0.97)",
          opacity: fade ? 1 : 0,
          transition:
            "transform 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.6s cubic-bezier(0.4,0,0.2,1)",
          transformStyle: "preserve-3d" as const,
        }}
      >
        <iframe
          key={video.id}
          src={`https://drive.google.com/file/d/${video.id}/preview`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            width: "100%",
            aspectRatio: "16/9",
            display: "block",
            border: "none",
            background: "#000",
          }}
          title={video.name}
        />
      </div>
    </div>
  );
}
