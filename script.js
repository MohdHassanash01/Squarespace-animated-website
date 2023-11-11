let main = document.querySelector(".page1")

let cursor = document.querySelector(".cursor")

main.addEventListener('mousemove',function(dets){
    cursor.style.left = dets.x +"px"
    cursor.style.top = dets.y +"px"

})


//+++++++++++++++++++++++++++++++++++++

let login = document.querySelector(".log")

let count = 0
login.addEventListener('click',function(){
    if (count==0) {
        login.innerHTML ='Log Out'
        login.style.fontSize = '1.2vw'
    alert('Log Out')

    count ++;
    }else{
        login.innerHTML = 'LOG IN'
        count--;
    }
})


//+++++++++++++++++++++++++++++++++++++++

let tl = gsap.timeline()
tl.from(".nav img, .nav h3, .nav h5, .nav button",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})

tl.from(".content h1",{
    y:200,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})

tl.from(".content #left-top",{
    opacity:0,
    scale:0
})

tl.from("#right-bottom",{
    x:100,
    duration:1,
    opacity:0,
   
})

tl.from(".down",{
    y:30,
    duration:0.5,
    repeat:-1,
    yoyo:true,
    opacity:0
})

// page 2


let elem = document.querySelectorAll(".elem")
let image = document.querySelector(".elem img")

console.log(elem);

// elem.addEventListener("mousemove",function(dets){
//     image.style.left = dets.x+"px"
//     image.style.top = dets.y+"px"

// })


// elem.addEventListener("mouseenter",function(dets){
//   image.style.opacity = 1
// })

// elem.addEventListener("mouseleave",function(dets){
//     image.style.opacity = 0
//   })




elem.forEach(function(val){

val.addEventListener("mouseenter",function(dets){
  val.childNodes[3].style.opacity = 1
})

val.addEventListener("mouseleave",function(dets){
    val.childNodes[3].style.opacity = 0
})


val.addEventListener("mousemove",function(dets){
    val.childNodes[3].style.left = dets.x+"px"
    val.childNodes[3].style.top = dets.y+"px"
})

})