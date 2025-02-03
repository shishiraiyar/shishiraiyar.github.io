<script>
    export let data;
    import "/src/styles/prism-okaidia.css";
</script>

<h1 class="post-title">{data.title}</h1>
<p class="published">Published: {data.date}</p>
<hr>
<div>
    <svelte:component this={data.content} />
</div>

<style>
    div :global(img) {
        display: block;
        margin: 0 auto;
        width: min(100%, 500px)
    }

    .post-title {
        font-size: 3rem;
        margin-bottom: 2px;
    }
    .published {
        margin: 0;
    }
    hr{
        margin-bottom: 2rem;
    }
    
    div :global(h1), div :global(h2), div :global(h3) {
        margin-top: 3rem;
    }

    :global(figcaption) {
        text-align: center;
    }

</style>