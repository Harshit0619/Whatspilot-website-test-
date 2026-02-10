"use client";

import { useState, useEffect } from "react";
import Navigation from "./Navigation";

export default function NavigationWrapper() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <Navigation scrollY={scrollY} />;
}
