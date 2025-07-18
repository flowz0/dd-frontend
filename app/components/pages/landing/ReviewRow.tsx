"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Review } from "@/data/reviews";
import ReviewCard from "./ReviewCard";
import { useMemo, useRef } from "react";
import useIsMobile from "@/hooks/useIsMobile";

interface Props {
  reviews: Review[];
  direction: "left" | "right";
}

export default function ReviewRow({ reviews, direction }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const isMobile = useIsMobile();

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    useMemo(() => {
      const offset = isMobile ? "100%" : "20%";
      return direction === "left" ? ["0%", offset] : ["0%", `-${offset}`];
    }, [isMobile, direction])
  );

  return (
    <div ref={containerRef} className="overflow-hidden relative">
      <motion.div
        style={{ x }}
        className={`flex gap-6 p-2 ${direction === "left" ? "flex-row-reverse" : "flex-row"}`}
      >
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} direction={direction} />
        ))}
      </motion.div>
    </div>
  );
}