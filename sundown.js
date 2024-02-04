// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#wrapper"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#wrapper" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#wrapper", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#wrapper").style.transform ? "transform" : "fixed"
// });



// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();





// var elementC = document.querySelector("#elements-container")
// var fixed = document.querySelector("#fixed-images")
// elementC.addEventListener("mouseenter", function () {
//     fixed.style.display = "block"
// })
// elementC.addEventListener("mouseleave", function () {
//     fixed.style.display = "none"
// })
// var tl = gsap.timeline()
// tl.from("#nav-sec-1, #nav-sec-2 ul li", {
//     y: -100,
//     duration: 1,
//     delay: 0.2,
//     stagger: 0.2,
//     opacity: 0
// })
// tl.from("#content-2 h1 , #content-1", {
//     x: 200,
//     // y: 200,
//     duration: 1,
//     delay: 0,
//     stagger: 0.5,
//     opacity: 0
// })
// gsap.from("main #carosel video",{
//     y: 300,
//     // scale: 0,   
//     duration:1,
//     opacity:0,
//     scrollTrigger:{
//         trigger: "main #carosel video",
//         scroller: "body",
//         markers: true,
//         start:"top 95%"
//     }
// })
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
});

function myFunction1() {
  document.getElementById("ci-1").style.backgroundImage = "url(sundown-11.webp)";
  document.getElementById("b1").style.borderColor="#FE330A";
  document.getElementById("b2").style.borderColor="#504A45";
  document.getElementById("b3").style.borderColor="#504A45";
  document.getElementById("b1").style.color="#EFEAE3";
  document.getElementById("b2").style.color="#504A45";
  document.getElementById("b3").style.color="#504A45";
  document.getElementById("c-text").innerHTML="Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
}
function myFunction2() {
  document.getElementById("ci-1").style.backgroundImage = "url(sundown-2.webp)";
  document.getElementById("b2").style.borderColor="#FE330A";
  document.getElementById("b1").style.borderColor="#504A45";
  document.getElementById("b3").style.borderColor="#504A45";
  document.getElementById("b1").style.color="#504A45";
  document.getElementById("b2").style.color="#EFEAE3";
  document.getElementById("b3").style.color="#504A45";
  document.getElementById("c-text").innerHTML="Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
}
function myFunction3() {
  document.getElementById("ci-1").style.backgroundImage = "url(sundown-3.webp)";
  document.getElementById("b3").style.borderColor="#FE330A";
  document.getElementById("b1").style.borderColor="#504A45";
  document.getElementById("b2").style.borderColor="#504A45";
  document.getElementById("b1").style.color="#504A45";
  document.getElementById("b2").style.color="#504A45";
  document.getElementById("b3").style.color="#EFEAE3";
  document.getElementById("c-text").innerHTML="We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
}
