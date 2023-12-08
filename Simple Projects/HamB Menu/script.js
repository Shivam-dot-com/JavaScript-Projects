let menu_btn = document.querySelector("#menu-btn");
let icons = document.querySelector(".icons");

menu_btn.addEventListener("click", () => {
    console.log("I am Button");
    icons.style.visibility = "visible";
});
