var navBtn = document.getElementById('navBtn');
var pagesList = document.getElementsByClassName('pagesList')[0];

navBtn.addEventListener('click', listToggle)

function listToggle(){
    pagesList.classList.toggle('openList');
}