"use client"

import Footer from "@/components/custom/Footer";
import NavBar from "@/components/custom/NavBar";
import { useUser } from "@/contexts/UserContext";
import Navigation from "@/types/Navigaton";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function PageWrapper({ children }: { children?: React.ReactNode }) {
  const pathname = usePathname();
  const {userData} = useUser();
  
  const [navigation, setNavigation] = useState<Navigation[]>([
    { name: 'Muscle Chart', href: '/', current: true },
    { name: 'About', href: '/about/', current: false },
    { name: 'Calendar', href: `/calendar/${userData?.id}`, current: false },
  ]);

  useEffect(() => {
    if (pathname) {
      setNavigation((prevNav) =>
        prevNav.map((item) => ({
          ...item,
          current: pathname === item.href,
        }))
      );
    }
  }, [pathname]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <NavBar navigation={navigation} />
      </header>
      <main className="flex-grow m-auto mt-8 mb-8 w-full sm:w-full md:w-5/6 lg:w-3/4 p-4 h-full">
        {children || <div>Loading content...</div>}
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default PageWrapper;
