const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// 1. a <p> with red text that says “Hey I’m red!”
const para1 = document.createElement('p');
para1.style.color = 'red';
para1.textContent = 'Hey I’m red';

container.appendChild(para1);

// 2. an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = 'I’m a blue h3!';

container.appendChild(h3);

/*
3. a <div> with a black border and pink background color with the following elements inside of it:
    another <h1> that says “I’m in a div”
    a <p> that says “ME TOO!”
    Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/
const pinkDiv = document.createElement('div');
pinkDiv.style.cssText = 'border: 1px solid black; background-color: pink;';

const h1 = document.createElement('h1');
h1.textContent = 'I’m in a div';

const para2 = document.createElement('p');
para2.textContent = 'ME TOO!';

pinkDiv.appendChild(h1);
pinkDiv.appendChild(para2);
container.appendChild(pinkDiv);