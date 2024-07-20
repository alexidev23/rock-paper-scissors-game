export function Button ({ buttons, onButtonClick }) {
  return (
    <>
      {
        buttons.map(button => (
          <button
            key={button.id}
            className={`w-36 h-36 rounded-full flex items-center justify-center ${button.background} ${button.position} ${button.effect}`}
            onClick={() => onButtonClick(button.id)}
          >
            <div className='bg-white w-28 h-28 rounded-full flex items-center justify-center'>
              <img
                src={`/${button.image}`}
                alt={button.name}
              />
            </div>
          </button>
        ))
      }
    </>
  )
}
