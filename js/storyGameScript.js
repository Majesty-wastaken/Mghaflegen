var gameBox = document.getElementById('container-box');

var vText = document.getElementById('game-text');

var btnBox1 = document.getElementById('firBtn-container');
var btnBox2 = document.getElementById('secBtn-container');
// var choiceBtn1 = document.getElementsByClassName('choice-btn')[0];
// var choiceBtn2 = document.getElementsByClassName('choice-btn')[1];
// var choiceBtn3 = document.getElementsByClassName('choice-btn')[2];
// var choiceBtn4 = document.getElementsByClassName('choice-btn')[3];

var resultBox = document.getElementById('result-box');
var resultText = document.getElementById('result-text');

function choiceResult(choice) {
    
    switch (choice) {
        case 'hide':
            vText.style.display = 'none';
            btnBox1.style.display = 'none';
            resultBox.style.display = 'block';

            resultText.textContent = 'فونك رن وامك بتقولك جبت اللبن ولا لسه والدب قال الحق نفسك قبل ما تدفنك... تجرب تاني؟';
            break;
        case 'attack':
            vText.style.display = 'none';
            btnBox1.style.display = 'none';
            resultBox.style.display = 'block';

            resultText.textContent = 'جيت تمسك طوبة ملقيتش حاجة، الدب مسكك مسح بيك الأرض... تجرب تاني؟';
            break;
        case 'run':
            vText.style.display = 'none';
            btnBox1.style.display = 'none';
            resultBox.style.display = 'block';

            resultText.textContent = 'جريت واتكعبلت على وشك ووقعت فى حفره طلعو بيغفلوك وبيقولولك فزت فى برناامج مقالب الغابه...تجرب تانى؟';
            break;
        case 'nothing':
            vText.textContent = 'قولت اكيد مفيش دب هيبقى هنا، فجأة لقيتو جه يسلم عليك ويقولك عامل ايه ياسطا... هتقولو ايه؟';

            btnBox1.style.display = 'none';
            btnBox2.style.display = 'grid';
            break;
        // second dialog
        case 'stall':
            vText.style.display = 'none';
            btnBox1.style.display = 'none';
            btnBox2.style.display = 'none';
            resultBox.style.display = 'block';

            resultText.textContent = 'دا طلع صاحبك الدب اللي كان مختفي، قعدتو تحكو وتهزرو وانتو بتتمشو لحد ما خرجتو من الغابة وسلمتو علي بعض، بعدين كل واحد راح من ناحية... تجرب تاني؟';
            break;
        case 'ask':
            vText.style.display = 'none';
            btnBox1.style.display = 'none';
            btnBox2.style.display = 'none';
            resultBox.style.display = 'block';

            resultText.textContent = 'قالك انا تمام ما تيجي تتعشي معايا عسل؟ وافقت عشان كنت جعان، اكلتوا وانتو بتحكوا وتهزروا... تجرب تاني؟ ';
            break;
        case 'noJoke':
            vText.style.display = 'none';
            btnBox1.style.display = 'none';
            btnBox2.style.display = 'none';
            resultBox.style.display = 'block';

            resultText.textContent = 'صح انا معرفكش، قام الدب بالعك فى لقمه واحده... تجرب تاني؟';
            break;
        case 'what':
            vText.style.display = 'none';
            btnBox1.style.display = 'none';
            btnBox2.style.display = 'none';
            resultBox.style.display = 'block';

            resultText.textContent = 'لا بناوناو، احنا هنهزر؟ وقام رازعك قفا... تجرب تاني؟';
            break;
}};

function retry() {
    location.reload();
};