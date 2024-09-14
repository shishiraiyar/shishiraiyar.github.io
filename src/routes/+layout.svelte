<script>
    import Navbar from "../components/Navbar.svelte";
    import "/src/styles/global.css"
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
</svelte:head>

<section class="navigation">
    <Navbar></Navbar>
</section>

<main>
    <slot></slot>
</main>     


<style>
    .navigation {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }

    main {
        margin-top: calc(var(--navbar-height) + 2rem);
        width: min(100%, var(--max-page-width));
        margin-left: auto;
        margin-right: auto;
    }

    
</style>
    
