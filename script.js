
let navigation = document.getElementById("navigationblock")
let burgerbar = document.getElementById("burgericone")

burgerbar.addEventListener("click",function(){
    navigation.classList.toggle("active");
})