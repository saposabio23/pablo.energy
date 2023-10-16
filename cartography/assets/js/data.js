let allData = {
  config:{},
  allTags:[],
  websites:[
  {
    title: "AS",
    url: "amnesiascanner.net/asep",
    description: "",
    imgFilename: "amnesiascanner",
    tags: ['punk','contemplation']
  },
  {
    title: "an idea for a website",
    url: "are.na/ian-mcdonald/an-idea-for-a-website",
    description: "",
    imgFilename: "are",
    tags: ['share','ideas','poetic']
  },
  {
    title: "Atlas Tom Hackshaw",
    url: "atlas.tom.so",
    description: "",
    imgFilename: "atlas",
    tags: ['images','compilation']
  },
  {
    title: "Making a Poetic Website",
    url: "chiaski.github.io/poeticweb",
    description: "",
    imgFilename: "chiaski",
    tags: ['share','poetic','ideas','sky','learn','class']
  },
  {
    title: "i love it when you",
    url: "chiaski.github.io/i-love-it-when-you",
    description: "",
    imgFilename: "chiaski1",
    tags: ['list','text','contemplation','poetic','slider','black&white']
  },
  {
    title: "Offline Only",
    url: "chrisbolin.co/offline",
    description: "",
    imgFilename: "chrisbolin",
    tags: ['interaction','offline']
  },
  {
    title: "CLOUDWATCHING",
    url: "cloudwatching.glitch.me",
    description: "",
    imgFilename: "cloudwatching",
    tags: ['contemplation','sky','draw']
  },
  {
    title: "Web Resources - Google Docs",
    url: "docs.google.com/document/d/18O4Lg5_snE7o1ICkmU2ifgUagSOvy8ZgCw3oP4Y7nwE/edit#",
    description: "",
    imgFilename: "docs",
    tags: ['share','code','workshop']
  },
  {
    title: "Introduction",
    url: "eastgate.com/garden/Introduction.html",
    description: "",
    imgFilename: "eastgate",
    tags: ['Non-linear','text','garden']
  },
  {
    title: "empathi.cc",
    url: "empathi.cc",
    description: "",
    imgFilename: "empathi",
    tags: ['interaction','forms','colors']
  },
  {
    title: "Every Noise at Once",
    url: "everynoise.com",
    description: "",
    imgFilename: "everynoise",
    tags: ['music','text','share']
  },
  {
    title: "Fifteen Words",
    url: "fifteenwords.com",
    description: "",
    imgFilename: "fifteenwords",
    tags: ['music','text','share']
  },
  {
    title: "share",
    url: "forestgreen.online",
    description: "",
    imgFilename: "forestgreen",
    tags: ['developper','share','colors']
  },
  {
    title: "garden of blues",
    url: "gardenblues.net",
    description: "",
    imgFilename: "gardenblues",
    tags: ['garden\n','cooking\n','share','recipie','pictograms']
  },
  {
    title: "Get Well Soon!",
    url: "getwellsoon.labr.io",
    description: "",
    imgFilename: "getwellsoon",
    tags: ['people\n','book','love','text','list','black&white']
  },
  {
    title: "Gossip’s Café",
    url: "gossips.cafe",
    description: "",
    imgFilename: "gossips",
    tags: ['text','talk','share','cafe']
  },
  {
    title: "Perpetual Calendar",
    url: "haveagood.today",
    description: "",
    imgFilename: "haveagood",
    tags: ['daily','images','community']
  },
  {
    title: "HereNow",
    url: "here-and-now.glitch.me/entered/enter-key.html",
    description: "",
    imgFilename: "here-and-now",
    tags: ['text','emotions','files']
  },
  {
    title: "MCDONALDIANGREGORYJAMES",
    url: "ianmcdonald.ca",
    description: "",
    imgFilename: "ianmcdonald",
    tags: ['contemplation','typography','black&white']
  },
  {
    title: "manifesto – evergreen",
    url: "itsevergreen.rip/manifesto",
    description: "",
    imgFilename: "itsevergreen",
    tags: ['music','text','old']
  },
  {
    title: "leaving website",
    url: "leaving.live",
    description: "",
    imgFilename: "leaving",
    tags: ['contemplation','connections','people']
  },
  {
    title: "digital love languages",
    url: "lovelanguages.melaniehoff.com/week-4-%e2%98%84%ef%b8%8e-a-digital-garden",
    description: "",
    imgFilename: "lovelanguages",
    tags: ['share','people','garden','class','pictograms']
  },
  {
    title: "Notpurple",
    url: "notpurple.com",
    description: "",
    imgFilename: "notpurple",
    tags: ['colors']
  },
  {
    title: "Other Office Home",
    url: "otheroffice.net",
    description: "",
    imgFilename: "otheroffice",
    tags: ['cursor','space','images']
  },
  {
    title: "Pia Chakraverti-Wuerthwein",
    url: "piacw.com",
    description: "",
    imgFilename: "piacw",
    tags: ['discover','garden','perspective','home']
  },
  {
    title: "cascade",
    url: "raphaelbastide.com/cascade/demos/start.html",
    description: "",
    imgFilename: "raphaelbastide",
    tags: ['music','browser','developper','colors']
  },
  {
    title: "Bell",
    url: "resounding.website",
    description: "",
    imgFilename: "resounding",
    tags: ['community','emotions','infinite','gradient']
  },
  {
    title: "Sinds jij dood bent…",
    url: "sindsjijdoodbent.nl",
    description: "",
    imgFilename: "sindsjijdoodbent",
    tags: ['gradient','poem','writing']
  },
  {
    title: "stained.otherti.me",
    url: "stained.otherti.me",
    description: "",
    imgFilename: "stained",
    tags: ['music','contemplation','video','blur']
  },
  {
    title: "THE EMOTINOMICON",
    url: "standard.dev/emotinomicon",
    description: "",
    imgFilename: "standard",
    tags: ['emotions','text','black&white']
  },
  {
    title: "Strange.Website",
    url: "strange.website",
    description: "",
    imgFilename: "strange",
    tags: ['text','old']
  },
  {
    title: 24,
    url: "sunday.avanier.studio/24",
    description: "",
    imgFilename: "sunday",
    tags: ['interaction','browser']
  },
  {
    title: "Wind-poem",
    url: "taichi.pink/2019-12-16_wind-poem",
    description: "",
    imgFilename: "taichi",
    tags: ['contemplation','nature','forms','text']
  },
  {
    title: "Taichi Wi",
    url: "taichi.pink",
    description: "",
    imgFilename: "taichi1",
    tags: ['perspective','nature','images']
  },
  {
    title: "LP–20X20",
    url: "tdingsun.github.io/lp20x20/index",
    description: "",
    imgFilename: "tdingsun",
    tags: ['friends','music','share']
  },
  {
    title: "the html review",
    url: "thehtml.review",
    description: "",
    imgFilename: "thehtml",
    tags: ['text','share']
  },
  {
    title: "thesoundof.love",
    url: "thesoundof.love",
    description: "",
    imgFilename: "thesoundof",
    tags: ['music','contemplation','text','black&white','video','community']
  },
  {
    title: "This Person Exists",
    url: "thispersonexists.net",
    description: "",
    imgFilename: "thispersonexists",
    tags: ['discover','contemplation','images']
  },
  {
    title: "secret",
    url: "tiana.computer/sunday_sites/secret",
    description: "",
    imgFilename: "tiana",
    tags: ['interaction','hover','surprise','text','video']
  },
  {
    title: "i am tiana",
    url: "tiana.computer/sunday_sites/reflection",
    description: "",
    imgFilename: "tiana1",
    tags: ['discover','text','list']
  },
  {
    title: "waiting for june",
    url: "waitingforjune.com",
    description: "",
    imgFilename: "waitingforjune",
    tags: ['draw','contemplation','time']
  },
  {
    title: "Links to useful sites",
    url: "whatthe.link",
    description: "",
    imgFilename: "whatthe",
    tags: ['share','people','list','hover']
  },
  {
    title: "forexample",
    url: "yourworldoftext.com/forexample",
    description: "",
    imgFilename: "yourworldoftext",
    tags: ['text','share','community','black&white']
  },
  {
    title: "wwwwords",
    url: "wwwwords.de",
    description: "",
    imgFilename: "words",
    tags: ['developper','download','text','files']
  },
  {
    title: "Your personal cloud",
    url: "your-personal.cloud",
    description: "",
    imgFilename: "your-personal",
    tags: ['images','sky','share','send','images']
  },
  {
    title: "Studio Yannic Poepperling",
    url: "yannicpoepperling.de",
    description: "",
    imgFilename: "yannicpoepperling",
    tags: ['skeumorphism','images','interaction']
  },
  {
    title: "Abundant Blue",
    url: "abundant.blue",
    description: "",
    imgFilename: "abundant",
    tags: ['friends','menu','interaction','share']
  },
  {
    title: "Eric Reh",
    url: "ericreh.de/en",
    description: "",
    imgFilename: "ericreh",
    tags: ['forms','hover']
  },
  {
    title: "Goodbye",
    url: "goodbyebooks.org",
    description: "",
    imgFilename: "goodbyebooks",
    tags: ['skeumorphism','book']
  },
  {
    title: "Liebermann Kiepe Reddemann",
    url: "liebermannkiepereddemann.de",
    description: "",
    imgFilename: "liebermannkiepereddemann",
    tags: ['text','skeumorphism']
  },
  {
    title: "Julia Volkmar — Spatial Graphic Design",
    url: "juliavolkmar.de",
    description: "",
    imgFilename: "juliavolkmar",
    tags: ['perspective','text','volume','raw']
  },
  {
    title: "co-exist.world",
    url: "co-exist.world",
    description: "",
    imgFilename: "co-exist",
    tags: ['images','random','collection']
  },
  {
    title: "Recent works",
    url: "tristangac.com/recentworks",
    description: "",
    imgFilename: "tristangac",
    tags: ['3D','volume','raw']
  },
  {
    title: "Schemas of Uncertainty",
    url: "schemasofuncertainty.com",
    description: "",
    imgFilename: "schemasofuncertainty",
    tags: ['text','interaction']
  },
  {
    title: "Slussen — Beforecast, by Harald Martin Peter Ström 2012–2015",
    url: "beforecast.webcam",
    description: "",
    imgFilename: "beforecast",
    tags: ['video','discover','surprise','contemplation']
  },
  {
    title: "Ivy",
    url: "tdingsun.github.io/ivy",
    description: "",
    imgFilename: "tdingsun",
    tags: ['music','text']
  },
  {
    title: "Example Forth Code",
    url: "wiki.c2.com/?ExampleForthCode",
    description: "",
    imgFilename: "wiki",
    tags: ['text','discover','Non-linear']
  },
  {
    title: "Back to the Future",
    url: "xanadu.net/XanaduSpace/btf.htm",
    description: "",
    imgFilename: "xanadu",
    tags: ['perspective','text','Non-linear']
  },
  {
    title: "Paint with Oils",
    url: "paint.toys/oil",
    description: "",
    imgFilename: "paint",
    tags: ['draw','tool','share']
  },
  {
    title: "Marks Sunset",
    url: "marks-sunset.glitch.me",
    description: "",
    imgFilename: "marks-sunset",
    tags: ['daily','sunset','contemplation']
  },
  {
    title: "a-small-memorial.glitch.me",
    url: "a-small-memorial.glitch.me",
    description: "",
    imgFilename: "a-small-memorial",
    tags: ['game','interaction','keyboard']
  },
  {
    title: "Single Line Drawing",
    url: "paint.toys/one-line",
    description: "",
    imgFilename: "paint",
    tags: ['draw','game','share']
  },
  {
    title: "Checkbox Race!",
    url: "checkboxrace.com",
    description: "",
    imgFilename: "checkboxrace",
    tags: ['developper','interaction','game']
  },
  {
    title: "Today, we saw",
    url: "thehtml.review/01/today-we-saw.html",
    description: "",
    imgFilename: "thehtml",
    tags: ['text','images','discover']
  },
  {
    title: "⊞ □ ⊞ □ ⊞",
    url: "shelby.cool/windows",
    description: "",
    imgFilename: "shelby",
    tags: ['sunset','interaction','contemplation']
  },
  {
    title: "Maxwell Neely-Cohen",
    url: "maxy.world",
    description: "",
    imgFilename: "maxy",
    tags: ['music','interaction']
  },
  {
    title: "onlytom.online",
    url: "onlytom.online",
    description: "",
    imgFilename: "onlytom",
    tags: ['share','music']
  },
  {
    title: "Good title",
    url: "products.minguhongmfg.com/good-title",
    description: "",
    imgFilename: "products",
    tags: ['book','text','share','interaction','skeumorphism']
  },
  {
    title: "Crouton",
    url: "crouton.net",
    description: "",
    imgFilename: "crouton",
    tags: ['images','code','humor']
  },
  {
    title: "HEEEEEEEEEEEEEEY!",
    url: "heeeeeeeey.com",
    description: "",
    imgFilename: "heeeeeeeey",
    tags: ['interaction']
  },
  {
    title: "Work Arnaud Lajeunie",
    url: "arnaudlajeunie.com/work",
    description: "",
    imgFilename: "arnaudlajeunie",
    tags: ['images','interaction','text']
  },
  {
    title: "willa smart",
    url: "willasmart.com",
    description: "",
    imgFilename: "willasmart",
    tags: ['images','interaction','fullscreen']
  },
  {
    title: "Cyberfeminism Index",
    url: "cyberfeminismindex.com",
    description: "",
    imgFilename: "cyberfeminismindex",
    tags: ['archive','book','text','feminism']
  },
  {
    title: "FORM",
    url: "c3.hu/collection/form/index.html?",
    description: "",
    imgFilename: "c3",
    tags: ['text','code','game','discover']
  },
  {
    title: "David Kauder",
    url: "davidkauder.com",
    description: "",
    imgFilename: "davidkauder",
    tags: ['text','interaction','menu','surprise','images']
  },
  {
    title: "syek99kr.github.iogdrough",
    url: "yek99kr.github.io/gdrough",
    description: "",
    imgFilename: "yek99kr",
    tags: ['colors','interaction','discover']
  },
  {
    title: "Digital Garden",
    url: "digitalgarden.nu/#",
    description: "",
    imgFilename: "digitalgarden",
    tags: ['infinite','garden','images','discover','surprise','perspective']
  },
  {
    title: "Hannah Blitz Heyman",
    url: "blitzheyman.com/jewelry.html",
    description: "",
    imgFilename: "blitzheyman",
    tags: ['shop','images','sky']
  },
  {
    title: "Sun Scraper",
    url: "sun-scraper.com",
    description: "",
    imgFilename: "sun-scraper",
    tags: ['images','fullscreen','contemplation']
  },
  {
    title: "SKY H1",
    url: "skyh1.net",
    description: "Unsetted forms for this music producer",
    imgFilename: "skyh1",
    tags: ['fonts','skeumorphism']
  },
  {
    title: "The Magic Door",
    url: "folder-one.eu/12.58",
    description: "What is hidden behind the doors?",
    imgFilename: "folder-one",
    tags: ['perspective','game','sound']
  },
  {
    title: "On the internet I place my hand on yours",
    url: "myhandonyours.com",
    description: "Online connection through physical hands",
    imgFilename: "myhandonyours",
    tags: ['3D','share','friends','images']
  },
  {
    title: "DIGITAL POLLUTION",
    url: "wanhsiu.github.io/-Digital-Pollution",
    description: "Vector-like pollution analyser from a ZIP code",
    imgFilename: "wanhsiu",
    tags: ['location','realtime','geometry']
  },
  {
    title: "Toph Tucker",
    url: "tophtucker.com",
    description: "Personal website of Toph Trucker playing with patience and raw materials",
    imgFilename: "tophtucker",
    tags: ['text','movement','raw']
  },
  {
    title: "Habitats",
    url: "companion-platform.org/habitats",
    description: "A space of resources necessary for the life and well being of an organism",
    imgFilename: "companion-platform",
    tags: ['garden ','share','tutorials']
  },
  {
    title: "Haiku-Haiku",
    url: "haiku-haiku.netlify.app",
    description: "People can collaborate to mix their sentences on haikus",
    imgFilename: "haiku-haiku",
    tags: ['text','poems','soft']
  },
  {
    title: "Sammlung Paul Heimbach Künstlerbücher Kataloge",
    url: "artype.de/Sammlung",
    description: "Catalogue of authors, artist, signatures, books, art…",
    imgFilename: "artype",
    tags: ['book','collection']
  },
  {
    title: "A real site of Sohyeon",
    url: "arealsiteofsohyeon.neocities.org",
    description: "Playful website from the artist Sohyeon",
    imgFilename: "arealsiteofsohyeon",
    tags: ['gradient','navigation']
  },
  {
    title: "GUT Magazine",
    url: "gutmagazine.com",
    description: "Clay font for this Londo-based magazine",
    imgFilename: "gutmagazine",
    tags: ['3D','text']
  },
  {
    title: "Lynne Carty",
    url: "lynnecarty.info",
    description: "Website from the illustrator Lynne Carty, where type of content is organised like island",
    imgFilename: "lynnecarty",
    tags: ['navigation','images','collection']
  },
  {
    title: "Pierre Rousseau",
    url: "pierrerousseau.info",
    description: "Website of the music maker Pierre Rousseau playing with some tension between the font and geometry",
    imgFilename: "pierrerousseau",
    tags: ['geometry','click','black&white']
  },
  {
    title: "code societies cooperative web page",
    url: "sfpc.io/codesocieties_students",
    description: "Shared content from the School for Poetic Computation (SFPC)",
    imgFilename: "sfpc",
    tags: ['collection','colors','text','images']
  },
  {
    title: "how-i-experience-web-today.com",
    url: "how-i-experience-web-today.com",
    description: "A vision of the profitable/modern web",
    imgFilename: "how-i-experience-web-today",
    tags: ['']
  },
  {
    title: "zuckerberg.smile",
    url: "terkelg.github.io/zuckerberg.smile",
    description: "Customize Mark’s smile",
    imgFilename: "terkelg",
    tags: ['slider','customize']
  },
  {
    title: "open that window .com by rafaël rozendaal, 2014",
    url: "openthatwindow.com",
    description: "This window protect us from the city",
    imgFilename: "openthatwindow",
    tags: ['gradient','sound']
  },
  {
    title: "Is it Thursday",
    url: "isitthursday.org",
    description: "Are we on really on thursday?",
    imgFilename: "isitthursday",
    tags: ['humor','raw']
  },
  {
    title: "p2p sunset",
    url: "duskjacket.com/SUNSET",
    description: "Invite someone to share this sunset",
    imgFilename: "duskjacket",
    tags: ['share','gradient']
  }
]
}
