window.onload = function() {
    // start
    let number = document.getElementById('change_integer');
    console.log(number.innerText)
    // let firstHeading = document.createElement('h2');
    // firstHeading.innerText = 'This is an h2 created with JS';
    // firstHeading.classList.add('js-header');

    // starterDiv.appendChild(firstHeading);

    // let secondHeading = document.createElement('h2');
    // secondHeading.innerText = 'This is anoter h2 created with JS';
    // secondHeading.classList.add('js-header');
    // secondHeading.id = 'second-h2';

    // starterDiv.appendChild(secondHeading);

    // // end
}



var number = 1

function PlusOne(){
//    console.log("PlusOne Function")
   var count = document.getElementById('change_integer');
   number++;
   count.innerHTML = number;
}

var number = 1

function DeductOne(){
    // console.log("DeductOne Function")
    var count = document.getElementById('change_integer');
    number--;
    count.innerHTML = number;
}

// function resetColour() {
//     document.body.style.backgroundColor = '#FCE166';
// }

// function toggleLightbulb() {
//     // start
//     let lightbulb = document.getElementById('light');
//     lightbulb.classList.toggle('on');
//     // end
// }
