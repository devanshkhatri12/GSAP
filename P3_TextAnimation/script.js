function breakTheText()
{

    var h1 = document.querySelector('h1')
    var h1text = h1.textContent

    var splittext = h1text.split("")
    var halflength = splittext.length/2

    var clutter = ""

    splittext.forEach(function(elem, index){
        if(index < halflength){
            clutter += `<span class="a">${elem}</span>`
        }
        else{
            clutter += `<span class="b">${elem}</span>`
        }
    })

    h1.innerHTML = clutter
}

breakTheText()



gsap.from("h1 .a",{
    y:80,
    opacity: 0,
    delay:0.3,
    duration: 0.8,
    stagger: 0.15
})

gsap.from("h1 .b",{
    y:80,
    opacity: 0,
    delay:0.3,
    duration: 0.8,
    stagger: -0.15
})