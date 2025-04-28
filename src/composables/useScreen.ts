import {
    defineAsyncComponent,
    onMounted,
    onUnmounted,
    ref,
    shallowRef,
  } from 'vue';
  
  export function useScreen() {
    const breakpoint = ref('sm');
    const nav = shallowRef(
      defineAsyncComponent(() => import('../components/layout/HeaderMd.vue')),
    );
    const footer = shallowRef(
      defineAsyncComponent(() => import('../components/layout/FooterMd.vue')),
    );
  
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 769) {
        breakpoint.value = 'sm';
        nav.value = defineAsyncComponent(() =>
            import('../components/layout/HeaderSm.vue'),
        );
        footer.value = defineAsyncComponent(() =>
            import('../components/layout/FooterSm.vue'),
        );
      } else {
        breakpoint.value = 'md';
        nav.value = defineAsyncComponent(() =>
          import('../components/layout/HeaderMd.vue'),
        );
        footer.value = defineAsyncComponent(() =>
          import('../components/layout/FooterMd.vue'),
        );
      }
    };
  
    onMounted(() => {
      updateBreakpoint();
      window.addEventListener('resize', updateBreakpoint);
    });
  
    onUnmounted(() => {
      window.removeEventListener('resize', updateBreakpoint);
    });
  
    return {
      breakpoint,
      nav,
      footer,
    };
  }