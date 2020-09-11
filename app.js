const menuBtn = document.querySelector(".menu-button button");
const menuIcon = document.querySelector(".menu-button button img");
const naviGation = document.querySelector(".navigation");
const dropdown = document.querySelectorAll(".dropdown");
const dropdownMenu = document.querySelectorAll(".dropdown-menu");
const dropdownIcon = document.querySelectorAll(".dropdown-toggle img");
console.log(dropdownIcon);

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
            console.log("hello");
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


