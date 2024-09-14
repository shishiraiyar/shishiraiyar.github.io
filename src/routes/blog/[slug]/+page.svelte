<script>
    export let data;
    import "/src/styles/prism-okaidia.css";
</script>

<div>
    <h1>{data.title}</h1>
    <p>Published: {data.date}</p>
    
    <svelte:component this={data.content} />
</div>

<style>
    div :global(img) {
        display: block;
        margin: 0 auto;
        width: min(100%, 500px)
    }
</style>