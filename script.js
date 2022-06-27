
var randColor = ""
var img = ""
function addImgs() 
{   
   
    let r = (Math.random() + 1).toString(36).substring(8);

    generateColor()

    img = "https://via.placeholder.com/80x80/" + randColor;
    
    generateColor()

    img = img + "/" +  randColor + "?text=" + r;

    console.log(img);

}

function generateColor() 

{  
    let maxVal = 0xFFFFFF; // 16777215
    var randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randColor = randomNumber.toString(16);
}

function paint() 
{
    
    for (let i = 0; i < document.getElementsByClassName("pfp").length; i++) {
    
        addImgs()
        pfp =  document.getElementsByClassName("pfp")[i]

       pfp.style.backgroundImage = "url(" +img +")";
    
    }
    
    for (let i = 0; i < document.getElementsByClassName("server").length; i++) {
    
        addImgs()
        pfp =  document.getElementsByClassName("server")[i]

       pfp.style.backgroundImage = "url(" +img +")";
    
    }
    
    
    
}



paint();