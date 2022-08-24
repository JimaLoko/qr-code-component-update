const btn1 = document.querySelector('.colorful')
const btn2 = document.querySelector('.bw')
const body = document.querySelector('body')
const tg1 = document.querySelector('.tg-colorful')
const tg2 = document.querySelector('.tg-bw')

btn1.addEventListener('click', () => {

    if(body.classList.contains("theme-2")) {
        body.classList.remove('theme-2')
        btn2.children[0].classList.remove('arrow-rotate')
        btn2.parentElement.classList.remove('theme-active')
        btn2.classList.remove('btn-active')
        tg2.classList.remove("tg2")
    }
    btn1.children[0].classList.toggle('arrow-rotate')
    btn1.parentElement.classList.toggle('theme-active')
    btn1.classList.add('btn-active')
    tg1.classList.toggle("tg1")
    tg2.textContent = 'off'
    if(tg1.textContent == 'on') {
        tg1.textContent = 'off'
    }else {
        tg1.textContent = 'on'
    }
    body.classList.toggle('theme-1')
})

btn2.addEventListener('click', () => {
    
    if(body.classList.contains("theme-1")) {
        body.classList.remove('theme-1')
        btn1.children[0].classList.remove('arrow-rotate')
        btn1.parentElement.classList.remove('theme-active')
        btn1.classList.remove('btn-active')
        tg1.classList.remove("tg1")
    }
    btn2.children[0].classList.toggle('arrow-rotate')
    btn2.parentElement.classList.toggle('theme-active')
    btn2.classList.add('btn-active')
    tg2.classList.toggle("tg2")
    tg1.textContent = 'off'
    if(tg2.textContent == 'on') {
        tg2.textContent = 'off'
    }else {
        tg2.textContent = 'on'
    }
    body.classList.toggle('theme-2')
})