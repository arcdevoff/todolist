import type { Task, UpdateTaskStatus } from "@/@types/task";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/24/solid";

type TaskCardProps = {
  data: Task;
  onDelete: (id: number) => void;
  onToggleStatus: ({ id, completed }: UpdateTaskStatus) => void;
};

const TaskCard: React.FC<TaskCardProps> = ({
  data,
  onToggleStatus,
  onDelete,
}) => {
  return (
    <div className="text-white py-3 px-6 rounded-full w-full bg-stone-900 flex justify-between">
      <label className="flex items-center cursor-pointer relative">
        <input
          onChange={(e) =>
            onToggleStatus({ id: data.id, completed: e.target.checked })
          }
          checked={data.status === "completed"}
          type="checkbox"
          className="sr-only peer"
        />
        <div
          className="w-5 h-5 rounded border flex items-center justify-center
              peer-checked:bg-blue-600 peer-checked:border-blue-600"
        ></div>
        <CheckIcon className="w-5 h-5 absolute opacity-0 peer-checked:opacity-100 transition-opacity duration-200" />

        <span className="text-[17px] font-semibold ml-4 select-none transition:line-through duration-200 peer-checked:line-through">
          {data.title}
        </span>
      </label>

      <button
        onClick={() => onDelete(data.id)}
        className="cursor-pointer hover:bg-red-100 p-1 rounded-lg transition-colors"
      >
        <XMarkIcon className="size-6.5 text-red-300" />
      </button>
    </div>
  );
};

export default TaskCard;
