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
