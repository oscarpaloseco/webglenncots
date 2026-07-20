export const site = {
  name: "Glenn Cots",
  role: "Dietista-Nutricionista",
  tagline: "Nutrición clínica y PNI para tiroides, autoinmunidad y salud digestiva",
  email: "hola@glenncots.com",
  instagram: "https://instagram.com/",
  bookingUrl: "/contacto",
  // Pendiente: enlace real de "Productos recomendados". De momento va a contacto.
  productsUrl: "/contacto",
};

export type NavChild = { label: string; href: string; desc?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const nav: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Consulta",
    href: "/consulta",
    children: [
      { label: "Salud tiroidea", href: "/consulta/salud-tiroidea", desc: "Hipotiroidismo, Hashimoto, nódulos" },
      { label: "Salud digestiva", href: "/consulta/salud-digestiva", desc: "SIBO, IMO, SII, permeabilidad" },
      { label: "Enfermedades autoinmunes", href: "/consulta/enfermedades-autoinmunes", desc: "Enfoque PNI inmunomodulador" },
      { label: "Salud metabólica y peso", href: "/consulta/salud-metabolica", desc: "Resistencia a la insulina, EHGNA" },
    ],
  },
  {
    label: "Servicios",
    href: "/programa-fuegas",
    children: [
      { label: "Programa FUEGAS", href: "/programa-fuegas", desc: "Acompañamiento en grupo" },
      { label: "Ebooks y recursos", href: "/ebooks", desc: "Guías descargables" },
      { label: "Productos recomendados", href: "/contacto", desc: "Selección de confianza" },
    ],
  },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Blog", href: "/blog" },
];
