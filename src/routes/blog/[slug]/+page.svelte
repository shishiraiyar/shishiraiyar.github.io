<script>
    export let data;
</script>

<article>
    <h1>{data.title}</h1>
    <p>Published: {data.date}</p>
    
    <svelte:component this={data.content} />
</article>

<style>
    article :global(img) {
        display: block;
        margin: 0 auto;
        width: min(100%, 500px)
    }
</style>