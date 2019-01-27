document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'bu')) {
        // .bu clicked
        // Do your thing
    } else if (hasClass(e.target, 'test')) {
        // .test clicked
        // Do your other thing
    }
}, false);
//where hasClass is

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}


//Using more modern JS, hasClass can be implemented as:

function hasClass(elem, className) {
    return elem.classList.contains(className);
}