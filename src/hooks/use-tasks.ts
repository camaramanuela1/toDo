import useLocalStorage from "use-local-storage";
import { TASKS_KEY } from "../model/task";
import type { Task } from "../model/task";

export default function useTasks(){
    const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

    return {
        tasks,
        tasksCount: tasks.filter((task) => task.state === "created").length,
        concludedTasksCount: tasks.filter((task) => task.concluded).length
    }
}