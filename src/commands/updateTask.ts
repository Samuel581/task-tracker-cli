import { Task } from "../interfaces/task.interface";
import { writeTasks, readFile } from "../utils/fileOperations";

export function updateTask(id: number, description: string){
    const allTasks: Task[] = readFile();
    const indexOfTask: number = allTasks.findIndex(task => task.id === id);
    if(indexOfTask===-1){
        console.log(`Task with ID ${id} not found`);
        return false;
    }
    allTasks[indexOfTask].description = description;
    allTasks[indexOfTask].updatedAt = new Date().toISOString();
    writeTasks(allTasks);
    console.log(`Task with ID ${id} updated succesfuly`);
    return true;
}