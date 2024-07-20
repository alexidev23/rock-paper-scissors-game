import { buttonsGame } from "../constants/buttons";
import { Button } from "./Button";

export function Dashboard () {
  const buttons = buttonsGame
  return (
    <div className='relative py-10 my-10'>
        <img
          src='/bg-triangle.svg'
          className='m-auto pt-[24px]'
          width={250}
        />
        <Button
          buttons={buttons}
        />
      </div>
  )
}