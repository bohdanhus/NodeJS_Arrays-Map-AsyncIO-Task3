# NodeJS_Arrays-Map-AsyncIO-Task3
onst birth1 = new Date(1999, 7, 11);
const birth2 = new Date(1998, 7, 12);
const birth3 = new Date(1997, 8, 13);
const birth4 = new Date(2000, 8, 14);
const birth5 = new Date(1999, 9, 15);
const birth6 = new Date(1998, 9, 16);

const employees = [
    {
        fullname: 'Ваня Иванов',
        birthday: birth1
    },
    {
        fullname: 'Петя Петров',
        birthday: birth2
    },
    {
        fullname: 'Костя Костянов',
        birthday: birth3
    },
    {
        fullname: 'Максим Максимов',
        birthday: birth4
    },
    {
        fullname: 'Коля Колевич',
        birthday: birth5
    },
    {
        fullname: 'Ибрагим Ибрагимович',
        birthday: birth6
    },
];
const sortList = arr => {
    console.log(arr)
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j].birthday.getDate() > arr[j + 1].birthday.getDate()) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    console.log(arr)
    return arr;
};
const formatDate = (date) => {
    const options = {month: 'long', year: 'numeric'};
    let formatDate = new Date(date).toLocaleString('ru-RU', options);
    return formatDate[0].toUpperCase() + formatDate.slice(1, -2);
}
const findHowOld = (employee, date) => {
    let diff = date - employee.birthday;
    return Math.floor(diff / 31557600000);
}
const show = (employees, date, quantity) => {
    let result = '';
    for (let i = 0; i <= quantity; i++) {
        date.setMonth(date.getMonth() + 1);
        result += `${formatDate(date)}\n`;
        sortList(employees);
        employees.map(employee => {
            if (employee.birthday.getMonth() === date.getMonth()) {
                result += '(' + employee.birthday.getDate() + ') - ' + employee.fullname + ' (' + pl(findHowOld(employee, date)) + ')\n'
            }
        });
    }
    return result;
}

const pl = (age) => {
    if (age !== 11 && age % 10 === 1) {
        return age + ' ' + 'год';
    } else if (age % 10 >= 2 && age % 10 <= 4 && (age << 5 || age >> 21)) {
        return age + ' ' + 'года';
    } else if (age % 10 === 0 || (age >= 5 && age <= 20) || (age % 10 >= 5 && age % 10 <= 9)) {
        return age + ' ' + 'лет';
    }
}

const main = (employees, variant) => {
    let date = new Date();
    date.setMonth(date.getMonth() - 1);
    console.log(show(employees, date, variant));
}


main(employees, 1)
