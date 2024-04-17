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
// Timeline for first page animations


// Timeline for second page animations
const t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        pin: ".page2",
        start: "top 0%",
        end: "top -100%",
        scrub: true,
        // markers: true
    }
});
t2.from(".pg2-wrap h1", {
    x: -100,
    opacity: 0,
    duration: 0.7
})
t2.from(".pg2-wrap .description", {
    x: -100,
    opacity: 0,
    duration: 0.7
})
t2.from(".pg2-wrap a", {
    x: -100,
    opacity: 0,
    duration: 0.7
})
t2.from(".pg2-right #img1", {
    x: 100,
    opacity: 0,
    duration: 0.7
})
t2.from(".pg2-right #img3", {
    x: 100,
    opacity: 0,
    duration: 0.7
});

const check = document.querySelector(".pg2-right #img1")
console.log(check)
let t3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3", // Ensure the correct trigger element is specified
        scroller: "body",
        markers: true
    }
});

t3.from(".page3 .header-one, .page3 .header-two, .page3 .header-three", {
    y: 100,
    opacity: 0,
    stagger: 0.3, // Adjust stagger value as needed
    duration: 0.7
});


// t.from(".pg2-wrap h1", {
//     x: -100,
//     opacity: 0,
//     duration: 0.7
// })
//     .from(".pg2-wrap .description", {
//         x: -100,
//         opacity: 0,
//         duration: 0.7
//     })
//     .from(".pg2-wrap a", {
//         x: -100,
//         opacity: 0,
//         duration: 0.7
//     })
//     .from(".pg2-right #img1", {
//         x: 100,
//         opacity: 0,
//         duration: 0.7
//     })
//     .from(".pg2-right #img3", {
//         x: 100,
//         opacity: 0,
//         duration: 0.7
//     });

// // Set up a single scrollTrigger for all the animations
// ScrollTrigger.create({
//     trigger: ".pg2-wrap h1",
//     scroller: "body",
//     start: "top 60%",
//     markers: true,
//     animation: t
// });


// t.from(".pg2-wrap h1", {
//     x: -100,
//     opacity: 0,
//     duration: .7,
//     scrollTrigger: {
//         trigger: ".pg2-wrap h1",
//         scroller: "body",
//         start: "top 110%",
//         markers: true

//     }
// })
// t.from(".pg2-wrap .description", {
//     x: -100,
//     opacity: 0,
//     duration: .7,
//     scrollTrigger: {
//         trigger: ".pg2-wrap h1",
//         scroller: "body",
//         start: "top 60%",
//         markers: true

//     }
// })
// t.from(".pg2-wrap a", {
//     x: -100,
//     opacity: 0,
//     duration: .7,
//     scrollTrigger: {
//         trigger: ".pg2-wrap h1",
//         scroller: "body",
//         // start: "top 60%",
//         markers: true

//     }
// })
// t.from(".pg2-right #img1", {
//     x: 100,
//     opacity: 0,
//     duration: .7,
//     scrollTrigger: {
//         trigger: ".pg2-wrap h1",
//         scroller: "body",
//         start: "top 60%",
//         markers: true

//     }
// })
// t.from(".pg2-right #img3", {
//     x: 100,
//     opacity: 0,
//     duration: .7,
//     scrollTrigger: {
//         trigger: ".pg2-wrap h1",
//         scroller: "body",
//         start: "top 60%",
//         markers: true

//     }
// })