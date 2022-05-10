

inc.addEventListener('click', function() {
    document.getElementById("Number").innerHTML = 1 + Number(document.getElementById("Number").innerHTML);;   
})

dec.addEventListener('click', function() {
    document.getElementById("Number").innerHTML =  Number(document.getElementById("Number").innerHTML) - 1;;   
})

reset.addEventListener('click', function() {
    document.getElementById("Number").innerHTML = 0;   
})