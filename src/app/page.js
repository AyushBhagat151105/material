"use client";
import { motion } from "framer-motion";
import { Words } from "@/data";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Material from "./material";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useRef } from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Meteors } from "@/components/ui/meteors";

export default function Home() {
  // Create a ref for the Material section
  const materialSectionRef = useRef(null);

  // Function to handle smooth scroll to Material section
  const handleScroll = () => {
    if (materialSectionRef.current) {
      // Scroll into view smoothly
      materialSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Ensure AuroraBackground does not block the button */}
      <AuroraBackground>
        <div className="relative flex flex-col items-center justify-center h-[40rem]">
          <TypewriterEffectSmooth words={Words} />

          {/* Scroll down button */}
          <motion.button
            onClick={handleScroll}
            className="z-10 mt-10 text-white bg-black px-4 py-2 rounded-full flex border border-s items-center space-x-2 hover:bg-black transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <span>Scroll Down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.button>
        </div>
      </AuroraBackground>

      {/* Material Section with ref */}
      <div ref={materialSectionRef} className="pt-10">
        <Material />
      </div>
      <WavyBackground className="max-w-4xl mx-auto pb-40 ">
        <footer className="rounded-lg mt-6 w-full bg-neutral-800 text-neutral-50 p-4 flex flex-col items-center">
          <p className="mb-2">Website created by Ayush Bhagat</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/AyushBhagat151105"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-cyan-600 hover:underline"
            >
              <FaGithub className="w-5 h-5" /> {/* GitHub icon */}
              <span>GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/ayush_bhagat_151105/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-cyan-600 hover:underline"
            >
              <FaInstagram className="w-5 h-5" /> {/* Instagram icon */}
              <span>Instagram</span>
            </a>
          </div>
        </footer>
      </WavyBackground>
    </>
  );
}
