/* -----------------------------------
   WEB VERSIONING
   -------------------------------------- */
const versionsData = [
    { text: "versión 1", date: "17/11/24", url: "v1.html" },
    { text: "versión 2", date: "25/11/24", url: "index.html" }
];

const style = document.createElement('style');

style.textContent = `
    .vSelector{
        position: fixed;
        bottom: 12px;
        left: 50vw;
        transform: translateX(-50%);

        font-size: 14px;
        font-family: sans-serif;
        padding: 10px 12px;
        border-radius: 10px;
        border: 0px;
        color: black;
        background-color: hsla(0, 0%, 100%, 0.4);
        box-shadow: 0px 0px 5px hsla(0, 0%, 0%, 0.1);
        backdrop-filter: blur(12px);
        -webkit-appearance: none;
        -moz-appearance: none;
        display: flex;
        
    }
    .vSelector::-ms-expand {
        display: none !important;
    }
`;
document.head.appendChild(style);

function createArchiveSelector(options) {
    const select = document.createElement('select');
    select.className = 'vSelector';

    options.forEach(option => {
        const opt = document.createElement('option');
        opt.innerHTML = option.text;
        opt.setAttribute('data-url', option.url);
        select.appendChild(opt);
    });
    document.querySelector('body').appendChild(select);
}

createArchiveSelector(versionsData);

const select = document.querySelector(".vSelector");
const options = document.querySelectorAll(".vSelector option");

select.addEventListener("change", function () {
    const url = this.options[this.selectedIndex].dataset.url;
    if (url) {
        location.href = url;
    }
});

for (const option of options) {
    const url = option.dataset.url;
    if (location.href.includes(url)) {
        option.setAttribute("selected", "");
        break;
    }
}