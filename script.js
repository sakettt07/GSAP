
var tl = gsap.timeline();
tl.to("#loader", {
  top: "-100vh",
  duration: 1.7,
  delay: 2.5,
  onStart: time(),
});
tl.from("#nav img,#nav h3,#nav h4,#nav button", {
  y: -50,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.3,
});
tl.from("#main h1", {
  x: -200,
  scale: 1.3,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
});
tl.from("#main>img", {
  scale: 0,
  stagger: 0.2,
  opacity: 0,
});
tl.from("h5", {
  scale: 0,
  opacity: 0,
});
tl.to("h5", {
  y: 30,
  duration: 1,
  yoyo: true,
  repeat: -1,
});
tl.from("#aboutus #h1content, #anim2", {
  y: 100,
  delay: 0.7,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#aboutus #h1content #anim2",
    scroller: "body",
  },
});
tl.from("#demolanding img", {
  y: 350,
  top: 20,
  delay: 0,
  duration: 0.9,
  scrollTrigger: {
    trigger: "#demolanding img",
    scroller: "body",
    markers: false,
    start: "top 80%",
    end: "top 40%",
    scrub: true,
  },
});
tl.from("#freetemphead",{
  x:-800,
  duration:0.8,
  scrollTrigger:{
    trigger:"#freetemphead",
    scroller:"body",
    scrub:2,
    markers:true,
    start: "top 75%",
  }
})
tl.from("#spandivv span",{
  x:-500,
  duration:0.5,
  stagger:0.2,
  opacity:0,
  scrollTrigger:{
    trigger:"#leftfreetemp",
    scroller:"body",
  }
})

// animation
var animation = bodymovin.loadAnimation({
  container: document.getElementById("anim2"),
  path: "animated.json",
  render: "svg",
  loop: true,
  autoplay: true,
  name: "demo animation",
});
var animation = bodymovin.loadAnimation({
  container: document.getElementById("anim3"),
  path: "animated2.json",
  render: "svg",
  loop: true,
  autoplay: true,
  name: "demo animation",
});

//   Functionss

function changeImage(anything) {
  document.getElementById("slider").src = anything;
}

function time() {
  var a = 0;
  setInterval(function () {
    a = a + Math.floor(Math.random() * 20);
    if (a < 100) {
      document.querySelector("#loader h1").innerHTML = a + "%";
    } else {
      a = 100;
      document.querySelector("#loader h1").innerHTML = a + "%";
    }
  }, 150);
}

// Scorll to top button //
document.addEventListener("DOMContentLoaded", () => {
    const top = document.getElementById("nav");
    const last = document.getElementById("freetemp");
    
    const scrolltotop = document.createElement("div");
    scrolltotop.classList.add("scrollto");
    scrolltotop.innerHTML = '<i class="fas fa-arrow-up"></i>'
    
    document.body.appendChild(scrolltotop)
    
    const scrolli = () => {
      top.scrollIntoView({ behavior: "smooth" });
    };
    
    scrolltotop.addEventListener("click", scrolli);
  });
