function homepageanimation(){
    gsap.set(".innermarqtext", {
    scale:3
    })

let t1 = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        pin: true,
  pinSpacing: false,
        scrub:1,
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
    stagger : .03,
    ease: Power4
}, 'b')
.to(".rgt",{
    xPercent: 10,
    stagger : .03,
    ease: Power4
}, 'b')

}

function slideanimation(){
    gsap.to(".slide",{
    scrollTrigger:{
        trigger: ".page3",
        start: "top top",
        end:"bottom bottom",
        pin: true,
  pinSpacing: false,
        scrub:1,
    },
    xPercent: -200,
    ease:Power4

})
}

function namesanimation(){
    
document.querySelectorAll(".listelem")
.forEach(function(el){
    el.addEventListener("mousemove", function(dets){
       gsap.to(this.querySelector(".pic"), { 
        opacity:1,
         ease:Power4 ,
         x: gsap.utils.mapRange(0 ,window.innerWidth, -200 ,200 , dets.clientX),
         duration : .5
        })
    })

    el.addEventListener("mouseleave", function(dets){
       gsap.to(this.querySelector(".pic"), {
         opacity:0,
          ease:Power4 ,
           duration : .5
        })

    })
})
}
function paraani(){
    
var clutter = ""
document.querySelector(".textp")
.textContent.split("")
.forEach(function(e){
    if( e=== " ") clutter += `<span>&nbsp;</span>`
    clutter += `<span>${e}</span>`
})
document.querySelector(".textp").innerHTML = clutter
gsap.set(".textp span", {opacity:.1})
gsap.to(".textp span",{
    scrollTrigger:{
        trigger:".paragraph",
        start:"top 80%",
        end: "bottom 90%",
        scrub:.2
    },
    opacity:1,
    stagger:.3,
    ease:Power4
})

}
function locomo(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
})();
}

function colorchangeanimation(){
    document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger:e,
        start : "top 50%",
        end: "bottom 50%",
        onEnter:function(){
            document.body.setAttribute("theme", e.dataset.color)
        },
        onEnterBack:function(){
            document.body.setAttribute("theme", e.dataset.color)

        }
    })
})
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  ScrollTrigger.refresh();
});


homepageanimation()
slideanimation()
namesanimation()
paraani()
locomo()
colorchangeanimation()

