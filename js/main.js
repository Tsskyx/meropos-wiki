document.addEventListener("DOMContentLoaded", () => {
  const sidebarContainer = document.getElementById("sidebar");
  if (!sidebarContainer) return;
  fetch("/meropos-wiki/sidebar.html")
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      return res.text();
    })
    .then(html => {
      sidebarContainer.innerHTML = html;
    })
    .catch(err => console.error("Failed to load sidebar:", err));
});
