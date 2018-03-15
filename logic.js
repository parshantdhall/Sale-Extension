/*Logic to refresh the page unlesss it found the buy 
button to click*/

//textContent =  BUY NOW

var btn = document.getElementsByTagName("button");
var searchtext = " BUY NOW";

window.onload = function() {
    for(i=0;i<btn.length;i++){
        if(btn[i].textContent == searchtext){
            // alert(btn[i].textContent+
            //     "<-- ClassName -->"
            //     +btn[i].className+"<-- Type -->"+btn[i].type);
            document.getElementsByClassName('_2AkmmA _2Npkh4 _2kuvG8 _7UHT_c')[2].click();
    }
}




// for(i=0;i<btn.length;i++)
// {
//     alert(btn.length);
// }
