// Products data (shared across pages)
const productsStored = [
    {
        img : '/images/CrazzCup.webp',
        alt : 'The madness Cup',
        Pid: 0,
        name : 'كوبايه الجنون',
        desc : 'كوب سيراميك مكتوب عليه عبارات مضحكة',
        price : '0.99'
    },
    {
        img : '/images/Cushion_.jpg',
        alt : 'The doll clot that never sleeps',
        Pid: 1,
        name : 'العروسه الجلطه الى مش بتنام',
        desc : 'عروسه لطخه هتقرفك حتى وانت نايم',
        price : '2.49'
    },
    {
        img : './images/StupidPen.jpg',
        alt : 'StupidPen',
        Pid: 2,
        name : 'قلم الافكار العبييطه الى مبيهزرش',
        desc : 'قلم ملون يطلع منه أفكار مضحكة مكتوبة على ورق صغير كل ما تستخدمه',
        price : '1.99'
    },
    {
        img : '/images/clown hat.jpg',
        alt : 'Clown hat',
        Pid: 3,
        name : 'قبعه ملك الهرج والمرج',
        desc : 'قبعه عبيطه بشكل عبثي عبيط معرفش مستوحاه من انهي كرتون',
        price : '3'
    },
    {
        img : '/images/StrokeCards.jpg',
        alt : 'StrokeCards',
        Pid: 4,
        name : 'لعبه تحديات الجلطه',
        desc : 'مجموعه كروت فيها تحديات عبيطه زى غني بصوت عالى او ارقص زي البطه انت وحظك بقا😂😂',
        price : '5.99'
    },
    {
        img : '/images/WaistBag.jpg',
        alt : 'WaistBag',
        Pid: 5,
        name : 'شنطه عبثيات عمنا ترافيل',
        desc : 'هى شنطه فيها شويه استيكرات هبله',
        price : '10'
    },
    {
        img : '/images/Corset.jpg',
        alt : 'Corset',
        Pid: 6,
        name : 'مشدات كيوت هتعجبك اوووي',
        desc : 'عباره حاجه شبه التوكه بس على اكيت على شكل وحش تقريبا',
        price : '0.99'
    },
    {
        img : '/images/StupidSock.jpg',
        alt : 'StupidSock',
        Pid: 7,
        name : 'شربات بتجيب جلطه',
        desc : 'شربات بالوان غريبه وبصوابع تخليك تضحك على عبطك',
        price : '3.5'
    },
    {
        img : '/images/Crazymirror.jpg',
        alt : 'Crazymirror',
        Pid: 8,
        name : 'مرايه شكلك مجنون يمعلم',
        desc : 'مرايه شكلها غريب تخليك تتشل وتتخض كأن عفريتك الى بيكلمك 😂😈😜',
        price : '5'
    }
];

// 🧠 Detect which page we're on by checking for unique elements
window.onload = function () {
    if (document.getElementById('products-container')) {
        renderProductList();
    } else if (document.getElementById('product-box')) {
        renderProductPage();
    }
};

// 🛍️ Page 1: Product List Page
function renderProductList() {
    const parentContainer = document.getElementById('products-container');

    productsStored.forEach(function(item) {
        const product = document.createElement('a');
        product.href = `./productPage.html?pid=${item.Pid}`;
        product.innerHTML = `
            <div class="product">
                <img src="${item.img}" alt="${item.alt}">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
            </div>
        `;
        parentContainer.appendChild(product);
    });
}

// 📄 Page 2: Product Page
function renderProductPage() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('pid');
    const product = productsStored.find(p => p.Pid == productId);

    if (!product) {
        console.error("Product not found");
        return;
    }

    const productBox = document.getElementById('product-box');
    const productDet = document.createElement('span');

    productDet.innerHTML = `
    
        <img src="${product.img}" alt="${product.alt}">
        
        <div class="product-info">
            <h1>${product.name}</h1>
            <p>${product.desc}</p>
        </div>

        <div class="product-btns">
            <p>${product.price} $</p>
            <button class="btn" onclick="alert('منتج مش متوفر حالياً، بس ممكن تلاقيه عند ام ترتر.')">!!اشتري حالاً</button>
        </div>
    `;

    productBox.appendChild(productDet);
}
