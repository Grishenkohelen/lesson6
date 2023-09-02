printArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('--------------------------')
}
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let arr = ['hello world', 'lorem ipsum', 'javascript is cool'];

printArr(arr)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].toUpperCase());
}
console.log('--------------------------')


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].toLowerCase());
}
console.log('--------------------------')


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());
console.log('--------------------------')

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str1 = 'Ревуть воли як ясла повні';

stringToArray = (str) =>{
    let result = str.split(' ')
    console.log(result)
}

stringToArray(str1);

console.log('--------------------------')


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let strNum = numbers.map(el => el.toString());

console.log(strNum)

console.log('--------------------------')


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

let sortNums = (direction,nums) =>{
    if (direction == 'ascending'){
        console.log(nums.sort((a,b)=>a-b));
    }
    if (direction == 'descending'){
        console.log(nums.sort((a,b)=>a-b).reverse());
    }
}

sortNums('ascending',nums)
sortNums('descending',nums)

console.log('--------------------------')

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let monthSort = coursesAndDurationArray.sort((a, b) => a.monthDuration < b.monthDuration ? 1 : -1);
console.log(monthSort);
console.log('--------------------------')

let coursesLength = coursesAndDurationArray.filter(el => el.monthDuration > 5);
console.log(coursesLength)
console.log('--------------------------')
function getRandomID(min, max) {
    let int = Math.floor(Math.random() * (max - min + 1)) + min;

    return int.toString(36);
}

coursesAndDurationArray.map( function (c) {
    c.id = getRandomID(1, 32);
    return c ;
})
console.log(coursesAndDurationArray)

console.log('--------------------------')
let deck = [
    {
        cardSuit: 'spade',
        value: '6',
        color: 'black'
    }, {
        cardSuit: 'spade',
        value: '7',
        color: 'black'
    }, {
        cardSuit: 'spade',
        value: '8',
        color: 'black'
    }, {
        cardSuit: 'spade',
        value: '9',
        color: 'black'
    }, {
        cardSuit: 'spade',
        value: '10',
        color: 'black'
    }, {
        cardSuit: 'spade',
        value: 'ace',
        color: 'black'
    }, {
        cardSuit: 'spade',
        value: 'queen',
        color: 'black'
    }, {
        cardSuit: 'spade',
        value: 'king',
        color: 'black'
    }, {
        cardSuit: 'spade',
        value: 'joker',
        color: 'black'
    }, {
        cardSuit: 'clubs',
        value: '6',
        color: 'black'
    }, {
        cardSuit: 'clubs',
        value: '7',
        color: 'black'
    }, {
        cardSuit: 'clubs',
        value: '8',
        color: 'black'
    }, {
        cardSuit: 'clubs',
        value: '9',
        color: 'black'
    }, {
        cardSuit: 'clubs',
        value: '10',
        color: 'black'
    }, {
        cardSuit: 'clubs',
        value: 'ace',
        color: 'black'
    }, {
        cardSuit: 'clubs',
        value: 'queen',
        color: 'black'
    }, {
        cardSuit: 'clubs',
        value: 'king',
        color: 'black'
    }, {
        cardSuit: 'clubs',
        value: 'joker',
        color: 'black'
    }, {
        cardSuit: 'heart',
        value: '6',
        color: 'red'
    }, {
        cardSuit: 'heart',
        value: '7',
        color: 'red'
    }, {
        cardSuit: 'heart',
        value: '8',
        color: 'red'
    }, {
        cardSuit: 'heart',
        value: '9',
        color: 'red'
    }, {
        cardSuit: 'heart',
        value: '10',
        color: 'red'
    }, {
        cardSuit: 'heart',
        value: 'ace',
        color: 'red'
    }, {
        cardSuit: 'heart',
        value: 'queen',
        color: 'red'
    }, {
        cardSuit: 'heart',
        value: 'king',
        color: 'red'
    }, {
        cardSuit: 'heart',
        value: 'joker',
        color: 'red'
    }, {
        cardSuit: 'diamond',
        value: '6',
        color: 'red'
    }, {
        cardSuit: 'diamond',
        value: '7',
        color: 'red'
    }, {
        cardSuit: 'diamond',
        value: '8',
        color: 'red'
    }, {
        cardSuit: 'diamond',
        value: '9',
        color: 'red'
    }, {
        cardSuit: 'diamond',
        value: '10',
        color: 'red'
    }, {
        cardSuit: 'diamond',
        value: 'ace',
        color: 'red'
    }, {
        cardSuit: 'diamond',
        value: 'queen',
        color: 'red'
    }, {
        cardSuit: 'diamond',
        value: 'king',
        color: 'red'
    }, {
        cardSuit: 'diamond',
        value: 'joker',
        color: 'red'
    }
];
// описати колоду карт (від 6 до туза без джокерів)

// - знайти піковий туз

let clubsAce = deck.filter(el => el.value === 'ace' && el.cardSuit === 'clubs');
console.log(clubsAce)
console.log('--------------------------')

// - всі шістки

let six = deck.filter(el => el.value === '6');
console.log(six);
console.log('--------------------------')

// - всі червоні карти

let red = deck.filter(el => el.color === 'red');
console.log(red);
console.log('--------------------------')

// - всі буби

let diamonds = deck.filter(el => el.cardSuit === 'diamond');
console.log(diamonds);
console.log('--------------------------')

// - всі трефи від 9 та більше

let spades = deck.filter(el => el.cardSuit === 'spade' && el.value >= "9");
console.log(spades);
console.log('--------------------------');

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let reduce = deck.reduce(function (accumulator, card) {
    if (card.cardSuit === 'heart') {
        accumulator[0].push(card);
    }
    if (card.cardSuit === 'diamond') {
        accumulator[1].push(card)
    }
    if (card.cardSuit === 'clubs') {
        accumulator[2].push(card)
    }
    if (card.cardSuit === 'spade') {
        accumulator[3].push(card)
    }

    return accumulator;

}, [[], [], [], []]);
console.log(reduce)

console.log('--------------------------')

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass


for (let i = 0;i < coursesArray.length;i++){
    if (coursesArray[i].modules.includes('sass')){
        console.log(coursesArray[i].title);
    }
}
console.log('--------------------------')

// --написати пошук всіх об'єктів, в який в modules є docker

for (let i = 0;i < coursesArray.length;i++){
    if (coursesArray[i].modules.includes('docker')){
        console.log(coursesArray[i].title);
    }
}