import Lenis from "@studio-freight/lenis";
import type types from '@types/gsap'
//const lenis = new Lenis({
//    duration: 1.5,
//    //easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
//    orientation: "vertical", // vertical, horizontal
//    gestureOrientation: "vertical", // vertical, horizontal, both
//    smoothWheel: true,
//    wheelMultiplier: 1,
//    smoothTouch: false,
//    touchMultiplier: 2,
//    infinite: false,
//    autoResize: true
//});
// // get scroll value
// lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
// console.log({ scroll, limit, velocity, direction, progress })
// })
//const raf = (time: number) => {
//    lenis.raf(time);
//    requestAnimationFrame(raf);
//};

//requestAnimationFrame(raf);

let lenisInstance;

export default defineNuxtPlugin((nuxtApp) => {
    //nuxtApp.provide("lenis", lenis);

    console.log(nuxtApp, "nuxtApp");
    nuxtApp.hook("app:mounted", () => {
        //lenisInstance = new Lenis({
        //    duration: 1.5,
        //    //easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        //    orientation: "vertical", // vertical, horizontal
        //    gestureOrientation: "vertical", // vertical, horizontal, both
        //    smoothWheel: true,
        //    wheelMultiplier: 1,
        //    smoothTouch: false,
        //    touchMultiplier: 2,
        //    infinite: false,
        //    autoResize: true,
        //});

        //console.log(lenisInstance, "lenisInstance");

        const lenis = new Lenis({
            lerp: 0.1,
          });
      
          lenis.on("scroll", nuxtApp.$ScrollTrigger.update);
      
          nuxtApp.$gsap.ticker.add(time => {
            lenis.raf(time * 1000);
          });
      
          nuxtApp.$gsap.ticker.lagSmoothing(0);
    });

    //nuxtApp.hook("destroyed", () => {
    //    if (lenisInstance) {
    //        lenisInstance.destroy();
    //    }
    //});
});
