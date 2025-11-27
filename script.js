let h2 = document.querySelector('h2');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const text = h2.innerText

h2.addEventListener('mouseenter', () => {
    setInterval(() =>{
        const str = text.split('').map((char,index) => {
            return characters.split('')[Math.floor(Math.random() * 63)]
        }).join('')

        h2.innerText = str
        
    },100)
})