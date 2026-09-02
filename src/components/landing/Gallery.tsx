import img1 from "@/assets/gallery/gallery-carga-industrial.jpg";
import img2 from "@/assets/gallery/gallery-mudanza-maquinaria.jpg";
import img3 from "@/assets/gallery/gallery-transporte-vehiculo.jpg";
import img4 from "@/assets/gallery/gallery-transporte-modulo.jpg";
import img5 from "@/assets/gallery/gallery-forklift-traslado.jpg";
import img6 from "@/assets/gallery/gallery-flota-eleveplus.jpg";
import { useFadeIn } from "@/hooks/use-fade-in";

const photos = [
  { img: img1, alt: "Camión plataforma ELEVAPLUS transportando equipos industriales" },
  { img: img2, alt: "Traslado de maquinaria industrial pesada" },
  { img: img3, alt: "Transporte de vehículo utilitario en camión plataforma" },
  { img: img4, alt: "Transporte de módulo y estructura sobre camión plataforma" },
  { img: img5, alt: "Traslado de autoelevador en camión con acoplado" },
  { img: img6, alt: "Camión de la flota ELEVAPLUS" },
];

export function Gallery() {
  const fade = useFadeIn<HTMLDivElement>();
  return (
    <section id="trabajos" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-14 grid gap-6 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            <span className="h-px w-10 bg-accent" />
            <span>03 — Trabajos realizados</span>
          </div>
          <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Cargas reales, en obra, todos los días.
          </h2>
        </div>
        <div
          ref={fade.ref}
          className={`grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 ${fade.className}`}
        >
          {photos.map((p, i) => (
            <div
              key={p.alt}
              className={`group relative overflow-hidden bg-muted ${
                i === 0 ? "col-span-2 aspect-[16/10] sm:col-span-1 sm:aspect-[4/3]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
