"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { MoveUp } from "lucide-react";
import { animateScroll as scroll } from "react-scroll";

const BackToTopButton: React.FC = () => {
  const scrollY = useScrollPosition();
  const isVisible = scrollY > 300;

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 1500, smooth: "easeInOutQuint" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={`fixed right-11 bottom-11 z-50 p-3 bg-primary text-white transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <MoveUp className="w-4 h-4" />
    </button>
  );
};

export default BackToTopButton;
