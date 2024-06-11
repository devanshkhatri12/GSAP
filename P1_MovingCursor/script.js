var cursor = document.querySelector(".cursor")
var main = document.querySelector(".main")
var image = document.querySelector(".image")

main.addEventListener('mousemove', function(details){
    gsap.to(cursor,{
        x: details.x,
        y: details.y,
        duration: 0.5,
        ease: "back.out"
    })
})

image.addEventListener('mouseenter', function(details){
    gsap.to(cursor, {
        scale: 4
    })
})

image.addEventListener('mouseleave', function(details){
    gsap.to(cursor, {
        scale: 1
    })
})


