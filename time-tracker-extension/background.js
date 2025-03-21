let sites = {};
let activeTab = null;
let startTime = null;

chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        trackTime();
        activeTab = tab.url;
        startTime = new Date().getTime();
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.active && changeInfo.status === "complete") {
        trackTime();
        activeTab = tab.url;
        startTime = new Date().getTime();
    }
});

function trackTime() {
    if (activeTab && startTime) {
        const endTime = new Date().getTime();
        const timeSpent = (endTime - startTime) / 1000;

        const domain = new URL(activeTab).hostname;
        sites[domain] = (sites[domain] || 0) + timeSpent;

        chrome.storage.local.set({ sites });
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "getSites") {
        sendResponse(sites);
    }
});
