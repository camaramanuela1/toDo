import React from "react";
import useLocalStorage from "use-local-storage";
import { TASKS_KEY } from "../model/task";
import type { Task } from "../model/task";
import { delay } from "../helpers/utils";

export default function useTasks(){
    const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

    async function fetchTasks() {
        if (isLoadingTasks) {
            console.time('Carregando tarefas...');
            await delay(2000);
            setIsLoadingTasks(false);
        }

        setTasks(tasksData);
        console.timeEnd('Carregando tarefas...');
    }

    React.useEffect(() => {
        fetchTasks();
    }, [tasksData])

    return {
        tasks,
        tasksCount: tasks.filter((task) => task.state === "created").length,
        concludedTasksCount: tasks.filter((task) => task.concluded).length,
        isLoadingTasks
    }
}