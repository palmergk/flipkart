let dropdown = false
let signInDrops = document.querySelector('.sign-in-drops')
let signIn = document.querySelector('.sign-in')
let sgiBg = document.querySelector('.sgi-bg')
let angleDown = document.querySelector('.fa-angle-down')
document.querySelector('.sign-in-all').addEventListener('mouseover', () => {
    if(dropdown = true){
        signInDrops.style.display = 'flex'
        sgiBg.style.display = 'block'
        signIn.style.color = 'white'
        angleDown.style.transform = 'rotate(180deg)'
        angleDown.style.transition = 'all 0.3s ease-in-out'
    }
    else {
        signInDrops.style.display = 'none'
        sgiBg.style.display = 'none'
        signIn.style.color = 'rgb(66, 66, 66)'
    }
})
document.querySelector('.sign-in-all').addEventListener('mouseout', () => {
    if(dropdown === true){
        dropdown = false
        signInDrops.style.display = 'none'
        sgiBg.style.display = 'none'
        signIn.style.color = 'rgb(66, 66, 66)'
        angleDown.style.transform = 'rotate(0deg)'
    }
})

let dropdowntwo = false
let colonDrops = document.querySelector('.colon-drops')
let colonBg = document.querySelector('.colon-bg')
document.querySelector('.colon-all').addEventListener('mouseover', () => {
    if(dropdowntwo = true){
        colonDrops.style.display = 'flex'
        colonBg.style.display = 'block'
    }
    else {
        colonDrops.style.display = 'none'
        colonBg.style.display = 'none'
    }
})
document.querySelector('.colon-all').addEventListener('mouseout', () => {
    if(dropdowntwo === true){
        dropdowntwo = false
        colonDrops.style.display = 'none'
        colonBg.style.display = 'none'
    }
})


let frightBtn = document.querySelector('.f-right')
let fleftBtn = document.querySelector('.f-left')
let advertImages = document.querySelector('.moving-advert-images')
let index = 0
let boxIndex = 0
function slideFunction(){
    let timer = setInterval(() => {
            if (index < 600) {
                index += 100
                for(let i = 0; i< maw.length; i++){
                    maw[i].style.display = 'block'
                    advertImages.style.transition = 'all 0.6s ease-in-out'
                }
                movingOntop.style.transition = 'all 0.6s ease-in-out'
            }
            else {
                index = 0
                for(let i = 0; i< maw.length; i++){
                    maw[i].style.display = 'none'
                    advertImages.style.transition = 'all 0.1s ease-in-out'
                }
                movingOntop.style.transition = 'all 0.1s ease-in-out'
            }
            advertImages.style.transform = `translateX(-${index}%)`
            movingOntop.style.transform =  `translateX(${index}%)`
    }, 4000)
}
window.addEventListener('load', slideFunction)
let maw = document.getElementsByClassName('maw')
let movingOntop = document.querySelector('.moving-dd-ontop')
frightBtn.addEventListener('click', () => {
    if(index < 600) {
        for(let i = 0; i < maw.length; i++){
            maw[i].style.display = 'block'
            advertImages.style.transition = 'all 0.6s ease-in-out'
        }
        index += 100
        movingOntop.style.transition = 'all 0.6s ease-in-out'
    }else {
        for(let i = 0; i< maw.length; i++){
            maw[i].style.display = 'none'
            advertImages.style.transition = 'all 0.1s ease-in-out'
        }
        index = 0
        movingOntop.style.transition = 'all 0.1s ease-in-out'
    }
    movingOntop.style.transform =  `translateX(${index}%)`
    advertImages.style.transform = `translateX(-${index}%)`
})
fleftBtn.addEventListener('click', () => {
    if(index > 0) {
        index -= 100
    }else {
        index = 0
    }
    advertImages.style.transform = `translateX(-${index}%)`
    movingOntop.style.transform =  `translateX(${index}%)`
})


let slideDivs = document.querySelector('.slide-divs')
let rightBtn = document.querySelector('.right')
let leftBtn = document.querySelector('.left')
let clicked = false
rightBtn.addEventListener('click', () => {
    if(clicked = true){
        rightBtn.style.display = 'none'
        leftBtn.style.display = 'flex'
        slideDivs.style.transform = 'translateX(-620px)'
    }
})
leftBtn.addEventListener('click', () => {
    if(clicked = true){
        rightBtn.style.display = 'flex'
        leftBtn.style.display = 'none'
        slideDivs.style.transform = 'translateX(0px)'
    }
})