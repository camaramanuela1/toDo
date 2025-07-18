import React from "react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/checkbox";
import Text from "../components/text";

import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil-simple.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import InputText from "../components/input";


export default function TaskItem(){
    const [isEditing, setIsEditing] = React.useState(false);

    function handleEditTask() {
        setIsEditing(true);
    }

    function handleExitTask() {
        setIsEditing(false);
    }

    return(
        <Card size="md" className="flex items-center gap-4">
            {!isEditing ? (
                <>
                    <InputCheckbox />
                    <Text className="flex-1">Fazer compras da semana</Text>
                    <div className="flex gap-1">
                        <ButtonIcon icon={TrashIcon} variant="terciary" />
                        <ButtonIcon icon={PencilIcon} variant="terciary" onClick={handleEditTask} />
                    </div>                
                </>
            ) : (
                <>
                    <InputText className="flex-1"/>
                    <div className="flex gap-1">
                        <ButtonIcon icon={XIcon} variant="secondary" onClick={handleExitTask} />
                        <ButtonIcon icon={CheckIcon} variant="primary" />
                    </div>
                </>
            )}
        </Card>
    )
}