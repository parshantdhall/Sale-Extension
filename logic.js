/*Logic to refresh the page unlesss it found the buy 
button to click*/

//textContent =  BUY NOW

var btn = document.getElementsByTagName("button");
var searchtext = " BUY NOW";


/*
Below code's logic -:
On loading thhe page the function will search for the buy button on the page
by going through every button on the page comparing their name, and if the 
button found it will show the alert which gives info about the button.
*/

window.onload = function() {
    for(i=0;i<btn.length;i++){
        if(btn[i].textContent == searchtext){
            alert(btn[i].textContent+
                "  <-- ClassName -->  "
                +btn[i].className+"  <-- Type -->  "+btn[i].type);
    }
}

}



