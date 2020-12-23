const container = document.querySelector('#container');

//content div
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//para
const para = document.createElement('p');
para.textContent = "Hey I’m red!";
para.style.color = "red";

container.appendChild(para);

//h3
const h3 = document.createElement('h3');
h3.textContent = "I’m a blue h3!";
h3.style.cssText = "color: blue;";

container.appendChild(h3);

//new div
const div = document.createElement('div');
div.setAttribute('style', 'border-color: black; background-color: pink;');

//child h1 or parent div
const h1 = document.createElement('h1');
h1.textContent = "I'm a div";

div.appendChild(h1);

//child para of parent div
const pdiv = document.createElement('pdiv');
pdiv.textContent = "ME TOO!";

div.appendChild(pdiv);

//append new div to container
container.appendChild(div);