function logTabs(tabs) {
    console.log(tabs);
    }

    browser.tabs.query({ currentWindow: true }, logTabs);
    function logCookie(c) {
        console.log(c);
        }

        function logError(e) {
        console.error(e);
        }

        let setCookie = browser.cookies.set({ url: "https://developer.mozilla.org/" });
        setCookie.then(logCookie, logError);
