export async function load({params}) {
    const post = await import(`../../../blog-posts/${params.slug}/post.md`);

    const {title, date} = post.metadata;
    const content = post.default;
    
    return {
        title,
        date,
        content
    }
}