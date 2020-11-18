let designWidth = 375;
let remPx = 100;
let scale = window.innerWidth / designWidth;

document.documentElement.style.fontSize = scale * remPx + 'px';