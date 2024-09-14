import * as fs from 'fs';

function readFile(path: string): string {
    let tasks = '';
    if(! fs.existsSync(path)){
        fs.writeFileSync(path,'[]');
    }
    try {
        //TODO: Check why this fixed itself after asigning 'uft-8' to the data
        let data = fs.readFileSync(path, 'utf-8');
        tasks = JSON.parse(data);
    } catch (error) {
        console.error('There was an error reading the tasks', error);
    }
    return tasks;
} 

export default readFile;