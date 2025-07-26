"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "./Container";

const links = [
  {
    name: "HABERLER",
    href: "/blog",
  },
  {
    name: "ETKİNLİKLER",
    href: "/",
  },
  {
    name: "MÜZİKLER",
    href: "/",
  },
  {
    name: "VİDEOLAR",
    href: "/",
  },
  {
    name: "İLETİŞİM",
    href: "/",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-20 border-b border-b-[#2a2a3a] transition-colors duration-300 ${
        scrolled ? " bg-black/50 backdrop-blur-md" : "bg-[#121212]"
      }`}
    >
      <Container
        size="main"
        className="flex items-center justify-between h-full"
      >
        <div className="flex items-center gap-8 xl:gap-32">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/Images/navbar.svg"
              alt="logo"
              width={235}
              height={59}
            />
          </Link>
          <div className="flex items-center space-x-6 text-white">
            {links.map((link) => (
              <Link
                key={link.name}
                className="cursor-pointer font-saira-normal text-[1vw] hover:text-gray-300 transition-colors"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <Image
            src="/vectors/Vector.svg"
            alt="vector icon"
            width={23}
            height={22}
          />
          <button className="w-30 h-10 bg-white text-black font-saira-bold text-sm md:text-base hover:bg-gray-100 transition-colors">
            Giriş Yap
          </button>
        </div>
      </Container>
    </nav>
  );
}
