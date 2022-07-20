// ex 1 DOM - fixed background color 

function changeBackground(color) {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",function() { changeBackground('#FF69B4') });

 // random colors

function randomColorHex()
{
    let rndRed = parseInt(Math.random() * 256);
    let rndGreen = parseInt(Math.random() * 256);
    let rndBlue = parseInt(Math.random() * 256);
    return `#${rndRed.toString(16)}${rndGreen.toString(16)}${rndBlue.toString(16)}`;
}
document.body.style.backgroundColor = randomColorHex();

// display all children elements 

 for(let i = 0; i < document.body.children.length; i++)
 {
     if(i == 1)
     {
         for(let child of document.body.children[i].childNodes)
         {
             console.log(child);
         }
         break;
     }
 }