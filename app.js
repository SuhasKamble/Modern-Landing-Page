const navLinks = document.querySelector('.navLinks')
const burger = document.querySelector('.burger')
const bars = document.querySelector('.fa-bars')
const links = document.querySelectorAll('li')

burger.addEventListener('click',()=>{
    navLinks.classList.toggle('show')
    bars.classList.toggle('fa-times')
})


links.forEach(element => {
    element.addEventListener('click',()=>{
        navLinks.classList.remove('show')
        bars.classList.remove('fa-times')
    })
});