const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// 1. a <p> with red text that says “Hey I’m red!”
const para = document.createElement('p');
para.style.color = 'red';
para.textContent = 'Hey I’m red';

container.appendChild(para);

// 2. an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = 'I’m a blue h3!';

container.appendChild(h3);
