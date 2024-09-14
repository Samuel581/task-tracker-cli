import * as fs from 'fs';
import { Task } from '../interfaces/task.interface';

function writeTasks(path: string, tasks: Task[]){
    const updatedTasks = JSON.stringify(tasks, null, 2);
    try {
        fs.writeFileSync(path, updatedTasks, 'utf-8');
    } catch (error) {
        console.error("There was an error writing into the file", error);
    }
}
export default writeTasks;
