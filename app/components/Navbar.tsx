"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    if (pathname === "/") {
      // Scroll smoothly if already on the home page
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home and go to section
      router.push(`/#${section}`);
    }
    setIsMenuOpen(false); // Close mobile menu on click
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold hover:text-blue-500">
          StartifyAI 🚀
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link href="/" className="hover:text-blue-500 tracking-widest uppercase text-sm">
              Home
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleNavClick("about")}
              className="hover:text-blue-500 tracking-widest uppercase text-sm"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick("search")}
              className="hover:text-blue-500 tracking-widest uppercase text-sm"
            >
              Global Search
            </button>
          </li>
          <li>
            <Link href="/startup-health-check" className="hover:text-blue-500 tracking-widest uppercase text-sm">
              Health Check
            </Link>
          </li>
          <li>
            <Link
              href="/pitch-deck-generator"
              className="hover:text-blue-500 tracking-widest uppercase text-sm"
            >
              Pitch Deck
            </Link>
          </li>
          <li>
            <Link href="/history" className="hover:text-blue-500 tracking-widest uppercase text-sm">
              History
            </Link>
          </li>
        </ul>

        {/* Authentication */}
        <div className="hidden md:flex items-center space-x-4">
          <SignedOut>
            <SignInButton>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("about")}
                className="hover:text-blue-500"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("search")}
                className="hover:text-blue-500"
              >
                Global Search
              </button>
            </li>
            <li>
              <Link
                href="/startup-health-check"
                className="hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Health Check
              </Link>
            </li>
            <li>
              <Link
                href="/pitch-deck-generator"
                className="hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Pitch Deck
              </Link>
            </li>
            <li>
              <Link
                href="/history"
                className="hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                History
              </Link>
            </li>
          </ul>
          <div className="mt-4">
            <SignedOut>
              <SignInButton>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 w-full">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}
