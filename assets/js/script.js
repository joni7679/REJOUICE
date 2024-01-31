gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


function cursorEffect() {
    let palyBtn = document.querySelector(".cursor");
    // console.log(palyBtn);
    let videoContainer = document.querySelector(".hero-section")
    // console.log(videoContainer);

    videoContainer.addEventListener("mouseenter", function () {

        gsap.to(palyBtn, {
            scale: 1,
            opacity: 1,

        })

    })

    videoContainer.addEventListener("mouseleave", function () {
        gsap.to(palyBtn, {
            scale: 0,
            opacity: 0,

        })

    })

    videoContainer.addEventListener("mousemove", function (elem) {
        gsap.to(palyBtn, {
            left: elem.x,
            top: elem.y,
        })

    })
}
cursorEffect()

function cursorEffect2() {
    let cursorBtn = document.querySelector(".cursor2");
    console.log(cursorBtn);
    let Container = document.querySelector(".page4-bottom")
    // console.log(videoContainer);

    Container.addEventListener("mouseenter", function () {
        gsap.to(cursorBtn, {
            scale: 1,
            opacity: 1,
        })
    })

    Container.addEventListener("mouseleave", function () {
        gsap.to(cursorBtn, {
            scale: 0,
            opacity: 0,
        })
    })

    Container.addEventListener("mousemove", function (elem) {
        gsap.to(cursorBtn, {
            left: elem.clientX,
            top: elem.clientY,
        })
        console.log(elem.clientX, elem.clientY);
    })
}
cursorEffect2();


gsap.from(".hero-container h1 span", {
    y: 120,
    opacity: 0,
    stagger: 0.2,

})

gsap.from(".page2 h2", {
    y: 120,
    opacity: 0,
    stagger: 0.2,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 47%",
        end: "top 46%",
        // markers: true,
        scrub: 2,
    }
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


