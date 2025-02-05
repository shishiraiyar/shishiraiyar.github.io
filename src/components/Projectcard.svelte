<script>
    export let name;
    export let description;
    export let links = [];
</script>


<div class="container">
    <h2>{name}</h2>
    <p>{description}</p>
    <div class="links">
        {#each links as link}
            <a href={link.url}>{link.name}</a>        
        {/each}
    </div>
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
        margin-right: 8px;
    }

    p {
        font-size: 0.9rem;
        font-family: 'Open Sans', sans-serif;
    }
</style>