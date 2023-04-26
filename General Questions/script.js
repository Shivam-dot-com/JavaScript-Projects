// Using selector inside the element

//* Traversing the DOM : Fancy way of moving up & down of DOM Tree
const btns = document.querySelectorAll(".question-btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text')
    });
});

// We used parentElement here, for accessing parent of selected element, same way you can choose child and siblings. 