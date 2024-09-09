<script>
    import Navbar from "../components/Navbar.svelte";
import "../global.css"
</script>


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
        margin-top: var(--navbar-height);
    }

    
</style>
    
