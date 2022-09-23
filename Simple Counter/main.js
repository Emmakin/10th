const btnE1 = document.querySelector("btn");
const num_spaceE1 = document.querySelector("num_space");


let count = 0


function UpdateNum(){
    count +=1;
    num_spaceE1.textContent = count;

}