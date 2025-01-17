let images = [
    "parter.png",
    "pietro1.png",
    "pietro2.png"
]

let imgContainer = document.querySelector("#img_container");
let floorOptions = document.querySelector("#floor")
let flatOptions = document.querySelector("#flat");
let flatButtons = Array.from(flatOptions.children);
flatButtons.shift();
let buttonActive = null;
let flatActive = null;
let infoOptions = document.querySelector(".info");
let infoDivs = Array.from(infoOptions.children);
infoDivs.shift();
let infoActive = null;
let flatIDContainer = document.querySelector("#m_id");

let imageOverlays = Array.from(document.querySelector(".overlay").children);

let buttons = Array.from(document.querySelector("#floor_btns").children);
buttons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        buttons[0].classList.remove("hidden");
        floorOptions.classList.add("hidden");
        flatOptions.classList.remove("hidden");
        flatButtons[event.target.id].classList.remove("hidden");
        flatActive = event.target.id;
        imgContainer.setAttribute("src", "images/" + images[event.target.id])
    })
})

flatButtons.forEach(btnSet => {
    buttons = Array.from(btnSet.children);
    buttons.forEach(btn => {
        btn.addEventListener("click", event => {
            if(event.target.id == "back"){
                flatButtons[flatActive].classList.add("hidden");
                flatOptions.classList.add("hidden");
                floorOptions.classList.remove("hidden")
                imgContainer.setAttribute("src", "images/Elewacja ogrodowa.jpg")
                flatActive = null;
                if(infoActive != null){
                    infoDivs[infoActive].classList.add("hidden");
                    infoOptions.classList.add("hidden");
                    toggleClass(infoActive, "selected")
                    buttonActive.classList.toggle("selected")
                    infoActive = null;
                }
            }
            else{
                if(infoActive != null){
                    infoDivs[infoActive].classList.add("hidden");
                    toggleClass(infoActive, "selected")
                    buttonActive.classList.toggle("selected")
                }
                buttonActive = btn;
                btn.classList.toggle("selected")
                infoOptions.classList.remove("hidden");
                infoDivs[event.target.id-1].classList.remove("hidden");
                infoActive = event.target.id - 1;
                toggleClass(infoActive, "selected")
                flatIDContainer.innerHTML = infoActive + 1;

            }
        })
        if(btn.id != "back"){
            btn.addEventListener('mouseenter', event => {toggleClass(event.target.id-1, "hover")})
            btn.addEventListener('mouseleave', event => {toggleClass(event.target.id-1, "hover")})
        }
    })
})

function toggleClass(id, className){
    let l = [2, 0, 1, 3];
    imageOverlays[l[(id+1)%4]].classList.toggle(className);
}
