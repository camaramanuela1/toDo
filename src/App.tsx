import Text from "./components/text";
import Icon from "./components/icon";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input";
import InputCheckbox from "./components/checkbox";

import TrashIcon from "./assets/icons/trash.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import Card from "./components/card";

function App() {
  return (
    <>
      <Text variant="body-sm-bold" className="text-pink-base">hello world!</Text>
      <Icon svg={TrashIcon} className="fill-green-base" />
      <Icon svg={SpinnerIcon} animate />

      <Badge variant= "secondary">5</Badge>
      <Badge variant= "primary">2 de 5</Badge>

      <Button icon={PlusIcon}>Nova tarefa</Button>

      <ButtonIcon icon={TrashIcon} />
      <ButtonIcon icon={TrashIcon} variant="secondary" />
      <ButtonIcon icon={TrashIcon} variant="terciary" />

      <br/><br/>
      <InputText />

      <br /><br />
      <InputCheckbox />

      <br /><br />
      <Card size="md">Hello Card!</Card>
    </>
  )
}

export default App
