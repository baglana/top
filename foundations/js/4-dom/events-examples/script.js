const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});


function alertFunction() {
  alert("YAY! YOU DID IT!");
}

const btn3 = document.querySelector('#btn3');

// METHOD 2
// btn3.onclick = alertFunction;

// METHOD 3
btn3.addEventListener('click', alertFunction);

btn3.addEventListener('click', function (e) {
  console.log(e);
});

btn3.addEventListener('click', function (e) {
  console.log(e.target);
});

btn3.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

// Attaching listeners to groups of nodes

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});