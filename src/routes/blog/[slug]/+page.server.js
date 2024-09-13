import fs from 'fs';
import path from 'path';

export function entries() {
    const contentDir = path.join(process.cwd(), 'src/blog-posts');
    const files = fs.readdirSync(contentDir);

    const posts = []

    for (const file of files) {
        const fullPath = path.join(contentDir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            posts.push(file);
        }
    }
    
    return posts.map(post => ({ slug: post }));
}