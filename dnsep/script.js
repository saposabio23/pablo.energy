console.log("Handmade by Pablo Moreno ⚡️ www.pablo.energy ⚡️ june 2024");

const indexPanel = document.querySelector(".indexPanel");

fetch(
  "https://opensheet.elk.sh/1UxNmgP3Xc45kwgnKGlA5a2kUe8zz0JxCqw8mPOJajc0/lieux"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.forEach((row) => {
      const templateLine = document.getElementById("templateLine").content;

      // Clone the template
      const templateLineClone = document.importNode(templateLine, true);

      // Populate the template with data
      templateLineClone.querySelector(".line").classList.add("lineLieux");

      templateLineClone
        .querySelector(".lineIndicator")
        .classList.add("indicatorLieux");
      templateLineClone.querySelector(".lineActivity").textContent = mapEmojis(
        row.Activité
      );
      templateLineClone.querySelector(".lineDescription").textContent =
        row.Description;

      templateLineClone
        .querySelector(".lineBestIn")
        .classList.add("filter-text-sub");
      templateLineClone.querySelector(".lineBestIn").innerHTML = mapIcons(
        row.Semaine
      );
      templateLineClone.querySelector(".lineTitle").textContent = row.Titre;

      indexPanel.appendChild(templateLineClone);
    });
  });

// Function to map values
function mapEmojis(title) {
  const emojisMap = {
    Boulangerie: "🥖",
    Courses: "🛒",
    Voyage: "🛣",
    CerfVolant: "🪁",
    Musée: "🏛",
    Soirée: "🎊",
    Fléchettes: "🎯",
    Shopping: "🛍",
    Bar: "🍻",
    Café: "☕",
    JeuxVidéo: "🕹",
    ÀEmporter: "🌮",
    Patinorie: "⛸",
    Picnic: "👒",
    Gym: "🏋️‍♀️",
    ésad: "<img src='assets/icons/é.png'>",
    Piscine: "🏊",
    Resto: "🍽️",
    Photo: "📸",
    Bowling: "🎳",
    Vélo: "🚴‍",
    Football: "⚽️",
    Danser: "💃",
    Courrir: "🏃‍",
    PMU: "🐎",
    Contempler: "👀",
    Aléatoire: "🎲",
    Tennis: "🎾",
    PingPong: "🏓",
    Basketball: "🏀",
    Ciel: "🌠",
    Théâtre: "🎭",
    Ciné: "🍿",
    Bosser: "👩‍💻",
    Peindre: "🎨",
    Concert: "🎷",
    Urbex: "🔦",
    Nature: "🏞",
    Pêche: "🎣",
    Discussion: "💬",
    Lecture: "📖",
    Marché: "👩‍🌾",
  };
  return emojisMap[title] || title;
}

// Function to map values
function mapIcons(title) {
  const iconsMap = {
    ésad: "<img src='assets/icons/é.png'>",
    Weekend: "<img src='assets/icons/weekend.svg'>",
    Matin: "<img src='assets/icons/semaine.svg'>",
  };
  return iconsMap[title] || title;
}
