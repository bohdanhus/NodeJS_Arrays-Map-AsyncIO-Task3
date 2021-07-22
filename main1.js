//Декабрь 2020
//(20) - Ваня Иванов (23 года)
//(23) - Петя Петров (25 лет)
//Январь 2021
//(01) - Коля Новогодний (21 год)
//(07) - Стас Рождественский (30 лет)
//Есть список сотрудников. Сделать их вывод с группировкой по месяцу рождения отсортированных по дате. Для текущего и следующего месяца.
// Реализовать возможность задать "горизонт планирования" - на сколько месяцев вперед показывать дни рождения.
// 0 - только текущий
// 1 - текущий и следующий
// 2 - текущий и два следующих
// moment().format();
//https://coderoad.ru/43715179/%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%BF%D0%BE-%D0%B4%D0%B0%D1%82%D0%B0%D0%BC
//////////////////////////////////////////////////////////////

const day1 = new Date(2000, 9, 20);
const day2 = new Date(1991, 7, 11);
const day3 = new Date(1997, 8, 17);
const day4 = new Date(2000, 9, 8);
const day5 = new Date(1993, 7, 15);
const day6 = new Date(1996, 7, 2);
const day7 = new Date(1996, 8, 2);


let employees = [
    { name: "Ivan Ivanov", age: 20, birthday: day1 },  
    { name: "Petya Petrov", age: 25, birthday: day2 },
    { name: "Kolya Novogodnij", age: 20, birthday: day3 },
    { name: "Stas Rojdestvenskiy", age: 23, birthday: day4 },
    { name: "Vasya Ivanov", age: 20, birthday: day4 },
    { name: "Ivan Petrov", age: 25, birthday: day5 },
    { name: "Stas Novogodnij", age: 20, birthday: day6 },
    { name: "Vladimir Rojdestvenskiy", age: 23, birthday: day7 },
];

const sortEmployees = (employees) => { // employees глобально отсортирован
    employees.sort(function (a, b) {
        return new Date(a.birthday) - new Date(b.birthday);
    });
};
sortEmployees(employees);
// console.log(employees);
console.log(Object.values(employees));

// const groupEmployees = (employees) => {
//    let list = new Map();
//    forEach.employees.
// }

// function show(employees, state) { 
//     console.log('date')
//     console.log()
// }

// function displayOutput(n, month, date, name, years) {


//     if (n === 0) {
//         return
//     } else if (n === 1) {
//         return
//     } else if (n === 2) {
//         return
//     }
//     return
// }

///////////////////////////////////////////////////////////////////////////






// function newMapEmployees (employees) {
//     let empl = new Map();


// }


// let myJSON = { "name": "Chris", "age": "38" };
// myJSON
// let myString = JSON.stringify(myJSON);
// console.log(myString);

// .toLocaleDateString('ru-RU', {month: "long", year: "numeric"})
// var myArray = [
//     {date: "2017-01-01", num: "2"},
//     {date: "2017-01-02", num: "3"},
//     {date: "2017-02-04", num: "6"},
//     {date: "2017-02-05", num: "15"}
// ],
//     groupKey = 0;
//     groups = myArray.reduce(function (r, o) {
//         var m = o.date.split(('-'))[1];
//         (r[m])? r[m].data.push(o) : r[m] = {group: String(groupKey++), data: [o]};
//         return r;
//     }, {});

// var result = Object.keys(groups).map(function(k){ return groups[k]; });

// console.log(result);