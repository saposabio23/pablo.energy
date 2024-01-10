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
  'top-left': { x: -640, y: -320 },
  'top-right': { x: 640, y: -320 },
  'bottom-left': { x: -640, y: 320 },
  'bottom-right': { x: 640, y: 320 },
  'center': { x: 0, y: 0 },
}

const offsetstagMore = {
  'top-left': { x: -145, y: -155 },
  'top-right': { x: 160, y: -155 },
  'bottom-left': { x: -145, y: 15 },
  'bottom-right': { x: 160, y: 15 },
}

// des elements généraux
let viewport = document.querySelector('#viewport');
let carto = document.querySelector('#carto');
let background = document.querySelector('.background')
let tagMore = document.querySelector('.tagMore');
let historyList = document.querySelector('.historyList');
let messageContent = document.querySelector('#message > div');
let tagList = document.querySelector('.tagList');
let index = document.querySelector('.index');
let indexContent = document.querySelector('.indexContent');
let side = document.querySelector('.side');
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
    tagList.appendChild(tagEtiqueta);
    tagEtiqueta.addEventListener('mouseenter', function () {
      soundhover.play();
    });
    tagEtiqueta.addEventListener('click', (event) => {
      tagList.classList.add('disappear')
      tagToLoad.innerHTML = tagName;
      setTimeout(() => {
        document.querySelector('.startLoading').classList.add('showLoad')
        background.classList.add('animateWelcoming')
        tagList.style.display = 'none';
      }, "800");
      setTimeout(() => {
        document.querySelector('.startLoading').style.display = 'none';
        document.querySelector('.side').classList.add('appears');
        document.querySelector('.menu').classList.add('appears');
        document.querySelector('.zoom').classList.add('appears');

        background.classList.add('back1')

        carto.style.transform = 'scale(var(--zoom))'

        click_on_tag(tagName, 'center', cartoDimensions.center)
      }, "3000");
    })
  }

  // index of all tags on the page
  for (let i = 0; i < results.length; i++) {
    let tagName = results[i];
    let tagEtiqueta = document.createElement("button");
    tagEtiqueta.innerHTML = tagName;
    tagEtiqueta.id = tagName;
    tagEtiqueta.className = 'tagButton';
    indexContent.appendChild(tagEtiqueta);
    tagEtiqueta.addEventListener('mouseenter', function () {
      soundhover.play();
    });
    tagEtiqueta.addEventListener('click', (event) => {
      click_on_tag(tagName, 'top-left', cartoDimensions.center)
    }, "3000");

  }
}
/**
*  crée un button pour chaque tag de la liste
* @param  position  {x:Number, y:Number, layout:'String'}, la position de la palette dans la carto
* @param  data      les donnees du projet affiché
*/


function display_tags(position, data) {
  // on nettoie la position du block dans son tag html
  tagMore.style.left = null
  tagMore.style.top = null
  tagMore.style.right = null
  tagMore.style.bottom = null
  // tagMore.classList.remove('hidden')
  let tagMorePosition

  // on position le conteneur de la tagMore en fonction de son layout (position autour de la fenetre)
  switch (position.layout) {
    case 'top-left':
      tagMore.style.left = position.x + 'px'
      tagMore.style.top = position.y + 'px'
      tagMorePosition = 'top-left'
      break
    case 'top-right':
      tagMore.style.left = (position.x - tagMore.clientWidth) + 'px'
      tagMore.style.top = position.y + 'px'
      tagMorePosition = 'top-right'
      break
    case 'bottom-left':
      tagMore.style.left = position.x + 'px'
      tagMore.style.top = (position.y - tagMore.clientHeight) + 'px'
      tagMorePosition = 'bottom-left'
      break
    case 'bottom-right':
      tagMore.style.left = (position.x - tagMore.clientWidth) + 'px'
      tagMore.style.top = (position.y - tagMore.clientHeight) + 'px'
      tagMorePosition = 'bottom-right'
      break
  }

  // nettoyage du contenu de la palette de tags
  while (tagMore.firstChild) {
    tagMore.removeChild(tagMore.firstChild);
  }

  let tagText = document.createElement('p')
  tagText.innerHTML = "+ de tags:"
  tagMore.appendChild(tagText);

  for (let i = 0; i < data.tags.length; i++) {
    let tagName = data.tags[i];

    // on regarde dans la liste des projets disponibles si un projet avec le tag tagName est encore disponible
    if (availableProjects.some((project) => project.tags.some((tag) => tag === tagName))) {
      let tagButton = document.createElement("button");
      tagButton.className = 'tagButton';
      tagButton.innerHTML = tagName;
      tagButton.id = tagName;
      tagMore.appendChild(tagButton);
      tagButton.addEventListener('mouseenter', function () {
        soundhover.play();
      });
      tagButton.addEventListener('click', (event) => {
        click_on_tag(tagName, tagMorePosition, data.projectPosition)
      })
    }
  }
}

/**
* clic sur un tag de la tagMore
* @param  tagName   le nom du tag sur lequel on a cliqué
* @param  direction  la position (la direction) de la fenetre de tagMore
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

    // notif no projet
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
  display_project(randomProject, newPosition.x, newPosition.y, displayedProjects)

  // on positionne le nouveau projet au centre de l'écran
  set_scrollbars_position(newPosition.scrollX, newPosition.scrollY)


  // document.body.style.setProperty('--zoom', '100%')
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
function display_project(data, x, y, displayedProjects) {
  // recupère le filename
  let filename = data.imgFilename
  let url = data.url
  let title = data.title
  let description = data.description
  let tags = data.tags

  // on recupère l'index du projet affiché dans la displayedProject
  let indexDisplayedProject = displayedProjects.length

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
  let windowURL = document.createElement('a')
  windowURL.href = 'https://' + url
  windowURL.target = '_blank'
  windowURL.style.backgroundImage = 'url(assets/thumbnails/' + filename + '.png)'
  windowBlock.appendChild(windowURL)

  // let image = document.createElement('img')
  // image.src = './assets/thumbnails/' + filename + '.png'
  // image.className = 'imageBlock'
  // windowURL.appendChild(image)

  //crée les buttons dans les coins
  create_image_corners_buttons(windowBlock, data)

  //crée le block d'informations
  let infoBlock = document.createElement('div')
  infoBlock.className = 'infoBlock'

  let infoRowTitle = document.createElement('tr')
  infoBlock.appendChild(infoRowTitle)

  let infoHeaderTitle = document.createElement('td')
  infoHeaderTitle.innerHTML = 'Titre'
  infoRowTitle.appendChild(infoHeaderTitle)

  let infoTextTitle = document.createElement('td')
  infoTextTitle.innerHTML = title
  infoRowTitle.appendChild(infoTextTitle)

  infoBlock.appendChild(infoRowTitle)


  let infoRowDescription = document.createElement('tr')
  infoBlock.appendChild(infoRowDescription)

  let infoHeaderDescription = document.createElement('td')
  infoHeaderDescription.innerHTML = 'Description'
  infoRowDescription.appendChild(infoHeaderDescription)

  let infoTextDescription = document.createElement('td')
  infoTextDescription.innerHTML = description
  infoRowDescription.appendChild(infoTextDescription)

  infoBlock.appendChild(infoRowDescription)

  let infoRowURL = document.createElement('tr')
  infoBlock.appendChild(infoRowURL)

  let infoHeaderURL = document.createElement('td')
  infoHeaderURL.innerHTML = 'URL'
  infoRowURL.appendChild(infoHeaderURL)

  let infoTextURL = document.createElement('td')

  let infoTextLink = document.createElement('a')
  infoTextLink.href = 'https://' + url
  infoTextLink.target = '_blank'
  infoTextLink.innerHTML = 'www.' + url
  infoTextURL.appendChild(infoTextLink)

  infoRowURL.appendChild(infoTextURL)

  let infoRowTags = document.createElement('tr')
  infoBlock.appendChild(infoRowTags)

  let infoHeaderTags = document.createElement('td')
  infoHeaderTags.innerHTML = 'Tags'
  infoRowTags.appendChild(infoHeaderTags)

  let infoTextTags = document.createElement('td')
  infoTextTags.innerHTML = tags
  infoRowTags.appendChild(infoTextTags)

  infoBlock.appendChild(infoRowTags)

  newBlock.appendChild(infoBlock)

  windowBlock.addEventListener('mouseenter', e => {
    // infoBlock.style.opacity = '1'
    infoBlock.classList.add('appearsFast')
    infoBlock.classList.remove('disappearFast')
  })

  infoBlock.addEventListener('mouseleave', e => {
    // infoBlock.style.opacity = '0'
    infoBlock.classList.add('disappearFast')
    infoBlock.classList.remove('appearsFast')
  })

  //positionne le projet
  newBlock.style.left = (x - 320 / 2) + 'px'
  newBlock.style.top = (y - 320 / 2) + 'px'

  // on ajojute ce projet et son conteneur principal  à la liste de tous les projets affichés
  displayedProjects.push({ container: newBlock, data: data })

  // on retire ce projet de la liste des projets disponibles
  removeProjectFromAvailableProjects(data)

  // on écrit le tag dans l'historique
  let lastTagDiv = document.createElement('div')

  let lastTagTitle = document.createElement('span')
  lastTagTitle.className = 'button'
  lastTagTitle.innerHTML = title;
  lastTagTitle.dataset.indexDisplayedProject = indexDisplayedProject;

  let lastTagStar = document.createElement('span')
  lastTagStar.dataset.index = indexDisplayedProject;
  lastTagStar.className = 'star nofav'
  lastTagStar.innerHTML = '⭐';

  lastTagDiv.appendChild(lastTagTitle)
  lastTagDiv.appendChild(lastTagStar)
  historyList.prepend(lastTagDiv)

  lastTagTitle.addEventListener('click', (event) => {
    let position = displayedProjects[event.target.dataset.indexDisplayedProject].data.projectPosition
    set_scrollbars_position(position.scrollX, position.scrollY)
  })

  lastTagStar.addEventListener('click', (event) => {

    if (event.target.classList.contains("nofav")) {
      let messageDiv = document.createElement('div')
      messageDiv.dataset.index = indexDisplayedProject;
      messageDiv.className = "listDiv";
      messageDiv.setAttribute('style', "margin-bottom:10px")

      let messageTitleRow = document.createElement('div')
      messageTitleRow.setAttribute('style', "display: flex;border: 1px solid #d3cce3;word-wrap: anywhere;border-width: 1px 1px 0 1px;border-top-left-radius: 5px;border-top-right-radius: 5px;display: flex;")

      messageDiv.appendChild(messageTitleRow)

      let messageTitleHeader = document.createElement('div')
      messageTitleHeader.setAttribute('style', "padding: 6px;border-right: 1px solid #d3cce3; width:60px")
      messageTitleHeader.innerHTML = 'Title'
      messageTitleRow.appendChild(messageTitleHeader)

      let messageTitleText = document.createElement('div')
      messageTitleText.setAttribute('style', "padding: 6px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;")
      messageTitleText.innerHTML = title
      messageTitleRow.appendChild(messageTitleText)

      let messageURLRow = document.createElement('div')
      messageURLRow.setAttribute('style', "display: fle;border: 1px solid #d3cce3;word-wrap: anywhere;border-width: 1px 1px 0 1px;  border-bottom: 1px solid #d3cce3;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;display: flex;")

      messageDiv.appendChild(messageURLRow)

      let messageURLHeader = document.createElement('div')
      messageURLHeader.setAttribute('style', "padding: 6px;border-right: 1px solid #d3cce3; width:60px")
      messageURLHeader.innerHTML = 'URL'
      messageURLRow.appendChild(messageURLHeader)

      let messageURLText = document.createElement('div')
      messageURLText.setAttribute('style', "padding: 6px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;")
      let messageURLLink = document.createElement('a')
      messageURLLink.href = "https://" + url
      messageURLLink.innerHTML = "www." + url
      messageURLText.appendChild(messageURLLink)
      messageURLRow.appendChild(messageURLText)

      messageContent.appendChild(messageDiv)

      lastTagStar.classList.replace('nofav', 'fav')

    }

    else if(event.target.classList.contains("fav")) {
      let x = document.querySelector('.listDiv[data-index="' + event.target.dataset.index + '"]');
      console.log(x)
      x.remove()
      
      lastTagStar.classList.replace('fav', 'nofav')
    }

  })
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
    linkButton.addEventListener('mouseenter', e => {
      // on calcle la position de la liste de tags
      let positiontagMore = {
        x: data.projectPosition.x + offsetstagMore[directions[i]].x,
        y: data.projectPosition.y + offsetstagMore[directions[i]].y,
        layout: directions[i]
      }
      // on affiche la tag list
      tagMore.style.display = 'flex'

      display_tags(positiontagMore, data)
    })
    parent.appendChild(linkButton)
  }
}

/*
** hide tagMore quand on click en dehors
*/

tagMore.addEventListener('mouseleave', e => {
  tagMore.style.display = 'none'

})

init()



// // on cache la fenetre d'infos de tous les proejts
// var elements = document.querySelectorAll('.infoBlock');
// for (let i = 0, max = elements.length; i < max; i++) {
//   document.querySelector('.infoBlock').classList.remove('appearsFast')
// }