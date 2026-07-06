import forkliftImg from "@/assets/service-forklift.jpg";
import platformImg from "@/assets/service-platform.jpg";
import palletImg from "@/assets/service-pallet.jpg";
import ladderImg from "@/assets/service-ladder.jpg";
import { useFadeIn } from "@/hooks/use-fade-in";

const services = [
  {
    n: "01",
    title: "Autoelevadores",
    img: forkliftImg,
    alt: "Autoelevador amarillo",
    desc: "Equipos de distintas capacidades para carga y descarga en obra, depósito o industria. Ideales para mover mercadería pesada de forma segura y eficiente.",
  },
  {
    n: "02",
    title: "Plataformas de elevación",
    img: platformImg,
    alt: "Plataforma tijera de elevación",
    desc: "Soluciones para trabajos en altura: mantenimiento, montaje, pintura o construcción. Máxima estabilidad y seguridad en cada operación.",
  },
  {
    n: "03",
    title: "Zorras (transpaletas)",
    img: palletImg,
    alt: "Transpaleta industrial",
    desc: "Para el traslado de cargas dentro de depósitos y locales. Prácticas, resistentes y fáciles de operar.",
  },
  {
    n: "04",
    title: "Escaleras",
    img: ladderImg,
    alt: "Escalera industrial",
    desc: "Escaleras de distintas alturas para trabajos que requieren acceso rápido y seguro a zonas elevadas.",
  },
];

export function Services() {
  const fade = useFadeIn<HTMLDivElement>();
  return (
    <section id="servicios" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-14 grid gap-6 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            <span className="h-px w-10 bg-accent" />
            <span>02 — Equipos</span>
          </div>
          <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Todo lo que necesitás para mover, elevar y trabajar en altura.
          </h2>
        </div>
        <div ref={fade.ref} className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${fade.className}`}>
          {services.map((s) => (
            <article
              key={s.n}
              className="group flex flex-col border border-border bg-background transition-colors hover:border-accent"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 bg-accent px-2 py-1 text-[10px] font-bold tracking-widest text-accent-foreground">
                  {s.n}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-lg font-bold tracking-tight">{s.title}</h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}