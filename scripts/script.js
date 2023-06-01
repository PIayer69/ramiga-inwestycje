body = document.body;
burger = document.querySelector(".burger-menu");
burger.addEventListener("click", toggleMenu);
sidebar = document.querySelector(".sidebar");
sidebarLinks = Array.from(sidebar.children[0].children);
console.log(sidebar.children[0].children)
sidebarLinks.forEach(link => {
    console.log(link.innerText)
    link.addEventListener("click", toggleMenu);
})


function toggleMenu(){
    burger.style = "position: relative; z-index: 1;"
    if(sidebar.style.display == "" || sidebar.style.display == "none"){
        body.style.overflow = "hidden";
        sidebar.style.display = "flex";
        bars = Array.from(burger.children)
        index = 0;
        for(let bar of bars){
            if(!index) bar.style = "transform: translateY(7px) rotate(45deg)";
            else if(index == 2) bar.style = "transform: translateY(-7px) rotate(45deg)";
            else bar.style = "transform: rotate(135deg)";
            index++;
        }
    }
    else{
        body.style.overflow = "";
        sidebar.style.display = "none";
        for(let bar of bars){
            bar.style = "";
        }
    }
}