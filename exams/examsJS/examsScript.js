// Results
var quizBoxes = document.getElementsByClassName('quizes');

function examResult(num) {
    var result = document.createElement('p');
    
    result.classList.add('result')
    result.innerHTML = 'إجابة غلط! حظ أوفر المره القادمة';

    quizBoxes[num].appendChild(result);

};

// Score
var score = document.getElementById('score');

function examScore() {
    score.innerHTML = 'مبروك! درجتك 0/5';
};

// Button Selection

var cBtns = document.getElementsByClassName('btn');

function btnSelected(ind) {
    var inds = 0;
    while (inds <= 20) {
        cBtns[inds].classList.remove('selectAns');
        inds++
    }

    cBtns[ind].classList.toggle('selectAns');
}