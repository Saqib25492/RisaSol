"use client";

import Link from "next/link";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4I">
            <Image
              src="/WhatsApp_Image_2025-07-25_at_6.15.39_PM-removebg-preview.png"
              alt="RISA Solutions Logo"
              width={150}
              height={36}
              className="object-contain"
            />
            <p className="text-muted-foreground text-sm">
              Empowering businesses with intelligent supply chain solutions for the modern economy.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/solutions" className="hover:text-primary transition-colors">
                  Inventory Optimization
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-primary transition-colors">
                  Supply Chain Analytics
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-primary transition-colors">
                  Procurement Planning
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-primary transition-colors">
                  Warehouse Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Industries</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/industries" className="hover:text-primary transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-primary transition-colors">
                  Food & Beverage
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-primary transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-primary transition-colors">
                  E-commerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              {/*
              <li>
                <Link href="/resources" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              */}
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 RISA Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
