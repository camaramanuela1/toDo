import React from "react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/checkbox";
import Text from "../components/text";
import type { Task } from "../model/task";
import { cx } from "class-variance-authority";

import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil-simple.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import InputText from "../components/input";

interface TaskItemProps {
    task: Task;
}

export default function TaskItem({task}: TaskItemProps){
    const [isEditing, setIsEditing] = React.useState(task?.state === 'creating');
    const [taskTitle, setTaskTitle] = React.useState("");

    function handleEditTask() {
        setIsEditing(true);
    }

    function handleExitTask() {
        setIsEditing(false);
    }

    function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>){
        setTaskTitle(e.target.value || "")
    }

    function handleSaveTask(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(task.id, taskTitle);
        setIsEditing(false);
    }

    return(
        <Card size="md">
            {!isEditing ? (
                <div className="flex items-center gap-4">
                    <InputCheckbox value={task?.concluded?.toString()} checked={task.concluded} />
                    <Text className={cx("flex-1", {"line-through": task?.concluded})}>
                        {task?.title}
                    </Text>
                    <div className="flex gap-1">
                        <ButtonIcon icon={TrashIcon} variant="terciary" />
                        <ButtonIcon icon={PencilIcon} variant="terciary" onClick={handleEditTask} />
                    </div>                
                </div>
            ) : (
                <form onSubmit={handleSaveTask} className="flex items-center gap-4">
                    <InputText className="flex-1" onChange={handleChangeTaskTitle} required autoFocus />
                    <div className="flex gap-1">
                        <ButtonIcon type="button" icon={XIcon} variant="secondary" onClick={handleExitTask} />
                        <ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
                    </div>
                </form>
            )}
        </Card>
    )
}