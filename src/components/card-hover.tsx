import { HoverEffect } from "../components/ui/card-hover-effect";
export function CardHoverEffectDemo() {
  
  return (
<div className="max-w-5xl mx-auto px-2">
  <div className="p-0 max-w-5xl mx-auto relative z-5 w-full pt-10 md:pt-0">
  <h1 className="text-center text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold whitespace-nowrap">Algunos de nuestros beneficios.</h1>

  </div>
  <HoverEffect items={projects} className="mt-8" />
</div>

  );
}
export const projects = [
  {
    title: "Reseñas en linea",
    description:
      "Automatiza tus reseñas en línea con solo unos pocos clics y responde a las reseñas en un solo lugar.",
  },
  {
    title: "Mensajería",
    description:
      "Administra tus mensajes con una bandeja de entrada única para mensajes de texto, mensajes de Facebook, mensajes de Google y más.",
 
  },
  {
    title: "Chat web",
    description:
      "Convierte a más visitantes del sitio web en conversaciones de ventas y clientes potenciales con el chat web.",

  },
  {
    title: "Pagos",
    description:
      "Facturación de clientes mediante mensajes de texto simplificada. Simplifica la facturación de tus clientes y recibe pagos más rápidos.",
  },
  {
    title: "Respuesta automática de mensajes perdidos",
    description:
      "Cuando estés ausente, deja que nuestro software haga un seguimiento mediante mensajes de texto para que nunca pierdas otro cliente.",
  },
  {
    title: "CRM",
    description:
      "Haz crecer tu audiencia y conoce de dónde vienen los nuevos clientes potenciales.",
  },
];