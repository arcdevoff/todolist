export type UpdateTaskStatus = {
  id: number;
  completed: boolean;
  user_id: number;
};

export type DeleteTask = {
  id: number;
  user_id: number;
};
