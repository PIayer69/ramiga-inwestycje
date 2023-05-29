
body = document.body;
burger = document.querySelector(".burger-menu");
burgerBars = burger.querySelectors
cross = document.querySelector(".cross");
burger.addEventListener("click", toggleMenu);
// cross.addEventListener("click", toggleMenu);
sidebar = document.querySelector(".sidebar");

function toggleMenu(){
    burger.style = "position: relative; z-index: 1;"
    if(sidebar.style.display == "" || sidebar.style.display == "none"){
        body.style.overflow = "hidden";
        sidebar.style = "right: 0";
        sidebar.style.display = "flex";
        console.log(burger.children)
        bars = Array.from(burger.children)
        bars.forEach(bar => {
            bar.style = "transform: rotate(140deg)";
        });
        
        
    }
    else{
        body.style.overflow = "overflow-x";
        sidebar.style = "right: -500px";
        sidebar.style.display = "none";
    }
}