"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Video from "next-video";
import { useRef } from "react";
import introVideo from "@/public/videos/intro.mp4";

export const VideoReveal = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.5 1", "0.5 0.5"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);

  // 3d scroll
  return (
    <div style={{ perspective: "1000px" }} className="w-full aspect-video">
      <motion.div
        ref={ref}
        style={{
          width: "100%",
          transformOrigin: "center",
          rotateX,
        }}
        className="overflow-hidden"
      >
        <Video src={introVideo} className="rounded-2xl overflow-hidden"></Video>
        {/*<img
          className="w-full scale-110 transition duration-1000 group-hover:scale-100"
          src="https://placehold.jp/1200x680.png"
          alt=""
        />*/}
      </motion.div>
    </div>
  );
};
