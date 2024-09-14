<script>
    export let data;
</script>

{#each data.posts as post}
    <div>
        <a href={post.link}>{post.title}</a>
        <p>Published: {post.date}</p>
    </div>
{/each}

<style>
    a {
        font-size: 1.5rem;
    }
</style>