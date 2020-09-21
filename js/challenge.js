document.addEventListener("DOMContentLoaded", function(){
    let counter = document.getElementById("counter");
    setInterval(countFun, 1000);

    function countFun() {
        counter.innerHTML = parseInt(counter.innerHTML) +1;
    }























});
