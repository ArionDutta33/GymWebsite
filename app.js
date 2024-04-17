let t = gsap.timeline();
t.from(".navbar .logo", {
    y: -100,
    duration: .8
})
t.from(".pg1-wrap .one", {
    x: -200,
    opacity: 0,
    duration: .7
})
t.from(".pg1-wrap .two", {
    y: -200,
    opacity: 0,
    duration: .7
})
t.from(".pg1-wrap .three", {
    x: 200,
    opacity: 0,
    duration: .7
})
t.from(".pg1-btn", {
    y: -20,
    opacity: 0,
    duration: .7
})
t.from(".page1 .scroll", {
    opacity: 0,
    y: -20,
    repeat: -1,
    yoyo: true,
    duration: .5,
})
// *page 2 Animation
t.from(".pg2-wrap h1", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".pg2-wrap h1",
        scroller: "body",
        start: "top 20%",
        markers: true

    }
})