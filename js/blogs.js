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
getElementById('back-to-desk').addEventListener('click', function () {
    window.location.href = './index.html';
})