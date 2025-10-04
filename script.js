gsap.set(".innermarqtext", {
    scale:3
})

var t1 = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom top",
        scrub:4,
        pin:true,
        
    },
})

t1
.to(".videotab",{
    '--clip':"0%",
    ease: Power2,
    
},'a')
.to(".innermarqtext",{
    scale:0.9,
    ease:Power2
},'a')
