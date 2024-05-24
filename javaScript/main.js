let btn = document.querySelector("#btn")
let header = document.querySelector("#header")

window.addEventListener("scroll", () => {
    header.classList.toggle('active', window.scrollY > 0)
})

window.onscroll = () => {
    if(scrollY >= 400){
        btn.style.display = 'block'
    }else{
        btn.style.display = 'none'
    }
}
btn.onclick = function (){
    scroll({
        top:0,
        behavior:'smooth'
    })
}