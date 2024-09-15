import { Task } from "../interfaces/task.interface";
import {readFile} from "../utils/fileOperations"

function listTasks(status: string): Task[] {
    const allTasks: Task[] = readFile();

    if(!status){
        return allTasks;
    }
    switch(status){
        case 'todo':
            return allTasks.filter(task => task.status === 'todo');
            break;
        case 'in-progress':
            return allTasks.filter(task => task.status === 'in-progess');
            break;
        case 'done':
            return allTasks.filter(task => task.status === 'done');
        default:
            console.log('Invalid status');
            return [];
    }
}

export default listTasks; 

