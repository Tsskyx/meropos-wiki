// Dynamically inject sidebar.html into any element with id="sidebar"
document.addEventListener("DOMContentLoaded", () => {
  const sidebarContainer = document.getElementById("sidebar");

  if (sidebarContainer) {
    // Absolute path to sidebar.html based on GitHub Pages repo name
    fetch("/meropos-wiki/sidebar.html")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        sidebarContainer.innerHTML = data;
      })
      .catch(error => console.error("Sidebar load failed:", error));
  }
});
