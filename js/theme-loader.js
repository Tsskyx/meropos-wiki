(function () {
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

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `../css/themes/${selectedTheme}.css`;
    document.head.appendChild(link);

    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/x-icon";
    favicon.href = `../assets/favicons/${selectedTheme}.ico`;
    document.head.appendChild(favicon);
})();