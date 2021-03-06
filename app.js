const header = document.querySelector("header");
const headerTop = header.offsetTop;
const menuBtn = document.querySelector(".menu-button button");
const menuIcon = document.querySelector(".menu-button button img");
const naviGation = document.querySelector(".navigation");
const dropdown = document.querySelectorAll(".dropdown");
const dropdownMenu = document.querySelectorAll(".dropdown-menu");
const dropdownIcon = document.querySelectorAll(".dropdown-toggle img");

for (let i = 0; i < dropdown.length; i++) {
    if(window.innerWidth > 992){
        dropdown[i].addEventListener("mouseenter", function() {
            dropdown[i].classList.add("active");
        });
        dropdown[i].addEventListener("mouseleave", function() {
            dropdown[i].classList.remove("active");
        });
    }
}

for (let i = 0; i < dropdownMenu.length; i++) {
    dropdownMenu[i].addEventListener("mouseleave", function() {
        dropdownMenu[i].parentElement.classList.remove("active");
    });
}

for (let i = 0; i < dropdownIcon.length; i++) {
    if(window.innerWidth < 991){
        dropdownIcon[i].addEventListener("click", function() {
            dropdownIcon[i].parentElement.parentElement.classList.toggle("active");
        });
    }
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

function fixedNav(){
    if(window.scrollY > headerTop){
        document.body.style.paddingTop = header.offsetHeight + "px";
        document.body.classList.add("fixednav");
    }else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixednav");
    }
}

window.addEventListener("scroll", fixedNav);


