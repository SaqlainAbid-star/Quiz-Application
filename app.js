var questionArray = [

    {
        question: "1. Full form of the Ram is?",
        answer:"a) random access memory",
        options:[
            "a) random access memory",
            "b) random actual memory",
            "c) right access memory",
            "d) none of the above",
]
},

{
    question : "2. Full form of Cpu is?",
    answer :"b) central processing unit",
    options:[
        "a) central program unit",
        "b) central processing unit",
        "c) control panel unit",
        "d) none of the above",
    ]
},

{
    question : "3. Full form of Rom is?",
    answer :"c) read only memory",
    options:[
        "a) read on memory",
        "b) reverse on memory",
        "c) read only memory",
        "d) none of the above",
    ]
},

{
    question : "4. Full form of DVD is?",
    answer :"c) digital versatile disc",
    options:[
        "a) diagnostic value disc",
        "b) digital variable disc",
        "c) digital versatile disc",
        "d) none of the above",
    ]
},

{
    question : "5. Full form of USB is?",
    answer :"a) universal serial bus",
    options:[
        "a) universal serial bus",
        "b) union serial bus",
        "c) universal schematic bus",
        "d) all of the above",
    ]
},

];




function showQuestion(e){
    var questionElement = document.getElementById("questionElement");
    questionElement.innerHTML = questionArray[e].question;
    var optionElement = document.getElementsByClassName("optionElement")

    for(var i=0;i<optionElement.length;i++){

    optionElement[i].innerHTML = questionArray[e].options[i];
        
    }
}

var questionCount = 0;
var score = 0;

function nextQuestion(e){
   
    var nextBtn = document.getElementById("nextBtn");
    validate(questionCount,questionCount+1)
    questionCount++;
    showQuestion(questionCount) 
    removeActiveClass()
}


function putActiveClass(e){
    removeActiveClass()
    e.classList.add("active");


}

function removeActiveClass(){
    var active = document.getElementsByClassName("active");

    for(i=0;i<active.length;i++){
        active[i].classList.remove("active");
    }
}



function validate(e,count){
    var active = document.getElementsByClassName("active");

    
    if(active[0].innerHTML == questionArray[e].answer){
        score += 10;
        alert("Question "+ count  +" is Right"+  "\nYour Total Score is "+ score);
    }
    else{
        alert("Question "+ count + " is Wrong" + "\nYour Total Score is "+ score)
       
    }
    
}
