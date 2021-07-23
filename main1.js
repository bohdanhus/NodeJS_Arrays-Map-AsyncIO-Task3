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
let employees = [
    {fullName: 'Коля Новогодний', birthDay: '1999-07-02'},
    {fullName: 'Стас Неяснов', birthDay: '1990-07-16'},
    {fullName: 'Марина Майская', birthDay: '2003-08-17'},
    {fullName: 'Ваня Иванов', birthDay: '2000-08-20'},
    {fullName: 'Петя Петров', birthDay: '2001-09-12'},
    {fullName: 'Стас Рождественский', birthDay: '2003-09-12'}
];
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь',];

let eMap = formatByMonth(employees);


function formatByMonth(emp) {
    let employees;
    let employMap;
    employMap = new Map();
    emp.forEach((user) => {
        let birthDate = new Date(user.birthDay);
        let birthMonth = birthDate.getMonth() + 1;
        if (employMap.has(birthMonth) !== true) {
            employMap.set(birthMonth, [{fullName: user.fullName, birthDay: birthDate}])
        } else {
            employees = employMap.get(birthMonth);
            employees.push({fullName: user.fullName, birthDay: birthDate});
            employMap.set(birthMonth, employees)
        }
    });
    return employMap;
};

function getAge(date) {
    let today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    let m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
        age--;
    }
    return age;
}
function Plural(num, nom, gen, plu) {
    if (num % 10 == 0) {
        return `${num} ${plu}`;
    } else if (num % 10 === 1) {
        return `${num} ${nom}`;
    } else if (num % 10 > 1 && num % 10 < 5){
        return `${num}  ${gen}`;
    } else if (num % 10 >= 5 && num % 10 <= 10){
        return `${num} ${plu}`;
    }
};
function displayBirthdayOfMonth(employees) {
    let string = ""
    for (let j = 0; j < employees.length; j++) {
        string = string + (`(${employees[j].birthDay.getDate()}) -  ${employees[j].fullName} (${Plural(getAge(employees[j].birthDay), "год", "года", "лет")})` + "\n");
    }
    return string
}
function showPlanning(eMap, horizontalPlanning) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let mm = currentDate.getMonth() + 1;
    for (let i = mm; i <= mm + horizontalPlanning; i++) {
        for (const [key, employees] of eMap) {
            if (key === i) {
                console.log(`${months[i - 1]} ${currentYear} ` )
                console.log(displayBirthdayOfMonth(employees));
            }
        }
    }
}

showPlanning(eMap, 24);