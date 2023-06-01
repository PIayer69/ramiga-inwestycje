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
let flatActive = null;
let infoOptions = document.querySelector(".info");
let infoDivs = Array.from(infoOptions.children);
infoDivs.shift();
let infoActive = null;
let flatIDContainer = document.querySelector("#m_id");

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
                    infoActive = null;
                }
            }
            else{
                if(infoActive != null){
                    infoDivs[infoActive].classList.add("hidden");
                }
                infoOptions.classList.remove("hidden");
                infoDivs[event.target.id-1].classList.remove("hidden");
                infoActive = event.target.id - 1;
                flatIDContainer.innerHTML = infoActive + 1;

            }
        })
    })
})