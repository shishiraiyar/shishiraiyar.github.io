<script>
    export let title;
    export let date;
</script>

<article>
    <h1>{title}</h1>
    <p>Published: {date}</p>
    <slot />
</article>

<style>
    article :global(img) {
        display: block;
        margin: 0 auto;
        width: min(100%, 500px)
    }
</style>