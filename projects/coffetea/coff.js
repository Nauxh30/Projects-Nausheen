var a=document.getElementById("log-sheet")
var b=document.getElementById("parent-register-sheet")
var c = document.getElementById("whole-parent-sheet")
var d = document.getElementById("about-sheet")
var e = document.getElementById("grid-sheet")
var f = document.getElementById("stores-sheet")

function view(){
    a.style.display="block"
    c.style.display="none"
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";


}
function closeview(){
    a.style.display="none"
}
function openreg(){
    b.style.display="block"
    a.style.display="none"

}
function closereg(){
    b.style.display="none"
    a.style.display="block"
}
function openhome(){
    c.style.display="block"
    d.style.display = "none";
    e.style.display = "none"; // Make sure CSS sets this to grid layout
    a.style.display = "none";
    b.style.display = "none";
        f.style.display = "none";

   
}



function openabout() {
    d.style.display = "block";
    e.style.display = "grid"; // Make sure CSS sets this to grid layout
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    f.style.display = "none";

}
function openstores() {
  
  document.getElementById("stores-sheet").style.display = "block";

 
  document.getElementById("whole-parent-sheet").style.display = "none";
  document.getElementById("about-sheet").style.display = "none";
  document.getElementById("grid-sheet").style.display = "none";
  document.getElementById("log-sheet").style.display = "none";
  document.getElementById("parent-register-sheet").style.display = "none";
}
