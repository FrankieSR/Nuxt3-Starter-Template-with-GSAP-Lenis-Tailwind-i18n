// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    srcDir: "app",
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
    plugins: ['~/plugins/lenis.client'],
});
