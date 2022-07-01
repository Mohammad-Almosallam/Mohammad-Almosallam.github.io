const menuBtn = document.querySelector(".menu-btn")
const closeMenu = document.querySelector(".close-menu")
const nav = document.querySelector("ul")
menuBtn.addEventListener("click",()=>{
    nav.classList.add("active")
})
closeMenu.addEventListener("click", ()=>{
    nav.classList.remove("active")
})