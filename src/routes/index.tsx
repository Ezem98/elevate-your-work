import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Gallery } from "@/components/landing/Gallery";
import { WhyUs } from "@/components/landing/WhyUs";
import { Coverage } from "@/components/landing/Coverage";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <WhyUs />
        <Coverage />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
