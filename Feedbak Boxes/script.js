const ratings = document.querySelectorAll(".rating")
const parentContainer = document.querySelector(".ratings-container")
const sendBtn = document.getElementById("send")
const panel = document.getElementById("panel")
let selectedRating = "Satisfied"

function removeActive() {
    for (let index = 0; index < ratings.length; index++) {
        ratings[index].classList.remove("active")
    }
}

parentContainer.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("rating")==true) {
        removeActive();
        e.target.parentNode.classList.add("active");

        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener("click", (e)=>{
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    </br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We;ll user your feedback to improve our customer support</p>
    `
})
