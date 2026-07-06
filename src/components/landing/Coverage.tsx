import { MapPin } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

export function Coverage() {
  const fade = useFadeIn<HTMLDivElement>();
  return (
    <section id="cobertura" className="border-b border-border bg-primary text-primary-foreground">
      <div
        ref={fade.ref}
        className={`mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_auto] md:items-center md:px-10 md:py-28 ${fade.className}`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-primary-foreground/60">
            <span className="h-px w-10 bg-accent" />
            <span>04 — Zona de cobertura</span>
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Trabajamos en zona sur.{" "}
            <span className="text-accent">Llegamos a todo el país.</span>
          </h2>
          <p className="max-w-2xl text-base font-light text-primary-foreground/75 sm:text-lg">
            Si estás en zona sur podemos coordinar entrega inmediata. Y si estás en cualquier otro
            punto de Argentina, también te llevamos el equipo que necesitás.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {["Avellaneda", "Lanús", "Quilmes", "Berazategui", "La Plata", "Todo el país"].map(
              (z) => (
                <span
                  key={z}
                  className="inline-flex items-center gap-1.5 border border-primary-foreground/20 px-3 py-1.5 text-xs font-medium uppercase tracking-wider"
                >
                  <MapPin className="h-3 w-3 text-accent" />
                  {z}
                </span>
              ),
            )}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative flex h-64 w-64 items-center justify-center border border-primary-foreground/15">
            <span className="absolute left-3 top-3 text-[10px] uppercase tracking-widest text-primary-foreground/50">
              AR / Zona Sur
            </span>
            <div className="relative h-40 w-40">
              <span className="absolute inset-0 rounded-full border border-accent/50" />
              <span className="absolute inset-4 rounded-full border border-accent/40" />
              <span className="absolute inset-8 rounded-full border border-accent/30" />
              <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}