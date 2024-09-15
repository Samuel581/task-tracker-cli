import { Task } from "../interfaces/task.interface";
import { writeTasks, readFile } from "../utils/fileOperations";

function deleteTask(id: number){
    const allTasks: Task[] = readFile();
    const indexOfTask: number = allTasks.findIndex(task => task.id === id);
    if(indexOfTask == -1){
        console.log(`Task with the ID ${id} not found`);
        return false;
    }
    else{
        const updatedTasks: Task[] = allTasks.filter(task => task.id !== id);
        writeTasks(updatedTasks);
        console.log(`Task with the ID ${id} deleted succesfuly`);
        return true;
    }
}

export default deleteTask;