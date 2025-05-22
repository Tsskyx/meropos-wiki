function injectContentFrom(page) {
    const headerInjectPoint = document.getElementById("header-inject");
    const articleInjectPoint = document.getElementById("article-inject");
    const sidenavInjectPoint = document.getElementById("sidebar-nav-inject");

    fetch(`pages/${page}.html`)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load page: ${page}`);
            return response.text();
        })
        .then(html => {
            const tempElem = document.createElement("div");
            tempElem.innerHTML = html;

            // === Title ===
            const getTitle = tempElem.querySelector("#content-title");
            document.title = getTitle ? getTitle.textContent.trim() : "Meropos wiki";

            // === Header ===
            const getHeader = tempElem.querySelector("#content-header");
            headerInjectPoint.innerHTML = getHeader ? getHeader.innerHTML : "Page Not Found";

            // === Main ===
            const getArticle = tempElem.querySelector("#content-article");
            articleInjectPoint.innerHTML = getArticle ? getArticle.innerHTML : "<p>Missing article content.</p>";

            // === Sidebar ===
            const getSidebarNav = tempElem.querySelector("#content-sidebar");
            sidenavInjectPoint.innerHTML = getSidebarNav ? getSidebarNav.innerHTML : "<p>No navigation available.</p>";
        })
        .catch(error => {
            console.error(error);
            document.title = "Page Not Found";
            articleInjectPoint.innerHTML = `<p>The page "<b>${page}</b>" could not be found.</p>`;
            sidenavInjectPoint.innerHTML = `<p>No sidebar available.</p>`;
        });
}

page = new URLSearchParams(window.location.search).get("page") ?? "home";
injectContentFrom(page);
window.scrollTo(0, 0);

document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!(href && href.startsWith("wiki.html?page="))) return;

    e.preventDefault();

    const newPage = new URL(href, window.location.href).searchParams.get("page");
    if (newPage) {
        history.pushState({ page: newPage }, "", `wiki.html?page=${newPage}`);
        injectContentFrom(newPage);
        window.scrollTo(0, 0);
    }
});

window.addEventListener("popstate", () => {
    injectContentFrom(new URLSearchParams(window.location.search).get("page") ?? "home");
    window.scrollTo(0, 0);
});

document.getElementById("button-home").addEventListener("click", () => {
    history.pushState({ page: "home" }, "", "wiki.html?page=home");
    injectContentFrom("home");
    window.scrollTo(0, 0);
});

document.getElementById("button-back").addEventListener("click", () => {
    const parentDiv = document.getElementById("content-parent");
    const parentPage = parentDiv?.textContent?.trim();

    if (parentPage) {
        history.pushState({ page: parentPage }, "", `wiki.html?page=${parentPage}`);
        injectContentFrom(parentPage);
    } else {
        history.pushState({ page: "home" }, "", "wiki.html?page=home");
        injectContentFrom("home");
    }

    window.scrollTo(0, 0);
});
