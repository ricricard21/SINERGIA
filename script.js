// Sinergia PRO v2
const COURSES = window.__COURSES__ || [];
const WA = window.__WA__ || "52";

const $ = (q, el=document) => el.querySelector(q);
const $$ = (q, el=document) => Array.from(el.querySelectorAll(q));

/* Mobile nav */
const navbtn = $("#navbtn");
const nav = $("#nav");
if(navbtn && nav){
  navbtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navbtn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if(!a) return;
    nav.classList.remove("open");
    navbtn.setAttribute("aria-expanded", "false");
  });
}

/* Reveal on scroll */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if(e.isIntersecting) e.target.classList.add("is-visible");
  });
},{threshold: 0.12});
$$(".reveal").forEach(el => observer.observe(el));

/* Quick form -> WhatsApp */
function buildWALink(text){
  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}
function sanitizePhone(s){
  return (s || "").toString().replace(/[^0-9]/g,"").slice(0, 15);
}
function saveLead(data){
  try{
    const key = "sinergia_leads";
    const prev = JSON.parse(localStorage.getItem(key) || "[]");
    prev.unshift({ ...data, ts: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(prev.slice(0, 50)));
  }catch(_){}
}

const quickForm = $("#quickForm");
if(quickForm){
  quickForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(quickForm);
    const nombre = fd.get("nombre");
    const telefono = sanitizePhone(fd.get("telefono"));
    const interes = fd.get("interes");
    saveLead({nombre, telefono, interes, source: "hero"});
    const msg = `Hola Sinergia Agrícola, soy ${nombre}. Mi WhatsApp es ${telefono}. Me interesa: ${interes}. ¿Me puedes enviar información?`;
    window.open(buildWALink(msg), "_blank", "noopener");
    quickForm.reset();
  });
}

/* Contact form */
const contactForm = $("#contactForm");
if(contactForm){
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(contactForm);
    const nombre = fd.get("nombre");
    const telefono = sanitizePhone(fd.get("telefono"));
    const tipo = fd.get("tipo");
    const mensaje = fd.get("mensaje");
    saveLead({nombre, telefono, tipo, mensaje, source: "contacto"});
    const msg = `Hola Sinergia Agrícola, soy ${nombre}. Mi WhatsApp es ${telefono}. Necesito: ${tipo}. Mensaje: ${mensaje || "—"}`;
    window.open(buildWALink(msg), "_blank", "noopener");
    contactForm.reset();
  });
}

/* Courses platform */
const grid = $("#coursesGrid");
const search = $("#search");
const filter = $("#filter");

function categoryFor(course){
  const t = course.title.toLowerCase();
  if(t.includes("plagas") || t.includes("enfermed") || t.includes("control")) return "mip";
  if(t.includes("org") || t.includes("biol")) return "bio";
  if(t.includes("producción") || t.includes("plántulas")) return "produccion";
  return "cultivos";
}

function renderCourses(){
  if(!grid) return;
  const q = (search?.value || "").trim().toLowerCase();
  const f = filter?.value || "all";

  const list = COURSES.filter(c => {
    const matchQ = !q || (c.title + " " + c.instructor).toLowerCase().includes(q);
    const cat = categoryFor(c);
    const matchF = (f === "all") || (cat === f);
    return matchQ && matchF;
  });

  grid.innerHTML = list.map(c => {
    const cat = categoryFor(c);
    const tag = cat === "mip" ? "MIP" : cat === "bio" ? "Bio/Orgánico" : cat === "produccion" ? "Producción" : "Cultivos";
    return `
      <article class="course reveal is-visible" data-id="${c.id}">
        <div class="course__img">
          <img src="assets/${c.img}" alt="Curso ${c.title}" loading="lazy">
          <span class="course__tag">${tag}</span>
        </div>
        <div class="course__body">
          <h3 class="course__title">${c.title}</h3>
          <div class="meta">
            <span>${c.date}</span>
            <span>${c.mode}</span>
            <span>${c.price}</span>
          </div>
          <div class="course__actions">
            <button class="btn btn--small btn--outline" data-action="details">Ver detalles</button>
            <a class="btn btn--small btn--primary" data-action="wa" href="${buildWALink(`Hola Sinergia Agrícola, quiero inscribirme al curso: ${c.title}. ¿Me envían detalles, horario y forma de pago?`)}" target="_blank" rel="noopener">Inscribirme</a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // bind details buttons
  $$("[data-action='details']", grid).forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".course");
      const id = card?.dataset?.id;
      openCourse(id);
    });
  });
}

if(search) search.addEventListener("input", renderCourses);
if(filter) filter.addEventListener("change", renderCourses);
renderCourses();

/* Course modal */
const courseModal = $("#courseModal");
const courseBody = $("#courseBody");
const closeCourse = $("#closeCourse");

function openCourse(id){
  const c = COURSES.find(x => x.id === id);
  if(!c || !courseModal || !courseBody) return;

  const learn = (c.learn || []).map(x => `<li>${x}</li>`).join("");

  courseBody.innerHTML = `
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:14px; align-items:start">
      <div>
        <img src="assets/${c.img}" alt="Curso ${c.title}" style="border-radius:18px; border:1px solid rgba(255,255,255,.12); width:100%; height:auto">
      </div>
      <div>
        <h2 style="margin:0; letter-spacing:-.03em">${c.title}</h2>
        <p style="margin:10px 0 0; color: rgba(230,238,252,.72); line-height:1.6">
          <strong>Impartido por:</strong> ${c.instructor}<br>
          <strong>Fecha:</strong> ${c.date}<br>
          <strong>Modalidad:</strong> ${c.mode}<br>
          <strong>Inversión:</strong> ${c.price}<br>
          <strong>Incluye:</strong> Material + constancia institucional
        </p>

        <div style="display:flex; gap:10px; margin-top:14px; flex-wrap:wrap">
          <a class="btn btn--primary" target="_blank" rel="noopener"
             href="${buildWALink(`Hola Sinergia Agrícola, quiero inscribirme al curso: ${c.title}. Mi nombre es ____ y mi WhatsApp es ____.`)}">Inscribirme por WhatsApp</a>
          <a class="btn btn--ghost" href="#contacto" onclick="document.getElementById('courseModal').close();">Quiero consultoría</a>
        </div>

        <h3 style="margin:16px 0 8px">Qué aprenderás</h3>
        <ul style="margin:0; padding-left:18px; color: rgba(230,238,252,.9); line-height:1.7">${learn}</ul>
      </div>
    </div>
  `;

  // responsive fix inside modal
  if(window.innerWidth < 900){
    courseBody.firstElementChild.style.gridTemplateColumns = "1fr";
  }

  courseModal.showModal();
}
if(closeCourse && courseModal){
  closeCourse.addEventListener("click", () => courseModal.close());
}
if(courseModal){
  courseModal.addEventListener("click", (e) => {
    const rect = courseModal.getBoundingClientRect();
    const inDialog =
      rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width;
    if(!inDialog) courseModal.close();
  });
}

/* Upcoming modal */
const upcomingModal = $("#upcomingModal");
const openUpcoming = $("#openUpcoming");
const closeUpcoming = $("#closeUpcoming");
if(openUpcoming && upcomingModal){
  openUpcoming.addEventListener("click", () => upcomingModal.showModal());
}
if(closeUpcoming && upcomingModal){
  closeUpcoming.addEventListener("click", () => upcomingModal.close());
}

/* Testimonials carousel */
const slides = $$("#testTrack .slide");
const dotsWrap = $("#testDots");
let idx = 0;

function setSlide(i){
  idx = (i + slides.length) % slides.length;
  slides.forEach((s, n) => s.classList.toggle("active", n === idx));
  if(dotsWrap){
    $$(".dots button", document).forEach((b, n) => b.classList.toggle("active", n === idx));
  }
}

if(slides.length){
  // dots
  if(dotsWrap){
    dotsWrap.innerHTML = slides.map((_, i) => `<button aria-label="Ir a testimonio ${i+1}"></button>`).join("");
    $$(".dots button", document).forEach((b, i) => b.addEventListener("click", () => setSlide(i)));
  }

  setSlide(0);

  $("#prevTest")?.addEventListener("click", () => setSlide(idx - 1));
  $("#nextTest")?.addEventListener("click", () => setSlide(idx + 1));

  // auto
  setInterval(() => setSlide(idx + 1), 7000);
}

/* Small parallax */
const par = document.querySelector(".parallax__bg");
window.addEventListener("scroll", () => {
  if(!par) return;
  const y = window.scrollY * 0.06;
  par.style.transform = `translate3d(0, ${y}px, 0)`;
}, {passive:true});
