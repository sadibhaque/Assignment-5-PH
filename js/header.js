function getElementById (id) {
    return document.getElementById(id);
}
function getInputById (id) {
    return document.getElementById(id).value;
}
function getInnerText (id) {
    return document.getElementById(id).innerText;
}
function setInnerTExt (id, text) {
    document.getElementById(id).innerText = text;
}
function setDisplay (id, status) {
    document.getElementById(id).style.display = 'status';
}


// start
getElementById('discover').addEventListener('click', function () {
    window.location.href = './blogs.html';
})


document.getElementById('bg-change').addEventListener('click', function(event){
    event.preventDefault();
    
    const randomColor = 'hsl(' + Math.random() * 360 + ', 100%, 95%)';
    getElementById('body').style.backgroundColor = randomColor;
})