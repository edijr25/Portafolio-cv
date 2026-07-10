export const personalInfo = {
  name: "Edicilio R. López S.",
  title: "Soporte Técnico SR / Desarrollador JR",
  location: "CABA, Argentina",
  email: "lopez.edicilio@gmail.com",
  phone: "+5491157812249",
  avatar: "https://avatars.githubusercontent.com/u/102106369?v=4",
  bio: "Técnico en Soporte Senior con experiencia en administración de sistemas, redes y automatización. Desarrollador backend en formación con conocimientos en Python, Node.js y FastAPI. Apasionado por la tecnología, la resolución de problemas y el aprendizaje continuo.",
  social: {
    github: "https://github.com/edijr25",
    linkedin: "https://www.linkedin.com/in/edicilio-lopezs",
  },
  cvUrl: "/cv.pdf",
};

export const skills = [
  { name: "Python", icon: "🐍", category: "backend" },
  { name: "JavaScript", icon: "🟨", category: "frontend" },
  { name: "Node.js", icon: "nodejs", category: "backend" },
  { name: "FastAPI", icon: "⚡", category: "backend" },
  { name: "SQL", icon: "🗄️", category: "backend" },
  { name: "C", icon: "⚙️", category: "backend" },
  { name: "PowerShell", icon: "🪟", category: "tools" },
  { name: "Bash", icon: "💻", category: "tools" },
  { name: "Git", icon: "🔀", category: "tools" },
  { name: "Linux", icon: "🐧", category: "tools" },
  { name: "Windows Server", icon: "🖥️", category: "tools" },
  { name: "Active Directory", icon: "🏢", category: "tools" },
  { name: "Checkmk / PRTG / Grafana", icon: "📊", category: "tools" },
  { name: "AWS", icon: "☁️", category: "tools" },
  { name: "Docker", icon: "🐳", category: "tools" },
];

export const projects = [

  {
    title: "TelegramGastos",
    description: "Bot de Telegram para control de gastos personales. Permite registrar, categorizar y consultar gastos desde la aplicación de mensajería.",
    tech: ["Python"],
    github: "https://github.com/edijr25/TelegramGastos",
    demo: null,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Chatbot Node.js",
    description: "Chatbot con inteligencia artificial integrado con API de META e Invgate para atención al cliente y gestión de incidencias.",
    tech: ["JavaScript", "Node.js", "API"],
    github: "https://github.com/edijr25/chatbot",
    demo: null,
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    title: "Aplicación de Pedidos",
    description: "Sistema de gestión de pedidos en C# con Windows Forms. Administración de clientes, productos y órdenes de compra.",
    tech: ["C#", ".NET"],
    github: "https://github.com/edijr25/Aplicaci-nDePedidos",
    demo: null,
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Handdrawify",
    description: "Aplicación web Flask que transforma imágenes a estilo dibujado a mano usando procesamiento de imágenes con OpenCV.",
    tech: ["Python", "Flask", "OpenCV"],
    github: null,
    demo: null,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Galería de Imágenes",
    description: "Galería de imágenes con diseño responsive, desarrollada con HTML y CSS puro.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/edijr25/GaleriaImagenes.github.io",
    demo: null,
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Formulario Google Clone",
    description: "Réplica visual del formulario de Google con estilos CSS avanzados y maquetado semántico.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/edijr25/form-google",
    demo: null,
    gradient: "from-red-500 to-amber-600",
  },
  {
    title: "Mi To-Do List",
    description: "Aplicación web de lista de tareas con funcionalidades CRUD y persistencia de datos.",
    tech: ["JavaScript"],
    github: "https://github.com/edijr25/Mi-to-do-list",
    demo: null,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Curso JavaScript",
    description: "Ejercicios resueltos del curso de JavaScript, cubriendo fundamentos, estructuras de datos y algoritmos.",
    tech: ["JavaScript"],
    github: "https://github.com/edijr25/Curso-JavaScript",
    demo: null,
    gradient: "from-amber-500 to-yellow-600",
  },
  {
    title: "Ejercicios en C",
    description: "Colección de ejercicios prácticos de programación en C, incluyendo algoritmos y estructuras de datos.",
    tech: ["C"],
    github: "https://github.com/edijr25/Ejercicios-en-C",
    demo: null,
    gradient: "from-sky-500 to-indigo-600",
  },
];

export const experience = [
  {
    title: "Soporte Técnico Senior",
    company: "Grupo IHSA S.A.",
    period: "2023 - Presente",
    description: "Administración de EndPoint Central, estandarización de políticas y cumplimiento SLA. Desarrollo de chatbot WhatsApp con Node.js + AI + META + Invgate API. Sistema de llamados clínicos en JavaScript. Sistema de inventario con FastAPI. Monitoreo de servidores y redes (Checkmk, PRTG, Grafana). Administración de servicios Linux (Ubuntu, Kubuntu, AlmaLinux) y Windows Server (DNS, DHCP, File Server). Gestión de usuarios en Active Directory. Scripting en PowerShell y Bash.",
  },
  {
    title: "Técnico en Operaciones",
    company: "Tecnosoftware SA",
    period: "2023",
    description: "Gestión de incidencias en Jira. Monitoreo de servidores AWS. Soporte en redes cableadas e inalámbricas. Administración de backups con IBM Spectrum Protect. Soporte en despliegues de producción y testing. Trabajo con AS/400 (Rally) y Control-M.",
  },
  {
    title: "Operador de Mesa de Ayuda",
    company: "Novatium Argentina ARL S.A.",
    period: "2022 - 2023",
    description: "Atención de llamadas entrantes, correos electrónicos y gestión de tickets. Resolución de incidencias de primer y segundo nivel. Prevención proactiva de problemas.",
  },
];

export const education = [
  {
    title: "Tecnicatura Universitaria en Programación",
    institution: "UTN Avellaneda",
    period: "2023 - Presente",
  },
  {
    title: "Ingeniería en Sistemas (4 semestres)",
    institution: "Universidad Santa María, Venezuela",
    period: "2016 - 2018",
  },
  {
    title: "Bachiller en Ciencias",
    institution: "U.E Fermín Toro, Venezuela",
    period: "2010 - 2015",
  },
];
