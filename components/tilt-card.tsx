"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max tilt angle in degrees (default 8) */
  maxTilt?: number;
  /** Perspective distance in px (default 800) */
  perspective?: number;
  /** Glare overlay on hover (default true) */
  glare?: boolean;
  /** Scale factor on hover (default 1.02) */
  hoverScale?: number;
};

/**
 * 3D tilt card — tracks cursor position inside the element and applies
 * a smooth rotateX/rotateY transform.  Glare overlay follows the cursor.
 */
export function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  perspective = 800,
  glare = true,
  hoverScale = 1.02,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0–1
    const y = (e.clientY - rect.top) / rect.height; // 0–1
    const rotateX = (0.5 - y) * maxTilt * 2; // tilt up/down
    const rotateY = (x - 0.5) * maxTilt * 2; // tilt left/right

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${hoverScale},${hoverScale},${hoverScale})`,
      transition: "transform 0.1s ease-out",
    });

    if (glare) {
      // Gradient follows mouse — bright spot near cursor
      const angle = Math.atan2(y - 0.5, x - 0.5) * (180 / Math.PI) + 180;
      setGlareStyle({
        opacity: 0.12,
        background: `linear-gradient(${angle}deg, rgba(255,255,255,0.35) 0%, transparent 60%)`,
      });
    }
  };

  const handleLeave = () => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`,
      transition: "transform 0.45s ease-out",
    });
    setGlareStyle({ opacity: 0, transition: "opacity 0.4s ease-out" });
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ ...style, willChange: "transform", transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
          style={glareStyle}
          aria-hidden
        />
      )}
    </div>
  );
}
