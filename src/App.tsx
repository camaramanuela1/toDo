import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import Icon from "./components/icon";
import SpinnerIcon from "./assets/icons/spinner.svg?react";

function App() {
  return (
    <>
      <Text variant="body-sm-bold" className="text-pink-base">hello world!</Text>
      <Icon svg={TrashIcon} className="fill-green-base" />
      <Icon svg={SpinnerIcon} animate />
    </>
  )
}

export default App
