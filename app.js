const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(".text", {y: "0%", duration: 1, stagger: 0.25});
tl.to(".slider", {y:"-100%",duration: 1.5, delay: 0.5});
t1.to(".intro", {y:"-100%",duration:1}, "-=1");
t1.fromto('nav', {opacity: 0}, {opacity:1, duration: 1.5});
t1.fromto('.big-text', {opacity: 0}, {opacity:1, duration: 1.5}, "-=1.5");
