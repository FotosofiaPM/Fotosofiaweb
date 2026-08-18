// ===================== VIDEOS =====================
const VIDEO_NAMES = [
  'lv_0_20240926104638.mp4',
  'lv_0_20240926111723.mp4',
  'lv_0_20240926115320.mp4',
  'lv_0_20241127210104.mp4',
  'lv_0_20241127211250.mp4',
  'lv_0_20250325211347.mp4',
  'lv_0_20250325221417.mp4',
  'lv_0_20250508170325.mp4',
  'lv_0_20250522172949.mp4',
  '2024-10-09-194942321.mp4'
];

// ===================== IMÁGENES POR CATEGORÍA =====================
const EVENTOS = [
  '20240818_161035.jpg', '20240818_161247.jpg', '20240818_161341.jpg',
  '20240818_161425.jpg', '20240818_161623.jpg', '20240818_161715.jpg',
  '20240818_162400.jpg', '20240818_162601.jpg', '20240818_162618.jpg',
  '20240818_162625.jpg', '20240818_162703.jpg', '20240818_162848.jpg',
  '20240818_162918.jpg', '20240818_162951.jpg', '20240818_163835.jpg',
  '20240818_163837.jpg', '20240818_164125.jpg', '20240818_164143.jpg',
  '20240818_164151.jpg', '20240818_164236.jpg', '20240818_164458.jpg',
  'CAF_0020.JPG', 'CAF_0021.jpg', 'CAF_0023.JPG', 'CAF_0030.JPG',
  'CAF_0031.JPG', 'CAF_0034.jpg', 'CAF_0035.jpg', 'CAF_0064.JPG',
  'retouch_2025011923462366.jpg', 'retouch_2025011923473612.jpg',
  'retouch_2025011923542801.jpg', 'retouch_2025012000010926.jpg',
  'retouch_2025012000033906.jpg', 'retouch_2025012000060719.jpg',
  'retouch_2025012000183219.jpg', 'retouch_2025012000203738.jpg',
  'retouch_2025012006155901.jpg', 'retouch_2025012006193847.jpg',
  'retouch_2025012014074450.jpg', 'retouch_2025012014090473.jpg',
  'retouch_2025012014104861.jpg', 'retouch_2025012014161048.jpg'
];

const FERIAS = [
  'CAF_0012.jpg', 'CAF_0015.jpg', 'CAF_0016.jpg', 'CAF_0025.jpg',
  'CAF_0035.jpg', 'CAF_0038.jpg', 'CAF_0040.jpg', 'CAF_0044 (1).jpg',
  'CAF_0045.jpg', 'CAF_0047.jpg', 'CAF_0048.jpg', 'CAF_0056.jpg',
  'CAF_0058.jpg', 'CAF_0062.jpg', 'CAF_0066 (1).jpg', 'CAF_0066.jpg',
  'CAF_0067.jpg', 'CAF_0070 (1).jpg', 'CAF_0070.jpg', 'CAF_0072.jpg',
  'CAF_0084.jpg', 'CAF_0085.jpg', 'CAF_0086.jpg', 'CAF_0088.jpg',
  'CAF_0089.jpg', 'CAF_0093 (1).jpg', 'CAF_0094.jpg', 'CAF_0116.jpg'
];

const MODELO = [
  'IMG_1624.JPG', 'IMG_1625.JPG',
  'retouch_2024092414305681.jpg', 'retouch_2024092419284090.jpg',
  'retouch_2024092419363886.jpg', 'retouch_2024092419573346.jpg',
  'retouch_2024092419581702.jpg', 'retouch_2024092419583432.jpg',
  'retouch_2024092419590030.jpg', 'retouch_2024092420140253.jpg',
  'retouch_2024092420215061.jpg', 'retouch_2024092420290385.jpg',
  'retouch_2024092420370491.jpg', 'retouch_2024092420564246.jpg',
  'retouch_2024092421040595.jpg', 'retouch_2024092421050855.jpg',
  'retouch_2024092421074731.jpg', 'retouch_2024092421103575.jpg',
  'retouch_2024092421401477.png', 'retouch_2024092421454307.jpg',
  'retouch_2024092421494866.jpg', 'retouch_2024092422010079.jpg',
  'retouch_2024092422040530.jpg', 'retouch_2024092422221915.jpg',
  'retouch_2024092422293082.jpg', 'retouch_2024092422305412.jpg',
  'retouch_2024092422320530.jpg', 'retouch_2024092422332791.jpg',
  'retouch_2024092422373765.jpg', 'retouch_2024092422405548.jpg',
  'retouch_2024092422432480.jpg', 'retouch_2024092422472717.jpg',
  'retouch_2024092422523372.jpg', 'retouch_2024092422550436.jpg',
  'retouch_2024092422570446.jpg', 'retouch_2024111413541133.jpg',
  'retouch_2024111414051381.jpg', 'retouch_2024111414523482.jpg',
  'retouch_2024111414553463.jpg', 'retouch_2024111414572251.jpg',
  'retouch_2024111414591828.jpg', 'retouch_2024111415514335.jpg',
  'retouch_2024111417220441.jpg', 'retouch_2024111417304006.jpg',
  'retouch_2024111417355900.jpg', 'retouch_2024111417405198.jpg',
  'retouch_2024111417481406.jpg', 'retouch_2024111417514630.jpg',
  'retouch_2024111417575166.jpg', 'retouch_2024111418010592.jpg',
  'retouch_2024111418035709.jpg', 'retouch_2024111418064593.jpg',
  'retouch_2024111418093132.jpg', 'retouch_2024111418111926.jpg',
  'retouch_2024111418121774.jpg', 'retouch_2024111418144624.jpg',
  'retouch_2024111418184967.jpg', 'retouch_2024111418381019.jpg',
  'retouch_2024111418450551.jpg', 'retouch_2024111418482352.jpg',
  'retouch_2024111418495237.jpg', 'retouch_2024111418511318.jpg',
  'retouch_2024111418531071.jpg', 'retouch_2024111418542008.jpg',
  'retouch_2024111418562078.jpg', 'retouch_2024111418581093.jpg',
  'retouch_2024111418593322.jpg', 'retouch_2024111419005149.jpg',
  'retouch_2024111419014044.jpg', 'retouch_2024111419033249.jpg',
  'retouch_2025032318494151.jpg', 'retouch_2025032318503390.jpg',
  'retouch_2025032318530708.jpg', 'retouch_2025042915574895.jpg',
  'retouch_2025042916030596.jpg', 'retouch_2025042916052656.jpg',
  'retouch_2025042916100773.jpg', 'retouch_2025042916324969.jpg'
];

const PUBLICITARIAS = [
  'retouch_2024100908094726.jpg', 'retouch_2024100908162459.jpg',
  'retouch_2024100908223658.jpg', 'retouch_2024100908272986.jpg',
  'retouch_2024100908554368.jpg', 'retouch_2024100908584915.jpg',
  'retouch_2024102416163995.jpg', 'retouch_2024102419584652.jpg',
  'retouch_2024102420003231.jpg', 'retouch_2024102420015979.jpg',
  'retouch_2024102420034141.jpg', 'retouch_2024102420043979.jpg',
  'retouch_2024102420070467.jpg', 'retouch_2024102420075819.jpg',
  'retouch_2024110719031429.jpg', 'retouch_2024110808221866.jpg',
  'retouch_2024110808235582.jpg', 'retouch_2024110808254942.jpg',
  'retouch_2024110808270136.jpg'
];

// ===================== CONSTRUIR ARRAY DE FOTOS (con encodeURI) =====================
const SAMPLE_IMAGES = [];
const sizes = ['tall', 'med', 'short', 'wide'];

function addImages(list, cat, label, folder) {
  list.forEach((name, i) => {
    // ENCODEURI para evitar problemas con espacios y caracteres especiales
    const safePath = encodeURI(folder + '/' + name);
    SAMPLE_IMAGES.push({
      cat: cat,
      label: label + ' ' + (i + 1),
      loc: 'Colombia',
      year: 2025,
      size: sizes[i % sizes.length],
      src: safePath
    });
  });
}

addImages(EVENTOS, 'eventos', 'Evento', 'Fotos eventos');
addImages(FERIAS, 'ferias', 'Feria', 'Fotos Ferias y Las Flores');
addImages(MODELO, 'modelo', 'Modelo', 'Fotos modelo');
addImages(PUBLICITARIAS, 'publicitarias', 'Publicidad', 'Fotos publicitarias');

// ===================== CONSTRUIR ARRAY FINAL (Fotos + Videos) =====================
const PHOTOS = [];
SAMPLE_IMAGES.forEach(p => PHOTOS.push({ ...p, type: 'image' }));

VIDEO_NAMES.forEach((name, i) => {
  const size = sizes[i % sizes.length];
  PHOTOS.push({
    type: 'video',
    cat: 'videos',
    label: 'Video ' + (i + 1),
    loc: 'Colombia',
    year: 2025,
    size: size,
    videoSrc: 'videos/' + name, // Los videos no tienen espacios, pero por si acaso
    poster: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop'
  });
});

// ===================== RENDER GALLERY =====================
const gallery = document.getElementById('gallery');

PHOTOS.forEach((p, index) => {
  const el = document.createElement('div');
  el.className = `g-item s-${p.size}`;
  el.dataset.cat = p.cat;
  el.dataset.type = p.type;

  let mediaHtml = '';
  if (p.type === 'image') {
    mediaHtml = `
      <div class="skeleton"></div>
      <img data-src="${p.src}" alt="${p.label} — ${p.loc}, ${p.year}">
    `;
  } else {
    mediaHtml = `
      <div class="skeleton"></div>
      <video data-src="${p.videoSrc}" poster="${p.poster}" preload="metadata" muted playsinline controls></video>
    `;
  }

  el.innerHTML = `
    ${mediaHtml}
    <span class="g-num">${String(index + 1).padStart(2, '0')}</span>
    <div class="g-info">
      <div class="g-cat">${p.label}</div>
      <div class="g-meta"><span>${p.loc}</span><span>·</span><span>${p.year}</span></div>
    </div>
  `;

  if (p.type === 'image') {
    el.addEventListener('click', () => openLightbox(index));
  }

  gallery.appendChild(el);
});

// ===================== LAZY LOAD =====================
const lazyMedia = document.querySelectorAll('.g-item img, .g-item video');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      if (el.tagName === 'IMG') {
        el.src = el.dataset.src;
        el.onload = () => {
          el.classList.add('loaded');
          // Pequeño log para depuración
          console.log('Imagen cargada:', el.src);
        };
        el.onerror = () => console.error('Error cargando imagen:', el.dataset.src);
      } else if (el.tagName === 'VIDEO') {
        el.src = el.dataset.src;
        el.load();
        el.onloadeddata = () => {
          el.classList.add('loaded');
          console.log('Video cargado:', el.src);
        };
        el.onerror = () => console.error('Error cargando video:', el.dataset.src);
      }
      io.unobserve(el);
    }
  });
}, { rootMargin: '500px' }); // Aumentado el margen para cargar antes

lazyMedia.forEach(el => io.observe(el));

// ===================== FILTERS =====================
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.g-item').forEach(item => {
      const cat = item.dataset.cat;
      const type = item.dataset.type;
      let show = false;
      if (f === 'all') show = true;
      else if (f === 'fotos') show = (type === 'image');
      else if (f === 'videos') show = (type === 'video');
      else show = (cat === f);
      item.classList.toggle('hide', !show);
    });
  });
});

// ===================== LIGHTBOX =====================
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCat = document.getElementById('lbCat');
const lbMeta = document.getElementById('lbMeta');
let currentIndex = 0;

function getVisibleImageIndexes() {
  const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
  return PHOTOS.map((p, i) => i).filter(i => {
    if (PHOTOS[i].type !== 'image') return false;
    const cat = PHOTOS[i].cat;
    if (activeFilter === 'all') return true;
    if (activeFilter === 'fotos') return true;
    return cat === activeFilter;
  });
}

function openLightbox(index) {
  currentIndex = index;
  renderLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderLightbox() {
  const p = PHOTOS[currentIndex];
  if (p.type !== 'image') return;
  lbImg.style.opacity = 0;
  setTimeout(() => {
    lbImg.src = p.src;
    lbImg.alt = p.label;
    lbImg.onload = () => {
      lbImg.style.transition = 'opacity 400ms ease';
      lbImg.style.opacity = 1;
    };
  }, 120);
  lbCat.textContent = p.label;
  lbMeta.textContent = `${p.loc} · ${p.year}`;
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function stepLightbox(dir) {
  const vis = getVisibleImageIndexes();
  let pos = vis.indexOf(currentIndex);
  pos = (pos + dir + vis.length) % vis.length;
  currentIndex = vis[pos];
  renderLightbox();
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => stepLightbox(-1));
document.getElementById('lbNext').addEventListener('click', () => stepLightbox(1));
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') stepLightbox(1);
  if (e.key === 'ArrowLeft') stepLightbox(-1);
});

// ===================== CURSOR =====================
const ring = document.getElementById('cursorRing');
const dot = document.getElementById('cursorDot');
let mx = 0, my = 0, rx = 0, ry = 0;
window.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top = my + 'px';
});
function animateCursor() {
  rx += (mx - rx) * 0.18;
  ry += (my - ry) * 0.18;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();
document.querySelectorAll('a, button, .g-item, input, textarea, select').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hover'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
});
document.querySelectorAll('.g-item').forEach(el => {
  el.addEventListener('click', () => {
    ring.classList.remove('shutter');
    void ring.offsetWidth;
    ring.classList.add('shutter');
  });
});

// ===================== NAV =====================
const mainNav = document.getElementById('mainNav');
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  burger.classList.remove('open');
  mobileMenu.classList.remove('open');
}));

// ===================== SCROLL EFFECTS =====================
const scrollProgress = document.getElementById('scrollProgress');
const toTop = document.getElementById('toTop');
const heroImg = document.querySelector('.hero-media img');

function onScroll() {
  const scrollY = window.scrollY;
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = (scrollY / docH * 100) + '%';
  mainNav.classList.toggle('scrolled', scrollY > 40);
  toTop.classList.toggle('show', scrollY > 700);
  if (heroImg && scrollY < window.innerHeight) {
    heroImg.style.transform = `scale(1.08) translateY(${scrollY * 0.18}px)`;
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===================== REVEAL =====================
const revealTargets = document.querySelectorAll('.reveal, .reveal-stagger');
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealTargets.forEach(t => revealIO.observe(t));

// ===================== COUNTERS =====================
const counters = document.querySelectorAll('.counter');
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterIO.observe(c));

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const dur = 1400;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  }
  requestAnimationFrame(tick);
}

// ===================== TESTIMONIALS CAROUSEL =====================
const testiTrack = document.getElementById('testiTrack');
document.getElementById('testiPrev').addEventListener('click', () => {
  testiTrack.scrollBy({ left: -440, behavior: 'smooth' });
});
document.getElementById('testiNext').addEventListener('click', () => {
  testiTrack.scrollBy({ left: 440, behavior: 'smooth' });
});

// ===================== FAQ =====================
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  if (item.classList.contains('open')) a.style.maxHeight = a.scrollHeight + 'px';
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(other => {
      other.classList.remove('open');
      other.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

// ===================== CONTACT FORM =====================
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('.form-submit');
  const original = btn.textContent;
  btn.textContent = 'Enviando…';
  setTimeout(() => {
    btn.textContent = '¡Solicitud enviada!';
    setTimeout(() => {
      btn.textContent = original;
      this.reset();
    }, 2200);
  }, 900);
});

// Cerrar menú móvil al redimensionar
window.addEventListener('resize', () => {
  if (window.innerWidth > 820) {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
  }
});