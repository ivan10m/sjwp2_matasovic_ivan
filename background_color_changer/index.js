document.querySelector("button").addEventListener("click", function(){
    let color = "#" + Math.floor(Math.random()*0xffffff).toString(16);
    document.body.style.background = color;
});