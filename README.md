# Simple CLI Task Tracker

Solution to [task-tracker-cli](https://roadmap.sh/projects/task-tracker) from [roapmap.sh](https://roadmap.sh/projects/)

This is a simple command-line interface (CLI) task tracker developed in Node.js and TypeScript. The application allows users to manage their tasks directly from the terminal, including features such as adding tasks, updating task descriptions, marking tasks as in progress or done, listing tasks by status, and deleting tasks by ID.

## Features

- Add new tasks with descriptions.
- Update task descriptions by their ID.
- Mark tasks as "in-progress" or "done".
- List all tasks or filter them by status (`todo`, `in-progress`, or `done`).
- Delete tasks by their ID.

## Prerequisites

- Node.js (version 14.x or higher)
- TypeScript (version 4.x or higher)

Ensure that you have both Node.js and TypeScript installed before proceeding.

## Installation

1. Clone the repository:

   `git clone https://github.com/Samuel581/task-tracker-cli.git`

2. Natigate to the project directory:

    `cd tasl-tracker-cli`

3. Install the project dependencies:

    `npm install`

4. Ensure you are in the `src` directory for running commands:

    `cd src`

## Usage

The CLI provides various commands for task management. Below are examples of how to use each feature:

### Adding a New Task

To add a new task run the following command:

```shell
npx ts-node index.ts add 'Make dinner'
```

### Updating a Task Description

To update the description of a task by its ID:

```shell
npx ts-node index.ts update 1 "Buy groceries and cook dinner"
```

### Deleting a Task

To delete a task by its ID:

```shell
npx ts-node index.ts delete 1
```

### Marking a Task as "In Progress" or "Done"

To mark a task as "in-progress":

```shell
npx ts-node index.ts in-progress 1
```

To mark a task as "done":

```shell
npx ts-node index.ts done 1
```

### Listing Tasks

To list all tasks:

```shell
npx ts-node index.ts list
```

**To list tasks filtered by status:**

List all tasks marked as "done":

```shell
npx ts-node index.ts list done
```

List all tasks marked as "todo":

```shell
npx ts-node index.ts list todo
 ```

List all tasks marked as "in-progress":

```shell
npx ts-node index.ts list in-progress
```
