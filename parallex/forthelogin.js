document.addEventListener("DOMContentLoaded", function () {
    // Get the login button, login popup, and close button
    const loginButton = document.querySelector(".button-login");
    const loginPopup = document.querySelector(".wrapper");
    const closeButton = document.querySelector(".icon-close");
    console.log(closeButton);
    // Function to open the login popup
    const openLoginPopup = () => {
        loginPopup.style.display = "block";
    };

    // Function to close the login popup
    const closeLoginPopup = () => {
        loginPopup.style.display = "none";
    };

    // Add a click event listener to the login button
    loginButton.addEventListener("click", openLoginPopup);

    // Add a click event listener to the close button
    closeButton.addEventListener("click", closeLoginPopup);

    // Close the login popup if the user clicks outside of it
    window.addEventListener("click", function (event) {
        if (event.target === loginPopup) {
            closeLoginPopup();
        }
    });
});