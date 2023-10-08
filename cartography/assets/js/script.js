const cartoDimensions = {
  width: 50000,
  height: 50000,
  center: {
    x: 25000,
    y: 25000,
  }
}

let viewportDimensions = {
  width: 0,
  height: 0,
  center: {
    x: 0,
    y: 0,
  }
}

const offsetsImages = {
  'top-left': { x: -600, y: -300 },
  'top-right': { x: 600, y: -300 },
  'bottom-left': { x: -600, y: 300 },
  'bottom-right': { x: 600, y: 300 },
  'center': { x: 0, y: 0 },
}

const offsetsTagList = {
  'top-left': { x: -144, y: -79 },
  'top-right': { x: 144, y: -79 },
  'bottom-left': { x: -144, y: 79 },
  'bottom-right': { x: 144, y: 79 },
}

// des elements généraux
let viewport = document.querySelector('#viewport');
let tagDiv = document.querySelector('.tagList');
let historyContent = document.querySelector('.historyContent');
let tagStart = document.querySelector('.tagStart');
let tagToLoad = document.querySelector('#tagToLoad');

// le nombre de projets actuellement affichés
let curProjectIndex = 0

// la liste des projets affichés au format {container:DOMElement, data:{}}
let displayedProjects = []
// la liste des projets pouvant encore être affichés
let availableProjects = []

// let carto, viewport

/**
* appelée à l'initialisation du site
*/
function init() {
  // on remplit la liste des projets disponibles
  populateAvailableProjects()
  list_all_tags()
  setup_viewport()
  get_viewport_dimensions()
  set_scrollbars_position_center()
  // display_tags({ x: -1000, y: -1000, layout: 'top-left' }, { tags: allData.websites[0].tags })
  // display_project(allData.websites[1], cartoDimensions.center.x, cartoDimensions.center.y)
}

/**
* remplit la list edes projets disponibles
*/
function populateAvailableProjects() {
  availableProjects = []
  allData.websites.map(website => {
    availableProjects.push({ ...website })
  })

  /* equivalent à :
  for(let a in allData.websites){
    let website = allData.websites[a]
    availableProjects.push(website)
  }
  */
}

/**
*   retire un projet de la liste des projets disponibles
* @param  data  les donnees du projet à retirer
*/
function removeProjectFromAvailableProjects(data) {
  let index = availableProjects.findIndex((project) => project.title === data.title)
  if (index === -1) {
    console.warn("can't remove project from availableProjects. No project with the title " + data.title + " found.");
    return
  } else {
    availableProjects.splice(index, 1)
  }
}

/**
* recupere les dimensions du viewport (la zone visible à l'écran)
*/
function get_viewport_dimensions() {
  viewportDimensions.width = viewport.clientWidth
  viewportDimensions.height = viewport.clientHeight
  viewportDimensions.center.x = viewport.clientWidth / 2
  viewportDimensions.center.y = viewport.clientHeight / 2
}
window.addEventListener('resize', get_viewport_dimensions);

/**
* parcourt les données et recences tous les tags
*/
function list_all_tags() {
  let results = []
  // on parcourt le contenu de allData.websites
  for (let a in allData.websites) {
    let website = allData.websites[a]
    // pour le website en cours, on parcourt sa liste de tags
    for (let b in website.tags) {
      let tag = website.tags[b]
      // on verifie si ce tag existe déjà dans la liste des résultats
      let alreadyExist = false
      // on parcourt la liste des resultats
      for (let c in results) {
        // si le tag b et le results c sont identiques
        if (tag === results[c]) {
          alreadyExist = true
        }
      }
      // si le drapeau n'est pas levé (si le tag b n'existe pas dans la liste des resultats)
      if (!alreadyExist) {
        // on ajoute le tag b à la liste des résultats
        results.push(tag)
      }
    }
  }
  allData.allTags = [...results]

  for (let i = 0; i < results.length; i++) {
    let tagName = results[i];
    let tagEtiqueta = document.createElement("button");
    tagEtiqueta.innerHTML = tagName;
    tagEtiqueta.id = tagName;
    tagEtiqueta.className = 'tagButton';
    tagStart.appendChild(tagEtiqueta);
    tagEtiqueta.addEventListener('click', (event) => {
      tagStart.classList.add('hide1s')
      tagToLoad.innerHTML = tagName;
      setTimeout(() => {
        document.querySelector('.startLoading').classList.add('showLoad')
      }, "800");
      setTimeout(() => {
        click_on_tag(tagName, 'center', cartoDimensions.center)
      }, "3000");
    })
  }

}

/**
*  crée un button pour chaque tag de la liste
* @param  position  {x:Number, y:Number, layout:'String'}, la position de la palette dans la carto
* @param  data      les donnees du projet affiché
*/


function display_tags(position, data) {
  // on nettoie la position du block dans son tag html
  tagDiv.style.left = null
  tagDiv.style.top = null
  tagDiv.style.right = null
  tagDiv.style.bottom = null
  tagDiv.classList.remove('hidden')
  let tagListPosition

  // on position le conteneur de la taglist en fonction de son layout (position autour de la fenetre)
  switch (position.layout) {
    case 'top-left':
      tagDiv.style.left = position.x + 'px'
      tagDiv.style.top = position.y + 'px'
      tagListPosition = 'top-left'
      break
    case 'top-right':
      tagDiv.style.left = (position.x - tagDiv.clientWidth) + 'px'
      tagDiv.style.top = position.y + 'px'
      tagListPosition = 'top-right'
      break
    case 'bottom-left':
      tagDiv.style.left = position.x + 'px'
      tagListPosition = 'bottom-left'
      tagDiv.style.top = (position.y - tagDiv.clientHeight) + 'px'
      break
    case 'bottom-right':
      tagDiv.style.left = (position.x - tagDiv.clientWidth) + 'px'
      tagDiv.style.top = (position.y - tagDiv.clientHeight) + 'px'
      tagListPosition = 'bottom-right'
      break
  }

  // nettoyage du contenu de la palette de tags
  while (tagDiv.firstChild) {
    tagDiv.removeChild(tagDiv.firstChild);
  }

  for (let i = 0; i < data.tags.length; i++) {
    let tagName = data.tags[i];
    let titleName = data.title[i];
    // on regarde dans la liste des projets disponibles si un projet avec le tag tagName est encore disponible
    if (availableProjects.some((project) => project.tags.some((tag) => tag === tagName))) {
      let tagButton = document.createElement("button");
      tagButton.className = 'tagButton';
      tagButton.innerHTML = tagName;
      tagButton.id = tagName;
      tagDiv.appendChild(tagButton);
      tagButton.addEventListener('click', (event) => {
        click_on_tag(tagName, tagListPosition, data.projectPosition)
      })
    }
  }
}

/**
* clic sur un tag de la taglist
* @param  tagName   le nom du tag sur lequel on a cliqué
* @param  direction  la position (la direction) de la fenetre de tagList
* @param  projectPosition  la position (le centre) de la fenetre de projet
*/
function click_on_tag(tagName, direction, projectPosition) {
  // on retrouve la liste des projets contenant le tag tagName
  let projectsWithThisTag = find_projects_by_tag(tagName)

  // on cree la liste des projets contenant le tag tagName ET qui ne sont pas deja affichés
  let projectsWithThisTagNotDisplayed = []
  // on parcourt projectsWithThisTag
  for (let a in projectsWithThisTag) {
    let project = projectsWithThisTag[a]
    let isDisplayed = false
    // on parcourt la liste des projets affiches
    for (let b in displayedProjects) {
      let displayedProject = displayedProjects[b].data
      // si le displayedProject est egal à project
      if (displayedProject.title === project.title) {
        isDisplayed = true
      }
    }
    // si le drapeau isDisplayed n'a pas ete levé
    if (isDisplayed === false) {
      // alors on peut l'ajouter à la liste des projets contenant le tag tagName ET qui ne sont pas deja affichés
      projectsWithThisTagNotDisplayed.push(project)
    }
  }

  // si il n'y a plus de projet pas encore affiché
  if (projectsWithThisTagNotDisplayed.length === 0) {
    // on écrit le tag dans l'historique
    let noProjectsLeft = document.createElement('span')
    noProjectsLeft.innerHTML = 'All projects with the tag ' + '<span>' + tagName + '</span>' + ' are already here!';
    noProjectsLeft.className = 'noProjectsLeft';
    viewport.prepend(noProjectsLeft)
    return
  }

  // on definit l'index d'un projet au hasard dans cette liste
  let index = Math.floor(Math.random() * projectsWithThisTagNotDisplayed.length)
  // on retrouve le projet à cet index
  let randomProject = projectsWithThisTagNotDisplayed[index]


  // on trouve la position à laquelle afficher le projet
  let newPosition = {
    x: projectPosition.x + offsetsImages[direction].x,
    y: projectPosition.y + offsetsImages[direction].y,
    scrollX: projectPosition.x + offsetsImages[direction].x - viewportDimensions.width / 2,
    scrollY: projectPosition.y + offsetsImages[direction].y - viewportDimensions.height / 2
  }

  randomProject.projectPosition = newPosition

  // on affiche le nouveau projet, au bon endroit
  display_project(randomProject, newPosition.x, newPosition.y)

  // on positionne le nouveau projet au centre de l'écran
  set_scrollbars_position(newPosition.scrollX, newPosition.scrollY)

  // on recupère l'index du projet affiché dans la displayedProject
  let indexDisplayedProject = displayedProjects.length - 1

  // on écrit le tag dans l'historique
  let lastTag = document.createElement('button')
  lastTag.innerHTML = tagName;
  lastTag.className = 'tagButton';
  lastTag.dataset.indexDisplayedProject = indexDisplayedProject
  historyContent.prepend(lastTag)
  lastTag.addEventListener('click', (event) => {
    let position = displayedProjects[event.target.dataset.indexDisplayedProject].data.projectPosition
    set_scrollbars_position(position.scrollX, position.scrollY)
  })
}

/**
* retourne la liste de tous les projets qui contienne un tag
* @param  searchedTag  le tag cherché
*/
function find_projects_by_tag(searchedTag) {
  // on cree une liste de resultats vide
  let results = []
  // on parcourt la liste de tous les projets
  for (let a in allData.websites) {
    // on recupere le projet en cours (a)
    let project = allData.websites[a]
    // on parcourt la liste des tags du projet en cours
    for (let b in project.tags) {
      // on recupere le tag en cours (b)
      let tag = project.tags[b]
      // si le tag en cours est egal au tag cherché
      if (tag === searchedTag) {
        // alors on l'ajoute a liste des resultats
        results.push(project)
      }
    }
  }
  // on renvoie la liste des resultats
  return results
}

/*
** definir l'affichage d'un container plus grand que le viewport
*/
function setup_viewport() {
  viewport = document.getElementById('viewport')

  carto = document.getElementById('carto')
  carto.style.width = cartoDimensions.width + 'px'
  carto.style.height = cartoDimensions.height + 'px'
}

/**
* set up the scrollbars
* @param x position of the scrollbar
* @param y position of the scrollbar
*/
function set_scrollbars_position(x, y) {
  viewport.scrollTo({ top: y, left: x, behavior: 'smooth' })
}

/**
* center the scrollbars
*/
function set_scrollbars_position_center() {
  set_scrollbars_position((cartoDimensions.width - viewportDimensions.width) / 2, (cartoDimensions.height - viewportDimensions.height) / 2)
}

/*
** tester affichage d'une image à une position donnée
* @param data donnees contenant l'image à afficher
* @param x  position du centre de l'image en px
* @param y  position du centre de l'image en px
*/
function display_project(data, x, y) {
  // recupère le filename
  let filename = data.imgFilename
  let url = data.url
  let title = data.title
  let designer = data.designer
  let tags = data.tags

  //crée le block
  let newBlock = document.createElement('div')
  newBlock.dataset.projectIndex = curProjectIndex++
  newBlock.className = 'newBlock'
  carto.appendChild(newBlock)

  // memorise la position du projet dans la carto
  if (data.projectPosition === undefined) {
    data.projectPosition = { x: x, y: y }
  }

  // crée le window
  let windowBlock = document.createElement('div')
  windowBlock.className = 'windowBlock'
  newBlock.appendChild(windowBlock)

  //crée l'image
  let image = document.createElement('img')
  image.src = './assets/thumbnails/' + filename + '.png'
  image.className = 'imageBlock'
  windowBlock.appendChild(image)

  //crée les buttons dans les coins
  create_image_corners_buttons(windowBlock, data)

  //crée le block en hover
  let hoverBlock = document.createElement('div')
  hoverBlock.className = 'hoverBlock'

  let hoverTitle = document.createElement('h3')
  hoverTitle.innerHTML = title

  let hoverOptions = document.createElement('div')

  let hoverButtonUrl = document.createElement('button')
  let hoverUrl = document.createElement('a')
  hoverUrl.innerHTML = 'Visit'
  hoverUrl.href = 'https://' + url
  hoverUrl.target = '_blank'
  hoverButtonUrl.appendChild(hoverUrl)

  let hoverButtonInfo = document.createElement('button')
  hoverButtonInfo.innerHTML = 'Info'
  
  hoverButtonInfo.addEventListener('click', (event) => {
    if (infoBlock.classList.contains('appear1s')) {
      infoBlock.classList.remove('appear1s')
      hoverButtonInfo.style.backgroundColor = 'initial'
      hoverButtonInfo.innerHTML = 'Info'
    }
    else {
      infoBlock.classList.add('appear1s')
      hoverButtonInfo.style.backgroundColor = 'gray'
      hoverButtonInfo.innerHTML = 'Close ×'

    }
  })

  let hoverButtonFav = document.createElement('button')
  hoverButtonFav.innerHTML = 'Fav'

  hoverOptions.appendChild(hoverButtonUrl)
  hoverOptions.appendChild(hoverButtonInfo)
  hoverOptions.appendChild(hoverButtonFav)
  hoverBlock.appendChild(hoverTitle)
  hoverBlock.appendChild(hoverOptions)
  windowBlock.appendChild(hoverBlock)

  //crée le block d'informations
  let infoBlock = document.createElement('div')
  infoBlock.className = 'infoBlock'

  let infoTitle = document.createElement('span')
  infoTitle.innerHTML = 'Titre: ' + title
  let infoURL = document.createElement('span')
  infoURL.innerHTML = 'URL: ' + url
  let infoDesigner = document.createElement('span')
  infoDesigner.innerHTML = 'Designer: ' + designer
  let infoTags = document.createElement('span')
  infoTags.innerHTML = 'Tags: ' + tags

  infoBlock.appendChild(infoTitle)
  infoBlock.appendChild(infoURL)
  infoBlock.appendChild(infoDesigner)
  infoBlock.appendChild(infoTags)
  newBlock.appendChild(infoBlock)

  //positionne le projet
  newBlock.style.left = (x - image.width / 2) + 'px'
  newBlock.style.top = (y - image.height / 2) + 'px'

  // on ajojute ce projet et son conteneur principal  à la liste de tous les projets affichés
  displayedProjects.push({ container: newBlock, data: data })

  // on retire ce projet de la liste des projets disponibles
  removeProjectFromAvailableProjects(data)
}

/**
* creer les boutons aux 4 coins d'une image
* @parent   le container de ces boutons
* @param data donnees contenant l'image à afficher
*/
function create_image_corners_buttons(parent, data) {
  const directions = ['top-left', 'top-right', 'bottom-left', 'bottom-right']

  for (let i = 0; i < 4; i++) {
    let linkButton = document.createElement('button')
    linkButton.innerHTML = '+'
    linkButton.className = 'linkBlock shadow'
    linkButton.addEventListener('click', e => {
      // on calcle la position de la liste de tags
      let positionTagList = {
        x: data.projectPosition.x + offsetsTagList[directions[i]].x,
        y: data.projectPosition.y + offsetsTagList[directions[i]].y,
        layout: directions[i]
      }
      // on affiche la tag list
      display_tags(positionTagList, data)
    })
    parent.appendChild(linkButton)
  }
}

/*
** hide tagList quand on click en dehors
*/
function hideTagList(event) {
  if (event.key === "Escape") {
    tagDiv.classList.add('hidden')
  }
  // If user clicks inside the element, do nothing
  if (event.target.closest(".linkBlock")) return
  // If user clicks outside the element, hide it!
  tagDiv.classList.add('hidden')
}
document.addEventListener("click", hideTagList)
document.addEventListener("keydown", hideTagList)


init()

