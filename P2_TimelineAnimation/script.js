// var tl = gsap.timeline({paused:true})
var open = document.querySelector('.open')
var close = document.querySelector('.close')

var tl = gsap.timeline()

tl.to('.full',{
    right: "0",
    // delay: 1,
    duration: 0.3
})

tl.from('.full h4',{
    x: 100,
    duration: 0.5,
    stagger: 0.25,
    opacity: 0
})

tl.from('.full i',{
    opacity: 0,
})

tl.pause()


open.addEventListener('click',function(){
    tl.play()
})

close.addEventListener('click',function(){
    tl.reverse()
})

