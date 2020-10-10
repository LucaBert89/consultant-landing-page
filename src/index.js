import "./style.scss";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


let question = document.querySelectorAll(".faq__question");
let loadBtn = document.querySelector(".btn-load");


var control = false;

for(let i=0; i< question.length; i++) {
    question[i].addEventListener("click", accordion);
    loadBtn.addEventListener("click", addQuestions);
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
    let questionlistLeft = document.querySelectorAll(".faq__questions-list")[0];
    if(!control) {
        for (var i=0; i<4; i++) {
            let container = document.createElement("div");
            container.className = "faq__question-container";
    
            let newQuest = document.createElement("div");
            newQuest.className="faq__question";
            newQuest.innerHTML = `
                    <span>How do I apply for a traffic Permit?</span> 
                    <div class="arrow-btn"><i class="fas fa-chevron-right"></i></div>
            `;
    
            let newAnswer = document.createElement("div");
            newAnswer.className = "faq__answer";
            newAnswer.innerHTML =`
            <div>Traffic permits are a requirement for conducting professional traffi.</div> 
            `
            newQuest.classList.add("appear-animation");
        
                container.appendChild(newQuest);
                container.appendChild(newAnswer);
                questionlistLeft.appendChild(container);
                newQuest.addEventListener("click", accordion); 
        }
    } else {
        return;
    }

    control = true; 
};
    
