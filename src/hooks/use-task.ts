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

    return {
        prepareTask,
    }
}