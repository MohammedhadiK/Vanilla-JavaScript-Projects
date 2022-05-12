 // Hide all question Text at first
 // Show only + button at first
 // Once plus button is clicked Question text should appear
 // also the minus sign should appear
 // When click minus again, need to make question text disappear

 //let us try to capture buttons at first

 // Our first approach is traversing the DOM.

//  const btns = document.querySelectorAll(".question-btn")

//  btns.forEach( function(btn){
//     btn.addEventListener("click", function(e) {
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle("show-text")
//     })
//  })

// using selectors inside the element.

const questions = document.querySelectorAll(".question")

questions.forEach(function(question){
    const btn = question.querySelector(".question-btn")
    btn.addEventListener("click", function(){
        questions.forEach (function(item){
            if (item != question){
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text") 
        
    })

})