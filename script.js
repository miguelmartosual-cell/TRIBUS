/* ═══════════════════════════════════════════════════════════
   DESCUBRE TU TRIBU DE ISRAEL — script.js
   Complete tribal data + animations + interactions
═══════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────
   DATOS COMPLETOS DE LAS 12 TRIBUS
   Fuentes: Génesis 49, Deuteronomio 33,
            Números 1-2, Josué 13-19
───────────────────────────────────── */
const TRIBES = {

  juda: {
    month: 1,
    monthName: 'Enero',
    name: 'Judá',
    nameHebrew: 'יְהוּדָה',
    theme: 'juda',
    symbol: '🦁',
    colors: { primary: '#C9A84C', secondary: '#8B1A1A', accent: '#F0D080' },
    description: 'Judá, cuyo nombre significa "alabanza", es la tribu del liderazgo y la realeza. De ella desciende el linaje de los reyes de Israel, culminando en la promesa mesiánica. El león de Judá representa su fortaleza, su dignidad y su dominio que no cesa. Sus descendientes llevaron la antorcha de la fe a través de los siglos.',
    traits: [
      { icon: '👑', text: 'Liderazgo y realeza — la tribu de los reyes' },
      { icon: '💪', text: 'Fortaleza y valentía sin igual en batalla' },
      { icon: '🌟', text: 'Portador del cetro y la promesa mesiánica' },
      { icon: '📖', text: 'Guardián de la Torá y la tradición sagrada' },
      { icon: '🤝', text: 'Unificador de las demás tribus de Israel' },
      { icon: '🏔️', text: 'Arraigado en las montañas de Judea' },
    ],
    blessings: [
      {
        verse: 'Judá, te alabarán tus hermanos. Tu mano estará en la cerviz de tus enemigos; los hijos de tu padre se inclinarán ante ti. Cachorro de león, Judá; de la presa subiste, hijo mío. Se encorvó, se echó como león, así como leona: ¿quién lo despertará? No será quitado el cetro de Judá, ni el legislador de entre sus pies, hasta que venga Siloh; y a él se congregarán los pueblos.',
        ref: 'Génesis 49:8-10'
      },
      {
        verse: 'Oye, oh SEÑOR, la voz de Judá, y hazlo volver a su pueblo; sus manos le basten, y tú seas su ayuda contra sus enemigos.',
        ref: 'Deuteronomio 33:7'
      }
    ],
    references: ['Génesis 49:8-12', 'Deuteronomio 33:7', 'Números 1:26-27', 'Josué 15:1-63'],
    particleColor: '#C9A84C',
    particleShape: 'star',
  },

  levi: {
    month: 2,
    monthName: 'Febrero',
    name: 'Leví',
    nameHebrew: 'לֵוִי',
    theme: 'levi',
    symbol: '⚖️',
    colors: { primary: '#C0C8D8', secondary: '#7090B0', accent: '#FFFFFF' },
    description: 'Leví es la tribu sacerdotal por excelencia, la única que no recibió herencia territorial sino que fue consagrada al servicio del Templo y de la enseñanza de la Torá. Los levitas eran los guardianes de lo sagrado, los maestros del pueblo, los intérpretes de la voluntad divina. Su nombre, que significa "unión" o "adherencia", refleja su vocación de estar unidos a Dios.',
    traits: [
      { icon: '🕍', text: 'Sacerdocio y servicio en el Templo Sagrado' },
      { icon: '📜', text: 'Maestros y transmisores de la Ley Divina' },
      { icon: '🎵', text: 'Guardianes de la música y la liturgia sagrada' },
      { icon: '⚖️', text: 'Jueces y árbitros de la justicia espiritual' },
      { icon: '✨', text: 'Consagrados totalmente al servicio divino' },
      { icon: '🕯️', text: 'Portadores de la luz del conocimiento sagrado' },
    ],
    blessings: [
      {
        verse: 'Y de Leví dijo: Tu Tumim y tu Urim sean para tu varón piadoso, al que probaste en Masah, y con quien contendiste en las aguas de Meriba; quien dice de su padre y de su madre: Nunca los vi; y no reconoció a sus hermanos, ni conoció a sus hijos; pues ellos guardaron tus palabras, y mantuvieron tu pacto.',
        ref: 'Deuteronomio 33:8-9'
      },
      {
        verse: 'Ellos enseñarán tus juicios a Jacob, y tu ley a Israel; pondrán el incienso delante de ti, y el holocausto sobre tu altar.',
        ref: 'Deuteronomio 33:10'
      }
    ],
    references: ['Génesis 49:5-7', 'Deuteronomio 33:8-11', 'Números 3:1-51', 'Josué 21:1-42'],
    particleColor: '#C0C8D8',
    particleShape: 'circle',
  },

  benjamin: {
    month: 3,
    monthName: 'Marzo',
    name: 'Benjamín',
    nameHebrew: 'בִּנְיָמִין',
    theme: 'benjamin',
    symbol: '🐺',
    colors: { primary: '#6080C0', secondary: '#A0B8E0', accent: '#3050A0' },
    description: 'Benjamín, "hijo de la mano derecha" o "hijo del sur", fue el hijo menor y más amado de Jacob. Su tribu fue conocida por sus guerreros audaces y diestros con la honda y el arco. De Benjamín nació Saúl, el primer rey de Israel, y el apóstol Pablo. A pesar de su pequeñez en número, su valentía era legendaria en todo Israel.',
    traits: [
      { icon: '🐺', text: 'Guerrero feroz y veloz como el lobo en batalla' },
      { icon: '🎯', text: 'Maestro de la honda y el arco con ambas manos' },
      { icon: '🏹', text: 'Diestro en la guerra y protección de Israel' },
      { icon: '👑', text: 'Tribu del primer rey Saúl y del apóstol Pablo' },
      { icon: '🔥', text: 'Pasión intensa y energía desbordante' },
      { icon: '🌙', text: 'Habitante de Jerusalén, ciudad sagrada' },
    ],
    blessings: [
      {
        verse: 'Benjamín es lobo arrebatador; a la mañana comerá la presa, y a la tarde repartirá los despojos.',
        ref: 'Génesis 49:27'
      },
      {
        verse: 'El amado del SEÑOR habitará confiado cerca de él; le cubrirá siempre, y entre sus hombros morará.',
        ref: 'Deuteronomio 33:12'
      }
    ],
    references: ['Génesis 49:27', 'Deuteronomio 33:12', 'Números 1:36-37', 'Josué 18:11-28'],
    particleColor: '#6080C0',
    particleShape: 'triangle',
  },

  jose: {
    month: 4,
    monthName: 'Abril',
    name: 'José',
    nameHebrew: 'יוֹסֵף',
    theme: 'jose',
    symbol: '🌿',
    colors: { primary: '#2A8040', secondary: '#C9A84C', accent: '#60C080' },
    description: 'José es la tribu de la providencia y la bendición abundante. Representada a través de sus dos hijos Efraín y Manasés, José fue el más favorecido de los hijos de Jacob. Su historia de traición, sufrimiento y glorioso ascenso al poder en Egipto es uno de los relatos más profundos de la Biblia. Simboliza la resiliencia, el perdón y la prosperidad bajo la dirección divina.',
    traits: [
      { icon: '🌿', text: 'Abundancia y prosperidad en todo emprendimiento' },
      { icon: '💎', text: 'Favorecido y bendecido más que sus hermanos' },
      { icon: '🔮', text: 'Don de la visión profética y la interpretación' },
      { icon: '💚', text: 'Perdón generoso incluso hacia los que traicionaron' },
      { icon: '🏛️', text: 'Sabiduría política y habilidad para gobernar' },
      { icon: '⭐', text: 'Estrella de la familia, elegido por la providencia' },
    ],
    blessings: [
      {
        verse: 'Rama fructífera es José, rama fructífera junto a una fuente, cuyos vástagos se extienden sobre el muro... Las bendiciones de tu padre fueron mayores que las bendiciones de mis progenitores; hasta el término de los collados eternos serán sobre la cabeza de José.',
        ref: 'Génesis 49:22, 26'
      },
      {
        verse: 'Bendecida del SEÑOR sea su tierra, con lo mejor del cielo, con el rocío, y con el abismo que está abajo... Vénganle estas sobre la cabeza de José, y sobre la frente del que fue apartado de entre sus hermanos.',
        ref: 'Deuteronomio 33:13, 16'
      }
    ],
    references: ['Génesis 49:22-26', 'Deuteronomio 33:13-17', 'Números 1:32-35', 'Josué 16-17'],
    particleColor: '#2A8040',
    particleShape: 'leaf',
  },

  isacar: {
    month: 5,
    monthName: 'Mayo',
    name: 'Isacar',
    nameHebrew: 'יִשָּׂשכָר',
    theme: 'isacar',
    symbol: '🌾',
    colors: { primary: '#8B6914', secondary: '#4A7820', accent: '#C8A030' },
    description: 'Isacar, cuyo nombre significa "hay recompensa", fue conocido como la tribu de los sabios, los estudiosos y los que comprenden los tiempos. Los hijos de Isacar eran "entendidos en los tiempos" (1 Crónicas 12:32). Trabajadores infatigables, amaban la tierra fértil de sus valles y dedicaban el fruto de su labor al conocimiento y a la meditación de las Escrituras.',
    traits: [
      { icon: '🌾', text: 'Trabajo incansable y amor por la tierra fértil' },
      { icon: '📚', text: 'Sabiduría y comprensión profunda de los tiempos' },
      { icon: '🦁', text: 'Fortaleza paciente como el asno entre cargas' },
      { icon: '🌙', text: 'Conocimiento de los ciclos y el calendario sagrado' },
      { icon: '🧠', text: 'Inteligencia práctica aplicada al bien común' },
      { icon: '🏡', text: 'Amante del hogar, la familia y la tradición' },
    ],
    blessings: [
      {
        verse: 'Isacar, asno fuerte que se recuesta entre los apriscos; y vio que el descanso era bueno, y que la tierra era deleitosa; y bajó su hombro para llevar, y fue tributario.',
        ref: 'Génesis 49:14-15'
      },
      {
        verse: 'Y de Isacar dijo: Alégrate, Isacar, en tus tiendas. Llamarán a los pueblos a su monte; allí sacrificarán sacrificios de justicia.',
        ref: 'Deuteronomio 33:18-19'
      }
    ],
    references: ['Génesis 49:14-15', 'Deuteronomio 33:18', 'Números 1:28-29', 'Josué 19:17-23'],
    particleColor: '#8B6914',
    particleShape: 'square',
  },

  zabulon: {
    month: 6,
    monthName: 'Junio',
    name: 'Zabulón',
    nameHebrew: 'זְבוּלוּן',
    theme: 'zabulon',
    symbol: '⚓',
    colors: { primary: '#1A5080', secondary: '#20A0A0', accent: '#40C0E0' },
    description: 'Zabulón, cuyo nombre significa "honor" o "morada", fue bendecido con las costas del mar y el comercio marítimo. Sus hijos fueron navegantes valientes y comerciantes prósperos que llevaron las riquezas del mar a las naciones. La tribu de Zabulón se asentó en el norte de Canaán, junto al mar de Galilea y el Mediterráneo, siendo puente entre culturas y pueblos.',
    traits: [
      { icon: '⚓', text: 'Navegantes y comerciantes de mares lejanos' },
      { icon: '🌊', text: 'Vida junto al mar, fuente de prosperidad' },
      { icon: '🤝', text: 'Puente entre culturas y pueblos distintos' },
      { icon: '💰', text: 'Prosperidad mercantil y éxito en negocios' },
      { icon: '🧭', text: 'Exploradores con sentido de dirección certero' },
      { icon: '🐚', text: 'Guardadores de los tesoros de la orilla del mar' },
    ],
    blessings: [
      {
        verse: 'Zabulón en puertos de mar habitará; será para puerto de naves, y su límite llegará hasta Sidón.',
        ref: 'Génesis 49:13'
      },
      {
        verse: 'Alégrate, Zabulón, cuando salieres; y tú, Isacar, en tus tiendas. Chupará la abundancia de los mares, y los tesoros escondidos de la arena.',
        ref: 'Deuteronomio 33:18-19'
      }
    ],
    references: ['Génesis 49:13', 'Deuteronomio 33:18-19', 'Números 1:30-31', 'Josué 19:10-16'],
    particleColor: '#1A5080',
    particleShape: 'circle',
  },

  dan: {
    month: 7,
    monthName: 'Julio',
    name: 'Dan',
    nameHebrew: 'דָּן',
    theme: 'dan',
    symbol: '🐍',
    colors: { primary: '#1A6040', secondary: '#0A0A0A', accent: '#40A060' },
    description: 'Dan, cuyo nombre significa "juez", fue una tribu de naturaleza enigmática y compleja. Su símbolo, la serpiente en el camino, representa astucia, sabiduría estratégica y capacidad para usar tácticas inesperadas. De Dan nació Sansón, el juez más poderoso de Israel, cuya fuerza legendaria luchó solo contra los filisteos. Dan fue tribu de guerreros silenciosos y jueces perspicaces.',
    traits: [
      { icon: '🐍', text: 'Astucia y estrategia en tiempos de adversidad' },
      { icon: '⚖️', text: 'Capacidad innata para juzgar con sabiduría' },
      { icon: '💪', text: 'Fuerza sobrenatural; tribu del legendario Sansón' },
      { icon: '🌙', text: 'Guerrero nocturno, maestro del sigilo y sorpresa' },
      { icon: '🦅', text: 'Independencia y espíritu libre como el águila' },
      { icon: '🎭', text: 'Habilidad para adaptarse a todo tipo de situación' },
    ],
    blessings: [
      {
        verse: 'Dan juzgará a su pueblo, como una de las tribus de Israel. Será Dan serpiente junto al camino, víbora junto a la senda, que muerde los talones del caballo, y hace caer hacia atrás al jinete.',
        ref: 'Génesis 49:16-17'
      },
      {
        verse: 'Dan es cachorro de león que salta desde Basán.',
        ref: 'Deuteronomio 33:22'
      }
    ],
    references: ['Génesis 49:16-17', 'Deuteronomio 33:22', 'Números 1:38-39', 'Josué 19:40-48'],
    particleColor: '#1A6040',
    particleShape: 'triangle',
  },

  gad: {
    month: 8,
    monthName: 'Agosto',
    name: 'Gad',
    nameHebrew: 'גָּד',
    theme: 'gad',
    symbol: '🗡️',
    colors: { primary: '#707080', secondary: '#9090A0', accent: '#C0C0D0' },
    description: 'Gad, cuyo nombre significa "tropa" o "afortunado", fue conocido como la tribu de los guerreros más disciplinados de Israel. Los gaditas formaban el frente de batalla con aguerrida valentía y tomaron la tierra al este del Jordán, siendo los primeros en conquistar su herencia. Su lealtad a sus hermanos del otro lado del río demostró un profundo sentido del honor y la responsabilidad colectiva.',
    traits: [
      { icon: '🗡️', text: 'Guerreros disciplinados, vanguardia de Israel' },
      { icon: '🛡️', text: 'Defensa valiente de la familia y el pueblo' },
      { icon: '⚡', text: 'Velocidad y determinación en la acción' },
      { icon: '🤝', text: 'Lealtad inquebrantable hacia los hermanos' },
      { icon: '🏕️', text: 'Amantes de la tierra y la vida al aire libre' },
      { icon: '🦁', text: 'Valor de leona que protege sus crías' },
    ],
    blessings: [
      {
        verse: 'Gad, ejército le acometerá; mas él acometerá al fin.',
        ref: 'Génesis 49:19'
      },
      {
        verse: 'Bendito el que hizo ensanchar a Gad; reposó como león, y despedazó brazo y testa. Y vio lo mejor de la tierra para sí, porque allí le fue guardada la porción del legislador.',
        ref: 'Deuteronomio 33:20-21'
      }
    ],
    references: ['Génesis 49:19', 'Deuteronomio 33:20-21', 'Números 1:24-25', 'Josué 13:24-28'],
    particleColor: '#707080',
    particleShape: 'square',
  },

  aser: {
    month: 9,
    monthName: 'Septiembre',
    name: 'Aser',
    nameHebrew: 'אָשֵׁר',
    theme: 'aser',
    symbol: '🫒',
    colors: { primary: '#607030', secondary: '#C0A820', accent: '#80A040' },
    description: 'Aser, cuyo nombre significa "bienaventurado" o "feliz", fue la tribu de la abundancia y el deleite. Sus tierras al norte de Canaán eran extraordinariamente fértiles, produciendo aceite de oliva de la más alta calidad que abastecía incluso las mesas reales. Los hijos de Aser eran conocidos por su alegría de vivir, su hospitalidad generosa y su amor por los buenos manjares y las artes.',
    traits: [
      { icon: '🫒', text: 'Prosperidad en aceite de oliva y manjares reales' },
      { icon: '😊', text: 'Alegría natural y espíritu bienaventurado' },
      { icon: '🌿', text: 'Tierra fértil que produce con gran abundancia' },
      { icon: '🍽️', text: 'Hospitalidad y generosidad a la mesa' },
      { icon: '🎨', text: 'Apreciación de la belleza y las artes' },
      { icon: '💛', text: 'Carácter positivo y optimista en la vida' },
    ],
    blessings: [
      {
        verse: 'El pan de Aser será substancioso, y él dará deleites al rey.',
        ref: 'Génesis 49:20'
      },
      {
        verse: 'Aser será más bendito que los hijos; sea el amado de sus hermanos, y moje en aceite su pie. Hierro y cobre serán tus cerrojos, y como tus días serán tus fuerzas.',
        ref: 'Deuteronomio 33:24-25'
      }
    ],
    references: ['Génesis 49:20', 'Deuteronomio 33:24-25', 'Números 1:40-41', 'Josué 19:24-31'],
    particleColor: '#607030',
    particleShape: 'leaf',
  },

  neftali: {
    month: 10,
    monthName: 'Octubre',
    name: 'Neftalí',
    nameHebrew: 'נַפְתָּלִי',
    theme: 'neftali',
    symbol: '🦌',
    colors: { primary: '#2050B0', secondary: '#80B0E0', accent: '#4080D0' },
    description: 'Neftalí, cuyo nombre evoca la lucha y el triunfo, fue bendecido con la imagen de la cierva veloz que pronuncia hermosas palabras. Sus tierras junto al lago de Galilea fueron las más hermosas de todo Israel, y Jesús mismo eligió esa región para comenzar su ministerio. Los neftalitas eran conocidos por su elocuencia, su rapidez y su espíritu libre como el ciervo en las montañas.',
    traits: [
      { icon: '🦌', text: 'Velocidad y ligereza como la cierva en carrera' },
      { icon: '🗣️', text: 'Elocuencia y hermosas palabras que inspiran' },
      { icon: '🏔️', text: 'Habitante de las tierras más hermosas de Israel' },
      { icon: '💙', text: 'Espíritu libre y corazón ligero y jubiloso' },
      { icon: '⭐', text: 'Tierra elegida por el propio Jesús de Nazaret' },
      { icon: '🌊', text: 'Vinculado al lago de Galilea y su hermosura' },
    ],
    blessings: [
      {
        verse: 'Neftalí, cierva suelta, que pronuncia dichos hermosos.',
        ref: 'Génesis 49:21'
      },
      {
        verse: 'Y a Neftalí dijo: Neftalí, saciado de favores, y lleno de la bendición del SEÑOR, posee el occidente y el mediodía.',
        ref: 'Deuteronomio 33:23'
      }
    ],
    references: ['Génesis 49:21', 'Deuteronomio 33:23', 'Números 1:42-43', 'Josué 19:32-39'],
    particleColor: '#2050B0',
    particleShape: 'star',
  },

  ruben: {
    month: 11,
    monthName: 'Noviembre',
    name: 'Rubén',
    nameHebrew: 'רְאוּבֵן',
    theme: 'ruben',
    symbol: '💧',
    colors: { primary: '#B03020', secondary: '#E07030', accent: '#D05040' },
    description: 'Rubén, primogénito de Jacob e Israel, cuyo nombre significa "he aquí un hijo", llevó sobre sus hombros el peso y la gloria de ser el mayor. Aunque perdió el derecho de primogenitura por una transgresión juvenil, su espíritu fue siempre el de quien siente responsabilidad hacia los demás. Intentó salvar a José de la muerte y nunca dejó de luchar con su conciencia. La tribu de Rubén fue instable como el agua pero de noble corazón.',
    traits: [
      { icon: '💧', text: 'Primogénito de Israel, fortaleza y dignidad' },
      { icon: '❤️', text: 'Corazón noble que busca proteger a los suyos' },
      { icon: '🌊', text: 'Naturaleza dinámica, cambiante como las aguas' },
      { icon: '🤔', text: 'Profunda conciencia moral y sentido de justicia' },
      { icon: '🏕️', text: 'Amante de los pastizales y la vida pastoral' },
      { icon: '🌅', text: 'Primero en muchas cosas, pionero en su esencia' },
    ],
    blessings: [
      {
        verse: 'Rubén, tú eres mi primogénito, mi fortaleza, y el principio de mi vigor; el primero en dignidad, el primero en poder. Impetuoso como las aguas, no serás el primero, por cuanto subiste al lecho de tu padre.',
        ref: 'Génesis 49:3-4'
      },
      {
        verse: 'Viva Rubén, y no muera; y no sean pocos sus varones.',
        ref: 'Deuteronomio 33:6'
      }
    ],
    references: ['Génesis 49:3-4', 'Deuteronomio 33:6', 'Números 1:20-21', 'Josué 13:15-23'],
    particleColor: '#B03020',
    particleShape: 'circle',
  },

  simeon: {
    month: 12,
    monthName: 'Diciembre',
    name: 'Simeón',
    nameHebrew: 'שִׁמְעוֹן',
    theme: 'simeon',
    symbol: '⚔️',
    colors: { primary: '#700070', secondary: '#A02050', accent: '#9020A0' },
    description: 'Simeón, cuyo nombre significa "el que escucha", fue el segundo hijo de Jacob y Lea. Su tribu, de carácter intenso y apasionado, terminó dispersa entre las demás tribus de Israel, cumpliendo así la profecía de Génesis. Sin embargo, de Simeón nació Simeón el Justo, uno de los grandes sabios del judaísmo. Los descendientes de Simeón fueron siempre conocidos por su celo y su fervor religioso apasionado.',
    traits: [
      { icon: '⚔️', text: 'Fervor y celo apasionado por la causa justa' },
      { icon: '👂', text: 'Sensibilidad para escuchar y comprender profundamente' },
      { icon: '🔥', text: 'Intensidad emocional y carácter determinado' },
      { icon: '🏘️', text: 'Dispersado pero presente en todo Israel' },
      { icon: '📖', text: 'Cuna de grandes sabios y maestros del pueblo' },
      { icon: '💜', text: 'Profundidad espiritual y búsqueda interior constante' },
    ],
    blessings: [
      {
        verse: 'Simeón y Leví son hermanos; armas de iniquidad sus armas. En su consejo no entre mi alma, ni en su congregación se una mi espíritu... Maldito su furor, que fue fiero; y su ira, que fue dura. Yo los apartaré en Jacob, y los esparciré en Israel.',
        ref: 'Génesis 49:5, 7'
      }
    ],
    references: ['Génesis 49:5-7', 'Números 1:22-23', 'Josué 19:1-9', '1 Crónicas 4:24-43'],
    particleColor: '#700070',
    particleShape: 'triangle',
  }

};

/* ── Mapa mes → clave de tribu ── */
const MONTH_TO_TRIBE = {
  1: 'juda', 2: 'levi', 3: 'benjamin', 4: 'jose',
  5: 'isacar', 6: 'zabulon', 7: 'dan', 8: 'gad',
  9: 'aser', 10: 'neftali', 11: 'ruben', 12: 'simeon'
};

/* ────────────────────────────────────────
   PARTÍCULAS — Canvas global (home)
──────────────────────────────────────── */
(function initHomeParticles() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.6 - 0.2,
      opacity: Math.random() * 0.6 + 0.1,
      life: 0,
      maxLife: Math.random() * 300 + 200
    };
  }

  for (let i = 0; i < 80; i++) particles.push(createParticle());

  function drawParticle(p) {
    const fadeIn  = Math.min(1, p.life / 40);
    const fadeOut = Math.min(1, (p.maxLife - p.life) / 40);
    const alpha   = p.opacity * fadeIn * fadeOut;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.shadowBlur  = 6;
    ctx.shadowColor = '#C9A84C';
    ctx.fillStyle   = '#F0D080';
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p, i) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.life++;
      if (p.life > p.maxLife || p.y < -10) particles[i] = createParticle();
      else drawParticle(p);
    });
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ────────────────────────────────────────
   PARALLAX on mouse move
──────────────────────────────────────── */
document.addEventListener('mousemove', e => {
  const mx = (e.clientX / window.innerWidth  - 0.5) * 2;
  const my = (e.clientY / window.innerHeight - 0.5) * 2;
  const layers = document.querySelectorAll('.hero-layer');
  layers.forEach((l, i) => {
    const depth = (i + 1) * 6;
    l.style.transform = `translate(${mx * depth}px, ${my * depth * 0.5}px)`;
  });
});

/* ────────────────────────────────────────
   BUILD TRIBES PREVIEW BAR
──────────────────────────────────────── */
function buildTribesPreview() {
  const container = document.getElementById('tribesPreview');
  const order = Object.keys(TRIBES).sort((a,b) => TRIBES[a].month - TRIBES[b].month);
  order.forEach(key => {
    const t = TRIBES[key];
    const card = document.createElement('div');
    card.className = 'tribe-mini-card';
    card.innerHTML = `
      <div class="tribe-mini-symbol">${t.symbol}</div>
      <div class="tribe-mini-name">${t.name}</div>
      <div class="tribe-mini-month">${t.monthName}</div>
    `;
    card.style.borderColor = t.colors.primary + '44';
    card.addEventListener('click', () => showTribeDirectly(key));
    container.appendChild(card);
  });
  // Auto-scroll animation
  let scrollDir = 1;
  function autoScroll() {
    container.scrollLeft += scrollDir * 0.5;
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) scrollDir = -1;
    if (container.scrollLeft <= 0) scrollDir = 1;
  }
  setInterval(autoScroll, 30);
}
buildTribesPreview();

/* ────────────────────────────────────────
   DISCOVER TRIBE (main flow)
──────────────────────────────────────── */
function discoverTribe() {
  const input = document.getElementById('birthDate');
  if (!input.value) {
    showToast('Por favor, selecciona tu fecha de nacimiento ✦');
    input.focus();
    return;
  }
  const date  = new Date(input.value + 'T12:00:00');
  const month = date.getMonth() + 1;
  const key   = MONTH_TO_TRIBE[month];
  if (!key) { showToast('Fecha no válida'); return; }

  // Counter bump
  const counterEl = document.getElementById('counterNum');
  let count = parseInt(counterEl.textContent.replace(/,/g, ''));
  count++;
  counterEl.textContent = count.toLocaleString('es');

  showLoadingThenResult(key);
}

/* Direct from preview bar */
function showTribeDirectly(key) {
  showLoadingThenResult(key);
}

/* ────────────────────────────────────────
   SCREEN TRANSITIONS
──────────────────────────────────────── */
function showLoadingThenResult(key) {
  const home    = document.getElementById('homeScreen');
  const loading = document.getElementById('loadingScreen');
  const result  = document.getElementById('resultScreen');

  // Step 1: Home exits
  home.classList.add('exit');
  setTimeout(() => {
    home.classList.remove('active', 'exit');
  }, 800);

  // Step 2: Loading appears
  setTimeout(() => {
    loading.classList.add('active');
  }, 400);

  // Step 3: Build result in background, show after delay
  buildResultScreen(key);

  setTimeout(() => {
    loading.classList.remove('active');
    loading.classList.add('exit');
    setTimeout(() => loading.classList.remove('exit'), 800);

    result.classList.add('active');
    result.scrollTop = 0;
    startTribeParticles(key);
  }, 2200);
}

function goHome() {
  const home   = document.getElementById('homeScreen');
  const result = document.getElementById('resultScreen');
  const tribeCanvas = document.getElementById('tribeCanvas');

  result.classList.add('exit');
  setTimeout(() => {
    result.classList.remove('active', 'exit');
    tribeCanvas.style.display = 'none';
    stopTribeParticles();
  }, 800);

  setTimeout(() => {
    home.classList.add('active');
  }, 400);
}

/* ────────────────────────────────────────
   BUILD RESULT SCREEN
──────────────────────────────────────── */
function buildResultScreen(key) {
  const tribe = TRIBES[key];

  // Background theme
  const bgLayer = document.getElementById('resultBgLayer');
  bgLayer.className = `result-bg-layer theme-${tribe.theme}`;

  // Symbol
  document.getElementById('tribeSymbol').textContent = tribe.symbol;

  // Name
  document.getElementById('tribeName').textContent = tribe.name;

  // Hebrew name
  document.getElementById('tribeHebrew').textContent = tribe.nameHebrew;

  // Description
  document.getElementById('tribeDescription').textContent = tribe.description;

  // Traits
  const traitsEl = document.getElementById('tribeTraits');
  traitsEl.innerHTML = tribe.traits.map(t =>
    `<li><span class="trait-icon">${t.icon}</span>${t.text}</li>`
  ).join('');

  // Blessings
  const blessingsEl = document.getElementById('blessingCards');
  blessingsEl.innerHTML = tribe.blessings.map(b => `
    <div class="blessing-card">
      <p class="blessing-verse">"${b.verse}"</p>
      <div class="blessing-ref">${b.ref}</div>
    </div>
  `).join('');

  // References
  const refsEl = document.getElementById('referencesGrid');
  refsEl.innerHTML = tribe.references.map(r =>
    `<div class="ref-pill">${r}</div>`
  ).join('');

  // Other tribes
  const otherEl = document.getElementById('otherTribesGrid');
  const order = Object.keys(TRIBES).sort((a,b) => TRIBES[a].month - TRIBES[b].month);
  otherEl.innerHTML = order.map(k => {
    const t = TRIBES[k];
    const isCurrent = k === key;
    return `
      <div class="other-tribe-pill ${isCurrent ? 'current' : ''}"
           onclick="${isCurrent ? '' : `showTribeDirectly('${k}')`}"
           style="cursor:${isCurrent ? 'default' : 'pointer'}">
        <span class="other-tribe-emoji">${t.symbol}</span>
        <span class="other-tribe-label">${t.name}</span>
      </div>
    `;
  }).join('');

  // Apply tribal accent color to card accents
  document.documentElement.style.setProperty('--tribe-accent', tribe.colors.primary);

  // Store current tribe for share/download
  window._currentTribeKey = key;
}

/* ────────────────────────────────────────
   TRIBE PARTICLES
──────────────────────────────────────── */
let tribeAnimFrame = null;

function startTribeParticles(key) {
  const tribe  = TRIBES[key];
  const canvas = document.getElementById('tribeCanvas');
  const ctx    = canvas.getContext('2d');
  canvas.style.display = 'block';

  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();

  function makeParticle() {
    return {
      x: Math.random() * W,
      y: H + 10,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 1.5,
      speedY: -(Math.random() * 1.5 + 0.5),
      opacity: Math.random() * 0.7 + 0.2,
      spin: Math.random() * 0.05 - 0.025,
      angle: Math.random() * Math.PI * 2,
      life: 0,
      maxLife: Math.random() * 200 + 150,
      shape: tribe.particleShape
    };
  }

  for (let i = 0; i < 50; i++) {
    const p = makeParticle();
    p.y = Math.random() * H;
    p.life = Math.floor(Math.random() * p.maxLife);
    particles.push(p);
  }

  const color = tribe.particleColor;

  function drawShape(ctx, p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    const s = p.size;

    const fIn  = Math.min(1, p.life / 30);
    const fOut = Math.min(1, (p.maxLife - p.life) / 30);
    ctx.globalAlpha = p.opacity * fIn * fOut;
    ctx.fillStyle = color;
    ctx.shadowBlur  = 8;
    ctx.shadowColor = color;

    switch (p.shape) {
      case 'star':
        drawStar(ctx, 0, 0, 5, s * 1.5, s * 0.7);
        break;
      case 'triangle':
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.lineTo(s * 0.87, s * 0.5);
        ctx.lineTo(-s * 0.87, s * 0.5);
        ctx.closePath();
        ctx.fill();
        break;
      case 'square':
        ctx.fillRect(-s/2, -s/2, s, s);
        break;
      case 'leaf':
        ctx.beginPath();
        ctx.ellipse(0, 0, s * 0.5, s * 1.5, 0, 0, Math.PI * 2);
        ctx.fill();
        break;
      default:
        ctx.beginPath();
        ctx.arc(0, 0, s, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
  }

  function drawStar(ctx, cx, cy, spikes, outerR, innerR) {
    let rot = (Math.PI / 2) * 3;
    const step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerR);
    for (let i = 0; i < spikes; i++) {
      ctx.lineTo(cx + Math.cos(rot) * outerR, cy + Math.sin(rot) * outerR);
      rot += step;
      ctx.lineTo(cx + Math.cos(rot) * innerR, cy + Math.sin(rot) * innerR);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerR);
    ctx.closePath();
    ctx.fill();
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p, i) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.angle += p.spin;
      p.life++;
      if (p.life > p.maxLife || p.y < -20) particles[i] = makeParticle();
      else drawShape(ctx, p);
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

/* ────────────────────────────────────────
   SHARE
──────────────────────────────────────── */
async function shareResult() {
  const key   = window._currentTribeKey;
  if (!key) return;
  const tribe = TRIBES[key];
  const text  = `✦ Descubrí que pertenezco a la Tribu de ${tribe.name} ${tribe.symbol}\n\n"${tribe.blessings[0].verse.substring(0, 100)}…"\n— ${tribe.blessings[0].ref}\n\n¿Y tú? Descubre tu tribu en: ${window.location.href}`;

  if (navigator.share) {
    try {
      await navigator.share({ title: `Mi Tribu es ${tribe.name}`, text });
      showToast('¡Compartido! ✦');
    } catch {}
  } else {
    await navigator.clipboard.writeText(text);
    showToast('¡Texto copiado al portapapeles! ✦');
  }
}

/* ────────────────────────────────────────
   DOWNLOAD AS IMAGE (Canvas)
──────────────────────────────────────── */
function downloadResult() {
  const key = window._currentTribeKey;
  if (!key) return;
  const tribe = TRIBES[key];

  const canvas = document.createElement('canvas');
  canvas.width  = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext('2d');

  // Background gradient
  const grad = ctx.createRadialGradient(540, 400, 0, 540, 400, 900);
  grad.addColorStop(0, '#1A1A30');
  grad.addColorStop(1, '#06060F');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1080, 1350);

  // Gold border
  ctx.strokeStyle = tribe.colors.primary + '88';
  ctx.lineWidth = 4;
  ctx.strokeRect(30, 30, 1020, 1290);

  // Symbol
  ctx.font = '180px serif';
  ctx.textAlign = 'center';
  ctx.fillText(tribe.symbol, 540, 340);

  // Glow behind name
  ctx.save();
  ctx.shadowBlur  = 60;
  ctx.shadowColor = tribe.colors.primary;
  ctx.fillStyle = tribe.colors.primary;
  ctx.font = 'bold 90px Georgia, serif';
  ctx.fillText(tribe.name, 540, 460);
  ctx.restore();

  // Hebrew
  ctx.fillStyle = tribe.colors.primary + 'AA';
  ctx.font = '50px Georgia, serif';
  ctx.fillText(tribe.nameHebrew, 540, 540);

  // Divider
  ctx.beginPath();
  ctx.moveTo(200, 580);
  ctx.lineTo(880, 580);
  ctx.strokeStyle = tribe.colors.primary + '55';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Description (word-wrap)
  ctx.fillStyle = '#D4C5A0';
  ctx.font = '32px Georgia, serif';
  wrapText(ctx, tribe.description.substring(0, 220) + '…', 540, 640, 900, 46);

  // Blessing snippet
  ctx.fillStyle = tribe.colors.primary + 'BB';
  ctx.font = 'italic 30px Georgia, serif';
  wrapText(ctx, `"${tribe.blessings[0].verse.substring(0, 150)}…"`, 540, 950, 850, 42);

  ctx.fillStyle = tribe.colors.primary;
  ctx.font = '28px Georgia, serif';
  ctx.fillText(`— ${tribe.blessings[0].ref}`, 540, 1080);

  // Footer
  ctx.fillStyle = '#FFFFFF33';
  ctx.font = '26px Georgia, serif';
  ctx.fillText('✦ Descubre tu Tribu de Israel ✦', 540, 1200);
  ctx.fillStyle = '#FFFFFF22';
  ctx.font = '22px Georgia, serif';
  ctx.fillText('Asignación simbólica con base bíblica', 540, 1250);

  // Download
  const link = document.createElement('a');
  link.download = `tribu-${tribe.name.toLowerCase()}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast(`Imagen de ${tribe.name} guardada ✦`);
}

function wrapText(ctx, text, x, y, maxWidth, lineH) {
  const words = text.split(' ');
  let line = '';
  let curY  = y;
  ctx.textAlign = 'center';
  words.forEach(word => {
    const test = line + word + ' ';
    if (ctx.measureText(test).width > maxWidth && line !== '') {
      ctx.fillText(line.trim(), x, curY);
      line = word + ' ';
      curY += lineH;
    } else {
      line = test;
    }
  });
  if (line) ctx.fillText(line.trim(), x, curY);
}

/* ────────────────────────────────────────
   TOAST
──────────────────────────────────────── */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ────────────────────────────────────────
   SCROLL REVEAL (result screen)
──────────────────────────────────────── */
function initScrollReveal() {
  const resultScreen = document.getElementById('resultScreen');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = '1';
        entry.target.style.transform  = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, root: resultScreen });

  // We'll observe sections after result is built — triggered on screen activation
  const mutationObs = new MutationObserver(() => {
    document.querySelectorAll('.tribe-section').forEach(el => {
      el.style.opacity   = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      observer.observe(el);
    });
  });
  mutationObs.observe(document.getElementById('resultScreen'), { attributes: true, attributeFilter: ['class'] });
}
initScrollReveal();

/* ────────────────────────────────────────
   KEYBOARD SHORTCUT
──────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.getElementById('homeScreen').classList.contains('active')) {
    discoverTribe();
  }
  if (e.key === 'Escape' && document.getElementById('resultScreen').classList.contains('active')) {
    goHome();
  }
});

/* ────────────────────────────────────────
   INIT — set today as default date
──────────────────────────────────────── */
(function setDefaultDate() {
  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const d = String(today.getDate()).padStart(2, '0');
  // Use a nice sample date to encourage interaction
  document.getElementById('birthDate').value = `${y}-${m}-${d}`;
})();
