// Using selector inside the element
const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
    // console.log(`🚀 ~ file: script.js:5 ~ questions.forEach ~ question:`, question)
    const btn = question.querySelector(".question-btn");
    //! 👁️ Observe with querySelector we have used question
    // console.log(`🚀 ~ file: script.js:6 ~ questions.forEach ~ btn:`, btn)
    btn.addEventListener("click", () => {
        // To close opened when other question's button is clicked
        questions.forEach((item) => { 
            console.log(item);
            if (item !== question) { 
                item.classList.remove('show-text')
            }
        })

        question.classList.toggle("show-text");
    });
});

//* Traversing the DOM : Fancy way of moving up & down of DOM Tree
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     });
// });

// We used parentElement here, for accessing parent of selected element, same way you can choose child and siblings.
