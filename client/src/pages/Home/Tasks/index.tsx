import type { Task, UpdateTaskStatus } from "@/@types/task";
import TaskService from "@/api/services/task.service";
import React from "react";
import TaskCard from "@/components/templates/Task/Card";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { useAppSelector } from "@/redux/store";
import { Link, useNavigate } from "react-router-dom";

const Tasks = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [title, setTitle] = React.useState("");
  const accessToken = useAppSelector((state) => state.user.accessToken);
  const navigate = useNavigate();

  React.useEffect(() => {
    TaskService.findAll().then((data) => setTasks(data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessToken) navigate("/auth/login");
    if (!title.trim()) return;

    const newTask = await TaskService.create({ title: title.trim() });
    setTasks((prev) => [newTask, ...prev]);
    setTitle("");
  };

  const handleToggleStatus = async (values: UpdateTaskStatus) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === values.id
          ? { ...t, status: values.completed ? "completed" : "pending" }
          : t
      )
    );

    await TaskService.updateStatus(values);
  };

  const handleDelete = async (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    await TaskService.delete(id);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task..."
          className="bg-stone-900 focus:outline-none w-full rounded-full py-4 px-6 text-lg font-medium placeholder:text-lg placeholder:font-medium"
        />

        <button
          type="submit"
          className="absolute right-4 top-2 cursor-pointer bg-stone-800 hover:bg-stone-700 p-2.5 transition-colors rounded-full"
        >
          <PlusCircleIcon className="size-6" />
        </button>
      </form>

      {tasks.length ? (
        <div className="mt-5 grid gap-4">
          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              data={task}
              onDelete={handleDelete}
              onToggleStatus={handleToggleStatus}
            />
          ))}
        </div>
      ) : accessToken ? (
        <div className="mt-12 flex items-center flex-col gap-1">
          <img width={75} height={75} src="/assets/images/confusedface.webp" />

          <span className="text-xl font-bold">Nothing here</span>
        </div>
      ) : (
        <div className="mt-12 flex items-center flex-col gap-1">
          <img width={85} height={85} src="/assets/images/moon.webp" />

          <span className="text-lg font-bold">
            Please{" "}
            <Link className="text-white! underline" to="/auth/login">
              Log in
            </Link>{" "}
            or{" "}
            <Link className="text-white! underline" to="/auth/signup">
              Sign up
            </Link>
          </span>
        </div>
      )}
    </>
  );
};

export default Tasks;
