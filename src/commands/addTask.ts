import { Task } from "../interfaces/task.interface";
import {writeTasks, readFile} from "../utils/fileOperations"

function addTask(description: string): void {
    try {
        let allTasks: Task[] = readFile();
        const newTask: Task = {
            id: allTasks.length + 1,
            description: description,
            status: 'todo',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
        allTasks.push(newTask);
        writeTasks(allTasks);
        console.log(`Task added succesfully - ${description}`);
    } catch (error) {
        console.error("There was an error adding that task", error);
    }
}

export default addTask; 
