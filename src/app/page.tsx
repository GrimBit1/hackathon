import HeroSection from "@/components/hero-section";
import PlayersSection from "@/components/players-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <PlayersSection/>
    </main>
  );
}
