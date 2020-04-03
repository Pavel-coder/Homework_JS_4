// 1. - створити функцію яка виводить масив
// function arrFunc () {
//     console.log(arguments);
// }
// arrFunc(4,7,4,2,9);

// - 2. створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function randomFunc () {
//     let random = Math.round(Math.random() * 10);
//     console.log(arrFunc(random));
// }
// randomFunc();

// - 3. створити функцію яка приймає три числа та виводить та повертає найменьше.
// function threeNum (one, two, three) {
//     if (one < two && one < three){
//         console.log(one);
//     }
//     else if (two < one && two < three){
//         console.log(two);
//     }
//     else
//         console.log(three);
//
// return;
// }
// threeNum(61,12,18);

// - 4. створити функцію яка приймає три числа та виводить та повертає найбільше.
// function threeNum (one, two, three) {
//     if (one > two && one > three){
//         console.log(one);
//     }
//     else if (two > one && two > three){
//         console.log(two);
//     }
//     else
//         console.log(three);
//
//     return;
// }
// threeNum(61,12,18);

// - 5. створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function funcMinMax() {
//     let max = arguments[0];
//     let min = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         let argument = arguments[i];
//         if (max < argument) {
//             max = argument;
//         }
//
//         else if(min > argument){
//             min = argument;
//         }
//     }
//     console.log(min);
//     return max;
// }
// funcMinMax(5,6,7,4,7,73);

// - 6. створити функцію яка виводить масив
// function arrFunc() {
//     let arr = [];
//     for (const elements of arguments) {
//         arr.push(elements);
//
//     }
//     console.log(arr);
//
// }
// arrFunc(4,6,7,4,3,2,4,4,5);

// - 7. створити функцію яка повертає найбільше число з масиву
// function funcMax() {
//     let max = Math.max.apply(Math, arguments);
//     console.log(max);
// }
// funcMax(4,6,3,7,9,3,4,6);

// - 8. створити функцію яка повертає найменьше число з масиву
// function funcMax() {
//     let min = Math.min.apply(Math, arguments);
//     console.log(min);
// }
// funcMax(4,6,3,7,9,3,4,6);

// - 9. створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function funcArrSum() {
//     let argArr = 0;
//     for (const arg of arguments) {
//        argArr += arg;
//     }
//     return argArr;
// }
// funcArrSum(5,5,7,4,8,2,5,6,7,4);

// - 10. створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function funcAverage() {
//     let argArr = 0;
//     for (const arg of arguments) {
//        argArr += arg;
//     }
//     return (argArr / arguments.length);
// }
// funcAverage(5,5,2,4);

// - 11. Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let usersWithId =[
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// function funcObj(arr) {
//
//     console.log(arr.length);
// }
// funcObj(usersWithId);

// - 12. Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let usersWithId =[
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// function funcObj(arr) {
//     for (const argument of arr) {
//             console.log(Object.keys(argument).length);
//     }
// }
// funcObj(usersWithId);

// - 13. створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// let arrOne = [1,2,3,4];
// let arrTwo = [2,3,4,5];
// let arrResult = [];
// function funcItemSum(index1, index2) {
//     for (let i = 0; i < index1.length; i++) {
//         arrResult.push(index1[i] + index2[i]);
//     }
//
//     console.log(arrResult);
// }
// funcItemSum(arrOne,arrTwo);

// - 14. *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// function funcIndex(index, arr) {
//     let arrIndex = arr[index];
//     arr[index] = arr[index + 1];
//     arr[index + 1] = arrIndex;
//         console.log(arr);
// }
// funcIndex(2, [1,2,3,4,5]);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]




// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
//
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "
//
