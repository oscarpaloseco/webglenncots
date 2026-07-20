export type Area = {
  id: string;
  number: string;
  title: string;
  short: string;
  intro: string;
  items: { name: string; desc: string }[];
  icon: "thyroid" | "gut" | "immune" | "metabolic";
  image: { id: string; alt: string };
};

export const areas: Area[] = [
  {
    id: "tiroides",
    number: "01",
    title: "Salud tiroidea y endocrina",
    short: "Tiroides",
    intro:
      "La tiroides es el director de orquesta de tu metabolismo. Optimizamos su función analizando cofactores, inflamación y gestión del estrés.",
    icon: "thyroid",
    image: { id: "photo-1505576399279-565b52d4ac71", alt: "Infusión de hierbas servida en una mesa de madera, luz cálida" },
    items: [
      { name: "Hipotiroidismo (clínico y subclínico)", desc: "Mejora de la producción de hormonas tiroideas y de la conversión periférica de T4 a T3 libre." },
      { name: "Hipertiroidismo", desc: "Regulación y soporte del organismo ante el estado de hipermetabolismo." },
      { name: "Nódulos tiroideos y bocio", desc: "Abordaje de la inflamación de fondo y soporte micronutricional específico." },
    ],
  },
  {
    id: "digestiva",
    number: "02",
    title: "Salud digestiva avanzada",
    short: "Digestivo",
    intro:
      "El sistema digestivo es el epicentro de tu salud inmunitaria y hormonal. Trabajamos en profundidad para restaurar la barrera, la microbiota y la digestión.",
    icon: "gut",
    image: { id: "photo-1490645935967-10de6ba17061", alt: "Bol de verduras y legumbres frescas de colores" },
    items: [
      { name: "SIBO e IMO", desc: "Erradicar el sobrecrecimiento, reparar la mucosa y restaurar la motilidad intestinal para evitar recaídas." },
      { name: "Disbiosis y candidiasis", desc: "Reequilibrio de los ecosistemas bacterianos y fúngicos alterados por estrés, fármacos o mala alimentación." },
      { name: "H. pylori y parásitos", desc: "Soporte nutricional y fitoterapia integrativa para facilitar la erradicación sin destruir tu microbiota." },
      { name: "Hipoclorhidria y reflujo (ERGE)", desc: "Recuperación de la acidez estomacal fisiológica, esencial para digerir proteínas y absorber nutrientes." },
      { name: "SII y permeabilidad intestinal", desc: "Sanación de la pared intestinal para reducir la inflamación de bajo grado y las intolerancias secundarias." },
      { name: "Enfermedad inflamatoria intestinal", desc: "Acompañamiento en brote y remisión de Crohn y colitis ulcerosa para espaciar las crisis." },
    ],
  },
  {
    id: "autoinmunes",
    number: "03",
    title: "Enfermedades autoinmunes",
    short: "Autoinmunes",
    intro:
      "Desde la PNI clínica, tratamos la autoinmunidad calmando el sistema inmune hiperactivo mediante la salud intestinal, la cronobiología y la nutrición antiinflamatoria.",
    icon: "immune",
    image: { id: "photo-1519708227418-c8fd9a32b7a2", alt: "Hojas verdes con gotas de agua, detalle botánico" },
    items: [
      { name: "Hashimoto y enfermedad de Graves", desc: "Modulación inmunitaria para frenar el ataque a la glándula tiroides y reducir los anticuerpos." },
      { name: "Psoriasis y dermatitis atópica", desc: "Abordaje del eje intestino-piel; tratando la inflamación interna que se manifiesta en la dermis." },
      { name: "Artritis reumatoide", desc: "Mitigación del dolor articular, la rigidez y la inflamación sistémica a través de la alimentación integrativa." },
      { name: "Enfermedad celíaca", desc: "Acompañamiento en la transición sin gluten y en la regeneración de las vellosidades intestinales." },
    ],
  },
  {
    id: "metabolica",
    number: "04",
    title: "Salud metabólica y peso",
    short: "Metabólico",
    intro:
      "Te ayudo a salir del círculo vicioso de la inflamación metabólica y la resistencia a la insulina para lograr un peso saludable de forma sostenible.",
    icon: "metabolic",
    image: { id: "photo-1512621776951-a57141f2eefd", alt: "Bol de comida saludable con verduras, cereales y aguacate" },
    items: [
      { name: "Pérdida de peso y recomposición", desc: "Sin pasar hambre ni contar calorías de forma obsesiva: flexibilidad metabólica y preservación de masa muscular." },
      { name: "Síndrome metabólico", desc: "Abordaje conjunto de la grasa abdominal, la hipertensión y la alteración de glucosa y lípidos." },
      { name: "Resistencia a la insulina y DM2", desc: "Estrategias de nutrición y estilo de vida para restaurar la sensibilidad celular a la glucosa." },
      { name: "Dislipemias", desc: "Interpretación avanzada del perfil lipídico y estrategias para reducir el riesgo cardiovascular real." },
      { name: "Hígado graso (EHGNA)", desc: "Protocolos de nutrición específica para revertir la acumulación de grasa en el hígado." },
    ],
  },
];
