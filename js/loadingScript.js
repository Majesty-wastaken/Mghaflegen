const message = [
    'جارِ التحميل...',
    'استنى، متصربع ليه يمعلم',
    '🙃ما اهدي يصحبي الصفحه مش هتطير',
    '😁بتحمل بتحمل اصبر، الصبر جميل',
    'انا زهقتلك والله معلش، لفه تاني وهتيجي معاك',
    'خلاص فاضل حبه استنى',
    '😂اتضحك عليك تاني'
];
let Index = 0;

window.addEventListener('load', () => {
    const loadingText = document.getElementById('loading-text');
    const loadingScreen = document.getElementById('loading-screen');
    const imgContainer = document.getElementById('image-container');

    // تأكد إن كل العناصر موجودة
    if (!loadingText || !loadingScreen || !imgContainer) {
        console.error('خطأ: واحد أو أكتر من العناصر (loading-text, loading-screen, image-container) مش موجودين');
        return;
    }

    // إظهار الـ loading-screen وإخفاء الـ image-container من البداية
    loadingScreen.style.display = 'flex';
    imgContainer.style.display = 'none';

    // تغيير النصوص كل 7 ثواني
    const textInterval = setInterval(() => {
        Index = (Index + 1) % message.length;
        loadingText.textContent = message[Index];
    }, 7000);

    
    setTimeout(() => {
        clearInterval(textInterval); 
        loadingScreen.style.display = 'none';
        imgContainer.style.display = 'block';
    }, 300000); 
});