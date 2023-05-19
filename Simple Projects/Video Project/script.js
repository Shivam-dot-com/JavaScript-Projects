// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and sub frames to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", () => {
    if (!btn.classList.contains("slide")) {
        //*Focus on not operator here
        btn.classList.add("slide");
        video.pause();
        video.controls = "false";
    } else {
        btn.classList.remove("slide");
        video.play();
    }
});

// *Video.play() & Video.pause() will make it to maintain with btn

/* Adding Pre-loader functionality, using Load Event, it fired when the whole page is loaded best use for Preloader */
// * The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const preloader = document.querySelector(".preloader");

const l = "Shivam"
console.log(l); 

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader')
})

// window.on("load", function () {
//     setTimeout(
//         (document.getElementsByClassName("preloader__item").style.display =
//             "none"),
//         500
//     );
//     preloader.classList.add("hide-preloader");
//     preloader.removeAttribute("z-index");
// });
