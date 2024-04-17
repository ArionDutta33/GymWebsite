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
