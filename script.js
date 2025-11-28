let h2 = document.querySelector('h2');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const text = h2.innerText

let iterations = 0

h2.addEventListener('mouseenter', () => {
    if(iterations>char)
    hi = setInterval(() =>{
        const str = text.split('').map((char,index) => {
            return characters.split('')[Math.floor(Math.random() * 63)]
        }).join('')

        h2.innerText = str
        
    },100)
})

h2.addEventListener('mouseleave', () => {
    h2.innerText = text
    clearInterval(hi)
})