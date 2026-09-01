import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
  return (
    <form className='form' action="">
      <div className='formRow'>
        <DefaultInput id="task" type="text" labelText="task" placeholder='Digite algo' />
      </div>
      <div className='formRow'>
        <p>Próximo ciclo é de FUNCTION</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  )
}