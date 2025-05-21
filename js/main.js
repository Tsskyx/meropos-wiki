document.addEventListener("DOMContentLoaded", () => {
    const isGitHub = location.hostname.includes("github.io");
    const basePath = isGitHub ? "/meropos-wiki/" : "/";

    document.querySelectorAll("a").forEach(link => {
        const href = link.getAttribute("href");
        if (!href || href.startsWith("http") || href.startsWith("/")) return;

        const fixedHref = basePath + href.replace(/^\/+/, "");
        link.setAttribute("href", fixedHref);
    });
});
