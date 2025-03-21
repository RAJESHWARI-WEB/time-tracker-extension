document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get("sites", (data) => {
        const stats = document.getElementById("stats");
        let output = "<ul>";

        if (data.sites) {
            Object.entries(data.sites).forEach(([site, time]) => {
                output += `<li>${site}: ${time.toFixed(2)} seconds</li>`;
            });
        } else {
            output += "<li>No data available</li>";
        }

        output += "</ul>";
        stats.innerHTML = output;
    });
});
