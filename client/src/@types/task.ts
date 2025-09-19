type TaskStatus = "pending" | "completed";

export interface Task {
  id: number;
  user_id: number;
  title: string;
  status: TaskStatus;
  created_at: number;
}

export type CreateTaskFormValues = {
  title: string;
};

export type UpdateTaskStatus = {
  id: number;
  completed: boolean;
};
