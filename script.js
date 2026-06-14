'use strict';

/* ─────────────────────────────────────
   DATOS COMPLETOS CON IMÁGENES ARTÍSTICAS
───────────────────────────────────── */
const TRIBES = {
  juda: {
    month: 1, monthName: 'Enero', name: 'Judá', nameHebrew: 'יְהוּדָה', theme: 'juda',
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80', // León majestuoso
    colors: { primary: '#C9A84C', secondary: '#8B1A1A' },
    description: 'Judá, cuyo nombre evoca la "alabanza", encarna el arquetipo del líder y soberano. De su seno emana el linaje real de Israel y la fuerza inquebrantable reflejada en el León de Judá, símbolo de coraje, justicia y soberanía espiritual sobre las naciones.',
    traits: [
      { text: 'Liderazgo y realeza espiritual' },
      { text: 'Valentía absoluta ante la adversidad' },
      { text: 'Custodio del cetro y el legado dinástico' },
      { text: 'Capacidad innata para unificar colectivos' }
    ],
    blessings: [{ verse: 'Cachorro de león, Judá; de la presa subiste, hijo mío. Se encorvó, se echó como león, así como leona: ¿quién lo despertará?', ref: 'Génesis 49:9' }],
    references: ['Génesis 49:8-12', 'Josué 15:1-63'], particleColor: '#C9A84C', particleShape: 'star'
  },
  levi: {
    month: 2, monthName: 'Febrero', name: 'Leví', nameHebrew: 'לֵוִי', theme: 'levi',
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80', // Altar / Luz mística
    colors: { primary: '#C0C8D8', secondary: '#7090B0' },
    description: 'La Tribu de Leví fue consagrada por completo al servicio cósmico y sagrado, exenta de posesiones terrenales para constituirse como el puente sacerdotal entre el Creador y el pueblo. Representan el conocimiento místico, la devoción absoluta y el orden ritual.',
    traits: [
      { text: 'Sacerdocio y custodia de misterios divinos' },
      { text: 'Transmisores de leyes y ciencias espirituales' },
      { text: 'Pureza de intención y alineación superior' },
      { text: 'Armonizadores litúrgicos del templo' }
    ],
    blessings: [{ verse: 'Ellos enseñarán tus juicios a Jacob, y tu ley a Israel; pondrán el incienso delante de ti, y el holocausto sobre tu altar.', ref: 'Deuteronomio 33:10' }],
    references: ['Números 3:1-51', 'Josué 21:1-42'], particleColor: '#C0C8D8', particleShape: 'circle'
  },
  benjamin: {
    month: 3, monthName: 'Marzo', name: 'Benjamín', nameHebrew: 'בִּנְיָמִין', theme: 'benjamin',
    image: 'https://images.unsplash.com/photo-1590420485404-f86d22b8ab18?auto=format&fit=crop&w=800&q=80', // Lobo en el bosque invernal
    colors: { primary: '#6080C0', secondary: '#A0B8E0' },
    description: 'Designado como el "hijo de la mano derecha", Benjamín representa la destreza estratégica, la resiliencia táctica y la lealtad inquebrantable. Sus guerreros eran célebres por su audacia magnética y su infalible puntería en momentos límite.',
    traits: [
      { text: 'Estrategia y astucia bajo presión' },
      { text: 'Fidelidad incondicional a los suyos' },
      { text: 'Espíritu competitivo e indomable' },
      { text: 'Protector nato de los límites territoriales' }
    ],
    blessings: [{ verse: 'Benjamín es lobo arrebatador; a la mañana comerá la presa, y a la tarde repartirá los despojos.', ref: 'Génesis 49:27' }],
    references: ['Génesis 49:27', 'Josué 18:11-28'], particleColor: '#6080C0', particleShape: 'triangle'
  },
  jose: {
    month: 4, monthName: 'Abril', name: 'José', nameHebrew: 'יוֹסֵף', theme: 'jose',
    image: 'https://images.unsplash.com/photo-1500627869374-13ad993b0116?auto=format&fit=crop&w=800&q=80', // Campo fértil / Naturaleza abundante
    colors: { primary: '#2A8040', secondary: '#C9A84C' },
    description: 'La manifestación viviente de la providencia y el florecimiento ante la adversidad. La historia de José destaca por su visión profética y su asombrosa transmutación del sufrimiento en abundancia política y existencial.',
    traits: [
      { text: 'Visión de futuro y dotes de planificación' },
      { text: 'Prosperidad e influencia desbordante' },
      { text: 'Nobleza orientada al perdón colectivo' },
      { text: 'Resiliencia ante traiciones o crisis' }
    ],
    blessings: [{ verse: 'Rama fructífera es José, rama fructífera junto a una fuente, cuyos vástagos se extienden sobre el muro.', ref: 'Génesis 49:22' }],
    references: ['Génesis 49:22-26', 'Deuteronomio 33:13-17'], particleColor: '#2A8040', particleShape: 'leaf'
  },
  isacar: {
    month: 5, monthName: 'Mayo', name: 'Isacar', nameHebrew: 'יִשָּׂשכָר', theme: 'isacar',
    image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&w=800&q=80', // Campo de trigo dorado al amanecer
    colors: { primary: '#8B6914', secondary: '#4A7820' },
    description: 'Reconocidos como los sabios del tiempo y del orden cosmológico. Los hijos de Isacar poseían un entendimiento profundo del calendario, las estaciones y la astronomía aplicada, logrando equilibrar el trabajo de la tierra con la erudición espiritual.',
    traits: [
      { text: 'Sabiduría y análisis de ciclos temporales' },
      { text: 'Constancia constructiva y paciencia' },
      { text: 'Conexión con los ritmos de la naturaleza' },
      { text: 'Estabilidad mental y comunitaria' }
    ],
    blessings: [{ verse: 'Y vio que el descanso era bueno, y que la tierra era deleitosa; y bajó su hombro para llevar...', ref: 'Génesis 49:15' }],
    references: ['Génesis 49:14-15', '1 Crónicas 12:32'], particleColor: '#8B6914', particleShape: 'square'
  },
  zabulon: {
    month: 6, monthName: 'Junio', name: 'Zabulón', nameHebrew: 'זְבוּלוּן', theme: 'zabulon',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', // Océano profundo / Puerto antiguo
    colors: { primary: '#1A5080', secondary: '#20A0A0' },
    description: 'Los intrépidos navegantes que extendieron las fronteras comerciales de Israel. Zabulón habita en los límites oceánicos, sirviendo como un conector internacional y puente dinámico entre civilizaciones distantes gracias a su espíritu de exploración.',
    traits: [
      { text: 'Espíritu de exploración e intercambio comercial' },
      { text: 'Dominio de dinámicas marítimas y de flujos' },
      { text: 'Habilidad innata para negociar con culturas externas' },
      { text: 'Apertura mental y adaptabilidad al cambio' }
    ],
    blessings: [{ verse: 'Zabulón en puertos de mar habitará; será para puerto de naves, y su límite llegará hasta Sidón.', ref: 'Génesis 49:13' }],
    references: ['Génesis 49:13', 'Deuteronomio 33:18-19'], particleColor: '#1A5080', particleShape: 'circle'
  },
  dan: {
    month: 7, monthName: 'Julio', name: 'Dan', nameHebrew: 'דָּן', theme: 'dan',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', // Balanza abstracta / Arte conceptual oscuro
    colors: { primary: '#1A6040', secondary: '#0A0A0A' },
    description: 'La encarnación del discernimiento y el juicio analítico severo. Dan opera con una perspicacia táctica fulminante, utilizando el sigilo y la inteligencia analítica para desmantelar amenazas antes de que se manifiesten.',
    traits: [
      { text: 'Garantía de justicia y arbitraje estratégico' },
      { text: 'Agudeza mental de carácter indetectable' },
      { text: 'Autonomía individual inquebrantable' },
      { text: 'Fuerza focalizada para revertir opresiones' }
    ],
    blessings: [{ verse: 'Dan juzgará a su pueblo, como una de las tribus de Israel. Será Dan serpiente junto al camino...', ref: 'Génesis 49:16-17' }],
    references: ['Génesis 49:16-17', 'Jueces 13-16'], particleColor: '#1A6040', particleShape: 'triangle'
  },
  gad: {
    month: 8, monthName: 'Agosto', name: 'Gad', nameHebrew: 'גָּד', theme: 'gad',
    image: 'https://images.unsplash.com/photo-1555841481-815fb13d7110?auto=format&fit=crop&w=800&q=80', // Armadura antigua de hierro tallada
    colors: { primary: '#707080', secondary: '#9090A0' },
    description: 'El estandarte de la disciplina militar organizada y la vanguardia protectora. Los miembros de Gad actúan bajo códigos rigurosos de honor, asumiendo la responsabilidad directa del frente de choque en favor del bien común.',
    traits: [
      { text: 'Honor militar y disciplina intachable' },
      { text: 'Disposición de vanguardia en la acción' },
      { text: 'Firme lealtad hacia pactos multilaterales' },
      { text: 'Defensa territorial impenetrable' }
    ],
    blessings: [{ verse: 'Gad, ejército le acometerá; mas él acometerá al fin.', ref: 'Génesis 49:19' }],
    references: ['Deuteronomio 33:20-21', 'Josué 13:24-28'], particleColor: '#707080', particleShape: 'square'
  },
  aser: {
    month: 9, monthName: 'Septiembre', name: 'Aser', nameHebrew: 'אָשֵׁר', theme: 'aser',
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=800&q=80', // Olivos centenarios cargados
    colors: { primary: '#607030', secondary: '#C0A820' },
    description: 'Bienaventuranza, opulencia natural y el refinamiento de la vida. Aser es el encargado de proveer los deleites reales a través de tierras fértiles óptimas para aceites supremos, manifestando optimismo, generosidad culinaria y un elevado gusto estético.',
    traits: [
      { text: 'Generación espontánea de prosperidad' },
      { text: 'Temperamento alegre y magnánimo' },
      { text: 'Sofisticación y aprecio por las artes' },
      { text: 'Disposición anfitriona excelente' }
    ],
    blessings: [{ verse: 'El pan de Aser será substancioso, y él dará deleites al rey.', ref: 'Génesis 49:20' }],
    references: ['Génesis 49:20', 'Deuteronomio 33:24-25'], particleColor: '#607030', particleShape: 'leaf'
  },
  neftali: {
    month: 10, monthName: 'Octubre', name: 'Neftalí', nameHebrew: 'נַפְתָּלִי', theme: 'neftali',
    image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=800&q=80', // Ciervo corriendo libre en montañas neblinosas
    colors: { primary: '#2050B0', secondary: '#80B0E0' },
    description: 'La fluidez, la ligereza cinética y la elocuencia poética definen el espíritu de Neftalí. Descrito tradicionalmente como una cierva liberada, destaca por su refinada diplomacia verbal y su libertad mental.',
    traits: [
      { text: 'Elocuencia y comunicación persuasiva' },
      { text: 'Agilidad de movimientos y adaptación' },
      { text: 'Espíritu independiente y jovial' },
      { text: 'Sensibilidad artística y estética' }
    ],
    blessings: [{ verse: 'Neftalí, cierva suelta, que pronuncia dichos hermosos.', ref: 'Génesis 49:21' }],
    references: ['Génesis 49:21', 'Josué 19:32-39'], particleColor: '#2050B0', particleShape: 'star'
  },
  ruben: {
    month: 11, monthName: 'Noviembre', name: 'Rubén', nameHebrew: 'רְאוּבֵן', theme: 'ruben',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=80', // Olas potentes en mar abierto
    colors: { primary: '#B03020', secondary: '#E07030' },
    description: 'Como primogénito de la nación, Rubén porta la energía inicial del vigor y la dignidad fundacional. De naturaleza impetuosa y cambiante como las corrientes de agua, su carácter destaca por un potente despertar ético y protector.',
    traits: [
      { text: 'Energía precursora e iniciadora' },
      { text: 'Dignidad intrínseca elemental' },
      { text: 'Intensidad emocional profunda' },
      { text: 'Defensor comprometido de la equidad familiar' }
    ],
    blessings: [{ verse: 'Rubén, tú eres mi primogénito, mi fortaleza, y el principio de mi vigor; el primero en dignidad, el primero en poder.', ref: 'Génesis 49:3' }],
    references: ['Génesis 49:3-4', 'Números 1:20-21'], particleColor: '#B03020', particleShape: 'circle'
  },
  simeon: {
    month: 12, monthName: 'Diciembre', name: 'Simeón', nameHebrew: 'שִׁמְעוֹן', theme: 'simeon',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80', // Espada antigua dorada / Arte sacró
    colors: { primary: '#700070', secondary: '#A02050' },
    description: 'Simeón representa el fervor religioso pasional, la audacia incombustible y la escucha interna reflexiva. Sus descendientes destacan históricamente por un temperamento enfático dedicado celosamente a la rectitud dogmática.',
    traits: [
      { text: 'Fervor intenso ante propósitos elevados' },
      { text: 'Escucha intuitiva de realidades ocultas' },
      { text: 'Carácter determinado e incorruptible' },
      { text: 'Celosa defensa de principios morales' }
    ],
    blessings: [{ verse: 'Maldito su furor, que fue fiero; y su ira, que fue dura. Yo los apartaré en Jacob...', ref: 'Génesis 49:7' }],
    references: ['Génesis 49:5-7', 'Josué 19:1-9'], particleColor: '#700070', particleShape: 'triangle'
  }
};

const MONTH_TO_TRIBE = {
  1: 'juda', 2: 'levi', 3: 'benjamin', 4: 'jose',
  5: 'isacar', 6: 'zabulon', 7: 'dan', 8: 'gad',
  9: 'aser', 10: 'neftali', 11: 'ruben', 12: 'simeon'
};

/* ────────────────────────────────────────
   PARTÍCULAS FX (HOME CANVAS)
──────────────────────────────────────── */
(function initHomeParticles() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.4 - 0.1,
      opacity: Math.random() * 0.5 + 0.1,
      life: 0,
      maxLife: Math.random() * 400 + 200
    };
  }

  for (let i = 0; i < 60; i++) particles.push(createParticle());

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p, i) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.life++;
      if (p.life > p.maxLife || p.y < -10) {
        particles[i] = createParticle();
        particles[i].y = H + 10;
      } else {
        ctx.save();
        ctx.globalAlpha = p.opacity * Math.min(1, (p.maxLife - p.life) / 40);
        ctx.fillStyle = '#F0D080';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    });
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ────────────────────────────────────────
   CONSTRUCCIÓN DEL MENÚ INFERIOR CON FOTOS
──────────────────────────────────────── */
function buildTribesPreview() {
  const container = document.getElementById('tribesPreview');
  const order = Object.keys(TRIBES).sort((a,b) => TRIBES[a].month - TRIBES[b].month);
  
  order.forEach(key => {
    const t = TRIBES[key];
    const card = document.createElement('div');
    card.className = 'tribe-mini-card';
    card.innerHTML = `
      <img src="${t.image}" alt="${t.name}" class="mini-card-img"/>
      <div class="mini-card-info">
        <div class="mini-card-name">${t.name}</div>
      </div>
    `;
    card.addEventListener('click', () => showTribeDirectly(key));
    container.appendChild(card);
  });
}
buildTribesPreview();

/* ────────────────────────────────────────
   LÓGICA DE DETECCIÓN Y TRANSICIONES CINE
──────────────────────────────────────── */
function discoverTribe() {
  const input = document.getElementById('birthDate');
  if (!input.value) {
    showToast('Por favor, ingresa un registro temporal válido.');
    return;
  }
  const date = new Date(input.value + 'T12:00:00');
  const month = date.getMonth() + 1;
  const key = MONTH_TO_TRIBE[month];
  
  showLoadingThenResult(key);
}

function showTribeDirectly(key) {
  showLoadingThenResult(key);
}

function showLoadingThenResult(key) {
  const home = document.getElementById('homeScreen');
  const loading = document.getElementById('loadingScreen');
  const result = document.getElementById('resultScreen');

  home.classList.add('exit');
  home.classList.remove('active');

  setTimeout(() => {
    loading.classList.add('active');
    buildResultScreen(key);
  }, 400);

  setTimeout(() => {
    loading.classList.remove('active');
    loading.classList.add('exit');
    
    setTimeout(() => {
      loading.classList.remove('exit');
      result.classList.add('active');
      result.scrollTop = 0;
      startTribeParticles(key);
    }, 1200);
  }, 2600);
}

function goHome() {
  const home = document.getElementById('homeScreen');
  const result = document.getElementById('resultScreen');
  
  result.classList.add('exit');
  result.classList.remove('active');

  setTimeout(() => {
    result.classList.remove('exit');
    home.classList.add('active');
    stopTribeParticles();
  }, 1200);
}

/* ────────────────────────────────────────
   CONSTRUCCIÓN DE LA TARJETA PREMIUM
──────────────────────────────────────── */
function buildResultScreen(key) {
  const tribe = TRIBES[key];

  document.getElementById('resultBgLayer').className = `result-bg-layer theme-${tribe.theme}`;
  
  const heroImg = document.getElementById('tribeHeroImage');
  heroImg.src = tribe.image;
  heroImg.alt = `Emblema de ${tribe.name}`;

  document.getElementById('tribeName').textContent = tribe.name;
  document.getElementById('tribeHebrew').textContent = tribe.nameHebrew;
  document.getElementById('tribeDescription').textContent = tribe.description;

  document.getElementById('tribeTraits').innerHTML = tribe.traits.map(t =>
    `<li>${t.text}</li>`
  ).join('');

  document.getElementById('blessingCards').innerHTML = tribe.blessings.map(b => `
    <div class="blessing-card">
      <p class="blessing-verse">"${b.verse}"</p>
      <div class="blessing-ref">${b.ref}</div>
    </div>
  `).join('');

  document.getElementById('referencesGrid').innerHTML = tribe.references.map(r =>
    `<div class="ref-pill">${r}</div>`
  ).join('');

  const order = Object.keys(TRIBES).sort((a,b) => TRIBES[a].month - TRIBES[b].month);
  document.getElementById('otherTribesGrid').innerHTML = order.map(k => {
    const t = TRIBES[k];
    const isCurrent = k === key;
    return `
      <div class="other-tribe-pill ${isCurrent ? 'current' : ''}"
           onclick="${isCurrent ? '' : `showTribeDirectly('${k}')`}">
        <span class="other-tribe-label">${t.name}</span>
      </div>
    `;
  }).join('');

  document.documentElement.style.setProperty('--tribe-accent', tribe.colors.primary);
}

/* ────────────────────────────────────────
   SISTEMA DE PARTÍCULAS POR TRIBU
──────────────────────────────────────── */
let tribeAnimFrame = null;

function startTribeParticles(key) {
  const tribe = TRIBES[key];
  const canvas = document.getElementById('tribeCanvas');
  const ctx = canvas.getContext('2d');
  canvas.style.display = 'block';

  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();

  function makeParticle() {
    return {
      x: Math.random() * W,
      y: H + 10,
      size: Math.random() * 2.5 + 1,
      speedX: (Math.random() - 0.5) * 1.2,
      speedY: -(Math.random() * 1.2 + 0.4),
      opacity: Math.random() * 0.6 + 0.3,
      life: 0,
      maxLife: Math.random() * 250 + 150,
      shape: tribe.particleShape
    };
  }

  for (let i = 0; i < 40; i++) {
    const p = makeParticle();
    p.y = Math.random() * H;
    particles.push(p);
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p, i) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.life++;
      if (p.life > p.maxLife || p.y < -20) {
        particles[i] = makeParticle();
      } else {
        ctx.save();
        ctx.globalAlpha = p.opacity * Math.min(1, (p.maxLife - p.life) / 30);
        ctx.fillStyle = tribe.particleColor;
        ctx.beginPath();
        if (p.shape === 'triangle') {
          ctx.moveTo(p.x, p.y - p.size);
          ctx.lineTo(p.x + p.size, p.y + p.size);
          ctx.lineTo(p.x - p.size, p.y + p.size);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    });
    tribeAnimFrame = requestAnimationFrame(animate);
  }
  animate();
}

function stopTribeParticles() {
  if (tribeAnimFrame) {
    cancelAnimationFrame(tribeAnimFrame);
    tribeAnimFrame = null;
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Iniciar cargando la fecha actual en el selector
(function initDate() {
  const today = new Date();
  document.getElementById('birthDate').value = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
})();
