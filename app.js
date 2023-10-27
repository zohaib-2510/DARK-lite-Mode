var like = document.getElementById("like")
var read = document.getElementById("read")

var toggle = document.getElementById("toogle")
var a = 0
toggle.addEventListener("click",()=>{
if(a==0){
    toggle.style.backgroundColor="white"
    toggle.style.color="black"
    toggle.innerText="Light"
var body = document.getElementById("body")
var nav1 = document.getElementById("navlink1").style.color="white"
var nav2 = document.getElementById("navlink2").style.color="white"
var nav3 = document.getElementById("navlink3").style.color="white"
var bhbh= document.querySelector("kio")
var hb = document.querySelector("kio1")
like.style.border="2.9px solid white"
read.style.border="2.9px solid white"
like.style.color="white"
read.style.color="white"
var pp = document.getElementById("ph").style.color="white"
var ppp = document.getElementById("phh").style.color="white"
var pppp = document.getElementById("readp").style.color="white"
// nav1
// nav2.style.color="white"
// nav3
body.style.backgroundColor="black"
a=1
}
else{
    toggle.style.backgroundColor="black"
    toggle.style.color="white"
    toggle.innerText="Dark"
    var body = document.getElementById("body")
    body.style.backgroundColor="white"
    var nav1 = document.getElementById("navlink1").style.color="black"
var nav2 = document.getElementById("navlink2").style.color="black"
var nav3 = document.getElementById("navlink3").style.color="black"
like.style.border="2.9px solid black"
read.style.border="2.9px solid black"
like.style.color="black"
read.style.color="black"
var pp = document.getElementById("ph").style.color="black"
var ppp = document.getElementById("phh").style.color="black"
var pppp = document.getElementById("readp").style.color="black"
        a=0
    }
})      
read.addEventListener("click",()=>{
   document.getElementById("readp").innerHTML="ipsum dolor sit amet consectetur res nobis!"
   read.style.display="none"
})
like.addEventListener("click",()=>{
   var heart = document.getElementById("i")
heart.style.opacity=1
setTimeout(function(){
    i.style.opacity=0
like.style.display="none"
},1000)
})
