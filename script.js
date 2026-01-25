const menuOpenButton = document.querySelector("#menu-open-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle the mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
