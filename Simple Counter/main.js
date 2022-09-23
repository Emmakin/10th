const btnE1 = document.getElementById("btn");
const num_spaceE1 = document.getElementById("num_space");


let count = 0;

btnE1.addEventListener("click", function UpdateNum(){
    count +=1;
     num_spaceE1.textContent = count;
});


