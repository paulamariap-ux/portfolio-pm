(function () {
  // Source of truth for English is the HTML itself (the text you write in
  // index.html). This dictionary only holds the Spanish translations, keyed by
  // the same data-i18n keys. To add/adjust English copy, edit the HTML; to
  // adjust Spanish, edit the matching key below.
  const es = {
    "meta.title": "Paula Pirles — Product Manager",
    "meta.description": "Portfolio de Paula Pirles, Product Manager con foco en food-tech, growth y experiencia de usuario.",

    "nav.about": "Sobre mí",
    "nav.what": "Qué hago",
    "nav.timeline": "Recorrido",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.courses": "Cursos",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Product Manager · Food-tech · Growth",
    "hero.hi": "Hola, soy",
    "hero.role1": "No solo construyo productos—",
    "hero.role2": "entiendo el negocio detrás de ellos.",
    "hero.tagline": "De la cocina al storefront — idea, launch y bastante más allá.",
    "hero.lead": "Fundé y operé mi propia empresa de food durante más de 10 años — líneas de producto, business units, cocinas activas. Hoy llevo esa mentalidad de fundadora a productos digitales.",
    "hero.ctaPrimary": "Ver mi trabajo",
    "hero.ctaSecondary": "Contactame",

    "stats.years": "Años en la industria alimentaria",
    "stats.digital": "Años construyendo productos digitales",
    "stats.advised": "Negocios gastronómicos asesorados",
    "stats.curiosity": "Curiosidad",

    "about.eyebrow": "Sobre mí",
    "about.title": "Pensamiento de producto, con base operativa.",
    "about.p1": "Soy Lic. en Nutrición, especialista culinaria devenida en Product Manager. Durante más de 15 años trabajé on site en la industria alimentaria gestionando las operaciones, el back-of-house y los sistemas de calidad. Los últimos 6 años me dediqué a colaborar en la construcción de productos digitales con todo ese conocimiento integrado.",
    "about.p2": "Esa mezcla es mi ventaja: trabajo los dos lados del producto — el back-of-house (operaciones, cocinas, sistemas de calidad) y el frontend (menu merchandising, product marketing, cómo se ve y se vende). Puedo hablar con chefs, emprendedores gastronómicos, equipos de ops, ingenieros y diseñadores en su propio idioma, traducir la realidad caótica de una cocina en un software que se entrega y soluciona una necesidad, priorizando decisiones que efectivamente mueven las métricas del negocio.",

    "what.eyebrow": "Cómo trabajo",
    "what.title": "Qué hago, qué uso, qué podés esperar.",
    "what.doTitle": "Qué hago",
    "what.do1": "Visión y estrategia de producto",
    "what.do2": "Roadmap y priorización",
    "what.do3": "Gestión de stakeholders",
    "what.do4": "Definición de métricas y KPIs",
    "what.do5": "Experimentación (A/B, escasez, LTOs)",
    "what.do6": "Entrega cross-funcional",
    "what.do7": "Launch y go-to-market",
    "what.do8": "Menu & product merchandising",
    "what.do9": "Live Ops (e-commerce)",
    "what.do10": "Expertise de dominio en food-tech",
    "what.useTitle": "Habilidades",
    "what.toolsTitle": "Herramientas",
    "what.expectTitle": "Qué podés esperar",
    "what.exp1": "Mentalidad de fundadora en cada iniciativa",
    "what.exp2": "Calma bajo caos operativo",
    "what.exp3": "Puente entre voces técnicas y no técnicas",
    "what.exp4": "Decisiones basadas en datos",
    "what.exp5": "Planteo claro del problema antes que soluciones",
    "what.exp6": "Loops cortos de feedback con eng y diseño",
    "what.exp7": "Profundidad de dominio en operaciones, alimentos y nutrición",
    "what.exp8": "Colaboración bilingüe y multicultural",

    "journey.eyebrow": "Mi trayectoria",
    "journey.title": "My Journey",
    "journey.s1.title": "Operaciones hoteleras",
    "journey.s1.desc": "Aprendí a gestionar operaciones de alimentos complejas a gran escala.",
    "journey.s2.title": "Fundadora de un negocio gastronómico",
    "journey.s2.desc": "Construí y escalé un negocio de alimentos multi-unidad desde cero.",
    "journey.s3.title": "Consultora",
    "journey.s3.desc": "Ayudé a más de 100 founders a resolver desafíos de operaciones y producto.",
    "journey.s4.title": "MealIQ",
    "journey.s4.desc": "Traduje expertise profundo en nutrición a desarrollo de producto.",
    "journey.s5.title": "CookUnity Culinary",
    "journey.s5.desc": "Escalé operaciones digitales de alimentos y el onboarding de chefs.",
    "journey.s6.title": "CookUnity Product",
    "journey.s6.desc": "Hoy construyo experiencias de producto que mejoran discovery, adopción y crecimiento.",

    "timeline.eyebrow": "Storytelling",
    "timeline.title": "Mi recorrido por los productos.",
    "timeline.sub": "Para cada hito: el desafío, mi rol y los logros clave.",
    "timeline.label.challenge": "Desafío:",
    "timeline.label.role": "Rol:",
    "timeline.label.keyWins": "Logros clave:",
    "timeline.t1.date": "2024 – Presente",
    "timeline.t1.title": "CookUnity — Product Marketing Associate & Menu Merchandiser",
    "timeline.t1.challenge": "Aumentar el discovery de comidas para impulsar la adopción de producto, el engagement y la retención de largo plazo.",
    "timeline.t1.role": "Fui dueña de la experiencia de discovery a través del merchandising de la homepage, colecciones de producto, labels, líneas de producto y lanzamientos GTM, en conjunto con los equipos de Producto, Diseño, CRM, Supply y Chefs.",
    "timeline.t1.result1": "Aumenté la exposición de SKU Expansion del 14,65% al 16,1%",
    "timeline.t1.result2": "Contribuí al crecimiento de la adopción del 25,7% al 34,1%",
    "timeline.t1.result3": "Lancé el Protein Label, aumentando los pedidos de comidas etiquetadas un 13,2% y el AOV un 2,7%",
    "timeline.t1.result4": "Escalé el merchandising personalizado a 45K usuarios activos semanales",
    "timeline.t2.date": "2020 – 2022",
    "timeline.t2.title": "MealIQ — Product Manager",
    "timeline.t2.challenge": "Transformar una plataforma de nutrición en etapa temprana, con brechas críticas de dominio, en un producto white-label confiable para clientes enterprise.",
    "timeline.t2.role": "Trabajé junto al CEO y al equipo de ingeniería como referente de nutrición, traduciendo requerimientos nutricionales complejos en decisiones de producto y liderando la evolución de las funcionalidades core de la plataforma.",
    "timeline.t2.result1": "Construí una ontología de ingredientes con más de 2.000 ingredientes mapeados",
    "timeline.t2.result2": "Gestioné un catálogo de más de 500 recetas",
    "timeline.t2.result3": "Armé y lideré un equipo de 3 nutricionistas",
    "timeline.t2.result4": "Di soporte al lanzamiento de la plataforma y a la integración con Kroger Supermarkets",
    "timeline.t3.date": "2020 – 2022",
    "timeline.t3.title": "CookUnity — Culinary Specialist",
    "timeline.t3.role": "Fui dueña del ciclo de vida operativo de los lanzamientos de nuevas comidas, en conjunto con los chefs, para escalar la calidad de las recetas, la precisión nutricional y las operaciones del catálogo.",
    "timeline.t3.result1": "Lancé más de 1.000 comidas",
    "timeline.t3.result2": "Estandaricé la arquitectura de recetas y los datos nutricionales",
    "timeline.t3.result3": "Desarrollé conocimiento operativo profundo del marketplace de CookUnity y su ecosistema de chefs",
    "timeline.t4.date": "2020 – Presente",
    "timeline.t4.title": "Consultora en FoodTech y Hospitalidad",
    "timeline.t4.challenge": "Ayudar a founders y negocios gastronómicos a transformar su expertise operativo en productos y procesos escalables.",
    "timeline.t4.role": "Asesoré a startups y emprendedores en menu engineering, sistemas de nutrición, compliance, operaciones gastronómicas, gestión de recetas y estrategia de producto.",
    "timeline.t4.result1": "Asesoré a más de 100 startups y founders",
    "timeline.t4.result2": "Alcancé Top Rated Plus en Upwork",
    "timeline.t4.result3": "Trabajé en múltiples modelos de negocio y mercados de FoodTech",
    "timeline.t5.date": "2010 – 2020",
    "timeline.t5.title": "Delight Bariloche — Fundadora y dueña del negocio gastronómico",
    "timeline.t5.challenge": "Construir y escalar un negocio de alimentos multicanal y rentable, equilibrando experiencia del cliente, excelencia operativa y sustentabilidad financiera.",
    "timeline.t5.role": "Lideré todos los aspectos del negocio, incluyendo operaciones, compras, menu engineering, desarrollo de producto, seguridad alimentaria, contratación y estrategia de crecimiento.",
    "timeline.t5.result1": "Atendí a más de 1.000 clientes por día",
    "timeline.t5.result2": "Escalé el negocio a 3 unidades de negocio",
    "timeline.t5.result3": "Logré un crecimiento anual del 15%",
    "timeline.t5.result4": "Me expandí a meal prep, catering, distribución minorista y food service institucional",
    "timeline.t6.date": "2004 – 2009",
    "timeline.t6.title": "Industria de la hospitalidad — Gerente de Operaciones de Hotel",
    "timeline.t6.challenge": "Mejorar la eficiencia operativa y la calidad del servicio de alimentos a gran escala.",
    "timeline.t6.role": "Gestioné las operaciones de food service de un hotel de 600 huéspedes, supervisando producción, control de costos, sistemas de calidad y optimización de procesos.",
    "timeline.t6.result1": "Reduje los costos de alimentos un 20%",
    "timeline.t6.result2": "Implementé BPM y obtuve la certificación ISO 9001",
    "timeline.t6.result3": "Lideré operaciones de hospitalidad a gran escala",

    "projects.eyebrow": "Casos de estudio",
    "projects.title": "Proyectos seleccionados.",
    "projects.sub": "Hacé clic en cualquier proyecto para ver el caso de estudio completo.",
    "projects.viewMore": "Ver más",
    "projects.close": "Cerrar",
    "case.label.challenge": "Desafío",
    "case.label.role": "Mi rol",
    "case.label.solution": "Solución",
    "case.label.result": "Resultado",
    "case.label.keyTakeaway": "Aprendizaje clave",
    "case.label.status": "Estado",
    "case.stage.research": "🔍 Investigación",
    "case.stage.experimentation": "🧪 Experimentación",
    "case.stage.productBuilding": "🚀 Construcción de producto",
    "case.stage.growth": "📈 Growth",
    "case.stage.entrepreneurship": "💡 Emprendimiento",
    "case.stage.enterpriseProduct": "💻 Producto enterprise",

    "case.proteinLabel.title": "Protein Label",
    "case.proteinLabel.summary": "Ayudar a los clientes a identificar de un vistazo comidas altas en proteína, a través de un label nutricional basado en principios de prueba social.",
    "case.proteinLabel.challenge": "Validar si un label nutricional simple podía mejorar el descubrimiento de comidas antes de invertir recursos de ingeniería.",
    "case.proteinLabel.role": "Investigué tendencias de mercado, diseñé un MVP de bajo costo usando herramientas de merchandising existentes, y lideré el experimento desde la hipótesis hasta la productización.",
    "case.proteinLabel.result1": "+13,2% de órdenes en comidas etiquetadas",
    "case.proteinLabel.result2": "+2,7% de AOV incremental",
    "case.proteinLabel.result3": "Funcionalidad productizada tras una validación exitosa",

    "case.filters.title": "Diseñando un sistema de filtros avanzados centrado en el usuario",
    "case.filters.summary": "Rediseñar el sistema de filtros avanzados de CookUnity en torno a los modelos mentales de los usuarios, como parte de la iniciativa Core UX.",
    "case.filters.challenge": "A los usuarios les costaba encontrar comidas que coincidieran con sus preferencias porque la experiencia de filtrado era confusa, inconsistente y estaba construida en base a nuestra taxonomía interna en lugar de los modelos mentales de los usuarios. El objetivo era rediseñar todo el sistema de filtros como parte de la iniciativa Core UX de CookUnity para reducir la fricción y mejorar el descubrimiento de comidas.",
    "case.filters.role": "Fui dueña de la iniciativa de Filtros Avanzados, trabajando junto a Producto, UX Research, Diseño, Copy e Ingeniería. Lideré la síntesis de la investigación y traduje los insights de usuarios en una nueva arquitectura de información, taxonomía de filtros, estrategia de naming, lógica nutricional y requerimientos de producto.",
    "case.filters.result1": "Rediseñé todo el sistema de filtros avanzados en base a investigación UX y tree testing",
    "case.filters.result2": "Reorganicé los filtros en torno a los modelos mentales de los usuarios en lugar de la categorización interna",
    "case.filters.result3": "Definí nueva taxonomía, copy, lógica de tagging y criterios nutricionales para dietas, proteínas, cocinas y exclusiones de ingredientes",
    "case.filters.result4": "Establecí el framework de filtrado adoptado dentro del rediseño de Core UX",
    "case.filters.flow1": "Experiencia de filtrado actual",
    "case.filters.flow2": "UX Research y tree testing",
    "case.filters.flow3": "Arquitectura de información",
    "case.filters.flow4": "Nueva taxonomía y naming",
    "case.filters.flow5": "Tagging y lógica de producto",
    "case.filters.flow6": "Implementación en Core UX",

    "case.skuExpansion.title": "SKU Expansion Strategy",
    "case.skuExpansion.summary": "Construir un framework de merchandising escalable para aumentar la visibilidad y adopción de nuevas líneas de producto.",
    "case.skuExpansion.challenge": "Las nuevas líneas de producto tenían baja visibilidad, lo que limitaba el conocimiento y la adopción por parte de los clientes a pesar de los lanzamientos frecuentes.",
    "case.skuExpansion.role": "Fui dueña de la estrategia de merchandising y el roadmap de GTM para nuevas líneas de producto y LTOs, coordinando ubicaciones en el homepage, colecciones, CRM y campañas promocionales.",
    "case.skuExpansion.solution": "Creé un framework de merchandising escalable que combina swimlanes rotativos en el homepage, colecciones de producto, campañas LTO y ejecución de GTM coordinada.",
    "case.skuExpansion.result1": "Exposición de SKU Expansion 14,65% → 16,1%",
    "case.skuExpansion.result1b": "Participación de ATC en swimlanes: 28,15% — objetivo alcanzado (la meta era 13,29%)",
    "case.skuExpansion.result1c": "Participación de compras cross-selling: 3,92% (por encima del objetivo) — meta 3,2%",
    "case.skuExpansion.result2": "Contribuí a un crecimiento de adopción de 25,7% → 34,1%",

    "case.personalizedHomepage.title": "Personalized Homepage",
    "case.personalizedHomepage.summary": "Desplegar merchandising personalizado en el homepage según ciudad y segmentación de clientes.",
    "case.personalizedHomepage.challenge": "El merchandising estático del homepage no reflejaba el inventario local ni el contexto del cliente, reduciendo la relevancia del contenido.",
    "case.personalizedHomepage.role": "Definí la estrategia de rollout y el roadmap de experimentación para el merchandising personalizado.",
    "case.personalizedHomepage.solution": "Expandí los swimlanes personalizados del homepage según ciudad y segmentación de clientes.",
    "case.personalizedHomepage.result1": "Desplegado a 45K usuarios activos semanales",
    "case.personalizedHomepage.result2": "Aumenté el engagement con contenido localizado",
    "case.personalizedHomepage.result3": "Sentó las bases para futuras iniciativas de personalización",

    "case.mealiq.title": "MealIQ Platform",
    "case.mealiq.summary": "Transformar una plataforma de nutrición en etapa temprana en un producto white-label confiable y listo para enterprise.",
    "case.mealiq.challenge": "La primera versión de la plataforma no podía sostener de forma confiable los flujos de nutrición enterprise, por una lógica nutricional, arquitectura de recetas y modelado de datos poco precisos.",
    "case.mealiq.role": "Trabajé directamente con el CEO y los ingenieros como referente de nutrición, traduciendo requerimientos nutricionales complejos en requerimientos de producto, priorización y validación.",
    "case.mealiq.solutionIntro": "Lideré la evolución de la plataforma mejorando:",
    "case.mealiq.solution1": "Cálculos nutricionales",
    "case.mealiq.solution2": "Arquitectura de recetas",
    "case.mealiq.solution3": "Parser de recetas",
    "case.mealiq.solution4": "Ontología de ingredientes",
    "case.mealiq.solution5": "Base de datos de alimentos",
    "case.mealiq.solution6": "Herramientas de back-office",
    "case.mealiq.solutionOutro": "Armé y gestioné el equipo de operaciones de nutrición después del lanzamiento.",
    "case.mealiq.result1": "Lancé una plataforma white-label lista para producción",
    "case.mealiq.result2": "Ontología de ingredientes con más de 2.000 ingredientes mapeados",
    "case.mealiq.result3": "Gestioné más de 500 recetas",
    "case.mealiq.result4": "Armé un equipo de 3 nutricionistas",
    "case.mealiq.result5": "Habilité la integración con Kroger Supermarkets",

    "case.delight.tag": "Delight · Fundadora y CEO",
    "case.delight.title": "Delight — Negocio de comida multi-segmento",
    "case.delight.summary": "Fundé y escalé una empresa de comida que atiende múltiples segmentos de clientes, desde meal prep hasta food service institucional y catering.",
    "case.delight.challenge": "Construir un negocio de comida sostenible, capaz de atender múltiples segmentos de clientes manteniendo eficiencia operativa y rentabilidad.",
    "case.delight.role": "Fundé y escalé el negocio, a cargo de estrategia, operaciones, ingeniería de menú, pricing, experiencia de cliente y expansión hacia nuevas líneas de negocio.",
    "case.delight.solution": "Expandí de una sola operación a tres unidades de negocio complementarias —meal prep, food service institucional y catering— optimizando procesos y costos.",
    "case.delight.result1": "Atendí a más de 1.000 clientes por día",
    "case.delight.result2": "Escalé a 3 unidades de negocio",
    "case.delight.result3": "Logré un crecimiento anual del 15%",
    "case.delight.result4": "Gané licitaciones públicas nacionales para universidades y comedores corporativos",

    "case.recipeCalc.tag": "Recipe Cost Calculator · Fundadora",
    "case.recipeCalc.title": "Recipe Cost Calculator",
    "case.recipeCalc.summary": "Una plataforma de costeo de recetas para restaurantes independientes y negocios de comida, construida a partir de una planilla refinada a lo largo de más de 100 consultorías y lanzada con desarrollo asistido por IA.",
    "case.recipeCalc.challenge": "Observé repetidamente que los negocios de comida no tenían una forma simple de calcular el costo de recetas, márgenes y pricing.",
    "case.recipeCalc.role": "Transformé una planilla usada en más de 100 consultorías en una aplicación web, siendo dueña de la visión de producto, la priorización de funcionalidades, la UX y el desarrollo asistido por IA.",
    "case.recipeCalc.result1": "Más de 100 validaciones con clientes",
    "case.recipeCalc.result2": "Planilla → Aplicación web avanzada",
    "case.recipeCalc.result3": "Iteración continua con usuarios reales",
    "case.recipeCalc.status": "Actualmente en desarrollo activo, con nuevas funcionalidades validadas continuamente a través de consultorías reales.",

    "case.catering.tag": "Freelance · Diseño y desarrollo",
    "case.catering.title": "Landing page de catering",
    "case.catering.summary": "Landing end-to-end para un servicio de catering — diseño, layout y front-end con Photoshop, HTML y CSS.",
    "case.catering.challenge": "Traducir el menú y la propuesta de valor de una marca de catering en una landing enfocada en conversión.",
    "case.catering.role": "Diseño visual (Photoshop) y desarrollo front-end (HTML + CSS).",
    "case.catering.result": "Landing entregada y publicada, alineada al brief y usada por el cliente para captar consultas.",

    "case.davinci.tag": "Da Vinci · Trabajo académico",
    "case.davinci.title": "Asesoría Gastronómica — diseño y desarrollo",
    "case.davinci.summary": "Proyecto integral de la carrera de Diseño y Desarrollo Web: diseño, HTML/CSS, Bootstrap y lógica de carrito en JS vanilla.",
    "case.davinci.challenge": "Entregar una landing completa estilo e-commerce para una consultora gastronómica como examen final.",
    "case.davinci.role": "Única diseñadora / desarrolladora — UX, diseño visual, HTML/CSS, Bootstrap, JS del carrito.",
    "case.davinci.result": "Entregado, aprobado y publicado — se convirtió en la base de este mismo portfolio.",

    "exp.eyebrow": "Experiencia",
    "exp.title": "Dónde trabajé.",
    "exp.r1.when": "2024 — Presente",
    "exp.r1.role": "Product Manager · CookUnity",
    "exp.r1.desc": "Crecimiento del menú, escasez, filtros, colecciones y lanzamientos LTO.",
    "exp.r2.when": "2022 — 2024",
    "exp.r2.role": "Product Manager · MealIQ",
    "exp.r2.desc": "TODO — descripción corta del alcance e impacto.",
    "exp.r3.when": "2020 — 2022",
    "exp.r3.role": "Product Manager · PlantEats",
    "exp.r3.desc": "TODO — descripción corta del alcance e impacto.",
    "exp.r4.when": "2008 — 2020",
    "exp.r4.role": "Nutricionista y Cocinera · Industria alimentaria",
    "exp.r4.desc": "Etiquetado nutricional, HACCP/BPM, desarrollo de recetas, ingeniería de costos en varias marcas.",

    "courses.eyebrow": "Formación y cursos",
    "courses.title": "Siempre aprendiendo.",
    "courses.c1.title": "Diseño y Desarrollo Web",
    "courses.c1.org": "Escuela Da Vinci",
    "courses.c1.year": "En curso",
    "courses.c2.title": "Project Management",
    "courses.c2.org": "Coderhouse",
    "courses.c2.year": "Completado",
    "courses.c3.title": "Cocina — curso básico",
    "courses.c3.org": "Escuela de Gastronomía Celia",
    "courses.c3.year": "Completado",
    "courses.c4.title": "Lic. en Nutrición",
    "courses.c4.org": "Universidad Nacional de Córdoba",
    "courses.c4.year": "Completado",
    "courses.c5.title": "Micro-certificación en Priorización de Producto",
    "courses.c5.org": "Product School",
    "courses.c5.year": "Completado",
    "courses.c6.title": "Complete Product Management Course",
    "courses.c6.org": "Udemy",
    "courses.c6.year": "Completado",
    "courses.c7.title": "Formación presencial intensiva de Oratoria Moderna",
    "courses.c7.org": "Tommy Sosa Comunicación",
    "courses.c7.year": "Completado",

    "test.eyebrow": "Testimonios",
    "test.title": "Lo que dicen.",
    "test.q1": "\"Paula hizo un trabajo increíble. Necesitaba aprender sobre aspectos específicos, conservación y entrega de alimentos, y ella me brindó las instrucciones más específicas y anotó todos los documentos necesarios. Tiene un conocimiento muy sólido de todo lo relacionado con los alimentos.\"",
    "test.c1": "Yaroslav — CEO, Effix Solutions Inc. (Canadá)",
    "test.q2": "\"¡Paula es fantástica! Es trabajadora y brillante. Manejó un proyecto de investigación complejo con una orientación mínima, demostrando un grado poco común de minuciosidad y consideración. ¡Espero tener el privilegio de trabajar con ella nuevamente pronto!\"",
    "test.c2": "Daniel Yaghsizian — Jefe de Producto, Foodspace (Estados Unidos)",
    "test.q3": "\"Paula fue muy paciente trabajando con el chef para recopilar información. Fue muy precisa al registrar todas las cifras y me preparó para hacer ajustes a medida que cambian las recetas o los proveedores. Ahora me siento muy lista para futuros cambios de menú — gracias a ella.\"",
    "test.c3": "Stephanie Bull — Chef ejecutiva (Australia)",
    "test.q4": "\"Paula trajo una energía increíble describiendo todas las soluciones posibles a mi problema. Realmente entendió mi visión y me ayudó a explorar opciones que no había considerado. Recomiendo mucho su trabajo.\"",
    "test.c4": "Michael Riley — CEO, Da Pasta (comidas custom de chef)",
    "test.q5": "\"Tuve el placer de trabajar con Paula mientras construíamos un nuevo producto. Lideró nuestro equipo de nutricionistas: onboarding de nuevos integrantes, coordinación y delegación del trabajo, y control de calidad. Nuestros clientes quedaron muy conformes con los resultados. Paula es una líder natural, muy profesional, con gran atención al detalle y siempre entusiasta. No dudaría en recomendarla.\"",
    "test.c5": "Ariya Priyasantha — CEO, MealIQ (Techstars 2019)",
    "test.prev": "Anterior",
    "test.next": "Siguiente",

    "contact.eyebrow": "Contacto",
    "contact.title": "Hablemos.",
    "contact.sub": "Para roles de PM, consultoría o un simple hola — escribime.",
    "contact.name": "Nombre",
    "contact.namePh": "Tu nombre completo",
    "contact.email": "Email",
    "contact.emailPh": "tu@email.com",
    "contact.msg": "Mensaje",
    "contact.msgPh": "Contame un poco sobre el rol o el proyecto...",
    "contact.send": "Enviar mensaje",

    "footer.sub": "Hecho con cariño · HTML, CSS y un poco de JS."
  };

  // Cache of the original (English) content as authored in the HTML, so we can
  // restore it when switching back to English.
  const originals = new Map();
  let cached = false;

  function readValue(el, attr) {
    if (attr) return el.getAttribute(attr);
    if (el.tagName === 'META') return el.getAttribute('content');
    return el.textContent;
  }

  function writeValue(el, attr, val) {
    if (attr) { el.setAttribute(attr, val); return; }
    if (el.tagName === 'TITLE') { document.title = val; return; }
    if (el.tagName === 'META') { el.setAttribute('content', val); return; }
    el.textContent = val;
  }

  function cacheOriginals() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const attr = el.getAttribute('data-i18n-attr');
      originals.set(el, readValue(el, attr));
    });
    cached = true;
  }

  function applyLang(lang) {
    if (!cached) cacheOriginals();
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr');

      // English = whatever is authored in the HTML. Spanish = dictionary value,
      // falling back to the English original when a key has no translation yet.
      let val;
      if (lang === 'es' && Object.prototype.hasOwnProperty.call(es, key)) {
        val = es[key];
      } else {
        val = originals.get(el);
      }
      if (val === undefined) return;

      writeValue(el, attr, val);
    });

    const label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'en' ? 'ES' : 'EN';

    try { localStorage.setItem('pm.lang', lang); } catch (_) {}
  }

  function detectInitialLang() {
    try {
      const saved = localStorage.getItem('pm.lang');
      if (saved === 'en' || saved === 'es') return saved;
    } catch (_) {}
    return (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Snapshot the English source from the HTML before any translation runs.
    cacheOriginals();

    let current = detectInitialLang();
    applyLang(current);

    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.addEventListener('click', () => {
        current = current === 'en' ? 'es' : 'en';
        applyLang(current);
      });
    }
  });
})();
