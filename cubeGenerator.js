const roll = document.getElementById('roll');
const box = document.getElementById('box');
const body = document.body;
let color = ["darkcyan", "aquamarine", "cornflowerblue", "bisque", "grey", "chocolate", "cadetblue", "deepskyblue", "dodgerblue", "darksalmon"];

//Click to roll function
roll.onclick = () => {
    box.style.transition = 'transform 1.5s';
    box.style.transform = 'rotate(1080deg)';
    rollAgain();
    faceGeneration();
}

//roll again function
function rollAgain(){
    box.addEventListener('transitionend', function restart() {
        box.style.transition = 'none';
        box.style.transform = 'rotate(0deg)';
        box.removeEventListener('transitionend', restart);
    });

    const changeColor = Math.floor(Math.random() * color.length);
    body.style.backgroundColor = color[changeColor];
}

//face generation function
function faceGeneration(){
    const faces = document.querySelectorAll('.face');
    const faceValue = Math.floor(Math.random() * faces.length);

    for (let i = 0; i < faces.length; i++) {
        faces[i].style.display = 'none';
    }
    faces[faceValue].style.display = 'block';
}