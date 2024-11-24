<script>
    import Projectcard from "../../components/Projectcard.svelte";

    export let data;
</script>

<h1>My Projects</h1>
<div class="container">
    {#each data.projects as project}
        <Projectcard {...project} />
    {/each}
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    @media only screen and (min-width: 650px) {
        .container {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>

