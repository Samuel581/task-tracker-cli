import { Task } from "../interfaces/task.interface";
import { writeTasks, readFile } from "../utils/fileOperations";

function markDone(id: number){
    const allTasks: Task[] = readFile();
    const indexOfTask: number = allTasks.findIndex(task => task.id === id);
    if(indexOfTask === -1){
        console.log(`Task with ID ${id} not found`);
        return false;
    }
    allTasks[indexOfTask].status = 'done';
    allTasks[indexOfTask].updatedAt = new Date().toISOString();
    writeTasks(allTasks);
    console.log(`Task with ID ${id} marked as done`);
    return true;
}

export default markDone;