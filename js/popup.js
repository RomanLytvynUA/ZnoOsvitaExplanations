chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs.length > 0) {
        const currentTab = tabs[0];
        if (currentTab.url.includes("zno.osvita.ua")) {
            document.getElementById('page-title').innerHTML = 'Безкоштовні коментарі увімкнено.';

            chrome.tabs.sendMessage(currentTab.id, { action: "changeButtons" }, (response) => {
                if (chrome.runtime.lastError) {
                    console.error("Error sending message:", chrome.runtime.lastError.message);
                } else {
                    console.log(response.status);
                }
            });
        }
    }
});
