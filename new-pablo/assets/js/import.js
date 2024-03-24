/*//////////////// DATA FETCH /////////////*/
fetch("assets/js/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    createThumbnails(data);
    createProjects(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

const thumbnails = document.getElementById("thumbnails");
const projects = document.getElementById("projects");

function createThumbnails(data) {
  data.projects.forEach(function (item) {
    //create block
    let thumbBlock = document.createElement("div");
    thumbBlock.className =
      "relative cursor-pointer hover:opacity-50 transition";
    thumbBlock.id = "mini-" + item.id;
    thumbBlock.setAttribute("data-project", item.id);
    thumbBlock.setAttribute("onclick", "showProject(this)");

    //create image
    let thumbImg = document.createElement("img");
    thumbImg.src = "media/" + item.thumbnail;
    thumbImg.className = "w-full rounded-lg";
    thumbImg.setAttribute("alt", item.alt);
    thumbBlock.appendChild(thumbImg);

    //create title
    let thumbTitle = document.createElement("h3");
    thumbTitle.className = "mt-1";
    thumbTitle.innerHTML = item.name;
    thumbBlock.appendChild(thumbTitle);

    if (item.nature === "Commissioned") {
      let thumbTag = document.createElement("span");
      thumbTag.className =
        "absolute bg-red-600 text-[60%] text-white bottom-2 right-1 px-[2px] py-[1px] rounded-sm -rotate-12";
      thumbTag.innerHTML = item.nature;
      thumbBlock.appendChild(thumbTag);
    }

    //create caption
    let thumbDescription = document.createElement("h3");
    thumbDescription.className = "opacity-50";
    thumbDescription.innerHTML = item.small;
    thumbBlock.appendChild(thumbDescription);

    // append to thumbnails
    thumbnails.appendChild(thumbBlock);
  });
}

function createProjects(data) {
  data.projects.forEach(function (item) {
    //create block
    let projectBlock = document.createElement("div");
    projectBlock.className = "hidden gap-4 pb-4 mb-4 border-b";
    projectBlock.id = "project-" + item.id;

    //create info side
    let projectInfo = document.createElement("div");
    projectInfo.className = "w-full";
    projectBlock.appendChild(projectInfo);

    let projectTitle = document.createElement("h2");
    projectTitle.className = "text-2xl";
    projectTitle.innerHTML = item.name;
    projectInfo.appendChild(projectTitle);

    let projectDescription = document.createElement("p");
    projectDescription.innerHTML = item.description;
    projectInfo.appendChild(projectDescription);

    let thumbTag = document.createElement("span");
    thumbTag.innerHTML = item.nature;
    thumbTag.className = "text-sm text-white px-[4px] py-[2px] rounded-sm mr-2";
    if (item.nature === "Commissioned") {
      thumbTag.classList.add("bg-red-600");
    } else if (item.nature === "Exposition") {
      thumbTag.classList.add("bg-green-600");
    } else if (item.nature === "Personal") {
      thumbTag.classList.add("bg-blue-600");
    }
    projectInfo.appendChild(thumbTag);

    let projectDate = document.createElement("small");
    projectDate.innerHTML = item.date;
    projectInfo.appendChild(projectDate);

    let projectClose = document.createElement("h2");
    projectClose.className =
      "cursor-pointer opacity-50 underline hover:no-underline";
    projectClose.innerHTML = "close";
    projectClose.setAttribute("onclick", "hideProjects(this)");
    projectClose.setAttribute("data-project", item.id);
    projectInfo.appendChild(projectClose);

    //create image side
    let projectImages = document.createElement("div");
    projectImages.className = "flex flex-col gap-4";
    projectBlock.appendChild(projectImages);

    for (var image in item.images) {
      let projectImg = document.createElement("img");
      projectImg.className = "w-full rounded-2xl border";
      projectImg.src = "media/" + item.images[image];
      projectImages.appendChild(projectImg);
    }

    // append to thumbnails
    projects.appendChild(projectBlock);
  });
}
