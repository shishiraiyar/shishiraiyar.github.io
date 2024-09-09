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
</script>

<div class="container">
    <div class="logo-container">
        <a href="/">HOME</a>
    </div>
    <nav>
        <div class="nav-item"><a href="/notes">Notes</a></div>
        <div class="nav-item"><a href="/projects">Projects</a></div>
        <div class="nav-item"><a href="/about">About Me</a></div>
        <div class="nav-item">
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
        </div>
    </nav>
    
</div>

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
    }
    
    .nav-item {
        flex: 1 1;
        margin: 0 4px;
        
    }

    a {
        color: inherit;
    }
    a:hover {
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


</style>