const elements = document.querySelectorAll('li');

elements.forEach (e => {
    var size = e.getElementsByTagName('LI').length
    if(size > 0){
        e.firstChild.nodeValue += `(${size})`;
    }
});
