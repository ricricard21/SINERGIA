const WHATSAPP_NUMBER = "52361074058";
const FALLBACK_IMG = "assets/servicio1.jpg";

const courses = [
  {id:"granos",category:"Sanidad",title:"Control y Prevención de Plagas en Granos Almacenados",date:"16 de marzo",mode:"Online",price:"$650 MXN",instructor:"Ing. Irene del Pilar García Pérez",image:"assets/servicio1.jpg",learn:["Identificación de principales plagas en granos almacenados","Medidas preventivas y manejo de bodegas","Estrategias de control y monitoreo","Buenas prácticas para reducir pérdidas"]},
  {id:"fresa",category:"Producción",title:"Cultivo de Fresa",date:"16 de marzo",mode:"Online",price:"$650 MXN",instructor:"Ing. Eddie Marco Guzmán",image:"assets/servicio2.jpg",learn:["Establecimiento del cultivo: suelo, sustrato y plantación","Nutrición y riego por etapa","Manejo sanitario y prevención","Calidad, cosecha y poscosecha"]},
  {id:"bio",category:"Sanidad",title:"Control Biológico de Plagas y Enfermedades en la Agricultura",date:"16 de marzo",mode:"Online",price:"$650 MXN",instructor:"Dr. Jesús Adrián Barajas González",image:"assets/servicio3.jpg",learn:["Principios del control biológico","Agentes de control y cuándo usarlos","Compatibilidad con otros manejos","Implementación paso a paso"]},
  {id:"citricos",category:"Sanidad",title:"Manejo Integrado de Plagas y Enfermedades en Cítricos",date:"16 de marzo",mode:"Online",price:"$650 MXN",instructor:"MC. Jaime Antonio Badillo",image:"assets/servicio4.jpg",learn:["Monitoreo y diagnóstico en cítricos","Manejo integrado (MIP) por fenología","Estrategias preventivas y correctivas","Reducción de costos y riesgos"]},
  {id:"ajo",category:"Manejo",title:"Manejo Agronómico del Ajo",date:"16 de marzo",mode:"Online",price:"$650 MXN",instructor:"Dr. Jesús Adrián Barajas González",image:"assets/servicio5.jpg",learn:["Preparación y establecimiento","Riego y nutrición en ajo","Problemas frecuentes y soluciones","Cosecha, curado y almacenamiento"]},
  {id:"insecticidas",category:"Sanidad",title:"Elaboración y Aplicación de Insecticidas Orgánicos",date:"Próximamente",mode:"Online",price:"$650 MXN",instructor:"Ing. Andrea Isaura Maldonado de Luna",image:"assets/servicio6.jpg",learn:["Formulaciones orgánicas seguras","Dosis, mezclas y compatibilidades","Aplicación correcta y cobertura","Buenas prácticas y seguridad"]},
  {id:"huertos",category:"Manejo",title:"Manejo de Huertos Familiares",date:"Próximamente",mode:"Online",price:"$650 MXN",instructor:"Ing. Irene del Pilar García Pérez",image:"assets/servicio7.jpg",learn:["Diseño del huerto y planificación","Manejo de suelos y compostaje","Control preventivo de plagas","Calendario de siembras y rotación"]},
  {id:"plantulas",category:"Producción",title:"Producción de Plántulas Forestales",date:"Próximamente",mode:"Online",price:"$650 MXN",instructor:"IMC. María de Jesús de los Santos Reyes",image:"assets/servicio8.jpg",learn:["Sustratos y germinación","Manejo de vivero","Sanidad y nutrición básica","Acondicionamiento y trasplante"]},
  {id:"nopal",category:"Producción",title:"Manejo de Nopal Verdura y Nopal Tunero",date:"Próximamente",mode:"Online",price:"$650 MXN",instructor:"Ing. Gustavo León Lucio",image:"assets/servicio9.jpg",learn:["Establecimiento y densidad","Manejo de nutrición y riego","Sanidad y manejo preventivo","Cosecha y manejo de calidad"]},
  {id:"cafe",category:"Producción",title:"Derivados del Café",date:"Próximamente",mode:"Online",price:"$650 MXN",instructor:"Ing. Irene del Pilar García Pérez",image:"assets/servicio10.jpg",learn:["Procesos y derivados principales","Buenas prácticas e inocuidad","Control de calidad","Oportunidades de valor agregado"]}
];

function waLink(message){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function setGlobalWhatsApp(){
  const msg = "Hola, vengo de la página de Sinergia Agrícola. Quiero información para cursos y/o consultoría.";
  const link = waLink(msg);
  const a1 = document.getElementById("waGeneral");
  const a2 = document.getElementById("fabWA");
  if(a1) a1.href = link;
  if(a2) a2.href = link;
}
function createCourseCard(course){
  const card = document.createElement("article");
  card.className = "cCard reveal";

  const imgWrap = document.createElement("div");
  imgWrap.className = "cImg";
  const img = document.createElement("img");
  img.alt = course.title;
  img.loading = "lazy";
  img.src = course.image;
  img.onerror = ()=> img.src = FALLBACK_IMG;
  imgWrap.appendChild(img);

  const body = document.createElement("div");
  body.className = "cBody";

  const title = document.createElement("div");
  title.className = "cTitle";
  title.textContent = course.title;

  const pills = document.createElement("div");
  pills.className = "pills";
  [course.date, course.mode, course.price].forEach(t=>{
    const p = document.createElement("span");
    p.className = "pill2";
    p.textContent = t;
    pills.appendChild(p);
  });

  const actions = document.createElement("div");
  actions.className = "cActions";

  const details = document.createElement("button");
  details.className = "btn btn--ghost btn--small";
  details.textContent = "Ver detalles";
  details.addEventListener("click", ()=> openCourseModal(course));

  const join = document.createElement("a");
  join.className = "btn btn--primary btn--small";
  join.textContent = "Inscribirme";
  join.href = waLink(`Hola, quiero inscribirme al curso: ${course.title}. Fecha: ${course.date}.`);
  join.target = "_blank";
  join.rel = "noopener";

  actions.appendChild(details);
  actions.appendChild(join);

  body.appendChild(title);
  body.appendChild(pills);
  body.appendChild(actions);

  card.appendChild(imgWrap);
  card.appendChild(body);
  return card;
}
function renderCourses(list){
  const grid = document.getElementById("coursesGrid");
  if(!grid) return;
  grid.innerHTML = "";
  if(!list.length){
    const empty = document.createElement("div");
    empty.className = "tile";
    empty.innerHTML = "<h3>No encontramos cursos</h3><p>Prueba con otra palabra o quita el filtro.</p>";
    grid.appendChild(empty);
    return;
  }
  list.forEach(c => grid.appendChild(createCourseCard(c)));
  setTimeout(()=> observeReveals(), 50);
}
function setupFilters(){
  const chips = Array.from(document.querySelectorAll(".chip"));
  const search = document.getElementById("courseSearch");
  let active = "Todos";
  function apply(){
    const q = (search?.value || "").trim().toLowerCase();
    const filtered = courses.filter(c=>{
      const byCat = (active === "Todos") ? true : c.category === active;
      const byQ = !q ? true : (c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q));
      return byCat && byQ;
    });
    renderCourses(filtered);
  }
  chips.forEach(ch=>{
    ch.addEventListener("click", ()=>{
      chips.forEach(x=> x.classList.remove("is-active"));
      ch.classList.add("is-active");
      active = ch.dataset.filter || "Todos";
      apply();
    });
  });
  search?.addEventListener("input", apply);
  renderCourses(courses);
}
function openCourseModal(course){
  const modal = document.getElementById("courseModal");
  if(!modal) return;
  document.getElementById("mTitle").textContent = course.title;
  document.getElementById("mInstructor").textContent = course.instructor;
  document.getElementById("mMode").textContent = course.mode;

  const img = document.getElementById("mImg");
  img.src = course.image;
  img.onerror = ()=> img.src = FALLBACK_IMG;

  const pills = document.getElementById("mPills");
  pills.innerHTML = "";
  [course.category, course.date, course.price].forEach(t=>{
    const p = document.createElement("span");
    p.className = "pill2";
    p.textContent = t;
    pills.appendChild(p);
  });

  const learn = document.getElementById("mLearn");
  learn.innerHTML = "";
  course.learn.forEach(item=>{
    const li = document.createElement("li");
    li.textContent = item;
    learn.appendChild(li);
  });

  const w = document.getElementById("mWhats");
  w.href = waLink(`Hola, quiero inscribirme al curso: ${course.title}. Fecha: ${course.date}. Precio: ${course.price}.`);
  w.target = "_blank"; w.rel = "noopener";

  const copyBtn = document.getElementById("mCopy");
  copyBtn.onclick = async ()=>{
    const text = `Curso: ${course.title}\nFecha: ${course.date}\nModalidad: ${course.mode}\nPrecio: ${course.price}\nImparte: ${course.instructor}`;
    try{
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = "¡Copiado!";
      setTimeout(()=> copyBtn.textContent = "Copiar info", 1200);
    }catch{
      alert("No se pudo copiar. Puedes copiar manualmente.");
    }
  };

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeCourseModal(){
  const modal = document.getElementById("courseModal");
  if(!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}
function setupModal(){
  document.getElementById("closeModal")?.addEventListener("click", closeCourseModal);
  document.getElementById("modalBackdrop")?.addEventListener("click", closeCourseModal);
  document.addEventListener("keydown", (e)=>{ if(e.key === "Escape") closeCourseModal(); });
}
function openUpcoming(){
  const modal = document.getElementById("upModal");
  const list = document.getElementById("upList");
  if(!modal || !list) return;
  const upcoming = courses.filter(c => String(c.date).toLowerCase().includes("próxim"));
  list.innerHTML = "";
  if(!upcoming.length){
    list.innerHTML = "<div class='tile'><h3>Sin cursos próximos</h3><p>Pregunta por WhatsApp para fechas nuevas.</p></div>";
  }else{
    upcoming.forEach(c=>{
      const item = document.createElement("div");
      item.className = "upItem";
      item.innerHTML = `
        <div>
          <div class="upItem__title">${c.title}</div>
          <div class="upItem__meta">${c.date} • ${c.mode} • ${c.price}</div>
        </div>
        <a class="btn btn--primary btn--small" target="_blank" rel="noopener"
          href="${waLink(`Hola, quiero información y fecha del curso: ${c.title}.`)}">Preguntar</a>
      `;
      list.appendChild(item);
    });
  }
  document.getElementById("upAsk").href = waLink("Hola, quiero el calendario de próximos cursos de Sinergia Agrícola.");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeUpcoming(){
  const modal = document.getElementById("upModal");
  if(!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}
function setupUpcoming(){
  document.getElementById("openUpcoming")?.addEventListener("click", openUpcoming);
  document.getElementById("closeUp")?.addEventListener("click", closeUpcoming);
  document.getElementById("upBackdrop")?.addEventListener("click", closeUpcoming);
}
function setupMobile(){
  const burger = document.getElementById("burger");
  const mobile = document.getElementById("mobileNav");
  const close = document.getElementById("closeMobile");
  const backdrop = document.getElementById("mobileBackdrop");
  function open(){ mobile.classList.add("is-open"); mobile.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden"; }
  function shut(){ mobile.classList.remove("is-open"); mobile.setAttribute("aria-hidden","true"); document.body.style.overflow=""; }
  burger?.addEventListener("click", open);
  close?.addEventListener("click", shut);
  backdrop?.addEventListener("click", shut);
  document.querySelectorAll(".mobile__link, .mobile__cta").forEach(a=> a.addEventListener("click", shut));
}
let revealObserver;
function observeReveals(){
  const els = document.querySelectorAll(".reveal");
  if(revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("is-visible");
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el=> { if(!el.classList.contains("is-visible")) revealObserver.observe(el); });
}
function setupCounters(){
  const nums = document.querySelectorAll("[data-counter]");
  const run = (el)=>{
    const target = parseInt(el.getAttribute("data-counter"),10) || 0;
    const duration = 900;
    const start = performance.now();
    const step = (t)=>{
      const p = Math.min(1, (t-start)/duration);
      const val = Math.round(target * (1 - Math.pow(1-p, 3)));
      el.textContent = String(val);
      if(p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ run(e.target); obs.unobserve(e.target); } });
  }, { threshold: 0.25 });
  nums.forEach(n=> obs.observe(n));
}
function setupCarousel(){
  const track = document.getElementById("testTrack");
  const prev = document.getElementById("prevTest");
  const next = document.getElementById("nextTest");
  if(!track || !prev || !next) return;
  const scrollBy = ()=> Math.min(540, track.clientWidth * 0.9);
  prev.addEventListener("click", ()=> track.scrollBy({ left: -scrollBy(), behavior: "smooth" }));
  next.addEventListener("click", ()=> track.scrollBy({ left: scrollBy(), behavior: "smooth" }));
  let timer = null;
  const start = ()=>{ stop(); timer = setInterval(()=> track.scrollBy({ left: scrollBy(), behavior: "smooth" }), 4500); };
  const stop = ()=>{ if(timer) clearInterval(timer); timer = null; };
  track.addEventListener("mouseenter", stop);
  track.addEventListener("mouseleave", start);
  start();
}
function setupForms(){
  const qf = document.getElementById("quickForm");
  qf?.addEventListener("submit",(e)=>{
    e.preventDefault();
    const fd = new FormData(qf);
    const name = fd.get("name");
    const need = fd.get("need");
    window.open(waLink(`Hola, soy ${name}. Necesito: ${need}. ¿Me apoyas con información?`), "_blank", "noopener");
    qf.reset();
  });
  const cf = document.getElementById("contactForm");
  cf?.addEventListener("submit",(e)=>{
    e.preventDefault();
    const fd = new FormData(cf);
    const name = fd.get("name");
    const service = fd.get("service");
    const msg = fd.get("msg");
    window.open(waLink(`Hola, soy ${name}. Me interesa: ${service}.\n\nMensaje: ${msg}`), "_blank", "noopener");
    cf.reset();
  });
}
function setYear(){ const y=document.getElementById("year"); if(y) y.textContent=String(new Date().getFullYear()); }

document.addEventListener("DOMContentLoaded", ()=>{
  setYear();
  setGlobalWhatsApp();
  setupMobile();
  setupModal();
  setupUpcoming();
  setupFilters();
  setupCarousel();
  setupForms();
  setupCounters();
  observeReveals();
});
