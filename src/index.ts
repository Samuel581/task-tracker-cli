import { Task } from  "./interfaces/task.interface";
import addTask from "./commands/addTask"; 
import listTasks from "./commands/listTasks";
import markDone from "./commands/markTaskDone";

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
      const id: number = parseInt(commandArgs[0], 10);
      markDone(id);
      break;
    default:
      console.error('Command not found');
      break;
  } 
}

main();
