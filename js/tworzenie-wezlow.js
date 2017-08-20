var istniejacyWezel = document.getElementById('parFirst').children[3];
console.log(istniejacyWezel);

var newElement = document.createElement('p');

var newElementContent = document.createTextNode('to jest nowy paragraf');

newElement.appendChild(newElementContent);

istniejacyWezel.appendChild(newElement);
