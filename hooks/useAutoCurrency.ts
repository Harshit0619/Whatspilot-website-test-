"use client";

import { useState, useEffect } from "react";

const CACHE_KEY = "detectedCurrency";
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

export default function useAutoCurrency() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check cache
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const [cachedCurrency, timestamp] = cached.split(":");
      if (Date.now() - parseInt(timestamp) < CACHE_TTL) {
        setCurrency(cachedCurrency as "INR" | "USD");
        setLoading(false);
        return;
      }
    }

    // Detect via IP
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const detected = data.country_code === "IN" ? "INR" : "USD";
        setCurrency(detected);
        localStorage.setItem(CACHE_KEY, `${detected}:${Date.now()}`);
      })
      .catch(() => {
        setCurrency("INR"); // fallback
      })
      .finally(() => setLoading(false));
  }, []);

  return { currency, loading };
}
