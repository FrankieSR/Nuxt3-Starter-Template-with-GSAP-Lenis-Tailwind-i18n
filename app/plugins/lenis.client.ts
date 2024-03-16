import Lenis from "@studio-freight/lenis";

export default defineNuxtPlugin((nuxtApp) => {
    console.log(nuxtApp, "nuxtApp");
    nuxtApp.hook("app:mounted", () => {
        const lenis = new Lenis({
            lerp: 0.1,
          });
      
          lenis.on("scroll", nuxtApp.$ScrollTrigger.update);
      
          nuxtApp.$gsap.ticker.add(time => {
            lenis.raf(time * 1000);
          });
      
          nuxtApp.$gsap.ticker.lagSmoothing(0);
    });
});
