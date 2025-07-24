import useLocalStorage from "use-local-storage";
import { TASKS_KEY } from "../model/task";
import type { Task } from "../model/task";


export default function useTask() {
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

    function prepareTask() {
        setTasks([...tasks, {
            id: Math.random().toString(36).substring(2, 9),
            title: "",
            state: "creating"
        }])
    }

    function updateTask(id: string, payload: {title: Task["title"]}) {
        setTasks(
            tasks.map((task) => task.id === id ? {
                ...task, state: "created", ...payload
            } : task)
        )
    }

    return {
        prepareTask,
        updateTask
    }
}