import { ChevronRightCircleIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.append("title", task.title);
    query.append("description", task.description);
    navigate(`/tasks?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 rounded-md bg-slate-200 p-6 shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            type="button"
            onClick={() => onTaskClick(task.id)}
            className={`flex w-full items-center gap-2 rounded-md bg-slate-400 p-2 text-left text-white ${
              task.isCompleted && "line-through"
            }`}
          >
            <ChevronRightCircleIcon size={20} />
            <div>
              <p className="font-bold">{task.title}</p>
              <p>{task.description}</p>
            </div>
          </button>

          <button
            onClick={() => onSeeDetailsClick(task)}
            className="rounded-md bg-slate-400 p-2 text-white"
          >
            <ChevronRightCircleIcon size={20} />
          </button>

          <button
            type="button"
            onClick={() => onDeleteTaskClick(task.id)}
            className="rounded-md bg-slate-400 p-2 text-white"
          >
            <TrashIcon size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
