export interface Task {
    id: number;
    description: string;
    status: 'todo' | 'in-progess' | 'done';
    createdAt: string;
    updatedAt: string;
}