"use client";

import { usePathname } from "next/navigation";
import NavigationWrapper from "./NavigationWrapper";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDocsRoute = pathname.startsWith("/docs");

  return (
    <>
      {!isDocsRoute && <NavigationWrapper />}
      {children}
      {!isDocsRoute && <Footer />}
    </>
  );
}