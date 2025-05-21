/*
const themes = [
    { name: "determination", weight: 1 },
    { name: "bravery", weight: 100 },
    { name: "justice", weight: 100 },
    { name: "kindness", weight: 100 },
    { name: "patience", weight: 100 },
    { name: "integrity", weight: 100 },
    { name: "perseverance", weight: 100 },
    { name: "traitless", weight: 10 },
    { name: "monster", weight: 100 }
];

function weightedRandom(choices) {
    const total = choices.reduce((sum, t) => sum + t.weight, 0);
    let r = Math.random() * total;
    for (let t of choices) {
        if (r < t.weight) return t.name;
        r -= t.weight;
    }
}

let selectedTheme = localStorage.getItem("selectedTheme");

if (!selectedTheme) {
    selectedTheme = weightedRandom(themes);
    localStorage.setItem("selectedTheme", selectedTheme);
}

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/x-icon";

const isSubpage = location.pathname.includes("/pages/");
const base = isSubpage ? "../" : "";

favicon.href = `${base}assets/favicons/${selectedTheme}.ico`;
document.head.appendChild(favicon);

const themePath = isSubpage
    ? `../css/themes/${selectedTheme}.css`
    : `css/themes/${selectedTheme}.css`;

document.write(`<link rel="stylesheet" href="${themePath}">`);

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
*/


/*
const isGitHub = location.hostname.includes("github.io");
const isSubpage = location.pathname.includes("/pages/");

// Choose correct base path depending on hosting + directory depth
const themePrefix = isGitHub
  ? "/meropos-wiki/css/"
  : isSubpage
    ? "../css/"
    : "css/";

// Always load theme-old.css for testing
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = themePrefix + "theme-default.css";

document.head.appendChild(link);
*/