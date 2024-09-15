import { Task } from "../interfaces/task.interface";
import {writeTasks, readFile} from "../utils/fileOperations"

function addTask(description: string): void {
    let allTasks: Task[] = readFile('../tasks.json');
    const newTask: Task = {
        id: allTasks.length + 1,
        description: description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
    allTasks.push(newTask);
    writeTasks('../tasks.json', allTasks);
}