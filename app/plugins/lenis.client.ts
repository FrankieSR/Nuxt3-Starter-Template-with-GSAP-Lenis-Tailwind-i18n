import Lenis from "@studio-freight/lenis";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook("app:mounted", () => {
        // Lenis docs https://github.com/darkroomengineering/lenis
        const lenis = new Lenis({
            lerp: 0.05,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        lenis.on("scroll", nuxtApp.$ScrollTrigger.update);

        //nuxtApp.$gsap.ticker.add((time: number) => {
        //    lenis.raf(time * 1000);
        //});

        nuxtApp.$gsap.ticker.lagSmoothing(0);
    });
});
