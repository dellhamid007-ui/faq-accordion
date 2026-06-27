const buttons = document.getElementsByClassName('faq-btn');
const answers = document.getElementsByClassName('answer');



function hideQuestion(index){
    answers[index].classList.remove('open');
    buttons[index].classList.remove('active');

    buttons[index].classList.add('inactive');
}

function showQuestion(index){
    answers[index].classList.add('open')
    buttons[index].classList.remove('inactive');
    buttons[index].classList.add('active');

    for(let j =0; j<buttons.length; j++){
        if(j != index) hideQuestion(j);
    }
}

for(let i = 0; i< buttons.length; i ++){
    buttons[i].addEventListener('click', () =>{
        if(buttons[i].classList.contains('inactive')){
            showQuestion(i);
        }
        else{
            hideQuestion(i);
        }
    })
}