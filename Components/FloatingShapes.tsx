"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const colors = [
  "orange",
  "tomato",
  "gold",
  "coral",
  "dodgerblue",
  "mediumseagreen",
  "orchid",
];

const FloatingShapes = () => {
  // Génère 16 formes aléatoires
  const shapes = Array.from({ length: 16 }).map(() => {
    const left = Math.floor(Math.random() * 100);
    const top = Math.floor(Math.random() * 100);

    // ❌ EXCLUSION du centre (zone du texte)
    const isCenterX = left > 25 && left < 75;
    const isCenterY = top > 20 && top < 80;

    // Si tombe au centre → repositionner sur les bords
    const safeLeft = isCenterX ? (left < 50 ? left - 25 : left + 25) : left;
    const safeTop = isCenterY ? (top < 50 ? top - 20 : top + 20) : top;

    return {
      type: ["circle", "square", "star"][Math.floor(Math.random() * 3)],
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.floor(Math.random() * 10) + 6, // 6 à 16 px
      left: Math.min(Math.max(safeLeft, 0), 100),
      top: Math.min(Math.max(safeTop, 0), 100),
      float: Math.floor(Math.random() * 15) + 8,
      duration: Math.random() * 2 + 2,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-visible z-0">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -shape.float }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            left: `${shape.left}%`,
            top: `${shape.top}%`,
          }}
        >
          {/* Circle */}
          {shape.type === "circle" && (
            <div
              style={{
                width: shape.size,
                height: shape.size,
                backgroundColor: shape.color,
                borderRadius: "9999px",
                opacity: 0.8,
              }}
            />
          )}

          {/* Square */}
          {shape.type === "square" && (
            <div
              style={{
                width: shape.size,
                height: shape.size,
                backgroundColor: shape.color,
                opacity: 0.8,
              }}
            />
          )}

          {/* Star */}
          {shape.type === "star" && (
            <Star
              style={{
                width: shape.size,
                height: shape.size,
                color: shape.color,
                opacity: 0.9,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingShapes;
