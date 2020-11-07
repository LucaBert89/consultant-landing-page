import "./style.scss";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import mp4 from "./images/video-demo.mp4"

const question = document.querySelectorAll(".faq__question");
const loadBtn = document.querySelector(".btn-load");
const slideBtn = document.querySelector(".best-feature__arrow");
const slides = document.querySelectorAll(".best-feature__opinion");
let currentSlide = 0;


(function init () {
    for(let i=0; i< question.length; i++) {
        question[i].addEventListener("click", accordion);
        loadBtn.addEventListener("click", addQuestions);
        slideBtn.addEventListener("click", changeSlide);
    }
})();


// accordion in FAQ SECTION
function accordion (event) {
    const answer = event.currentTarget.nextElementSibling;
    const arrowBtn = this.children[1];
        if(answer.style.display == "") {
            answer.style.display = "flex";
            arrowBtn.style.transform = "rotate(90deg)"; 
        } else {
            answer.style.display = "";
            arrowBtn.style.transform = "rotate(0deg)";
        }
    }  

// ADD NEW QUESTION AFTER LOAD BTN IS PRESSED
function addQuestions() {
    const questionList = document.querySelectorAll(".faq__questions-list")[1];
    const questions = [
        "How do I apply for a traffic Permit?", 
        "When will I receive my permit?",
        "How much does a permit cost?",
        "What do I need in the event of a Lost/Stolen permit?"
    ];
    const answers = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor vulputate volutpat. Fusce eros quam, faucibus vitae velit at, pharetra ultricies metus.",
        "Most Traffic permits require a minimum of four business days to process.",
        "The cost of the Public Space permit varies, depending on the scope of work",
        "You need to complete and sign a Statutory Declaration"];
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
};
    
// CHANGE SLIDE AFTER CLICK ON ARROW BTN
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

}

function slider(current, next) {
    slides[current].classList.remove("active");
    slides[next].classList.add("active");
}

// validation form and errors
(function validation() {
    
    const signBtn = document.querySelector(".signIn");
    const inputName = document.querySelector(".join-us__name");
    const password = document.querySelector(".join-us__password");
    const errorName = document.querySelector(".join-us__error-name");
    const errorPass = document.querySelector(".join-us__error-password");

    signBtn.addEventListener("click", signIn);
    
    function signIn(event) {  
        emptyValue();
        let pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;

        if(inputName.value == "" || inputName.value == null){
            errorName.innerText ="You have to enter your name";
            event.preventDefault();

        } else if(password.value == "") {
            errorPass.innerText = "You have to enter the password";
            event.preventDefault();

        } else if(!pass.test(password.value)){
            errorPass.innerText = "You have to enter at least one uppercase and one number";
            event.preventDefault();

        } else if(password.value.length < 8 || password.value.length > 20) {
            errorPass.innerText = "The password must be between 8 and 20 characters long";
            event.preventDefault();
            
        } else {
            return true;
        }
    }

    function emptyValue() {
        errorName.innerText ="";
        errorPass.innerText = "";
    }
})();
