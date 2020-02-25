import readLocalGIF from './es/index.js';

var upload = document.getElementById('upload');
var description = document.getElementById('description');
upload.addEventListener('change', (event) => {
    const files = event.target.files;
    const file = files[0];
    readLocalGIF(file).then((res) => {
        console.log(res);
        description.innerHTML = `width:${res.width}, <br/>height:${res.height}, <br/>ratio:${res.ratio}, <br/>duration:${res.duration}ms, <br/>frame length:${res.length}`
    });
}, false);