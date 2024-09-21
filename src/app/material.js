"use client";
import { DBMS, DS, ECOM, IKS, MATHS, WAD } from "@/data";
import AnimatedLink from "@/components/animatedButton";
import { Meteors } from "@/components/ui/meteors";

const Material = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-black">
      {/* Background meteors effect */}
      <Meteors number={15} />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-white">
        <h1 className="mt-8 text-3xl font-bold">DBMS</h1>
        {DBMS.map((index, i) => (
          <div key={i} className="flex flex-col p-3">
            <AnimatedLink name={index.unit} href={index.href} />
          </div>
        ))}

        <h1 className="text-3xl font-bold mt-7">ECOM</h1>
        {ECOM.map((index, i) => (
          <div key={i} className="flex flex-col p-3">
            <AnimatedLink name={index.unit} href={index.href} />
          </div>
        ))}

        <h1 className="text-3xl font-bold mt-7">DS</h1>
        {DS.map((index, i) => (
          <div key={i} className="flex flex-col p-3">
            <AnimatedLink name={index.unit} href={index.href} />
          </div>
        ))}

        <h1 className="text-3xl font-bold mt-7">WAD</h1>
        {WAD.map((index, i) => (
          <div key={i} className="flex flex-col p-3">
            <AnimatedLink name={index.unit} href={index.href} />
          </div>
        ))}

        <h1 className="text-3xl font-bold mt-7">IKS</h1>
        {IKS.map((index, i) => (
          <div key={i} className="flex flex-col p-3">
            <AnimatedLink name={index.unit} href={index.href} />
          </div>
        ))}

        <h1 className="text-3xl font-bold mt-7">MATHS</h1>
        {MATHS.map((index, i) => (
          <div key={i} className="flex flex-col p-3">
            <AnimatedLink name={index.unit} href={index.href} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Material;
