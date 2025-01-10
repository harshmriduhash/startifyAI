"use client";
import { useRouter, usePathname } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function FloatingSearchButton() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === "/") {
      // If on the home page, scroll to search section
      const searchSection = document.getElementById("search");
      if (searchSection) {
        searchSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If not on the home page, navigate to home and scroll to search
      router.push("/#search");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
      aria-label="Go to Search Section"
    >
      <MagnifyingGlassIcon className="h-6 w-6" />
    </button>
  );
}
