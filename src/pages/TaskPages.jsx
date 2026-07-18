import { ChevronLastIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPages() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLastIcon />
          </button>
          <h1 className="text-3xl text-slate-900 font-bold text-center">
            Detalhes da Tarefas
          </h1>
        </div>

        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
          <h2 className=" text-xl text-white font-bold">{title}</h2>
          <p className=" text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPages;
