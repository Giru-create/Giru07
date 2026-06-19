'use strict';

/* =============================================================
   BHARAT DARSHAN - All Indian States and Union Territories
============================================================= */

const INDIA_STATES = [
  { name:'Andhra Pradesh',    abbr:'AP', emoji:'\u{1F99A}', type:'state', capital:'Amaravati',         lang:'Telugu' },
  { name:'Arunachal Pradesh', abbr:'AR', emoji:'\u{1F3D4}', type:'state', capital:'Itanagar',          lang:'English' },
  { name:'Assam',             abbr:'AS', emoji:'\u{1F38B}', type:'state', capital:'Dispur',            lang:'Assamese' },
  { name:'Bihar',             abbr:'BR', emoji:'\u{1FA94}', type:'state', capital:'Patna',             lang:'Hindi' },
  { name:'Chhattisgarh',      abbr:'CG', emoji:'\u{1F33F}', type:'state', capital:'Raipur',            lang:'Hindi' },
  { name:'Goa',               abbr:'GA', emoji:'\u{1F3D6}', type:'state', capital:'Panaji',            lang:'Konkani' },
  { name:'Gujarat',           abbr:'GJ', emoji:'\u{1F981}', type:'state', capital:'Gandhinagar',       lang:'Gujarati' },
  { name:'Haryana',           abbr:'HR', emoji:'\u{1F33E}', type:'state', capital:'Chandigarh',        lang:'Hindi' },
  { name:'Himachal Pradesh',  abbr:'HP', emoji:'\u26F0',    type:'state', capital:'Shimla',            lang:'Hindi' },
  { name:'Jharkhand',         abbr:'JH', emoji:'\u26CF',    type:'state', capital:'Ranchi',            lang:'Hindi' },
  { name:'Karnataka',         abbr:'KA', emoji:'\u{1F418}', type:'state', capital:'Bengaluru',         lang:'Kannada' },
  { name:'Kerala',            abbr:'KL', emoji:'\u{1F334}', type:'state', capital:'Thiruvananthapuram',lang:'Malayalam' },
  { name:'Madhya Pradesh',    abbr:'MP', emoji:'\u{1F42F}', type:'state', capital:'Bhopal',            lang:'Hindi' },
  { name:'Maharashtra',       abbr:'MH', emoji:'\u{1F941}', type:'state', capital:'Mumbai',            lang:'Marathi' },
  { name:'Manipur',           abbr:'MN', emoji:'\u{1F338}', type:'state', capital:'Imphal',            lang:'Meitei' },
  { name:'Meghalaya',         abbr:'ML', emoji:'\u{1F327}', type:'state', capital:'Shillong',          lang:'Khasi' },
  { name:'Mizoram',           abbr:'MZ', emoji:'\u{1F98B}', type:'state', capital:'Aizawl',            lang:'Mizo' },
  { name:'Nagaland',          abbr:'NL', emoji:'\u{1F3A8}', type:'state', capital:'Kohima',            lang:'English' },
  { name:'Odisha',            abbr:'OD', emoji:'\u{1F6D5}', type:'state', capital:'Bhubaneswar',       lang:'Odia' },
  { name:'Punjab',            abbr:'PB', emoji:'\u{1F33E}', type:'state', capital:'Chandigarh',        lang:'Punjabi' },
  { name:'Rajasthan',         abbr:'RJ', emoji:'\u{1F42A}', type:'state', capital:'Jaipur',            lang:'Hindi' },
  { name:'Sikkim',            abbr:'SK', emoji:'\u{1F3D4}', type:'state', capital:'Gangtok',           lang:'Nepali' },
  { name:'Tamil Nadu',        abbr:'TN', emoji:'\u{1F3AD}', type:'state', capital:'Chennai',           lang:'Tamil' },
  { name:'Telangana',         abbr:'TS', emoji:'\u{1F48E}', type:'state', capital:'Hyderabad',         lang:'Telugu' },
  { name:'Tripura',           abbr:'TR', emoji:'\u{1F98C}', type:'state', capital:'Agartala',          lang:'Bengali' },
  { name:'Uttar Pradesh',     abbr:'UP', emoji:'\u{1F54C}', type:'state', capital:'Lucknow',           lang:'Hindi' },
  { name:'Uttarakhand',       abbr:'UK', emoji:'\u{1F3D4}', type:'state', capital:'Dehradun',          lang:'Hindi' },
  { name:'West Bengal',       abbr:'WB', emoji:'\u{1F42F}', type:'state', capital:'Kolkata',           lang:'Bengali' },
  { name:'Andaman & Nicobar', abbr:'AN', emoji:'\u{1F3DD}', type:'ut',    capital:'Port Blair',        lang:'Hindi/Bengali' },
  { name:'Chandigarh',        abbr:'CH', emoji:'\u{1F339}', type:'ut',    capital:'Chandigarh',        lang:'Hindi/Punjabi' },
  { name:'Dadra & NH & DD',   abbr:'DN', emoji:'\u26F5',    type:'ut',    capital:'Daman',             lang:'Gujarati' },
  { name:'Delhi (NCT)',        abbr:'DL', emoji:'\u{1F3DB}', type:'ut',    capital:'New Delhi',         lang:'Hindi' },
  { name:'Jammu & Kashmir',   abbr:'JK', emoji:'\u{1F3D4}', type:'ut',    capital:'Srinagar/Jammu',   lang:'Kashmiri/Dogri' },
  { name:'Ladakh',            abbr:'LA', emoji:'\u{1F985}', type:'ut',    capital:'Leh',               lang:'Ladakhi' },
  { name:'Lakshadweep',       abbr:'LD', emoji:'\u{1F3DD}', type:'ut',    capital:'Kavaratti',         lang:'Malayalam' },
  { name:'Puducherry',        abbr:'PY', emoji:'\u26F5',    type:'ut',    capital:'Puducherry',        lang:'Tamil/French' },
];

/* =============================================================
   STATE FACTS
============================================================= */
const STATE_FACTS = {
  'Andhra Pradesh':    ['Guntur is the chilli capital of India', 'Kalamkari and Kondapalli toys are world-famous', 'Home of the majestic Nagarjunasagar Dam'],
  'Arunachal Pradesh': ['Land of the Dawn-Lit Mountains', '97% forest cover - greenest state in India', 'Over 26 major tribes and 100+ dialects'],
  'Assam':             ['Produces 70% of India\'s tea', 'Kaziranga has 2/3 of world\'s one-horned rhinos', 'Bihu dance is a UNESCO cultural treasure'],
  'Bihar':             ['Birthplace of Buddhism - Bodh Gaya is here', 'Nalanda was world\'s first residential university', 'Chhath Puja is the oldest sun-worship festival'],
  'Chhattisgarh':      ['Rich in coal, iron ore and diamond mines', '44% covered by dense forest', 'Over 36 tribal communities with unique art'],
  'Goa':               ['Smallest state by area in India', 'Carnival festival is 400+ years old', '325 km of pristine Arabian Sea coastline'],
  'Gujarat':           ['Only home of Asiatic lions in the world', 'Birthplace of Mahatma Gandhi', 'Patola silk and Bandhani crafts are world-famous'],
  'Haryana':           ['Produces most Olympic medals per capita', 'Breadbasket of India', 'Gurugram is India\'s corporate capital'],
  'Himachal Pradesh':  ['Apple capital of India', 'Best ski resorts in South Asia', '55 peaks above 6,000 metres'],
  'Jharkhand':         ['40% of India\'s mineral wealth is here', 'Jharkhand means Land of Forests', 'Chhau dance is a UNESCO masterpiece'],
  'Karnataka':         ['Bengaluru is Asia\'s Silicon Valley', 'Coorg produces 30% of India\'s coffee', 'Mysuru Dasara is the biggest state festival'],
  'Kerala':            ['100% literacy - God\'s Own Country', 'Kettuvallam houseboat tradition is 200+ years old', 'Thrissur Pooram is world\'s grandest temple festival'],
  'Madhya Pradesh':    ['Most tiger reserves in India', 'Khajuraho temples are a UNESCO World Heritage Site', 'India\'s only diamond mine is in Panna'],
  'Maharashtra':       ['Bollywood - world\'s largest film industry', 'Ajanta and Ellora caves are 2000+ years old', 'Wankhede Stadium - cricket\'s holiest ground'],
  'Manipur':           ['Polo sport was invented here', 'Manipuri classical dance is revered globally', 'Loktak Lake has unique floating islands called phumdis'],
  'Meghalaya':         ['Mawsynram - wettest place on Earth', 'Living root bridges made from rubber tree roots', 'Music capital of Northeast India'],
  'Mizoram':           ['98.2% literacy - 2nd highest in India', 'Land of Blue Mountains', 'Puan textile has intricate traditional patterns'],
  'Nagaland':          ['Hornbill Festival is Festival of Festivals', 'Over 16 Naga tribes with distinct cultures', 'Rich in medicinal plants and biodiversity'],
  'Odisha':            ['Jagannath Puri Rath Yatra draws 1 million+ devotees', 'Pattachitra painting is 5th century old', 'Konark Sun Temple is a UNESCO World Heritage Site'],
  'Punjab':            ['Land of Five Rivers', 'Golden Temple is world\'s largest free kitchen', 'Bhangra dance is famous worldwide'],
  'Rajasthan':         ['More forts and palaces than any other state', 'Pushkar Camel Fair - world\'s largest camel fair', 'Blue City Jodhpur and Pink City Jaipur are iconic'],
  'Sikkim':            ['Kangchenjunga - world\'s 3rd highest peak', 'First fully organic state in India', '35% of its area is national park or sanctuary'],
  'Tamil Nadu':        ['Bharatanatyam - oldest classical dance in world', 'More temples than anywhere else on Earth', 'Jallikattu bull-taming is 2500+ years old'],
  'Telangana':         ['Hyderabad was the Pearl City of the world', 'Hyderabadi biryani is world-famous', 'Charminar is 400+ year old Islamic architecture'],
  'Tripura':           ['Northeast India gem with 19 tribal communities', 'Tripuri weaving is a living heritage art', 'Bamboo handicrafts are globally exported'],
  'Uttar Pradesh':     ['Taj Mahal - one of 7 Wonders of the World', 'Varanasi is the world\'s oldest living city', 'Lucknow is the city of nawabs and kebabs'],
  'Uttarakhand':       ['Dev Bhoomi - Land of the Gods', 'Gangotri and Yamunotri are sacred river sources', 'Kedarnath temple sits at 3,583 m altitude'],
  'West Bengal':       ['Durga Puja is Asia\'s largest street festival', 'Rabindranath Tagore - India\'s first Nobel laureate', 'Sundarbans has world\'s largest mangrove forest'],
  'Andaman & Nicobar': ['572 islands - only 37 are inhabited', 'Coral reefs rival the Great Barrier Reef', 'Nicobar pigeon is the most colourful bird in India'],
  'Chandigarh':        ['India\'s only planned city by Le Corbusier', 'Highest per capita income in India', 'Rock Garden made entirely from industrial waste'],
  'Dadra & NH & DD':   ['Portuguese colony until 1961', 'Daman beach is a top weekend getaway', 'Major industrial and textile hub'],
  'Delhi (NCT)':       ['Capital of India with 3,000 years of history', 'Qutub Minar is world\'s tallest brick minaret', 'Red Fort hosted India\'s first Independence Day'],
  'Jammu & Kashmir':   ['Paradise on Earth - Dal Lake and shikaras', 'Kashmiri saffron is world\'s most expensive spice', 'Mughal gardens are 400-year-old masterpieces'],
  'Ladakh':            ['World\'s highest motorable road at Khardung La', 'Pangong Lake changes colour through the day', 'Hemis Monastery is 400 years old'],
  'Lakshadweep':       ['India\'s smallest UT - only 32 sq km of land', 'Lagoons are among Asia\'s clearest waters', 'Coral atolls with pristine marine biodiversity'],
  'Puducherry':        ['French colonial architecture and cuisine', 'Auroville is international spiritual township', 'Famous for scuba diving and surfing'],
};

/* =============================================================
   STATE ESSENCE for AI Prompts
============================================================= */
const STATE_ESSENCE = {
  'Andhra Pradesh':    'Tirupati temple gopuram with pilgrims, spicy Guntur chillies at market, Kuchipudi dancer in gold saree, peacocks on green hills, Kalamkari art, Krishna river delta at sunset',
  'Arunachal Pradesh': 'Snow-capped Himalayan peaks at dawn, Tawang monastery on cliff, tribal women in colourful woven shawls, rhododendron forests in bloom, bamboo rope bridges over gorges',
  'Assam':             'Lush Kaziranga tea gardens in morning mist, one-horned rhino by Brahmaputra river, Bihu dancer in red mekhela chador, bamboo groves and silk looms, Kamakhya temple at dusk',
  'Bihar':             'Mahabodhi Temple golden spire at Bodh Gaya, Chhath Puja devotees at river sunrise, ancient Nalanda University ruins, Madhubani folk painting in vivid colours, Champaran mustard fields',
  'Chhattisgarh':      'Chitrakote waterfall in monsoon glory, Gondi tribal women in vibrant jewellery, dense sal forests, iron ore mines under amber sky, Bastar tribal handicrafts and drumming ceremonies',
  'Goa':               'Bougainvillea-draped Portuguese whitewashed church, turquoise Arabian Sea with fishing boats, Goan carnival parade with feathered costumes, prawn balchao on banana leaf, sunset at Calangute beach',
  'Gujarat':           'Rann of Kutch white salt desert under full moon, Asiatic lion in Gir Forest, Navratri garba dancers in mirrorwork chaniya choli, Sidi Saiyyed mosque stone lattice, vibrant Ahmedabad old city',
  'Haryana':           'Golden wheat fields stretching to horizon, Haryanvi wrestler at village akhara, Surajkund crafts fair, mustard blossoms in morning fog, Kurukshetra battlefield at dusk',
  'Himachal Pradesh':  'Snow-covered Rohtang Pass with apple orchards below, Buddhist prayer flags over Spiti river, Shimla Mall Road in winter, paragliding over Bir Billing, deodar cedar forests in mist',
  'Jharkhand':         'Hundru waterfall thundering through red-earth forest, Santali tribal woman with beaded jewellery, dense forest with elephants, Chhau masked dancer in dramatic costume',
  'Karnataka':         'Mysuru Palace lit with 100000 bulbs at Dasara, Hampi stone chariot at golden hour, Coorg coffee estate in misty rain, Badami cave temple carvings, Bengaluru skyline at night',
  'Kerala':            'Alleppey houseboat gliding through emerald backwaters at sunrise, Kathakali dancer in elaborate face paint and headdress, Thrissur Pooram elephant procession, sadya feast on banana leaf',
  'Madhya Pradesh':    'Khajuraho ancient temple carvings lit by lanterns, Bengal tiger in Bandhavgarh forest, Sanchi Buddhist stupa against blue sky, Marble Rocks gorge at Bhedaghat, Betwa river at sunset',
  'Maharashtra':       'Mumbai Marine Drive necklace of lights at night, Ganesh Chaturthi procession with giant idol, Ajanta cave paintings by torchlight, Pune Shaniwarwada fort walls, vada pav street food stall',
  'Manipur':           'Loktak Lake floating phumdis at dawn mist, Ras Leela performers in gold headdress, polo players on Manipuri ponies, Ima Keithel women-only market, Sangai deer by misty lakeside',
  'Meghalaya':         'Living root bridge in lush Khasi jungle, Cherrapunjee waterfalls cascading in monsoon, Shillong hills at sunrise, Nongkrem dance with silver headdress, rainbow over cloud-filled valley',
  'Mizoram':           'Aizawl city perched on steep misty ridge, Pawl Kut harvest festival dancers in puan cloth, bamboo forests and wild orchids, Vantawng Falls cascading through jungle',
  'Nagaland':          'Hornbill Festival warriors in hornbill feather headdress with spears, Kohima War Cemetery at dawn, tribal log drum bonfire, weavers creating Naga shawl patterns in traditional morung',
  'Odisha':            'Konark Sun Temple stone chariot wheel against orange sky, Puri Rath Yatra chariot procession, Odissi dancer in silver jewellery, Chilika Lake flamingos and fishing boats',
  'Punjab':            'Golden Temple Amritsar reflecting in Amrit Sarovar at dawn, Bhangra dancers leaping in mustard field, langar community kitchen, Wagah border ceremony at sunset, sarson da saag and makki di roti',
  'Rajasthan':         'Mehrangarh Fort above Jodhpur blue city at golden hour, camel caravan on Thar dunes at sunset, Pushkar lake with white temples and sadhus, Ghoomar dancer in red ghagra, Jaisalmer fort at night',
  'Sikkim':            'Kangchenjunga snow peak turning pink at dawn, Rumtek Monastery prayer wheels spinning, yak caravan on alpine meadow, rhododendron forest in full bloom, Teesta river rapids',
  'Tamil Nadu':        'Madurai Meenakshi Temple gopuram with thousand colourful sculptures, Bharatanatyam dancer in classical pose, Marina Beach sunrise with fishermen catamarans, Chettinad mansion courtyard, filter coffee in steel tumbler',
  'Telangana':         'Charminar arches at dusk with golden lights, Hyderabadi biryani in copper dum pot, Golconda Fort by moonlight, Ikat fabric loom in workshop, Kakatiya temple ruins at Warangal',
  'Tripura':           'Ujjayanta Palace reflected in lake at twilight, Tripuri woman weaving rignai cloth, Neermahal water palace at sunset, Unakoti rock carvings deep in jungle, bamboo grove festival dance',
  'Uttar Pradesh':     'Taj Mahal in white marble glowing at full moon, Varanasi ghats at dawn with thousand diyas floating on Ganga, priests performing aarti with fire lamps, Lucknowi kebab on coal grill, Kumbh Mela sacred confluence',
  'Uttarakhand':       'Kedarnath temple surrounded by snowy Himalayan peaks, Haridwar Ganga Aarti with flame lamps over river, Valley of Flowers meadow in full monsoon bloom, Rishikesh yoga ashram by Ganga rapids',
  'West Bengal':       'Durga Puja pandal with clay goddess in golden light, Howrah Bridge over misty Hooghly at dawn, Darjeeling tea garden with Kanchenjunga backdrop, rasgulla sweet in earthen pot, Rabindra Sangeet recital',
  'Andaman & Nicobar': 'Havelock Island turquoise water with white coral sand, sea turtle swimming over rainbow coral reef, Cellular Jail at sunset, bioluminescent waves at night on Radhanagar Beach',
  'Chandigarh':        'Le Corbusier Capitol Complex in geometric modernist concrete, Rose Garden in full spring bloom, Sukhna Lake sunrise with joggers, Rock Garden sculptures from recycled industrial waste',
  'Dadra & NH & DD':   'Daman Fort by golden sea at dusk, Portuguese chapel with terracotta rooftop, fishing boats on Damanganga River, Devka Beach, colonial architecture in tropical setting',
  'Delhi (NCT)':       'India Gate at dusk bathed in orange light with crowds, Red Fort ramparts with Indian flag, Qutub Minar surrounded by Mughal ruins, Chandni Chowk spice market, Humayun Tomb in Mughal garden',
  'Jammu & Kashmir':   'Dal Lake shikara boats reflecting snow mountains at sunrise, Shalimar Bagh Mughal garden tulips, saffron field in Pampore at harvest time, Pashmina weaver at ancient loom, Gulmarg ski slope in snow',
  'Ladakh':            'Pangong Tso lake in three shades of blue at 4350 metres, Thiksey monastery on rocky hill at dawn, prayer flags over snowy Khardung La pass, Hemis Festival Cham dancers in dragon masks',
  'Lakshadweep':       'Bangaram atoll crystal lagoon from above, underwater coral garden with tropical fish, traditional outrigger boat on turquoise sea, coconut grove at golden hour on white sand beach',
  'Puducherry':        'French Quarter pastel colonial buildings with bougainvillea, Auroville Matrimandir golden sphere in forest, Tamil fishing village with painted boats, beach promenade at sunrise, French-Tamil fusion cafe',
};

const VIBE_DETAILS = {
  culture:      'vibrant local cultural scenes, traditional attire, folk performances, community celebrations',
  food:         'iconic regional dishes artfully presented, bustling food markets, fragrant spices, cooking rituals',
  landscape:    'stunning natural scenery, dramatic lighting, iconic geography and breathtaking vistas',
  festivals:    'colourful festival celebrations, joyful crowds, processions, fireworks, cultural pageantry',
  architecture: 'magnificent historic temples, forts, palaces, mosques, colonial and vernacular heritage buildings',
  wildlife:     'unique regional wildlife in lush natural habitat, exotic birds, tigers, elephants, marine life',
  crafts:       'traditional handloom weaving, intricate pottery, folk sculpture, artisan workshops',
  dance:        'classical or folk dance performance in traditional costume and ornate jewellery',
  spirituality: 'sacred river ghats, ancient temple rituals, ashrams, incense smoke, devotion and divine serenity',
  nightlife:    'vibrant city lights, bustling evening markets, glowing street food stalls, illuminated landmarks',
};

function buildPrompt(state, vibes, style) {
  var essence = STATE_ESSENCE[state.name] || (state.name + ' India cultural landscape');
  var vibeStr = vibes.length > 0
    ? vibes.map(function(v) { return VIBE_DETAILS[v]; }).filter(Boolean).join(', ')
    : 'culture, food and landscapes';
  return style + ' photograph of ' + state.name + ' India. ' +
    essence + '. Focus on: ' + vibeStr + '. ' +
    'Vibrant colours, cinematic composition, ultra-detailed, 8K quality, award-winning photography.';
}

/* =============================================================
   PARTICLE CANVAS
============================================================= */
function initParticles() {
  var canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var W = canvas.width  = window.innerWidth;
  var H = canvas.height = window.innerHeight;

  window.addEventListener('resize', function() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });

  var COLORS = [
    'rgba(255,107,0,',
    'rgba(255,215,0,',
    'rgba(13,138,76,',
    'rgba(255,140,0,',
  ];

  var particles = [];
  for (var i = 0; i < 60; i++) {
    particles.push({
      x:     Math.random() * W,
      y:     Math.random() * H,
      r:     Math.random() * 2 + 0.5,
      dx:    (Math.random() - 0.5) * 0.35,
      dy:    (Math.random() - 0.5) * 0.35,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.45 + 0.1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(function(p) {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* =============================================================
   APP STATE
============================================================= */
var selectedState = null;
var activeVibes   = ['culture', 'food', 'landscape'];
var activeStyle   = 'photorealistic';
var gallery       = [];

/* =============================================================
   RENDER STATES GRID
============================================================= */
var currentTab = 'all';

function renderStates(filter) {
  filter = filter || '';
  var grid = document.getElementById('statesGrid');
  grid.innerHTML = '';
  var q = filter.toLowerCase().trim();

  INDIA_STATES.forEach(function(s) {
    var matchTab   = (currentTab === 'all') || (s.type === currentTab);
    var matchQuery = !q ||
      s.name.toLowerCase().indexOf(q) !== -1 ||
      s.abbr.toLowerCase().indexOf(q) !== -1 ||
      s.lang.toLowerCase().indexOf(q) !== -1;
    if (!matchTab || !matchQuery) return;

    var btn = document.createElement('button');
    btn.className = 'state-btn' + (selectedState && selectedState.abbr === s.abbr ? ' selected' : '');
    btn.id = 'sbtn-' + s.abbr;
    btn.setAttribute('aria-label', s.name);
    btn.innerHTML =
      '<span class="s-emoji">' + s.emoji + '</span>' +
      '<span class="s-name">'  + s.name  + '</span>' +
      '<span class="s-tag">'   + (s.type === 'ut' ? 'UT' : s.abbr) + '</span>';
    btn.addEventListener('click', function() { selectState(s); });
    grid.appendChild(btn);
  });
}

/* =============================================================
   SELECT STATE
============================================================= */
function selectState(s) {
  selectedState = s;
  document.querySelectorAll('.state-btn').forEach(function(b) { b.classList.remove('selected'); });
  var btn = document.getElementById('sbtn-' + s.abbr);
  if (btn) btn.classList.add('selected');

  document.getElementById('selEmoji').textContent = s.emoji;
  document.getElementById('selName').textContent  = s.name;
  document.getElementById('selType').textContent  =
    s.type === 'ut'
      ? 'Union Territory  |  Capital: ' + s.capital
      : 'State  |  Capital: ' + s.capital + '  |  Language: ' + s.lang;

  var genCard    = document.getElementById('genCard');
  var resultCard = document.getElementById('resultCard');
  genCard.style.display    = 'block';
  resultCard.style.display = 'none';
  genCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* =============================================================
   VIBE CHIPS
============================================================= */
document.getElementById('chipGrid').querySelectorAll('.chip').forEach(function(chip) {
  chip.addEventListener('click', function() {
    var v   = chip.dataset.v;
    var idx = activeVibes.indexOf(v);
    if (idx !== -1) {
      activeVibes.splice(idx, 1);
      chip.classList.remove('active');
    } else {
      activeVibes.push(v);
      chip.classList.add('active');
    }
  });
});

/* =============================================================
   STYLE SELECTOR
============================================================= */
document.getElementById('styleGrid').querySelectorAll('.style-opt').forEach(function(opt) {
  opt.addEventListener('click', function() {
    document.querySelectorAll('.style-opt').forEach(function(o) { o.classList.remove('selected'); });
    opt.classList.add('selected');
    activeStyle = opt.dataset.style;
  });
});

/* =============================================================
   TABS
============================================================= */
document.querySelectorAll('.tab').forEach(function(tab) {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
    tab.classList.add('active');
    currentTab = tab.dataset.tab;
    renderStates(document.getElementById('stateSearch').value);
  });
});

/* =============================================================
   SEARCH
============================================================= */
document.getElementById('stateSearch').addEventListener('input', function(e) {
  var val = e.target.value;
  document.getElementById('searchClear').style.display = val ? 'block' : 'none';
  renderStates(val);
});
document.getElementById('searchClear').addEventListener('click', function() {
  document.getElementById('stateSearch').value = '';
  document.getElementById('searchClear').style.display = 'none';
  renderStates('');
});

/* =============================================================
   GENERATE IMAGE  (FIXED)
   - Sets src directly on the DOM <img> element
   - No crossOrigin attribute (avoids CORS failure)
   - Shorter prompt in URL to avoid 414 errors
   - Auto-retry with different seed on first error
   - 90-second timeout
============================================================= */
function generate() {
  if (!selectedState) {
    showToast('Please select a state first!');
    return;
  }

  var state  = selectedState;
  var vibes  = activeVibes.slice();
  var style  = activeStyle;
  var prompt = buildPrompt(state, vibes, style);

  /* ---- UI: show result card + loader ---- */
  var resultCard = document.getElementById('resultCard');
  resultCard.style.display = 'block';
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });

  document.getElementById('resultTitle').textContent = state.emoji + '  ' + state.name;
  var tagsHTML = '<span>' + style + '</span><span>' + state.capital + '</span>';
  vibes.slice(0, 4).forEach(function(v) { tagsHTML += '<span>' + v + '</span>'; });
  document.getElementById('resultTags').innerHTML = tagsHTML;

  var loaderWrap    = document.getElementById('loaderWrap');
  var genImg        = document.getElementById('genImg');
  var imgOverlay    = document.getElementById('imgOverlay');
  var resultActions = document.getElementById('resultActions');
  var genBtn        = document.getElementById('genBtn');

  loaderWrap.style.display    = 'flex';
  genImg.style.display        = 'none';
  imgOverlay.style.display    = 'none';
  resultActions.style.display = 'none';

  document.getElementById('loaderState').textContent  = state.name;
  document.getElementById('loaderPrompt').textContent = prompt.substring(0, 160) + '...';

  genBtn.disabled = true;
  genBtn.querySelector('.gen-btn-text').textContent = 'Generating...';

  /* ---- Build URL (keep short to avoid server errors) ---- */
  var shortEssence = (STATE_ESSENCE[state.name] || state.name).substring(0, 180);
  var shortVibes   = vibes.slice(0, 2).join(' and ');
  var aiPrompt     = state.name + ' India ' + style + ' ' + shortVibes + ' ' + shortEssence + ' vibrant 8K';
  var seed1        = Math.floor(Math.random() * 999999);
  var url1         = 'https://image.pollinations.ai/prompt/' +
                     encodeURIComponent(aiPrompt) +
                     '?width=1200&height=750&seed=' + seed1 + '&nologo=true&model=flux';

  var timeoutId;

  function onLoad() {
    clearTimeout(timeoutId);
    loaderWrap.style.display    = 'none';
    genImg.style.display        = 'block';
    imgOverlay.style.display    = 'flex';
    resultActions.style.display = 'block';
    document.getElementById('dlBtn').href     = genImg.src;
    document.getElementById('dlBtnMain').href = genImg.src;
    document.getElementById('promptTxt').textContent = prompt;
    renderFacts(state.name);
    addToGallery(state, genImg.src, style, vibes);
    genBtn.disabled = false;
    genBtn.querySelector('.gen-btn-text').textContent = 'Generate AI Vibe Image';
    showToast(state.emoji + ' ' + state.name + ' painted by AI!');
  }

  function onError() {
    /* First error: retry once with simpler prompt + new seed */
    clearTimeout(timeoutId);
    var seed2    = Math.floor(Math.random() * 999999);
    var simpleAI = state.name + ' India beautiful landscape culture food ' + style;
    var url2     = 'https://image.pollinations.ai/prompt/' +
                   encodeURIComponent(simpleAI) +
                   '?width=1024&height=640&seed=' + seed2 + '&nologo=true';

    genImg.onerror = function() {
      loaderWrap.style.display = 'none';
      genBtn.disabled = false;
      genBtn.querySelector('.gen-btn-text').textContent = 'Generate AI Vibe Image';
      showToast('AI service is busy. Please try again in a moment!');
    };
    genImg.src = url2;

    timeoutId = setTimeout(function() {
      genImg.onerror();
    }, 60000);
  }

  /* ---- Assign handlers THEN set src ---- */
  genImg.onload  = onLoad;
  genImg.onerror = onError;
  genImg.alt     = 'AI generated image of ' + state.name + ', India';
  genImg.src     = url1;          /* triggers the load */

  /* 90-second timeout for first attempt */
  timeoutId = setTimeout(function() {
    if (genImg.style.display === 'none') {
      onError();
    }
  }, 90000);
}

/* =============================================================
   RENDER FACTS
============================================================= */
function renderFacts(name) {
  var facts = STATE_FACTS[name] || [];
  var html  = '<p class="facts-title">Fascinating Facts about ' + name + '</p><div class="facts-list">';
  facts.forEach(function(f) { html += '<span class="fact-chip">' + f + '</span>'; });
  html += '</div>';
  document.getElementById('factsBox').innerHTML = html;
}

/* =============================================================
   GALLERY
============================================================= */
function addToGallery(state, url, style, vibes) {
  gallery.unshift({ state: state, url: url, style: style, vibes: vibes });
  var section = document.getElementById('gallerySection');
  var grid    = document.getElementById('galleryGrid');
  section.style.display = 'block';
  grid.innerHTML = '';
  gallery.forEach(function(item, i) {
    var el = document.createElement('div');
    el.className = 'gal-item';
    el.innerHTML =
      '<img src="' + item.url + '" alt="' + item.state.name + '" loading="lazy" />' +
      '<div class="gal-info">' +
        '<span style="font-size:1.5rem">' + item.state.emoji + '</span>' +
        '<div>' +
          '<div class="gal-state">' + item.state.name + '</div>' +
          '<div class="gal-sub">'  + item.style + ' · ' + item.vibes.slice(0,3).join(', ') + '</div>' +
        '</div>' +
      '</div>';
    grid.appendChild(el);
  });
}

/* =============================================================
   TOAST
============================================================= */
function showToast(msg) {
  var toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(function() { toast.classList.remove('show'); }, 3500);
}

/* =============================================================
   PROMPT TOGGLE
============================================================= */
document.getElementById('promptToggle').addEventListener('click', function() {
  var box  = document.getElementById('promptBox');
  var open = box.style.display === 'block';
  box.style.display   = open ? 'none' : 'block';
  this.textContent    = open ? 'See AI Prompt' : 'Hide Prompt';
});

/* =============================================================
   BUTTON EVENTS
============================================================= */
document.getElementById('genBtn').addEventListener('click', generate);
document.getElementById('regenBtn').addEventListener('click', generate);

document.getElementById('changeBtn').addEventListener('click', function() {
  document.getElementById('genCard').style.display    = 'none';
  document.getElementById('resultCard').style.display = 'none';
  selectedState = null;
  document.querySelectorAll('.state-btn').forEach(function(b) { b.classList.remove('selected'); });
  document.getElementById('selectorCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById('newStateBtn').addEventListener('click', function() {
  document.getElementById('genCard').style.display    = 'none';
  document.getElementById('resultCard').style.display = 'none';
  selectedState = null;
  document.querySelectorAll('.state-btn').forEach(function(b) { b.classList.remove('selected'); });
  document.getElementById('selectorCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* =============================================================
   INIT
============================================================= */
initParticles();
renderStates();
