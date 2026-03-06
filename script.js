/* =========================
   Sinergia Agrícola (PRO)
   - Catálogo con filtro + búsqueda
   - Modal de curso
   - Inscripción automática por WhatsApp
   - Animaciones reveal
========================= */

const WHATSAPP_NUMBER = "522361074058";

const courses = [
  {
    id: "derivados-cafe",
    title: "Derivados del Café",
    img: "assets/servicio1.jpg",
    date: "Iniciamos 16 de marzo",
    price: "$650 MXN",
    mode: "Online en vivo",
    category: "valor",
    desc: "Aprende a transformar el café en productos con valor agregado y oportunidades de negocio.",
    learn: [
      "Panorama del café y oportunidades de valor agregado",
      "Buenas prácticas y control de calidad",
      "Procesos básicos de transformación",
      "Costeo, empaque y presentación",
      "Estrategias de comercialización"
    ]
  },
  {
    id: "plagas-granos",
    title: "Control y Prevención de Plagas en Granos Almacenados",
    img: "assets/servicio2.jpg",
    date: "Iniciamos 16 de marzo",
    price: "$650 MXN",
    mode: "Online en vivo",
    category: "sanidad",
    desc: "Reduce pérdidas en almacenamiento con monitoreo, prevención y control efectivo.",
    learn: [
      "Principales plagas en granos almacenados",
      "Factores de riesgo y prevención",
      "Monitoreo y muestreo",
      "Medidas de control (físico, químico y alternativo)",
      "Protocolos de almacenamiento seguro"
    ]
  },
  {
    id: "cultivo-fresa",
    title: "Cultivo de Fresa",
    img: "assets/servicio3.jpg",
    date: "16 de marzo",
    price: "$650 MXN",
    mode: "Online en vivo",
    category: "produccion",
    desc: "Establecimiento, nutrición y manejo técnico para producir fresa de forma rentable.",
    learn: [
      "Selección de variedad y establecimiento",
      "Manejo de sustrato/suelo y riego",
      "Nutrición por etapas fenológicas",
      "Manejo de plagas y enfermedades",
      "Buenas prácticas de cosecha y postcosecha"
    ]
  },
  {
    id: "control-biologico",
    title: "Control Biológico de Plagas y Enfermedades en la Agricultura",
    img: "assets/servicio4.jpg",
    date: "16 de marzo",
    price: "$650 MXN",
    mode: "Online en vivo",
    category: "sanidad",
    desc: "Estrategias de control biológico para reducir dependencia de químicos y mejorar sanidad.",
    learn: [
      "Principios de control biológico",
      "Enemigos naturales y su uso",
      "Bioinsumos y compatibilidades",
      "Monitoreo y toma de decisiones",
      "Diseño de un programa MIP con control biológico"
    ]
  },
  {
    id: "mip-citricos",
    title: "Manejo Integrado de Plagas y Enfermedades en Cítricos",
    img: "assets/servicio5.jpg",
    date: "16 de marzo",
    price: "$650 MXN",
    mode: "Online en vivo",
    category: "sanidad",
    desc: "Programa MIP para cítricos: monitoreo, umbrales y acciones preventivas/correctivas.",
    learn: [
      "Principales plagas/enfermedades en cítricos",
      "Monitoreo, muestreo y umbrales",
      "Estrategias culturales y biológicas",
      "Manejo químico responsable y rotación",
      "Calendario de manejo por temporada"
    ]
  },
  {
    id: "ajo",
    title: "Manejo Agronómico del Ajo",
    img: "assets/servicio6.jpg",
    date: "Iniciamos 16 de marzo",
    price: "$650 MXN",
    mode: "Online en vivo",
    category: "produccion",
    desc: "Manejo agronómico para optimizar rendimiento y calidad en cultivo de ajo.",
    learn: [
      "Preparación de terreno y siembra",
      "Riego y nutrición",
      "Manejo de malezas, plagas y enfermedades",
      "Calidad de bulbo y cosecha",
      "Costos y puntos críticos de producción"
    ]
  },
  {
    id: "insecticidas-organicos",
    title: "Elaboración y Aplicación de Insecticidas Orgánicos",
    img: "assets/servicio7.jpg",
    date: "Iniciamos 16 de marzo",
    price: "$650 MXN",
    mode: "Online en vivo",
    category: "organico",
    desc: "Prepara y aplica soluciones orgánicas con protocolos seguros y efectivos.",
    learn: [
      "Principios de control orgánico",
      "Recetas base y materiales",
      "Preparación, filtrado y dosificación",
      "Compatibilidades y aplicación",
      "Seguridad, almacenamiento y trazabilidad"
    ]
  },
  {
    id: "huertos-familiares",
    title: "Manejo de Huertos Familiares",
    img: "assets/servicio8.jpg",
    date: "Iniciamos 16 de marzo",
    price: "$650 MXN",
    mode: "Online en vivo",
    category: "produccion",
    desc: "Diseña y maneja huertos familiares para producción de alimentos en casa o comunidad.",
    learn: [
      "Diseño del huerto (espacio, camas, rotación)",
      "Selección de cultivos por temporada",
      "Riego, nutrición y compostaje",
      "Manejo de plagas con soluciones sustentables",
      "Cosecha y continuidad del huerto"
    ]
  },
  {
    id: "plantulas-forestales",
    title: "Producción de Plántulas Forestales",
    img: "assets/servicio9.jpg",
    date: "16 de marzo",
    price: "$650 MXN",
    mode: "Online en vivo",
    category: "produccion",
    desc: "Producción de plántulas en vivero: sustratos, manejo sanitario y calidad.",
    learn: [
      "Selección de semillas y germinación",
      "Sustratos y contenedores",
      "Riego y nutrición en vivero",
      "Sanidad y prevención de enfermedades",
      "Endurecimiento y entrega de planta"
    ]
  },
  {
    id: "nopal",
    title: "Manejo de Nopal Verdura y Nopal Tunero",
    img: "assets/servicio10.jpg",
    date: "16 de marzo",
    price: "$650 MXN",
    mode: "Online en vivo",
    category: "produccion",
    desc: "Producción y manejo técnico del nopal: establecimiento, sanidad y cosecha.",
    learn: [
      "Establecimiento y densidades de plantación",
      "Manejo de riego y nutrición",
      "Principales plagas y enfermedades",
      "Cosecha y manejo postcosecha",
      "Buenas prácticas y rentabilidad"
    ]
  }
];

function $(sel, parent=document){ return parent.querySelector(sel); }
function $all(sel, parent=document){ return Array.from(parent.querySelectorAll(sel)); }

function encode(text){ return encodeURIComponent(text); }

function waLink(message){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(message)}`;
}

function renderCourses(list){
  const grid = $("#coursesGrid");
  grid.innerHTML = "";
  if(!list.length){
    grid.innerHTML = `<div class="card" role="status"><strong>No encontramos resultados.</strong><p>Prueba con otra palabra o cambia el filtro.</p></div>`;
    return;
  }

  list.forEach(c => {
    const card = document.createElement("article");
    card.className = "course reveal";
    card.setAttribute("data-category", c.category);
    card.innerHTML = `
      <img src="${c.img}" loading="lazy" alt="Curso: ${c.title}">
      <div class="course-body">
        <h3 class="course-title">${c.title}</h3>
        <div class="course-meta">
          <span class="tag tag--brand">${c.mode}</span>
          <span class="tag">${c.date}</span>
          <span class="tag">${c.price}</span>
        </div>
        <p class="course-desc">${c.desc}</p>
        <div class="course-actions">
          <button class="btn btn--small" type="button" data-open="${c.id}">Ver detalles</button>
          <a class="btn btn--small btn--whatsapp" target="_blank" rel="noopener"
             href="${waLink(`Hola, quiero inscribirme al curso: ${c.title}. ¿Me compartes el temario y horarios?`)}">
            Inscribirme
          </a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Re-attach reveal observer for newly created elements
  setupReveal();
}

function populateSelect(){
  const sel = $("#courseSelect");
  courses.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.textContent = c.title;
    sel.appendChild(opt);
  });
}

function openModal(course){
  const modal = $("#courseModal");
  $("#modalImg").src = course.img;
  $("#modalImg").alt = `Imagen del curso ${course.title}`;
  $("#modalTitle").textContent = course.title;
  $("#modalMeta").innerHTML = `
    <span class="tag tag--brand">${course.mode}</span>
    <span class="tag">${course.date}</span>
    <span class="tag">${course.price}</span>
  `;
  $("#modalDesc").textContent = course.desc;

  const learn = $("#modalLearn");
  learn.innerHTML = "";
  course.learn.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    learn.appendChild(li);
  });

  const link = $("#modalWhatsApp");
  link.href = waLink(`Hola, quiero inscribirme al curso: ${course.title}. Mi nombre es: ____ y mi ciudad es: ____. ¿Me compartes el temario y horarios?`);

  if(typeof modal.showModal === "function") modal.showModal();
}

function closeDialogs(){
  $all("dialog[open]").forEach(d => d.close());
}

function setupDialogs(){
  // Close buttons
  $all("[data-close]").forEach(btn => btn.addEventListener("click", closeDialogs));

  // close on backdrop click
  $all("dialog").forEach(d => {
    d.addEventListener("click", (e) => {
      const rect = d.getBoundingClientRect();
      const inDialog = rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                       rect.left <= e.clientX && e.clientX <= rect.left + rect.width;
      if(!inDialog) d.close();
    });
  });

  // open course modal
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open]");
    if(!btn) return;
    const id = btn.getAttribute("data-open");
    const course = courses.find(c => c.id === id);
    if(course) openModal(course);
  });
}

function setupToolbar(){
  const search = $("#courseSearch");
  const filter = $("#courseFilter");

  function apply(){
    const q = (search.value || "").trim().toLowerCase();
    const f = filter.value;
    const list = courses.filter(c => {
      const matchesQ = !q || (c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q));
      const matchesF = (f === "all") || (c.category === f);
      return matchesQ && matchesF;
    });
    renderCourses(list);
  }

  search.addEventListener("input", apply);
  filter.addEventListener("change", apply);
}

function setupWhatsAppForms(){
  // Quick form (hero)
  $("#quickForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const courseId = fd.get("course");
    const course = courses.find(c => c.id === courseId);

    const name = fd.get("name");
    const phone = fd.get("phone");
    const city = fd.get("city") || "";
    const msg = fd.get("message") || "";

    const text = [
      "Hola, quiero inscribirme / recibir información.",
      `Curso: ${course ? course.title : "No especificado"}`,
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      city ? `Ciudad/Estado: ${city}` : null,
      msg ? `Mensaje: ${msg}` : null
    ].filter(Boolean).join("\n");

    window.open(waLink(text), "_blank", "noopener");
  });

  // Contact form
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get("name");
    const phone = fd.get("phone");
    const topic = fd.get("topic");
    const msg = fd.get("message") || "";

    const text = [
      "Hola, me gustaría recibir información.",
      `Tema: ${topic}`,
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      msg ? `Mensaje: ${msg}` : null
    ].filter(Boolean).join("\n");

    window.open(waLink(text), "_blank", "noopener");
  });
}

let revealObserver;
function setupReveal(){
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // disconnect previous observer if any
  if(revealObserver) revealObserver.disconnect();

  const items = $all(".reveal").filter(el => !el.classList.contains("is-visible"));
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(ent => {
      if(ent.isIntersecting){
        ent.target.classList.add("is-visible");
        revealObserver.unobserve(ent.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => revealObserver.observe(el));
}

function setupHeaderElevate(){
  const header = document.querySelector("[data-elevate]");
  const onScroll = () => {
    if(window.scrollY > 4) header.classList.add("is-elevated");
    else header.classList.remove("is-elevated");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupMobileNav(){
  const toggle = $(".nav-toggle");
  const nav = $("#nav");

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  // Close menu on link click (mobile)
  nav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if(!a) return;
    if(nav.classList.contains("is-open")) setOpen(false);
  });

  // Close on escape
  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") setOpen(false);
  });
}

function setupCalendar(){
  const openBtn = $("#openCalendar");
  const modal = $("#calendarModal");
  const list = $("#calendarList");

  // We keep a simple "upcoming" list (editable)
  const upcoming = courses.map(c => ({
    title: c.title,
    date: c.date,
    price: c.price
  }));

  list.innerHTML = upcoming.map(item => `
    <div class="cal-item">
      <div>
        <strong>${item.title}</strong>
        <span>${item.date} · ${item.price}</span>
      </div>
      <a class="btn btn--small btn--whatsapp" target="_blank" rel="noopener"
         href="${waLink(`Hola, ¿hay cupo disponible para el curso: ${item.title}?`)}">Consultar</a>
    </div>
  `).join("");

  openBtn.addEventListener("click", () => {
    if(typeof modal.showModal === "function") modal.showModal();
  });
}

function init(){
  $("#year").textContent = new Date().getFullYear();

  populateSelect();
  renderCourses(courses);
  setupToolbar();
  setupDialogs();
  setupWhatsAppForms();
  setupReveal();
  setupHeaderElevate();
  setupMobileNav();
  setupCalendar();
}

document.addEventListener("DOMContentLoaded", init);
