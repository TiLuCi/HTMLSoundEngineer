document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");

    // Check if the user has accepted cookies
    if (localStorage.getItem("cookiesAccepted") === null) {
        cookieBanner.style.display = "block";
    }

    // Handle the "Accept Cookies" button click
    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
    });
});