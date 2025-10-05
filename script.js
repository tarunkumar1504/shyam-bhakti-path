function homepageanimation(){
    gsap.set(".innermarqtext", {
    scale:3
})

var t1 = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        scrub:3,
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
.to(".lft",{
    xPercent: -10,
    scrub:2,
    ease: Power4
}, 'b')
.to(".rgt",{
    xPercent: 10,
    scrub:2,
    ease: Power4
}, 'b')

}

function slideanimation(){
    gsap.to(".slide",{
    scrollTrigger:{
        trigger: ".page3",
        start: "top top",
        end:"bottom bottom",
        scrub:1,
    },
    xPercent: -200,
    ease:Power4

})
}

homepageanimation()
slideanimation()

