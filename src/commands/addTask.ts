import { Task } from "../interfaces/task.interface";
import readFile from "../utils/readTasks";

function addTask(description: string): void {
    const tasks: Task[] = readFile('../tasks.json');

}