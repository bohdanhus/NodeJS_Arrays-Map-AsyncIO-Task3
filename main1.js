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



let day = new Date(1999, 6, 19);
let day1 = new Date(2000, 6, 20);
let day2 = new Date(1999, 7, 19);
let day3 = new Date(2002, 7, 20);
let day4 = new Date(2001, 8, 19);
let day5 = new Date(1997, 8, 20);

let options = { year: 'numeric', month: 'short', day: '2-digit' };

let employees = [
    {
        name: 'Ivan Ivanov',
        birthday: day
    },
    {
        name: 'Petya Ivanov',
        birthday: day1
    },
    {
        name: 'Kolya Novogodniy',
        birthday: day2
    },
    {
        name: 'Stas Rojdestvenskiy',
        birthday: day3
    },
    {
        name: 'Sanya Vasinov',
        birthday: day4
    },
    {
        name: 'Bohdan Petrov',
        birthday: day5
    },
];

const sortList = (employees) => {
    employee.sort(function (a, b) {
        return new Date(a.birthday) - new Date(b.birthday);
    });
}

console.log(findHowOld())