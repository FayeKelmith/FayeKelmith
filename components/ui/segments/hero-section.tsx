"use client";
import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

import { Pickaxe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "Write Code 💻",
      "Write Essays ✏ ",
      "Build Businesses",
      "am a Friend 🤞",
      "love eating 🍔",
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          {/* <div>
            <Button variant="secondary" size="sm" className="gap-4">
               <MoveRight className="w-4 h-4" />
            </Button>
          </div> */}
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Hi 👋, Kelmith. I</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              My friend (Ekep) comically described me as &quot;You are always
              that guy who makes his peers feel like they are a failure&quot;
              Ironically, he is someone more achieving than I am by a mile;
              someone I deeply respect. The context is good-spirited and I love
              it.I love it for what it makes of my friends to say so. It
              reassures me that I am in the <strong>right circle</strong>.
              People that are forward looking.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Link href="https://nordahades.com/" target="_blank" className="">
              <Button size="lg" className="gap-4 text-lg">
                I Grind Here <Pickaxe className="w-4 h-4" />
              </Button>
            </Link>
            {/* <Button size="lg" className="gap-4">
              Sign up here <MoveRight className="w-4 h-4" />
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
