// const age = 18;
// console.log('Age', age)

// типи перемінних

// const type = typeof age;

// console.log(type);


// визивати вспливаюче вікно confirm

// const n = confirm('Why')

// console.log(n);


// отримити ввід від користувача prompt завжди повертає рядок,
// тому чкщо треба то приобразовуємо

// let name = prompt();

// приведення до числа, якщо треба
// name = Number(name);

// console.log(name);

// числа
// Number.parseInt залишає тільки числа не деструктивний, не перезаписує

// let elementWith = '50px';
// const result = Number.parseInt(elementWith);

// console.log(result);

// parseFloat парсить  до сотих

// let elementWith = '50.5px';
// const result = Number.parseFloat(elementWith)

// console.log(result);


// toFixt відсікає не заокруглює  до цілих, або кількість після коми
// не деструктивниуй

// let salery = 345.35434322;
// salery = salery.toFixed(2);
// console.log(salery);

// or like this

// let salery = 345.35434322;
// salery = Number(salery.toFixed(2));
// console.log(salery);


// приведення до числа Number, або привадить або  NaN - not a number

// Math.random    Math.round

// const max = 12;
// const min = 1;
// const result = Math.round((Math.random() * (max - min) + min));
// console.log(result);


// STR

// length str

// const massege = 'I love you';

// console.log(massege.length);

// concantination str+str


// const first = 'dkf';
// const second = 'sdfg';
// const therd = first + second;

// console.log(therd);

// toLowerCase toUpperCase не деструктивні

// const name = prompt();
// const lowName = name.toLowerCase();
// console.log(lowName);


// includes чи містить строка таке значення

// const word = 'spam';
// const sent = 'we are got a spam';
// const sent2 = 'we didnt get Spam';
// console.log(sent.includes(word));
// console.log(sent2.toLowerCase().includes(word));

// операнти поріваняння операнди завжди приводяться до числа напр '10'
// приводиться до числа



// const isEqual = ('10' > 5)
// console.log(isEqual);

// boolean false = Nan, пусте, underfinde, 0, null, false all ather is true
// $$ логічне і повертає перше на якому запитається або останій оперант
// логічне ||  або те або те
// лонічне ні ! не правда !true  (!5) результат = 5 це true, не 5це false



// if(умова, якщо вона true то виконується тіло, якщо false то не виконується)
// { тіло }

// if(якщо правда то викон тіло){тіло

// }else {в іншому випадку вик це тіло
    
// }else if{ в третьому випадку і т.д.

// }

// припивається на циклі першому яке підходить


// тернарний оператор, використовується в простих випадках де 2 умови
// const balance = 100;
// const massege = balance >=0 ? 'Positive balance' : 'Negative balance';

// console.log(massege);