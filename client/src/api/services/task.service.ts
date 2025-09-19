import type {
  CreateTaskFormValues,
  Task,
  UpdateTaskStatus,
} from "@/@types/task";
import axios from "../axios";

const TaksService = {
  async findAll(): Promise<Task[]> {
    const { data } = await axios.get("/tasks:authorized");
    return data;
  },

  async create(values: CreateTaskFormValues): Promise<Task> {
    const { data } = await axios.post("/tasks:authorized", { ...values });
    return data;
  },

  async updateStatus({ id, completed }: UpdateTaskStatus) {
    await axios.patch(`/tasks/${id}/status:authorized`, {
      completed,
    });
  },

  async delete(id: number) {
    await axios.delete(`/tasks/${id}:authorized`);
  },
};

export default TaksService;
