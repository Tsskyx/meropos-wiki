const isGitHub = location.hostname.includes("github.io");

// Load stylesheet dynamically
function loadStylesheet() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = isGitHub
    ? "/meropos-wiki/css/style.css"
    : "../css/style.css";
  document.head.appendChild(link);
}

// Load main.js and execute callback
function loadMainJS(callback) {
  const script = document.createElement("script");
  script.src = isGitHub
    ? "/meropos-wiki/js/main.js"
    : "../js/main.js";
  script.onload = callback;
  document.body.appendChild(script);
}