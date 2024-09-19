# Simple CLI Task Tracker

Solution for the [task-tracker-CLI](https://roadmap.sh/projects/task-tracker) backend project at [roadmap.sh](https://roadmap.sh/projects)

This is a task tracker developed in nodejs and typescript, you can add, list all tasks at once and by status, modify description of the tasks by the id, mark them as in progress or mark them done and finaly one task can be deleted by id.

## Prerequisites

- `nodejs`
- `typescript`

## How to install

1. `git clone https://github.com/Samuel581/task-tracker-cli.git`
2. `cd task-tracker-cli`
3. `npm install`
4. `cd src`

## How to use

```shell
# Adding a new task
npx ts-node index.ts add 'Make dinner'

# Updating and deleting tasks
npx ts-node index.ts update 1 "Buy groceries and cook dinner"
npx ts-node index.ts delete 1

# Marking a task as in progress or done
npx ts-node index.ts in-progress 1
npx ts-node index.ts done 1

# Listing all tasks
npx ts-node index.ts list

# Listing tasks by status
npx ts-node index.ts list done
npx ts-node index.ts list todo
npx ts-node index.ts list in-progress
```
