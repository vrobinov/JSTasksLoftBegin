//#1 Фильтрация строки Создать переменную со строковым значением.Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки.Результат вывести в консоль.
const string = "Привет! Как дела?";

function getVowels() {

    const vowels = "ауоыэяюёие"; //создаем переменную с всеми гласными
    let lowerCaseStr = string.toLowerCase(); // приводим входную строку к нижнему регистру
    let vcount = ""; // создаем переменную для конечного результата

    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (vowels.indexOf(lowerCaseStr[i]) !== -1) {
            vcount += lowerCaseStr[i]; // сравниваем две строки если символы совпадают добавляем их в переменную
        }
    }
    return vcount; // возвращаем итоговую переменную
};
console.log(getVowels(string));


// #2 Выборка объекта
// Сформировать произвольный массив объектов, описывающий, например, работников компании, в каждом объекте должны содержаться сл. свойства (поля) - name (содержащее имя сотрудника) и поле salary (содержащее зарплату сотрудника от 0 до 3000). Сформировать функцию в которую будет передан в качестве аргумента этот массив и возвращен из функции массив содержащий имена всех сотрудников, чья зарплата превышает 1000.
const workers = [{
        "name": "John",
        "salary": 500
    },
    {
        "name": "Mike",
        "salary": 800
    },
    {
        "name": "Linda",
        "salary": 1500
    },
    {
        "name": "Mark",
        "salary": 2000
    },
    {
        "name": "Amy",
        "salary": 2000
    }
];

function getWorthyWorkers() {
    let topWorker = []; //создаем итоговый массив
    for (let worker of workers) {
        if (worker.salary > 1000) {
            topWorker.push(worker.name);
        } // перебираем массив обьектов, и если есть значение зп больше 1000, того пушим в новый массив
    }
    return topWorker;
};

console.log(getWorthyWorkers(workers));



// #3 Анализ строки
// Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла. Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.

const path = "/users/download/index.html"

function isHtml() {
    if (path.indexOf('html') > -1) {
        return true;
    } else {
        return false;
    }
};

console.log(isHtml(path));


// #2.1 Фильтрация массива
// Создайте функцию которая в качестве аргумента принимает целое число, и проверяет четное оно или нет. Затем создайте произвольный массив целых чисел. И используя функцию проверки числа на четность, создайте из готового массива новый, который будет содержать только четные числа. Результат выведите в консоль.

const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => {
    return num % 2 === 0;
};

function filterArray(arrayToFilter, isEven) {
    let lastArr = [];
    arrayToFilter.forEach(num => {
        if (isEven(num)) {
            lastArr.push(num);
        }
    });
    return lastArr;
}

console.log(filterArray(mixedArray, isEven));