// gsap.to("#box", {
//     x:1000,
//     y:250,
//     duration: 2,
//     delay: 1,
//     borderRadius: "50%",
//     scale: 1,
//     repeat: -1,
//     yoyo: true
// })


// gsap.from("h1", {
//     y: 20,
//     opacity: 0,
//     duration: 2,
//     delay: 1,
//     stagger: 1
// })


var tl = gsap.timeline()

tl.from("h2", {
    y: -30,
    duration: 0.5,
    delay: 1,
    opacity: 0
})

tl.from("h4", {
    y: -30,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.5
})

tl.from("h1", {
    y: 30,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    scale: 0.2
})


gsap.from(".page1 .box",{
    scale: 0,
    duration: 1,
    delay: 1,
    rotate: 180
})

gsap.from(".page2 .box",{
    scale: 0,
    duration: 1,
    delay: 1,
    rotate: 180,
    // scrollTrigger: ".page2 .box"             method -1
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        markers: true,
        start: "top 60%"
    }
})

