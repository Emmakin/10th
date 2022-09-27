let feet = document.getElementById('feet');
let inches = document.getElementById('inches');

feet.addEventListener('input', function(){
    let i = feet.value;
    let j = i * 12;
    inches.value = j;
});


inches.addEventListener('input', function(){
    let i = inches.value;
    let j = i / 12;
    feet.value = j;
});

if(!Number.isInteger(inches.value)){
    j.tofixed(2);
}