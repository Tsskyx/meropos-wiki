function loadSidebar() {
  const sidebarContainer = document.getElementById("sidebar");
  if (!sidebarContainer) return;

  const isGitHub = location.hostname.includes("github.io");
  const isSubpage = location.pathname.includes("/pages/");
  const sidebarPath = isGitHub
    ? "/meropos-wiki/sidebar.html"
    : isSubpage
      ? "../sidebar.html"
      : "sidebar.html";

  fetch(sidebarPath)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      return res.text();
    })
    .then(html => {
      sidebarContainer.innerHTML = html;
      fixSidebarLinks(isGitHub);
    })
    .catch(err => console.error("Failed to load sidebar:", err));
}

function fixSidebarLinks(isGitHub) {
  const links = document.querySelectorAll("#sidebar a");
  const basePath = isGitHub ? "/meropos-wiki/" : "/";

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http")) return;

    // Rewrite the link to be absolute from root
    const fixedHref = basePath + href.replace(/^\/+/, "");
    link.setAttribute("href", fixedHref);
  });
}
