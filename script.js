const introButton = document.querySelector('#introButton')
const nameInput = document.querySelector('#nameInput')
const introDiv = document.querySelector('.introduction')



introButton.addEventListener('click', () =>{

    let name = nameInput.value;
    console.log(name);
    let introNode = document.createTextNode(`Hello ${name}, welcome to my site, hope you have a good time finding out a bit about me!`)
    let newDiv = document.createElement('div');
    if (name == '') {
        alert('Please Introduce yourself!')
    }
    else{ 
    newDiv.appendChild(introNode);
    introDiv.appendChild(newDiv);
    introButton.disabled = true;
    }
})
