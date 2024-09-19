import { Task } from  "./interfaces/task.interface";
import addTask from "./commands/addTask"; 
import listTasks from "./commands/listTasks";
import markDone from "./commands/markTaskDone";
import deleteTask from "./commands/deleteTask";
import { updateTask } from "./commands/updateTask";
import markInProgress from "./commands/markTaskInProgress";


function main(): void {
  const args: string[] = process.argv.slice(2);
  const command : string = args[0];
  const commandArgs: string[] = args.slice(1);

  switch (command) {
    case 'add':
      const description: string = commandArgs.join(' ');
      addTask(description);
      break;
    case 'list':
      const allTasks: Task[] = listTasks(commandArgs[0]);
      console.log(allTasks);
      break;
    case 'done':
      markDone(parseInt(commandArgs[0], 10));
      break;
    case 'in-progress':
      markInProgress(parseInt(commandArgs[0],10))
    case 'delete':
      deleteTask(parseInt(commandArgs[0], 10));
      break;
    case 'update':
      const id: number = (parseInt(commandArgs[0],10));
      const updatedDescription: string = commandArgs.slice(1).join(' ');
      updateTask(id, updatedDescription);
      break;
    default:
      console.error('Command not found');
      break;
  } 
}

main();
