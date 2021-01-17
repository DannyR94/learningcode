console.log(window);


// Single Element Selectors
document.getElementById('my-form');
document.querySelector('.container');
console.log(document.getElementById('.item.firstChild.nodeValue'));

// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
// The . is not needed since it only gets classes
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

