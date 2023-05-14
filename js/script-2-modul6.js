// Події

// addEventListener()

// const button = document.querySelector('.js-button');
// // console.dir(button);

// button.addEventListener('click', onClick);

//  function onClick(event) {
//     console.dir(event);
// };

// event.currentTarget

const button = document.querySelector('.js-button');
// console.dir(button);

button.addEventListener('click', onClick);

 function onClick(event) {
    console.log(event.currentTaget);
};
