import { Task } from "../interfaces/task.interface";
import {readFile} from "../utils/fileOperations"

function listTasks(): Task[] {
    const allTasks: Task[] = readFile();
    return allTasks;
}

