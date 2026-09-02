import { Truck, Wrench, Zap, Handshake } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

const points = [
  {
    icon: Truck,
    title: "Cobertura nacional",
    desc: "Trabajamos en zona sur y hacemos envíos a todo el país.",
  },
  {
    icon: Wrench,
    title: "Equipos en excelente estado",
    desc: "Mantenimiento constante para que tu trabajo no se detenga.",
  },
  {
    icon: Zap,
    title: "Atención rápida",
    desc: "Respondemos tus consultas y coordinamos la entrega sin demoras.",
  },
  {
    icon: Handshake,
    title: "Experiencia en el rubro",
    desc: "Años acompañando a empresas, contratistas y particulares.",
  },
];

export function WhyUs() {
  const fade = useFadeIn<HTMLDivElement>();
  return (
    <section id="por-que" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-14 grid gap-6 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            <span className="h-px w-10 bg-accent" />
            <span>04 — Por qué elegirnos</span>
          </div>
          <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Trabajamos como si tu obra fuera nuestra.
          </h2>
        </div>
        <div
          ref={fade.ref}
          className={`grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4 ${fade.className}`}
        >
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col gap-4 bg-background p-8">
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-accent text-accent-foreground">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h3 className="text-lg font-bold tracking-tight">{title}</h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
