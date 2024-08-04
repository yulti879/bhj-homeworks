const image = document.getElementById('cookie');
const clicker__counter = document.getElementById('clicker__counter');
const clicker__rapidity = document.getElementById('clicker__rapidity');
let counter = 0;
let rapidity = 0;
let firstTime = new Date ().getTime ();
image.onclick = function() {
    counter++;    
    if (counter % 2 != 0) {
        image.width = 240;
    } else {
        image.width = 200;
    };
    clicker__counter.textContent = counter;
    let newTime = new Date ().getTime ();
    rapidity = (1000 * counter / (newTime - firstTime)).toFixed(2);
    clicker__rapidity.textContent = rapidity;        
};