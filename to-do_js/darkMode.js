const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style) 

const initialColor = {
    bgg: getStyle(html, "--bgg"),
    bgTitle: getStyle(html, "--bg-title"),
    bgBnt: getStyle(html, "--bg-bnt"),
    bgLi: getStyle(html, "--bg-li"),
}

const darkMode = {
    bg: '#1d1c1c',
    bgTitle: '#EBEBEB',
    bgBnt:'#1d1c1c',    
    bgLi: '#cac2c2'
}

const transformKey = key => 
    "--" + key.replace(/([A-Z]))/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map( key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColor)
})