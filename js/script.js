const btn = document.getElementById('crazy-button');
let count = 0;
const messages = [
    'مش هيحصل! جرب تاني 😂',
    'يا عم إنت لسه بتحاول؟ 😈',
    'الزر ده أسرع منك! 🚀',
    'بتضيع وقتك ليه؟ مش هتدوس عليا 😊'
];

btn.addEventListener('mouseover', () => {
    if (count < 5) {
        const maxX = window.innerWidth - btn.offsetWidth;
        const maxY = window.innerHeight - btn.offsetHeight;
        const randX = Math.random() * maxX;
        const randY = Math.random() * maxY;

        btn.style.transform='';
        btn.style.left = `${randX}px`;
        btn.style.top = `${randY}px`;

        const randMessage = messages[Math.floor(Math.random() * messages.length)];
        showMessage(randMessage);

        count++;
        if (count === 5) {
            btn.classList.add('stopped'); // يوقف الهروب
        }
    }
});

btn.addEventListener('click', (e) => {
    if (count < 5) {
        e.preventDefault();
        showMessage('لسه شوية يا نينجا 😜');
    } else {
        showMessage('مبروك! خلاص بدأنا الجلطة 😜');
        // يسمح بالرابط
    }
});

function showMessage(text) {
    const message = document.getElementById('message');
    message.textContent = text;
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 2000);
}
