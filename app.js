const menuBtn = document.querySelector(".menu-button button");
const menuIcon = document.querySelector(".menu-button button img");
const naviGation = document.querySelector(".navigation");
let dropdownToggle = document.querySelectorAll(".dropdown-toggle");
let dropdownMenu = document.querySelectorAll(".dropdown-menu");

for (let i = 0; i < dropdownToggle.length; i++) {
    if(window.innerWidth > 992){
        dropdownToggle[i].addEventListener("mouseenter", function() {
            dropdownToggle[i].parentElement.classList.add("active");
        });
    }
    if(window.innerWidth < 991){
        dropdownToggle[i].addEventListener("click", function() {
            console.log("hello");
            dropdownToggle[i].parentElement.classList.toggle("active");
        });
    }
}

for (let i = 0; i < dropdownMenu.length; i++) {
    dropdownMenu[i].addEventListener("mouseleave", function() {
        dropdownMenu[i].parentElement.classList.remove("active");
    });
}

function openNavigation() {
    menuBtn.classList.toggle("active");
    if(menuBtn.classList.contains("active")){
        menuIcon.src = "./icon/x.svg";
    }
    else{
        menuIcon.src = "./icon/menu.svg";
    }
    naviGation.classList.toggle("active"); 
}
menuBtn.addEventListener("click", openNavigation);


