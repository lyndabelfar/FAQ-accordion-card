const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');

// answers 

const answer1 = document.querySelector('.answer1');
const answer2 = document.querySelector('.answer2');
const answer3 = document.querySelector('.answer3');
const answer4 = document.querySelector('.answer4');
const answer5 = document.querySelector('.answer5');

//questions

const question1 = document.querySelector('.q1');
const question2 = document.querySelector('.q2');
const question3 = document.querySelector('.q3');
const question4 = document.querySelector('.q4');
const question5 = document.querySelector('.q5');


const question1DIV = document.querySelector('.question1');
const question2DIV = document.querySelector('.question2');
const question3DIV = document.querySelector('.question3');
const question4DIV = document.querySelector('.question4');
const question5DIV = document.querySelector('.question5');



btn1.addEventListener('click', showAnswer1); 

let numClicksbtn1 =0;
let numClicksbtn2 =0;
let numClicksbtn3 =0;
let numClicksbtn4 =0;
let numClicksbtn5 =0;


function showAnswer1(){ 
    numClicksbtn1 += 1;
    console.log(numClicksbtn1) 
    if (numClicksbtn1%2!==0){
        answer1.classList.add('visible');
        question1.classList.add('change-p-font')
        question1DIV.classList.add('remove-border')
    } else if (numClicksbtn1%2===0){
        answer1.classList.remove('visible');
        question1.classList.remove('change-p-font')
        question1DIV.classList.remove('remove-border')

    }
}

btn2.addEventListener('click', showAnswer2); 

function showAnswer2(){ 
    numClicksbtn2 += 1;
    if (numClicksbtn2%2!==0){
        answer2.classList.add('visible');
        question2.classList.add('change-p-font')
        question2DIV.classList.add('remove-border')

        
    } else if (numClicksbtn2%2===0){
        answer2.classList.remove('visible');
        question2.classList.remove('change-p-font')
        question2DIV.classList.remove('remove-border')

    }
}

btn3.addEventListener('click', showAnswer3); 

function showAnswer3(){ 
    numClicksbtn3 += 1;
    if (numClicksbtn3%2!==0){
        answer3.classList.add('visible');
        question3.classList.add('change-p-font')
        question3DIV.classList.add('remove-border')

    } else if (numClicksbtn3%2===0){
        answer3.classList.remove('visible');
        question3.classList.remove('change-p-font')
        question3DIV.classList.remove('remove-border')

    }
}

btn4.addEventListener('click', showAnswer4); 

function showAnswer4(){ 
    numClicksbtn4 += 1;
    if (numClicksbtn4%2!==0){
        answer4.classList.add('visible');
        question4.classList.add('change-p-font')
        question4DIV.classList.add('remove-border')

    } else if (numClicksbtn4%2===0){
        answer4.classList.remove('visible');
        question4.classList.remove('change-p-font')
        question4DIV.classList.remove('remove-border')

    }
}
btn5.addEventListener('click', showAnswer5); 

function showAnswer5(){ 
    numClicksbtn5 += 1;
    if (numClicksbtn5%2!==0){
        answer5.classList.add('visible');
        question5.classList.add('change-p-font')
        question5DIV.classList.add('remove-border')

    } else if (numClicksbtn5%2===0){
        answer5.classList.remove('visible');
        question5.classList.remove('change-p-font')
        question5DIV.classList.remove('remove-border')

    }
}