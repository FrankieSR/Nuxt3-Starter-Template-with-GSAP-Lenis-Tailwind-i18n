export const useIntersectionObserver = (
    elementRef: Ref<Element | null>,
    { threshold = 0, root = null, rootMargin = "0px" }: IntersectionObserverInit
) => {
    const entry = ref<IntersectionObserverEntry>();
    const observer = ref<IntersectionObserver>();
    const node = ref<Element>();
    const isIntersecting = entry.value?.isIntersecting;

    const updateIntersectionEntry = ([
        intersectionEntry,
    ]: IntersectionObserverEntry[]): void => {
        entry.value = intersectionEntry;
    };

    onMounted(() => {
        if (!elementRef.value) return;

        const hasSupport = !!window.IntersectionObserver;

        node.value = elementRef.value;

        if (!node || !hasSupport || isIntersecting) return;

        observer.value = new IntersectionObserver(updateIntersectionEntry, {
            threshold,
            root,
            rootMargin,
        });

        observer.value.observe(node.value);
    });

    onBeforeUnmount(() => {
        console.log("Onmounted");
        if (node.value) {
            observer.value?.unobserve(node.value);
            observer.value?.disconnect();
        }
    });

    return entry;
};
