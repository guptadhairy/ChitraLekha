"use client";  // This ensures the component runs on the client

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <div className="relative w-full h-dvh flex flex-col justify-center items-center space-y-6">
      {/* Heading */}
      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{ duration: 0.35, delay: 0 }}
        className="text-4xl sm:text-6xl font-bold text-white"
      >
        ChitraLekha
      </motion.h1>

      {/* 3D Model */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-full h-[400px]"
      >
        <Spline scene="https://prod.spline.design/r54KxgPRxpPLZZbS/scene.splinecode" />
      </motion.div>

      {/* Subtitle Text */}
      <motion.p
        initial={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{ duration: 0.35, delay: 0.35 }}
        className="text-center text-white/50"
      >
        Generate stunning images from text using AI models for free
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{ duration: 0.35, delay: 0.7 }}
      >
        <Link href="/create">
          <Button className="mt-3 font-bold p-5">Start Creating</Button>
        </Link>
      </motion.div>
    </div>
  );
}
