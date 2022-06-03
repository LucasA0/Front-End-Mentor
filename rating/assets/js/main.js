const homePage = document.querySelector('.background')
const thanksPage = document.querySelector('.second-background')
const btnSub = document.querySelector('.sub')
const rates = document.querySelectorAll('.rate')
const rated = document.getElementById('rated')
let rateSelect = null
let result = '' 

btnSub.addEventListener('click', () => {
    if(!rateSelect) return
    rated.textContent = result
    changePage(homePage, thanksPage, 'block')
})

rates.forEach((rate, index, array) => {
    rate.addEventListener('click', () => {
        rate.classList.remove('rate')
        rate.classList.add('rate-selected')
        rateSelect = document.querySelector('.rate-selected')
        btnSub.classList.remove('sub-disabled')
        btnSub.removeAttribute('disabled')
        result = rate.textContent
        array.forEach( (rate2, index2, array) => {
            if(index2 === index) return
            rate2.classList.remove('rate-selected')
            rate2.classList.add('rate')
        })
    })
})

function changePage(currentPage, nextPage, display) {
    currentPage.style.animation = 'fadeOut .3s'
    setTimeout(() => {
        nextPage.style.display = display
        currentPage = currentPage.style.display = 'none'
    }, 250)
    
    nextPage.style.animation = 'fadeIn .3s'
}