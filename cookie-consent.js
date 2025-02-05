document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("cookie-banner");
    const settingsPopup = document.getElementById("cookie-settings");

    if (!localStorage.getItem("cookieConsent")) {
        banner.style.display = "block";
    }

    document.getElementById("accept-all").addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "all");
        banner.style.display = "none";
        enableAnalytics();
    });

    document.getElementById("reject-non-essential").addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "essential");
        banner.style.display = "none";
    });

    document.getElementById("manage-cookies").addEventListener("click", function() {
        settingsPopup.style.display = "block";
    });

    document.getElementById("save-settings").addEventListener("click", function() {
        const allowAnalytics = document.getElementById("analytics-cookies").checked;
        localStorage.setItem("cookieConsent", allowAnalytics ? "analytics" : "essential");
        settingsPopup.style.display = "none";
    });

    function enableAnalytics() {
        let script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-1ZDKD18HZM";
        script.async = true;
        document.head.appendChild(script);

        script.onload = function() {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-1ZDKD18HZM');
        };
    }

    if (localStorage.getItem("cookieConsent") === "all") {
        enableAnalytics();
    }
});
