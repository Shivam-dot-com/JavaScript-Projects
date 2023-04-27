// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and sub frames to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

btn.addEventListener('click', () => { 
    if (!btn.classList.contains('slide')) {  //*Focus on not operator here 
        btn.classList.add('slide')
    }
    else { 
        btn.classList.remove('slide')
    }
})