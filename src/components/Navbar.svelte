<script>
    let dark = false;
    
    function toggleDarkMode() {
        dark = !dark;
        if (dark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

    let active = 0;
</script>

<div class="container">
    <div class="logo-container">
        <a href="/" on:click={()=>{active=0}}>HOME</a>
    </div>
    <nav>
        <a class="nav-item" class:active={active == 1} on:click={()=>{active=1}} href="/blog"><span>Blog</span></a>
        <a class="nav-item" class:active={active == 2} on:click={()=>{active=2}} href="/projects"><span>Projects</span></a>
        <a class="nav-item" class:active={active == 3} on:click={()=>{active=3}} href="/about"><span>About Me</span></a>

        <button on:click={toggleDarkMode}> 
            {#if dark}
                <svg width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            {:else}
                <svg width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.15" d="M3 17C10.952 18.6176 16.6829 8.75775 11 3C16.0007 3.13144 20 7.11149 20 12C20 16.9715 16.1188 21 11 21C7.77111 21 4.65938 19.4319 3 17Z" fill="#000000"/>
                    <path d="M3 17C10.952 18.6176 16.6829 8.75775 11 3C16.0007 3.13144 20 7.11149 20 12C20 16.9715 16.1188 21 11 21C7.77111 21 4.65938 19.4319 3 17Z" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"/>
                </svg>
            {/if}

        </button>

    </nav>
</div>
<hr>

<style>
    .container {
        height: var(--navbar-height);

        display: flex;

        width: min(100%, var(--max-page-width));
        margin: auto;

        background-color: var(--background-color);
        color: var(--secondary-text-color);

        align-items: center;
    }

    .container > *{
        flex: 1;
    }

    nav {
        display: flex;
        justify-content: space-between;
    }
    
    nav > * {
        margin: 0 4px;
        padding: 4px 8px;
        border-radius: 8px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }


    button {
        background-color: inherit;
        color: inherit;
        border: none;
        font: inherit;
        cursor: pointer;
    }

    .logo-container {
        font-size: 2rem;
        font-family:'Courier New', Courier, monospace;
        font-weight: 700;
    }

    .nav-item:hover, .active {
        background-color: var(--button-background-color);
        border: 1px solid var(--button-border-color);
    }

    hr {
        margin: 0;
    }


</style>