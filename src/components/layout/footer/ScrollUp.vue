<script lang="ts" setup>
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
        <div class="scroll-up">
            <a href="#" @click.prevent="scrollToTop">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-arrow-up-circle"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="16 12 12 8 8 12"></polyline>
                </svg>
                <p>Back to top</p>
            </a>
        </div>
</template>

<style scoped>
.scroll-up {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1em 0 0;
    margin: 1em 0 0;
    transition: all 0.3s ease;
    font-size: 1.2em;
}

.scroll-up a {
    text-decoration: none;
    color: #000;
}

.scroll-up a:hover {
    color: cornflowerblue;
}

.scroll-up p {
    font-size: 0.8em;
    margin-top: 0;
}
</style>
