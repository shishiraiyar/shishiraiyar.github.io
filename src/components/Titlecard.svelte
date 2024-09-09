<script>

</script>

<div class="container">
    <div class="image">
        <img src="shishira.jpg">
    </div>

    <div class="text">
        <h1>Hey, I'm Shishira</h1>
        <p>I like building things, which nowadays often involves programming</p>
        <p>I'm also into reading, history, space stuff among other things </p>
    </div>


</div>



<style>
    .container {
        display: grid;
    }

    img {
        width: 200px;
    }


    @media only screen and (min-width: 650px){
        .container {
            grid-template-columns: 2fr 1fr;
            gap: 2rem;

            margin-top: 8rem;
        }

        img {
            width: 300px;
        }
        .image {
            order: 2;
        }
        
    }

</style>