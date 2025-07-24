// Product Page
productsStored = [
    {
        img : '/images/CrazzCup.webp',
        alt : 'The madness Cup',
        name : 'كوبايه الجنون',
        desc : 'كوب سيراميك مكتوب عليه عبارات مضحكة'
    },
    {
        img : '/images/Cushion_.jpg',
        alt : 'The doll clot that never sleeps',
        name : 'العروسه الجلطه الى مش بتنام',
        desc : 'عروسه لطخه هتقرفك حتى وانت نايم'
    },
    {
        img : './images/StupidPen.jpg',
        alt : 'StupidPen',
        name : 'قلم الافكار العبييطه الى مبيهزرش',
        desc : 'قلم ملون يطلع منه أفكار مضحكة مكتوبة على ورق صغير كل ما تستخدمه'
    },
    {
        img : '/images/clown hat.jpg',
        alt : 'Clown hat',
        name : 'قبعه ملك الهرج والمرج',
        desc : 'قبعه عبيطه بشكل عبثي عبيط معرفش مستوحاه من انهي كرتون'
    },
        {
        img : '/images/StrokeCards.jpg',
        alt : 'StrokeCards',
        name : 'لعبه تحديات الجلطه',
        desc : 'مجموعه كروت فيها تحديات عبيطه زى غني بصوت عالى او ارقص زي البطه انت وحظك بقا😂😂'
    },
        {
        img : '/images/WaistBag.jpg',
        alt : 'WaistBag',
        name : 'شنطه عبثيات عمنا ترافيل',
        desc : 'هى شنطه فيها شويه استيكرات هبله '
    },
        {
        img : '/images/Corset.jpg',
        alt : 'Corset',
        name : 'مشدات كيوت هتعجبك اوووي',
        desc : 'عباره حاجه شبه التوكه بس على اكيت على شكل وحش تقريبا'
    },
        {
        img : '/images/StupidSock.jpg',
        alt : 'StupidSock',
        name : 'شربات بتجيب جلطه',
        desc : 'شربات بالوان غريبه وبصوابع تخليك تضحك على عبطك'
    },
        {
        img : '/images/Crazymirror.jpg',
        alt : 'Crazymirror',
        name : 'مرايه شكلك مجنون يمعلم',
        desc : 'مرايه شكلها غريب تخليك تتشل وتتخض كأن عفريتك الى بيكلمك 😂😈😜'
    }
];


var productContainer = document.getElementById('product-box');
var productInfo = document.createElement('div');
productsStored.forEach(function(item) {

productInfo.id = 'product-box'

productInfo.innerHTML = `
    <div class="product-btns">
        <p>99.99$</p>
        <button>!!اشتري حالاً</button>
    </div>

    <div class="product-info">
        <h1>${item.name}</h1>
        <p>${item.desc}</p>
    </div>

    <img src="${item.img}" alt="${item.alt}">
`;

productContainer.appendChild(productInfo);
});