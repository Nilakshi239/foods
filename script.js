const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle the mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

//close the menu when clicking the close button
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
