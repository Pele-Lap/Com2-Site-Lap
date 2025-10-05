// components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = ["home", "homework", "document", "contact", "account"];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white p-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">Com2-Site-Lab</div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => {
            const href = `/${item.toLowerCase()}`;
            const active = pathname === href;
            return (
              <Link
                key={item}
                href={href}
                className={`text-sm ${
                  active ? "text-green-400 font-bold" : "text-white"
                } hover:underline transition`}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-blue-600 transition"
        >
          {isOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="flex flex-col mt-4 space-y-3 md:hidden">
          {navItems.map((item) => {
            const href = `/${item.toLowerCase()}`;
            const active = pathname === href;
            return (
              <Link
                key={item}
                href={href}
                className={`text-sm ${
                  active ? "text-green-400 font-bold" : "text-white"
                } hover:underline transition`}
                onClick={() => setIsOpen(false)} 
              >
                {item}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
