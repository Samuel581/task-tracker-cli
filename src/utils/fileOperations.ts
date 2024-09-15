import * as fs from 'fs';
import path from 'path';
import { Task } from '../interfaces/task.interface';

const PATH_TO_JSON: string = path.join(__dirname, '..', 'tasks.json');

function readFile(): Task[] {
    let tasks : Task[] = [];
    if(! fs.existsSync(PATH_TO_JSON)){
        fs.writeFileSync(PATH_TO_JSON,'[]', 'utf-8');
    }
    try {
        //TODO: Check why this fixed itself after asigning 'uft-8' to the data
        let data = fs.readFileSync(PATH_TO_JSON, 'utf-8');
        tasks = JSON.parse(data) as Task[];
    } catch (error) {
        console.error('There was an error reading the tasks', error);
    }
    return tasks;
} 

function writeTasks(tasks: Task[]): void {
    const updatedTasks = JSON.stringify(tasks, null, 2);
    try {
        fs.writeFileSync(PATH_TO_JSON, updatedTasks, 'utf-8');
    } catch (error) {
        console.error("There was an error writing into the file", error);
    }
}

export { readFile, writeTasks};