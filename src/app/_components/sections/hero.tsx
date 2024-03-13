// src/app/_components/hero.tsx
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center hover:fade-out duration-700 items-center text-center bg-cover bg-center" 
        style={{ backgroundImage: "url('/assets/bg-hero.webp')" }}>
      <Image className="hover:scale-105 transition-transform duration-700" 
      src='/assets/uaant-logo.webp' alt="UAANT Logo" width={160} height={160} layout="fixed" />
      
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-relaxed hover:scale-105 transition-transform duration-700">
        Ukrainian-Australian Association <br /> of Northern Territory
      </h1>
      
      
    </section>
  );
}
