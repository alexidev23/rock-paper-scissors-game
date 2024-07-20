export function RulesModal ({ isVisible, onClose }) {
  if (!isVisible) return null
  return (
    <div className='fixed inset-0 bg-gray-950 bg-opacity-70 flex items-center justify-center'>

      <div className='relative bg-white rounded-lg px-8 py-6 w-96 z-20'>
        <button
          onClick={onClose}
          className='absolute top-6 right-8 py-2'
        >
          <img
            src='/icon-close.svg'
            alt='Icon close'
            width={25}
          />
        </button>
        <h2 className='text-3xl uppercase font-bold text-DarkText'>Rules</h2>
        <img src='/image-rules.svg' alt='Reglas del piedra papel y tijera' className='m-auto mt-14' />
      </div>
    </div>
  )
}
