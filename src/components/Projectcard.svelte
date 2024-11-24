<script>
    export let name;
    export let description;
    export let source;
    export let demo;
</script>


<div class="container">
    <h2>{name}</h2>
    <p>{description}</p>
    {#if source}
        <a href={source}>Source</a>
    {/if}
    {#if demo}
        <a href={demo}>Demo</a>
    {/if}
</div>

<style>
    .container {
        background-color: var(--card-background-color);
        border: 1px solid var(--card-border-color);
        padding: 5%;
        border-radius: 10px;
    }

    h2{
        margin: 0;
        font-size: 1.3rem;
    }

    a {
        text-decoration: none;
        color: var(--secondary-text-color);
        border: 1px solid var(--button-border-color);
        background-color: var(--button-background-color);
        border-radius: 12px;
        padding: 4px 8px;
        cursor: pointer;
    }

    p {
        font-size: 0.9rem;
        font-family: 'Open Sans', sans-serif;
    }
</style>