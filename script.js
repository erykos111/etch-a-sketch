//Kick-start the function onload of the page
window.onload = function create_grid(){
    //Find the main div
    const main_div = document.querySelector('#main')

    //Repeat 16 times to create 16 x 16 grid
    for(let i = 0; i < 16; i++){

        //Repeat 16 times
        for (let o = 0; o < 16; o++){

    //Create new div element
    let new_div = document.createElement('div');

    //Set id to the div
    new_div.setAttribute('id', 'lala')
    new_div.setAttribute("class", "twojstary")

    //Add the text for testing
    //new_div.innerText = o;

    //Append new div to main div element
    main_div.appendChild(new_div);
    }}}


const parent = document.querySelector("#main");
parent.addEventListener('mouseover', event => {
    if(event.target.className === 'twojstary'){
        event.target.style.backgroundColor = "black";
    }})




const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    reset_grid();
})



function reset_grid(){
    let list_of_divs = document.querySelectorAll('#lala')
    for (let i = 0; i < list_of_divs.length; i++){
    list_of_divs[i].style.backgroundColor = "white";
}
}
