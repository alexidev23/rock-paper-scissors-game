import { useState, useEffect } from 'react'
import { buttonsGame } from '../constants/buttons'
import Spinner from './Spinner'
import RestarGameModal from './RestarGameModal' // Asegúrate de tener un componente Modal
import confetti from 'canvas-confetti'

export function PlayGame ({ buttonSelected, playGame, updateScore }) {
  const [isLoading, setIsLoading] = useState(true)
  const [buttonCpu, setButtonCpu] = useState(null)
  const [result, setResult] = useState(null) // Estado para almacenar el resultado del juego
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [gameFinished, setGameFinished] = useState(false) // Estado para indicar si el juego ha terminado

  const button = buttonsGame.find(button => button.id === buttonSelected)

  useEffect(() => {
    if (playGame && !gameFinished) {
      const randomButton = Math.floor(Math.random() * 3) + 1
      const buttonCpuSelected = buttonsGame.find(button => button.id === randomButton.toString())

      // Simula un tiempo de carga antes de mostrar el resultado
      const timeoutId = setTimeout(() => {
        setButtonCpu(buttonCpuSelected)
        setIsLoading(false)

        // Comparar los IDs y actualizar el puntaje y el resultado del juego
        if (buttonSelected === buttonCpuSelected.id) {
          setResult('Draw')
        } else if (
          (buttonSelected === '1' && buttonCpuSelected.id === '2') ||
          (buttonSelected === '2' && buttonCpuSelected.id === '3') ||
          (buttonSelected === '3' && buttonCpuSelected.id === '1')
        ) {
          setResult('You win')
          updateScore(prevScore => prevScore + 1)
          confetti()
        } else {
          setResult('You lose')
          updateScore(prevScore => Math.max(0, prevScore - 1))
        }
        setIsModalVisible(true) // Mostrar el modal con el resultado
        setGameFinished(true) // Marcar el juego como terminado
      }, 2000) // 2000 ms = 2 segundos

      return () => clearTimeout(timeoutId) // Limpia el timeout si el componente se desmonta
    }
  }, [playGame, buttonSelected, updateScore, gameFinished])

  return (
    <div className='flex sm:w-[700px] m-auto justify-around text-white uppercase my-24 sm:my-10'>
      <div className='text-center px-4 pb-8 flex flex-col-reverse sm:flex-col gap-10'>
        <h2>You Picked</h2>
        {button && (
          <div key={button.id} className={`w-36 sm:w-56 h-36 sm:h-56 rounded-full flex items-center justify-center ${button.background}`}>
            <div className='bg-white w-24 sm:w-44 h-24 sm:h-44 rounded-full flex items-center justify-center'>
              <img
                src={`/${button.image}`}
                alt={button.name}
                className='sm:w-20'
              />
            </div>
          </div>
        )}
      </div>
      <div className='px-4 pb-8 text-center flex flex-col-reverse sm:flex-col items-center justify-center gap-10'>
        <h2>The House Picked</h2>
        {isLoading
          ? (
            <div className='bg-[#0d1f3a5e] w-36 sm:w-48 h-36 sm:h-48 rounded-full flex items-center justify-center'>
              <Spinner />
            </div>
            )
          : (
              buttonCpu && (
                <div key={buttonCpu.id} className={`w-36 sm:w-56 h-36 sm:h-56 rounded-full flex items-center justify-center ${buttonCpu.background}`}>
                  <div className='bg-white w-24 sm:w-44 h-24 sm:h-44 rounded-full flex items-center justify-center'>
                    <img
                      src={`/${buttonCpu.image}`}
                      alt={buttonCpu.name}
                      className='sm:w-20'
                    />
                  </div>
                </div>
              )
            )}
      </div>
      {isModalVisible && (
        <RestarGameModal
          result={result}
          onClose={() => window.location.reload()} // Recargar la página al cerrar el modal
        />
      )}
    </div>
  )
}
