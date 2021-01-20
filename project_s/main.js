var myNavBar = document.querySelector('#navbar li');

myNavBar.addEventListener('mouseover', navHoverOn, false);
myNavBar.addEventListener('mouseout', navHoverOff, false);

function navHoverOn()
{
    myNavBar.setAttribute('style', 'color:black;', 'background-color:green;',)
}

function navHoverOff()
{
    myNavBar.setAttribute('style', 'background-color:grey;')
}
