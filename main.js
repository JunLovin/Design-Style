const fontsName = ['Varela Round', 'Anton', 'Bebas Neue', 'Playwrite NL Guides', 'Oswald', 'Poppins', 'Montserrat', 'Space Mono', 'monospace', 'Helvetica', 'serif', 'cursive', 'Cherry Bomb One', 'Fascinate Inline', 'Monoton', 'Malle', 'Permanent Marker', 'Badeen Display', 'Noto Sans JP', 'Sarina', 'Pixelify Sans', 'Limelight', 'Fascinate', 'Caprasimo', 'Ballet', 'Asset'];
const content = document.querySelectorAll('.unique-style');
const body = document.body;
const fontBox = document.getElementById('font-box');

const item1 = content[0]
const item2 = content[1]
const item3 = content[2]
const item4 = content[3]

console.log(`${item1} \n${item2} \n${item3} \n${item4}`)


let random = () => {
    let r = Math.floor(Math.random() * fontsName.length)
    let randomValue = fontsName[r]
    item1.style.fontFamily = fontsName[r]
    item2.style.fontFamily = fontsName[r]
    item3.style.fontFamily = fontsName[r]
    item4.style.fontFamily = fontsName[r]
    return randomValue
}

fontBox.addEventListener('wheel', random)