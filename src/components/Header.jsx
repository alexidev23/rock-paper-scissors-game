export function Header () {
  return (
    <div className='border border-HeaderOutline w-[700px] m-auto rounded-lg px-8 py-4 flex justify-between'>
      <div>
        <img src='/logo.svg' alt='Titulo del juego' />
      </div>
      <div className='bg-white w-[120px] flex flex-col items-center justify-center rounded-md'>
        <span className='text-ScoreText font-semibold text-lg'>score</span>
        <span className='font-bold text-5xl text-DarkText'>12</span>
      </div>
    </div>
  )
}
