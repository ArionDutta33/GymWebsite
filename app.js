let t = gsap.timeline();
t.from(".nav .logo", {
    y: -100,
    duration: .8
})
t.from(".header #one", {
    opacity: 0,
    x: -100,

    duration: .6
})
t.from(".header #two", {
    y: -100,
    opacity: 0,
    duration: .6
})
t.from(".header #three", {
    x: 100,
    opacity: 0,
    duration: .6
})
t.from(".main .main-btn", {
    opacity: 0,
    scale: 1.1,
    rotate: 360,
    duration: .8
})