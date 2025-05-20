// Dynamically inject sidebar.html into any element with id="sidebar"
document.addEventListener("DOMContentLoaded", () => {
  const sidebarContainer = document.getElementById("sidebar");
  if (sidebarContainer) {
    fetch("../sidebar.html") // or "sidebar.html" depending on relative path
      .then(response => response.text())
      .then(data => {
        sidebarContainer.innerHTML = data;
      })
      .catch(error => console.error("Sidebar load failed:", error));
  }
});
