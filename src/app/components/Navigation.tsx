"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Solutions", path: "/solutions" },
    { name: "Industries", path: "/industries" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border/50 z-50 transition-all duration-300">
      <div className="container md:w-[80%] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/WhatsApp_Image_2025-07-25_at_6.15.39_PM-removebg-preview.png"
              alt="RISA Solutions Logo"
              width={100}   // Adjust size as needed
              height={40}
              className="object-contain"
            />

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`transition-all duration-300 hover:text-primary relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  isActive(item.path)
                    ? "text-primary font-medium after:scale-x-100"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-gradient-primary hover:opacity-90 hover-lift btn-glow">
              <Link href="/contact">Get Demo</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`transition-colors hover:text-primary ${
                    isActive(item.path)
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-gradient-primary w-fit">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get Demo
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
