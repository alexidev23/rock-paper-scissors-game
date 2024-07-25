export function Header ({ score }) {
  return (
    <div className='border border-HeaderOutline mx-8 sm:mx-0 sm:w-[700px] m-auto rounded-lg px-8 py-4 flex justify-between'>
      <div className='flex items-center justify-center'>
        <img src='/logo.svg' alt='Titulo del juego' className='w-28 sm:w-0' />
      </div>
      <div className='bg-white w-24 sm:w-[120px] flex flex-col items-center justify-center rounded-md py-2'>
        <span className='text-ScoreText font-semibold text-lg'>score</span>
        <span className='font-bold text-5xl text-DarkText'>{score}</span>
      </div>
    </div>
  )
}
