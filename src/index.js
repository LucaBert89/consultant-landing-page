import "./style.scss";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


let question = document.querySelectorAll(".faq__question");
let loadBtn = document.querySelector(".btn-load");
let slideBtn = document.querySelector(".best-feature__arrow");
let slides = document.querySelectorAll(".best-feature__opinion");
let currentSlide = 0;

var control = false;

for(let i=0; i< question.length; i++) {
    question[i].addEventListener("click", accordion);
    loadBtn.addEventListener("click", addQuestions);
    slideBtn.addEventListener("click", changeSlide);
}

function accordion (event) {
    const answer = event.currentTarget.nextElementSibling;
    const arrowBtn = this.children[1];
    console.log(); 
        if(answer.style.display == "") {
            answer.style.display = "flex";
            arrowBtn.style.transform = "rotate(90deg)"; 
        } else {
            answer.style.display = "";
            arrowBtn.style.transform = "rotate(0deg)";
        }
    }  

function addQuestions() {
    let questionList = document.querySelectorAll(".faq__questions-list")[0];
    let questions = [
        "How do I apply for a traffic Permit?", 
        "When will I receive my permit?",
        "How much does a permit cost?",
        "What do I need in the event of a Lost/Stolen permit?"
    ];
    let answers = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor vulputate volutpat. Fusce eros quam, faucibus vitae velit at, pharetra ultricies metus.",
        "Most Traffic permits require a minimum of four business days to process.",
        "The cost of the Public Space permit varies, depending on the scope of work",
        "You need to complete and sign a Statutory Declaration"];
    if(!control) {
        for (var i=0; i<4; i++) {
            let container = document.createElement("div");
            container.className = "faq__question-container";
    
            let newQuest = document.createElement("div");
            newQuest.className="faq__question";
            newQuest.innerHTML = `
                <span>${questions[i]}</span> 
                <div class="arrow-btn"><i class="fas fa-chevron-right"></i></div>
            `;
    
            let newAnswer = document.createElement("div");
            newAnswer.className = "faq__answer";
            newAnswer.innerHTML =`
                <div>${answers[i]}</div> 
            `
            newQuest.classList.add("appear-animation");

            loadBtn.style.display = "none";
            container.appendChild(newQuest);
            container.appendChild(newAnswer);
            questionList.appendChild(container);
            newQuest.addEventListener("click", accordion); 
        }
    } else {
        return;
    }

    control = true; 
};
    
function changeSlide() {
    let lastSlide = slides.length -1;
    let nextSlide = currentSlide + 1;
        if(slides[currentSlide].className == "best-feature__opinion active") {
            if(currentSlide == lastSlide) {
                nextSlide = 0;
                slider(currentSlide, nextSlide);
                currentSlide = nextSlide;
            } else {
                slider(currentSlide, nextSlide);
                currentSlide++;
                nextSlide++;
            }   
        } 
        console.log(currentSlide, lastSlide, nextSlide);
}

function slider(current, next) {
    slides[current].classList.remove("active");
    slides[next].classList.add("active");
}