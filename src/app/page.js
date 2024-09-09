"use client";
import { DBMS, DS, ECOM, IKS, MATHS, WAD } from "@/data";
import { FaGithub, FaInstagram } from "react-icons/fa";
import AnimatedLink from "@/components/animatedButton";
import { BackgroundLines } from "@/components/ui/background-lines";
export default function Home() {
  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full h-screen flex-col px-4">
        <h1 className="bg-clip-text text-5xl font-bold mb-7 mt-3 md:px-4 px-4 lg:text-6xl">
          SPCAM BCA MATERIALS FOR SAM 3
        </h1>
      </BackgroundLines>
      <div className="flex items-center justify-center flex-col">
        <br />
        <h1 className="mt-8 text-3xl font-bold">DBMS</h1>
        {DBMS.map((index, i) => {
          return (
            <div key={i} className="flex flex-col p-3">
              <AnimatedLink name={index.unit} href={index.href} />
            </div>
          );
        })}

        <h1 className="text-3xl font-bold mt-7">ECOM</h1>
        {ECOM.map((index, i) => {
          return (
            <div key={i} className="flex flex-col p-3">
              <AnimatedLink name={index.unit} href={index.href} />
            </div>
          );
        })}

        <h1 className="text-3xl font-bold mt-7">DS</h1>
        {DS.map((index, i) => {
          return (
            <div key={i} className="flex flex-col p-3">
              <AnimatedLink name={index.unit} href={index.href} />
            </div>
          );
        })}

        <h1 className="text-3xl font-bold mt-7">WAD</h1>
        {WAD.map((index, i) => {
          return (
            <div key={i} className="flex flex-col p-3">
              <AnimatedLink name={index.unit} href={index.href} />
            </div>
          );
        })}

        <h1 className="text-3xl font-bold mt-7">IKS</h1>
        {IKS.map((index, i) => {
          return (
            <div key={i} className="flex flex-col p-3">
              <AnimatedLink name={index.unit} href={index.href} />
            </div>
          );
        })}

        <h1 className="text-3xl font-bold mt-7">MATHS</h1>
        {MATHS.map((index, i) => {
          return (
            <div key={i} className="flex flex-col p-3">
              <AnimatedLink name={index.unit} href={index.href} />
            </div>
          );
        })}

        <footer className="mt-6 w-full bg-neutral-800 text-neutral-50 p-4 flex flex-col items-center">
          <p className="mb-2">Website devoted by Ayush Bhagat</p>
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
      </div>
    </>
  );
}
