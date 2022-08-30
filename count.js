let counts = setInterval(updated, 40);
let upto = 0;
let width = 0;


function updated() {
    const count = document.getElementById('counter')
    const hr = document.getElementById('hr')
    ++upto;
    count.innerHTML = "LOADING" + upto + "%";
    hr.style.width = upto + "%";



    if (upto === 100) {
        clearInterval(counts);
    count.innerHTML = "DONE!";    
    }}