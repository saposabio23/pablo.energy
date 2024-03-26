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

var delayNum = 0;
function createThumbnails(data) {
  data.projects.forEach(function (item) {
    delayNum++;
    //create block
    let thumbBlock = document.createElement("div");
    thumbBlock.className =
      "relative opacity-100 transition cursor-pointer group animateEntrance delay-" +
      delayNum;
    thumbBlock.id = "mini-" + item.id;
    thumbBlock.setAttribute("data-project", item.id);
    thumbBlock.setAttribute("onclick", "showProject(this)");

    //create image
    let thumbImg = document.createElement("img");
    thumbImg.src = "media/" + item.thumbnail;
    thumbImg.className = "w-full rounded-lg border group-hover:opacity-50";
    thumbImg.setAttribute("alt", item.alt);
    thumbBlock.appendChild(thumbImg);

    //create title
    let thumbTitle = document.createElement("h3");
    thumbTitle.className = "mt-1 group-hover:underline";
    thumbTitle.innerHTML = item.name;
    thumbBlock.appendChild(thumbTitle);

    let thumbTag = document.createElement("span");
    thumbTag.className =
      "absolute text-[60%] text-white top-2 -right-2 px-[2px] py-[1px] rounded-sm rotate-[20deg] transition group-hover:rotate-[0] group-hover:opacity-100";
    thumbTag.innerHTML = item.nature;
    if (item.nature === "Commissioned") {
      thumbTag.classList.add("bg-red-600");
    } else if (item.nature === "WIP") {
      thumbTag.classList.add("bg-black");
    } else if (item.nature === "Personal") {
      thumbTag.classList.add("bg-blue-600");
    }
    thumbBlock.appendChild(thumbTag);

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
    projectBlock.className =
      "hidden relative flex-col gap-6 justify-between pb-10 mb-6 border-b md:flex-row";
    projectBlock.id = "project-" + item.id;

    //create info side
    let projectData = document.createElement("div");
    projectData.className = "sticky top-4 w-full max-w-md h-fit";
    projectBlock.appendChild(projectData);

    let projectDataTop = document.createElement("div");
    projectDataTop.className = "flex flex-row justify-between mb-2 w-full";
    projectData.appendChild(projectDataTop);

    let projectDataLeft = document.createElement("div");
    projectDataTop.appendChild(projectDataLeft);

    let thumbTag = document.createElement("span");
    thumbTag.innerHTML = item.nature;
    thumbTag.className =
      "mr-2 text-xs text-white px-[4px] py-[2px] rounded-md inline";
    if (item.nature === "Commissioned") {
      thumbTag.classList.add("bg-red-600");
    } else if (item.nature === "WIP") {
      thumbTag.classList.add("bg-black");
    } else if (item.nature === "Personal") {
      thumbTag.classList.add("bg-blue-600");
    }
    projectDataLeft.appendChild(thumbTag);

    let projectDate = document.createElement("small");
    projectDate.className = "text-xs";
    projectDate.innerHTML = item.date;
    projectDataLeft.appendChild(projectDate);

    let projectDataRight = document.createElement("div");
    projectDataTop.appendChild(projectDataRight);

    let projectClose = document.createElement("span");
    projectClose.className =
      "opacity-50 flex items-center justify-center border rounded-full w-[40px] cursor-pointer bg-neutral-300 hover:opacity-30 transition";
    projectClose.innerHTML = "X";
    projectClose.setAttribute("onclick", "hideProjects(this)");
    projectClose.setAttribute("data-project", item.id);
    projectDataRight.appendChild(projectClose);

    //create info side
    let projectInfo = document.createElement("div");
    projectInfo.className = "flex flex-col w-full";
    projectData.appendChild(projectInfo);

    let projectTitle = document.createElement("h2");
    projectTitle.className = "text-2xl";
    projectTitle.innerHTML = item.name;
    projectInfo.appendChild(projectTitle);

    let projectDescription = document.createElement("p");
    projectDescription.innerHTML = item.description;
    projectInfo.appendChild(projectDescription);

    let projectUrl = document.createElement("a");
    projectUrl.className =
      "text-sm underline opacity-50 cursor-pointer hover:no-underline";
    projectUrl.href = item.url;
    projectUrl.innerHTML = item.url;
    projectInfo.appendChild(projectUrl);

    //create image side
    let projectImages = document.createElement("div");
    projectImages.className = "flex flex-col gap-4";
    projectBlock.appendChild(projectImages);

    for (var image in item.images) {
      let projectImg = document.createElement("img");
      projectImg.className =
        "rounded-2xl border max-h-[70vh] object-contain w-full m-auto";
      projectImg.src = "media/" + item.images[image];
      projectImages.appendChild(projectImg);
    }

    // append to thumbnails
    projects.appendChild(projectBlock);
  });
}
