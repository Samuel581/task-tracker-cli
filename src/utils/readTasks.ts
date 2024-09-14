import * as fs from 'fs';
import { Task } from '../interfaces/task.interface';

function readFile(path: string): Task[] {
    let tasks : Task[] = [];
    if(! fs.existsSync(path)){
        fs.writeFileSync(path,'[]', 'utf-8');
    }
    try {
        //TODO: Check why this fixed itself after asigning 'uft-8' to the data
        let data = fs.readFileSync(path, 'utf-8');
        tasks = JSON.parse(data) as Task[];
    } catch (error) {
        console.error('There was an error reading the tasks', error);
    }
    return tasks;
} 

export default readFile;