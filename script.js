//Kick-start the function onload of the page
window.onload = function create_grid(){
    //Find the main div
    const main_div = document.querySelector('#main')

    //Repeat 16 times
    for(let i = 0; i < 16; i++){

        //Repeat 16 times
        for (let o = 0; o < 16; o++){

    //Create new div element
    let new_div = document.createElement('div');

    //Set id to the div
    new_div.setAttribute('id', 'lala')

    //Add the text for testing
    new_div.innerText = o;

    //Append new div to main div element
    main_div.appendChild(new_div);
    }
}
}



