var nameGen = document.getElementById('name-gen');
var ageGen = document.getElementById('age-gen');

var btns = document.getElementById('gen-btns');

function genSwitcher(gen){
    switch (gen) {
        case 'name':
            btns.style.display = 'none'
            nameGen.style.display = 'block';
            ageGen.style.display = 'none';
            break;
        case 'age':
            btns.style.display = 'none'
            nameGen.style.display = 'none';
            ageGen.style.display = 'block';
            break;
    }
};

// Generator Variables

var nameResult = document.getElementsByClassName('result')[0];
var ageResult = document.getElementsByClassName('result')[1];

var nameInput = document.getElementById('name-input');
var ageInput = document.getElementById('age-input');

// Name Generator - Section

var nameList = [
    'مفيش حد من نصيبك للأسف، خلي السنجلة جنتلة تنفعك',
    'ياختى بطه بتدور على شريك عمر',
    'مش وقته حب يسطا، صباح الفللللل',
    'بقلك ايييي شغل النحنه دا مش هنا سلاموز',
    'يخربيت الحب الى رماكو هنا',
    'قالك مرا حد مهزق عايز موقع يقولو مين شريك حياتو... ياااه',
    'اكتب الاسم بس وهنبدأ العد التنازلى للعياط',
    'دا حب حقيقي ... ولا قعده ملل ',
    'دا حب ولا اشتراك شهري ان شاء الله؟؟',
    'كتبت اسمو ... اتبط بقا يمكن مبيحبكش يا يصحبي'
];

function nameSelector() {
    if (nameInput.value == '' || nameInput.value == ' ') {
        nameResult.style.display = 'block';
        nameResult.textContent = `طب اكتب الأول حتى`;
    }
    else{
        nameResult.style.display = 'block';
        let selector = Math.floor(Math.random() * nameList.length);
        nameResult.textContent = `${nameList[selector]}`;
    };
};

// Age Generator - Section

futureList = [
    'مستقبل ايه بس، كلو رايح',
    'طزز فى العمر الى راح ولا استفدنا حاجه اقسم بالله',
    'انا جيييت ابشرك بحاجه...روح نام مستني اى؟',
    'لما انا معرفش مستقبل هعرف مستقبلك ازاى بالله عليك؟',
    'هتجيب كيلو باميه وانت راجع او نص كيلو خيبه وتنام عليها',
    'مستقبلك؟ نوم واكل وسكر زياده',
    'هيجيلك اشعار من البنك ... مفيش رصيد يا مفلسين',
    'هتعيش قصه حب جميله ... بس فى خيالك',
    'هيجيلك شغلانه ... بس فى لعبه',
    'كل سنه وانت بتتفرج على احلامك وهى بتعدي'
];

function futureSelector() {
    if (ageInput.value == '' || ageInput.value == ' ') {
        ageResult.style.display = 'block';
        ageResult.textContent = `طب اكتب الأول حتى`;
    }
    else{
        ageResult.style.display = 'block';
        let selector = Math.floor(Math.random() * futureList.length);
        ageResult.textContent = `${futureList[selector]}`;
    };
};


function refresh() {
    location.reload();
};