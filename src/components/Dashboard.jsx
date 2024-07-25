import { buttonsGame } from '../constants/buttons'
import { Button } from './Button'

export function Dashboard ({ onButtonClick }) {
  const buttons = buttonsGame
  return (
    <div className='relative py-10 my-24'>
      <img
        src='/bg-triangle.svg'
        className='m-auto pt-[24px]'
        width={250}
      />
      <Button
        buttons={buttons}
        onButtonClick={onButtonClick}
      />
    </div>
  )
}
