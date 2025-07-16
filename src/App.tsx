import Text from "./components/text";
import Icon from "./components/icon";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input";
import InputCheckbox from "./components/checkbox";
import Skeleton from "./components/skeleton";

import TrashIcon from "./assets/icons/trash.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import Card from "./components/card";
import Container from "./components/container";

function App() {
  return (
    <Container className="space-y-6">
      <Text variant="body-sm-bold" className="text-pink-base">hello world!</Text>
      <Icon svg={TrashIcon} className="fill-green-base" />
      <Icon svg={SpinnerIcon} animate />

      <div className="flex gap-1">
          <Badge variant= "secondary">5</Badge>
          <Badge variant= "primary">2 de 5</Badge>
          <Badge loading>5</Badge>
      </div>
      

      <Button icon={PlusIcon}>Nova tarefa</Button>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="terciary" />
        <ButtonIcon icon={TrashIcon} loading/>
      </div>

      <br />
      <InputText />

      <br />
      <InputCheckbox />
      <InputCheckbox loading />

      <Card size="md">Hello Card!</Card>

      <div className="space-y-2">
        <Skeleton className="h-6"/>
        <Skeleton className="h-6"/>
        <Skeleton className="w-96 h-6"/>
      </div>
    </Container>
  )
}

export default App
