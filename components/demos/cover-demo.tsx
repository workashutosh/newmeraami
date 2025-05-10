import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-3xl 
       font-semibold
        max-w-7xl 
        mx-auto 
        md:text-center 
        relative
         z-20  mb-6
         bg-clip-text
          text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Your Business Isn’t Boring. So Why Settle for Boring Marketing? <br />  
      </h1>
      <h1 className="text-3xl md:text-3xl 
       font-semibold
        max-w-7xl 
        mx-auto 
        md:text-center 
        relative
         z-20">
      <Cover>Meraami Marketing Services</Cover>
      </h1>
    </div>
  );
}
