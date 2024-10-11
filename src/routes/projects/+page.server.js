import yaml from 'js-yaml';
import fs from 'fs';

export async function load() {
    const projects = yaml.load(fs.readFileSync('src/projects/projects.yaml'));
    
    return projects
}