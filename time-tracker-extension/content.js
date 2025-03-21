const productiveSites = ["github.com", "stackoverflow.com", "coursera.org"];
const unproductiveSites = ["facebook.com", "youtube.com", "twitter.com"];

const currentSite = window.location.hostname;
let category = "Neutral";

if (productiveSites.includes(currentSite)) category = "Productive";
if (unproductiveSites.includes(currentSite)) category = "Unproductive";

chrome.storage.local.set({ [currentSite]: category });
