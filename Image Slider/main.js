let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

let picArray = ['./image/1.jpg','./image/2.jpg', './image/3.jpg', './image/4.jpg', './image/5.jpg', './image/6.jpg', './image/7.jpg'];

let i = 0;

nextBtn.addEventListener('click', function() {
    i++;
    if(i > picArray.length -1){
        i = 0
    }
    document.getElementById('image').src = picArray[i];
});


prevBtn.addEventListener('click', function() {
    i--;
    if(i< picArray.length - 7){
        i = picArray.length -1
    }
    document.getElementById('image').src = picArray[i];
});


