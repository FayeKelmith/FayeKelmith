"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "../button";
import { useState, useEffect } from "react";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <nav className="flex justify-between px-8">
      <h1>
        <Link href="/">
          Kel<span className="text-jade">mith</span>
        </Link>
      </h1>

      <div className="hidden sm:block">
        {/* <Link href="/projects" className="">
          <Button
            variant="outline"
            className="dark:border-slate-300 dark:border-2"
          >
            Projects
          </Button>
        </Link>
        <Link href="/essays" className="px-8 ">
          <Button
            variant="outline"
            className="dark:border-slate-300 dark:border-2"
          >
            Essays
          </Button>
        </Link> */}

        {mounted &&
          (theme === "dark" ? (
            <Button onClick={() => setTheme("light")}>Light Mode</Button>
          ) : (
            <Button onClick={() => setTheme("dark")}>Dark Mode</Button>
          ))}
      </div>
    </nav>
  );
};

export default NavBar;
