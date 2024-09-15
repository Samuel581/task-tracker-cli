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

function writeTasks(path: string, tasks: Task[]): void {
    const updatedTasks = JSON.stringify(tasks, null, 2);
    try {
        fs.writeFileSync(path, updatedTasks, 'utf-8');
    } catch (error) {
        console.error("There was an error writing into the file", error);
    }
}

export { readFile, writeTasks};