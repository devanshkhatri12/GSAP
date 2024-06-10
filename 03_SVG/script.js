var initialPath = "M 10 100 Q 500 100 990 100"

var finalPath = "M 10 100 Q 500 100 990 100"

var string = document.querySelector(".string")

string.addEventListener('mousemove', function(details){
    initialPath = `M 10 100 Q 500 ${details.y} 990 100`
    gsap.to("svg path",{
        attr: {d:initialPath},
        duration: 0.3,
        ease: "power3",
    })
})

string.addEventListener("mouseleave", function(){
    gsap.to("svg path",{
        attr: {d:finalPath},
        duration: 0.6,
        ease: "elastic.out(2, 0.4)",
    })
})
