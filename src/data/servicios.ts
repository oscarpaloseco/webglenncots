// Contenido completo de cada servicio (las 4 áreas de consulta).
// Fuente única para las páginas de detalle, el hub /consulta y la home.

export type FAQ = { q: string; a: string };
export type Named = { name: string; desc: string };

export type Servicio = {
  slug: string;
  short: string;          // etiqueta corta (nav, migas)
  title: string;          // título descriptivo (tiles)
  number: string;
  icon: "thyroid" | "gut" | "immune" | "metabolic";
  image: { id: string; alt: string };
  // SEO
  seoTitle: string;       // ~55-60 car.
  seoDescription: string; // ~150-160 car.
  // Contenido
  h1: string;
  tagline: string;        // frase corta bajo el H1
  intro: string;          // párrafo de entrada
  whatIs: { heading: string; paragraphs: string[] };
  symptoms: { heading: string; intro: string; items: string[] };
  conditions: { heading: string; intro: string; items: Named[] };
  approach: { heading: string; intro: string; steps: { t: string; d: string }[] };
  includes: { heading: string; items: string[] };
  forWhom: { heading: string; items: string[] };
  faqs: FAQ[];
};

export const servicios: Servicio[] = [
  {
    slug: "salud-tiroidea",
    short: "Tiroides",
    title: "Salud tiroidea y endocrina",
    number: "01",
    icon: "thyroid",
    image: { id: "photo-1505576399279-565b52d4ac71", alt: "Infusión de hierbas sobre una mesa de madera con luz cálida" },
    seoTitle: "Nutrición para la tiroides: hipotiroidismo y Hashimoto",
    seoDescription:
      "Dietista-nutricionista especializada en tiroides. Abordaje nutricional del hipotiroidismo, la tiroiditis de Hashimoto, los nódulos y el bocio, desde la causa raíz.",
    h1: "Nutrición clínica para la salud de tu tiroides",
    tagline: "Hipotiroidismo · Hashimoto · Hipertiroidismo · Nódulos",
    intro:
      "La tiroides es el director de orquesta de tu metabolismo: influye en tu energía, tu peso, tu ánimo, tu digestión y tu descanso. Cuando se desregula, los síntomas aparecen por todas partes. Trabajamos su función analizando cofactores, inflamación de fondo y gestión del estrés para que vuelva a funcionar contigo, no contra ti.",
    whatIs: {
      heading: "Por qué la alimentación importa en la tiroides",
      paragraphs: [
        "La glándula tiroides fabrica hormonas (T4 y T3) que regulan la velocidad a la que trabaja cada célula de tu cuerpo. Para producirlas y activarlas necesita nutrientes concretos —yodo, selenio, zinc, hierro, tirosina— y un entorno sin inflamación crónica que la frene.",
        "En consulta no me quedo en la TSH. Miramos la conversión periférica de T4 a T3 (la hormona realmente activa), el estado del hígado y el intestino donde se activa buena parte de esa hormona, y los factores que están apagando tu tiroides sin que lo sepas: déficit de micronutrientes, estrés sostenido, mal descanso o una autoinmunidad silenciosa.",
        "Mi objetivo no es \"subir o bajar\" un número, sino que entiendas qué le está pasando a tu tiroides y le devuelvas las condiciones para regularse.",
      ],
    },
    symptoms: {
      heading: "Señales que suelo ver en consulta",
      intro: "Si te suenan varias de estas, tu tiroides puede estar pidiéndote atención:",
      items: [
        "Cansancio que no mejora aunque descanses",
        "Frío constante, manos y pies fríos",
        "Caída de pelo, piel seca y uñas frágiles",
        "Estreñimiento e hinchazón",
        "Dificultad para perder peso o subida inexplicable",
        "Niebla mental, falta de concentración y bajo ánimo",
      ],
    },
    conditions: {
      heading: "Qué trabajamos",
      intro: "Acompaño con un abordaje nutricional específico en:",
      items: [
        { name: "Hipotiroidismo (clínico y subclínico)", desc: "Mejora de la producción de hormonas tiroideas y de la conversión periférica de T4 a T3 libre, cuidando los cofactores clave." },
        { name: "Tiroiditis de Hashimoto", desc: "Abordaje autoinmune para calmar el ataque a la glándula y reducir la inflamación de fondo. Lo trabajo también en el área de autoinmunidad." },
        { name: "Hipertiroidismo", desc: "Regulación y soporte del organismo ante el estado de hipermetabolismo, protegiendo tus reservas de nutrientes." },
        { name: "Nódulos tiroideos y bocio", desc: "Soporte micronutricional específico y abordaje de la inflamación de fondo que acompaña estas situaciones." },
      ],
    },
    approach: {
      heading: "Cómo trabajo tu caso",
      intro: "Un proceso ordenado, sin dietas milagro, pensado para sostenerse en el tiempo.",
      steps: [
        { t: "Analítica en profundidad", d: "Revisamos TSH, T4 y T3 libres, anticuerpos (anti-TPO, anti-TG) y los micronutrientes que la tiroides necesita. Si faltan pruebas, te indico cuáles pedir." },
        { t: "Causa raíz", d: "Buscamos qué está frenando tu tiroides: intestino, hígado, estrés, descanso o déficits. No tapamos síntomas, tratamos el origen." },
        { t: "Plan personalizado", d: "Alimentación, cronobiología y la suplementación justa —ni de más ni de menos— adaptadas a tu vida real." },
        { t: "Seguimiento", d: "Revisamos analíticas y síntomas, y ajustamos. La tiroides responde despacio: te acompaño en todo el proceso." },
      ],
    },
    includes: {
      heading: "Qué incluye la consulta",
      items: [
        "Valoración completa de tu historia clínica y analíticas",
        "Interpretación avanzada de tu perfil tiroideo",
        "Plan de alimentación adaptado a tu caso y tus gustos",
        "Pauta de suplementación y hábitos, si es necesaria",
        "Revisiones de seguimiento con ajustes",
        "Acompañamiento cercano por mensajería entre visitas",
      ],
    },
    forWhom: {
      heading: "Para quién es esta consulta",
      items: [
        "Te han diagnosticado hipotiroidismo o Hashimoto y no sabes por dónde empezar",
        "Tomas medicación pero sigues con síntomas",
        "Tienes la TSH \"normal\" pero no te encuentras bien",
        "Quieres un abordaje que mire la causa, no solo el análisis",
      ],
    },
    faqs: [
      { q: "¿Puedo mejorar aunque tome levotiroxina?", a: "Sí. La medicación aporta hormona, pero la alimentación y el estilo de vida influyen en cómo la absorbes, la activas y en la inflamación de fondo. Muchas personas medicadas siguen con síntomas y mejoran al trabajar estos factores. Nunca modificamos tu medicación: eso corresponde a tu endocrino." },
      { q: "¿Tengo que quitar el gluten sí o sí?", a: "No de forma automática. En Hashimoto valoramos cada caso; en algunas personas ayuda y en otras no es necesario. Prefiero decisiones con criterio, no restricciones por moda." },
      { q: "¿Cuánto tarda en notarse la mejora?", a: "La tiroides responde despacio: solemos hablar de semanas a meses. Buscamos cambios sostenibles, no resultados exprés que luego rebotan." },
      { q: "¿Trabajas junto a mi endocrino?", a: "Sí. Mi trabajo es nutricional y complementa el seguimiento médico. No sustituyo a tu endocrino ni toco tu medicación." },
    ],
  },

  {
    slug: "salud-digestiva",
    short: "Digestivo",
    title: "Salud digestiva avanzada",
    number: "02",
    icon: "gut",
    image: { id: "photo-1490645935967-10de6ba17061", alt: "Bol de verduras y legumbres frescas de colores sobre fondo claro" },
    seoTitle: "Nutrición digestiva: SIBO, SII y permeabilidad intestinal",
    seoDescription:
      "Nutrición clínica para la salud digestiva: SIBO, IMO, disbiosis, SII, reflujo y permeabilidad intestinal. Restauramos microbiota, mucosa y motilidad desde la raíz.",
    h1: "Recupera tu salud digestiva desde la raíz",
    tagline: "SIBO · IMO · SII · Reflujo · Permeabilidad intestinal",
    intro:
      "El sistema digestivo es el epicentro de tu salud inmunitaria y hormonal: ahí vive buena parte de tu sistema inmune y se fabrica gran parte de tus neurotransmisores. Cuando el intestino no está bien, el cuerpo entero lo nota. Trabajamos en profundidad para restaurar la función barrera, la microbiota y la digestión.",
    whatIs: {
      heading: "Por qué el intestino lo cambia todo",
      paragraphs: [
        "Digerir bien no es solo \"no hincharse\". Es fabricar suficiente ácido y enzimas, tener una mucosa intestinal sana que decide qué entra y qué no, una microbiota en equilibrio y una motilidad que mantiene todo en movimiento.",
        "Cuando alguna de esas piezas falla aparecen la hinchazón, el reflujo, las digestiones pesadas, las intolerancias que van a más o los cambios en el ritmo intestinal. Y como el intestino está conectado con el sistema inmune, la piel y las hormonas, sus problemas rara vez se quedan solo ahí.",
        "Mi abordaje no persigue el síntoma con parches: preparamos el terreno, tratamos lo que sobra o falta, y reparamos la barrera para que el resultado se sostenga.",
      ],
    },
    symptoms: {
      heading: "Señales que suelo ver en consulta",
      intro: "Si convives con varias de estas, tu digestión necesita atención:",
      items: [
        "Hinchazón abdominal, sobre todo a medida que avanza el día",
        "Gases, retortijones o digestiones muy pesadas",
        "Reflujo, ardor o sensación de digestión estancada",
        "Diarrea, estreñimiento o alternancia entre ambos",
        "Intolerancias alimentarias que van en aumento",
        "Cansancio, niebla mental o problemas de piel asociados",
      ],
    },
    conditions: {
      heading: "Qué trabajamos",
      intro: "Protocolos específicos, por fases, para:",
      items: [
        { name: "SIBO e IMO", desc: "Erradicar el sobrecrecimiento bacteriano o de arqueas, reparar la mucosa y —lo más importante— restaurar la motilidad para evitar recaídas." },
        { name: "Disbiosis y candidiasis", desc: "Reequilibrio de los ecosistemas bacterianos y fúngicos alterados por el estrés, los fármacos o la alimentación." },
        { name: "Helicobacter pylori y parásitos", desc: "Soporte nutricional y fitoterapia integrativa para facilitar la erradicación sin arrasar tu microbiota." },
        { name: "Hipoclorhidria y reflujo (ERGE)", desc: "Recuperación de la acidez estomacal fisiológica, esencial para digerir proteínas, absorber nutrientes y protegerte de infecciones." },
        { name: "SII y permeabilidad intestinal", desc: "Sanación de la pared intestinal para reducir la inflamación de bajo grado, los cólicos y las intolerancias secundarias." },
        { name: "Enfermedad inflamatoria intestinal", desc: "Acompañamiento en brote y remisión de la enfermedad de Crohn y la colitis ulcerosa para espaciar las crisis y mejorar tu calidad de vida." },
      ],
    },
    approach: {
      heading: "Cómo trabajo tu caso",
      intro: "Un abordaje por fases: sin atajos y sin restricciones eternas.",
      steps: [
        { t: "Preparar el terreno", d: "Calmamos la inflamación, mejoramos la digestión y valoramos qué pruebas necesitas (test de SIBO, análisis de heces, etc.)." },
        { t: "Tratar lo que sobra o falta", d: "Abordamos el sobrecrecimiento, la disbiosis o el patógeno con soporte nutricional y fitoterapia, cuidando siempre tu microbiota." },
        { t: "Reparar la barrera", d: "Regeneramos la mucosa intestinal y reponemos lo que estaba en déficit por la mala absorción." },
        { t: "Mantenimiento", d: "Restauramos la motilidad y reintroducimos alimentos de forma progresiva y sin miedo. Aquí se gana la partida a largo plazo." },
      ],
    },
    includes: {
      heading: "Qué incluye la consulta",
      items: [
        "Valoración digestiva completa e historia clínica",
        "Orientación sobre las pruebas más útiles para tu caso",
        "Plan de alimentación por fases, adaptado a tu tolerancia",
        "Pauta de suplementación y fitoterapia, si procede",
        "Reintroducción guiada de alimentos",
        "Seguimiento cercano para evitar recaídas",
      ],
    },
    forWhom: {
      heading: "Para quién es esta consulta",
      items: [
        "Llevas tiempo hinchada o con digestiones pesadas y nadie te da una solución de fondo",
        "Te han hablado de SIBO o SII y no sabes cómo abordarlo",
        "Cada vez toleras menos alimentos",
        "Ya has \"probado de todo\" pero siempre recaes",
      ],
    },
    faqs: [
      { q: "¿Por qué el SIBO me recae una y otra vez?", a: "Casi siempre porque solo se trató el sobrecrecimiento, pero no se restauró la motilidad intestinal ni se reparó la mucosa. Esa fase de mantenimiento es la que evita las recaídas, y es donde pongo el foco." },
      { q: "¿Necesito hacerme pruebas antes de empezar?", a: "No siempre. Podemos empezar a trabajar con tu historia y tus síntomas, y valorar qué pruebas (test de SIBO, análisis de heces) aportan información útil para tu caso concreto. No pido pruebas por defecto." },
      { q: "¿Voy a tener que hacer una dieta muy restrictiva para siempre?", a: "No. Algunas fases requieren ajustes temporales, pero el objetivo es reintroducir alimentos y recuperar una alimentación amplia y flexible. Vivir a base de restricciones no es salud." },
      { q: "¿Puedes ayudarme si tengo Crohn o colitis ulcerosa?", a: "Sí, con un acompañamiento nutricional para brote y remisión que complementa —nunca sustituye— tu tratamiento digestivo con tu especialista." },
    ],
  },

  {
    slug: "enfermedades-autoinmunes",
    short: "Autoinmunes",
    title: "Enfermedades autoinmunes",
    number: "03",
    icon: "immune",
    image: { id: "photo-1519708227418-c8fd9a32b7a2", alt: "Hojas verdes con gotas de agua, detalle botánico" },
    seoTitle: "Nutrición y PNI para enfermedades autoinmunes",
    seoDescription:
      "Psiconeuroinmunología clínica y nutrición antiinflamatoria para Hashimoto, psoriasis, artritis reumatoide y celiaquía. Modulamos el sistema inmune desde la causa raíz.",
    h1: "Nutrición y PNI para enfermedades autoinmunes",
    tagline: "Hashimoto · Psoriasis · Artritis reumatoide · Celiaquía",
    intro:
      "En una enfermedad autoinmune el sistema inmune, que debería defenderte, ataca por error a tu propio cuerpo. Desde la Psiconeuroinmunología (PNI) clínica trabajamos para calmar ese sistema inmune hiperactivo a través de la salud intestinal, la cronobiología y una nutrición profundamente antiinflamatoria.",
    whatIs: {
      heading: "Qué es la PNI y por qué cambia el abordaje",
      paragraphs: [
        "La Psiconeuroinmunología estudia cómo se comunican tu sistema nervioso, tu sistema inmune y tu sistema hormonal. En autoinmunidad esto es clave: el sistema inmune no se descontrola en el vacío, sino en un contexto de inflamación intestinal, estrés sostenido, mal descanso y déficits que lo mantienen en alerta.",
        "Por eso no me centro en la enfermedad aislada, sino en el terreno que la alimenta. Cuidamos el intestino (donde vive gran parte de tu inmunidad), regulamos tus ritmos de sueño y luz, y usamos la alimentación para bajar la inflamación de fondo.",
        "No prometo curar la autoinmunidad —nadie serio debería—, pero sí ayudarte a frenar el ataque, reducir brotes y recuperar calidad de vida.",
      ],
    },
    symptoms: {
      heading: "Señales que suelo ver en consulta",
      intro: "La autoinmunidad se manifiesta de muchas formas. Es habitual encontrar:",
      items: [
        "Fatiga profunda y sensación de inflamación general",
        "Brotes que van y vienen sin causa aparente",
        "Dolor o rigidez articular",
        "Problemas de piel (placas, eccema, picor)",
        "Síntomas digestivos acompañando al cuadro",
        "Anticuerpos elevados en las analíticas",
      ],
    },
    conditions: {
      heading: "Qué trabajamos",
      intro: "Acompañamiento nutricional inmunomodulador en:",
      items: [
        { name: "Tiroiditis de Hashimoto y enfermedad de Graves", desc: "Modulación inmunitaria para frenar el ataque a la glándula tiroides y reducir los anticuerpos." },
        { name: "Psoriasis y dermatitis atópica", desc: "Abordaje del eje intestino-piel: tratamos la inflamación interna que se manifiesta en la dermis." },
        { name: "Artritis reumatoide", desc: "Mitigación del dolor articular, la rigidez y la inflamación sistémica a través de la alimentación integrativa." },
        { name: "Enfermedad celíaca", desc: "Acompañamiento estricto en la transición a una vida sin gluten y en la regeneración de las vellosidades intestinales dañadas." },
      ],
    },
    approach: {
      heading: "Cómo trabajo tu caso",
      intro: "Calmamos el sistema inmune actuando sobre el terreno que lo mantiene activado.",
      steps: [
        { t: "Salud intestinal", d: "Reparamos la barrera y equilibramos la microbiota, porque gran parte de la regulación inmune empieza en el intestino." },
        { t: "Cronobiología", d: "Ordenamos sueño, luz y ritmos: el descanso y la gestión del estrés no son un extra, son tratamiento." },
        { t: "Nutrición antiinflamatoria", d: "Construimos una alimentación que baja la inflamación de fondo, adaptada a tu patología y a tu vida." },
        { t: "Seguimiento", d: "Medimos anticuerpos y síntomas, espaciamos brotes y ajustamos el plan contigo a lo largo del proceso." },
      ],
    },
    includes: {
      heading: "Qué incluye la consulta",
      items: [
        "Valoración desde la mirada de la PNI clínica",
        "Interpretación de anticuerpos y marcadores de inflamación",
        "Plan de alimentación antiinflamatoria personalizado",
        "Trabajo de cronobiología, descanso y estrés",
        "Suplementación inmunomoduladora, si es necesaria",
        "Acompañamiento en brote y en remisión",
      ],
    },
    forWhom: {
      heading: "Para quién es esta consulta",
      items: [
        "Convives con una enfermedad autoinmune y quieres reducir brotes",
        "Notas que la alimentación y el estrés influyen en cómo te encuentras",
        "Buscas un abordaje que conecte intestino, inmunidad y hábitos",
        "Quieres a alguien que también lo ha vivido en primera persona",
      ],
    },
    faqs: [
      { q: "¿La nutrición puede curar mi enfermedad autoinmune?", a: "No, y desconfía de quien lo prometa. Lo que sí podemos hacer es modular el sistema inmune, reducir la inflamación de fondo, espaciar los brotes y mejorar mucho tu calidad de vida, siempre acompañando tu tratamiento médico." },
      { q: "¿Tengo que seguir un protocolo autoinmune (AIP) estricto?", a: "No necesariamente. El AIP es una herramienta, no un dogma. Valoro tu caso y decidimos juntas hasta dónde tiene sentido llegar, evitando restricciones innecesarias." },
      { q: "¿Sirve aunque mi enfermedad esté \"controlada\" con medicación?", a: "Sí. Incluso con la enfermedad estable, cuidar el terreno ayuda a reducir la inflamación, prevenir brotes y encontrarte mejor en el día a día." },
      { q: "¿Por qué insistes tanto en el intestino y el descanso?", a: "Porque el sistema inmune no funciona aislado: buena parte vive en el intestino y se regula con tus ritmos de sueño y estrés. Ignorar eso es tratar a medias." },
    ],
  },

  {
    slug: "salud-metabolica",
    short: "Metabólico",
    title: "Salud metabólica y peso",
    number: "04",
    icon: "metabolic",
    image: { id: "photo-1512621776951-a57141f2eefd", alt: "Bol de comida saludable con verduras, cereales y aguacate" },
    seoTitle: "Nutrición metabólica: resistencia a la insulina y peso",
    seoDescription:
      "Nutrición para la salud metabólica: resistencia a la insulina, prediabetes, síndrome metabólico, hígado graso y pérdida de peso sostenible, sin pasar hambre.",
    h1: "Salud metabólica y pérdida de peso sostenible",
    tagline: "Resistencia a la insulina · Síndrome metabólico · Hígado graso",
    intro:
      "Te ayudo a salir del círculo vicioso de la inflamación metabólica y la resistencia a la insulina para lograr un peso saludable de forma sostenible. Sin pasar hambre, sin contar calorías de forma obsesiva y sin dietas que funcionan dos semanas y rebotan.",
    whatIs: {
      heading: "El problema no es tu fuerza de voluntad",
      paragraphs: [
        "Cuando cuesta perder peso o la analítica empieza a torcerse, casi nunca es cuestión de comer menos y punto. Detrás suele haber una resistencia a la insulina: tus células dejan de responder bien a esta hormona, el cuerpo produce cada vez más y ese exceso favorece el acúmulo de grasa, el cansancio y el hambre constante.",
        "Trabajamos la flexibilidad metabólica: que tu cuerpo vuelva a usar bien tanto la glucosa como la grasa como energía. Eso se consigue con estrategia —calidad y reparto de los alimentos, ejercicio de fuerza, descanso y, cuando encaja, ayuno intermitente bien pautado—, no pasando hambre.",
        "El objetivo no es una dieta más, sino recuperar el control de tu metabolismo y de tu relación con la comida.",
      ],
    },
    symptoms: {
      heading: "Señales que suelo ver en consulta",
      intro: "Si te identificas con varias de estas, tu metabolismo pide ayuda:",
      items: [
        "Grasa que se acumula sobre todo en el abdomen",
        "Hambre y antojos constantes, sobre todo de dulce",
        "Bajones de energía después de comer",
        "Cuesta perder peso aunque \"comas bien\"",
        "Analíticas con glucosa, insulina o triglicéridos al alza",
        "Diagnóstico de prediabetes, hígado graso o síndrome metabólico",
      ],
    },
    conditions: {
      heading: "Qué trabajamos",
      intro: "Abordaje nutricional y de estilo de vida en:",
      items: [
        { name: "Pérdida de peso y recomposición corporal", desc: "Sin pasar hambre ni contar calorías de forma obsesiva. Nos enfocamos en la flexibilidad metabólica, la pérdida de grasa y la preservación de masa muscular." },
        { name: "Resistencia a la insulina, prediabetes y diabetes tipo 2", desc: "Estrategias de nutrición y estilo de vida —ejercicio de fuerza, ayuno bien pautado— para restaurar la sensibilidad celular a la glucosa." },
        { name: "Síndrome metabólico", desc: "Abordaje conjunto de los factores que elevan el riesgo cardiovascular: grasa abdominal, hipertensión y alteración de glucosa y lípidos." },
        { name: "Dislipemias (colesterol y triglicéridos)", desc: "Interpretación avanzada del perfil lipídico, más allá del \"colesterol total\", y estrategias para reducir el colesterol oxidado y el riesgo real." },
        { name: "Hígado graso no alcohólico (EHGNA)", desc: "Nutrición específica y soporte hepático para revertir la acumulación de grasa en el hígado." },
      ],
    },
    approach: {
      heading: "Cómo trabajo tu caso",
      intro: "Estrategia, no restricción. Cambios que puedes sostener toda la vida.",
      steps: [
        { t: "Leer tu metabolismo", d: "Interpretamos glucosa, insulina, HOMA, perfil lipídico y hepático para entender de dónde partes." },
        { t: "Recuperar la sensibilidad", d: "Trabajamos la calidad y el reparto de los alimentos para bajar la insulina y calmar los antojos." },
        { t: "Sumar músculo y movimiento", d: "El ejercicio de fuerza es clave para captar glucosa. Lo integramos de forma realista en tu día." },
        { t: "Descanso y hábitos", d: "El sueño y el estrés disparan la glucosa aunque comas perfecto. Los cuidamos como parte del plan." },
      ],
    },
    includes: {
      heading: "Qué incluye la consulta",
      items: [
        "Interpretación avanzada de tu analítica metabólica",
        "Plan de alimentación flexible, sin pasar hambre",
        "Pautas de ejercicio de fuerza y actividad diaria",
        "Estrategias de descanso y gestión del estrés",
        "Educación para que ganes autonomía con la comida",
        "Seguimiento con ajustes según tu evolución",
      ],
    },
    forWhom: {
      heading: "Para quién es esta consulta",
      items: [
        "Te cuesta perder peso aunque lo intentas todo",
        "Tienes resistencia a la insulina, prediabetes o hígado graso",
        "Estás cansada de dietas que rebotan",
        "Quieres entender tu cuerpo y no depender de una \"dieta\" para siempre",
      ],
    },
    faqs: [
      { q: "¿Voy a pasar hambre?", a: "No es el objetivo ni la estrategia. Trabajamos la saciedad y la calidad de los alimentos para que comas suficiente y dejes de tener antojos. El hambre constante es señal de que algo está mal planteado." },
      { q: "¿Tengo que contar calorías?", a: "No de forma obsesiva. Me interesa más la calidad, el reparto y tu relación con la comida que un número. La flexibilidad metabólica se recupera con estrategia, no con una calculadora." },
      { q: "¿Se puede revertir la resistencia a la insulina o el hígado graso?", a: "En muchos casos se puede mejorar mucho e incluso revertir con cambios de alimentación y estilo de vida sostenidos. Depende de cada persona, pero el margen suele ser grande." },
      { q: "¿Es imprescindible el ejercicio de fuerza?", a: "Es una de las herramientas más potentes para captar glucosa y mejorar tu metabolismo. Lo adaptamos a tu punto de partida, pero cuesta lograr buenos resultados sin nada de fuerza." },
    ],
  },
];

export const getServicio = (slug: string) => servicios.find((s) => s.slug === slug);
