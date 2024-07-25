import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { RulesModal } from './components/RulesModal'
import './index.css'
import { Dashboard } from './components/Dashboard'
import { PlayGame } from './components/PlayGame'

function App () {
  const [isModalVisible, setModalVisible] = useState(false)
  const [playGame, setPlayGame] = useState(false)
  const [selectedButtonId, setSelectedButtonId] = useState(null)
  const [score, setScore] = useState(() => {
    // Inicializar el estado del puntaje desde localStorage
    const savedScore = localStorage.getItem('playerScore')
    return savedScore !== null ? parseInt(savedScore, 10) : 0
  })

  useEffect(() => {
    // Guardar el puntaje en localStorage cada vez que se actualiza
    localStorage.setItem('playerScore', score)
  }, [score])

  const openModal = () => setModalVisible(true)
  const closeModal = () => setModalVisible(false)

  const handleButtonClick = (buttonId) => {
    setSelectedButtonId(buttonId)
    setPlayGame(true)
  }

  const updateScore = (newScore) => {
    setScore(newScore)
  }

  return (
    <main className='py-10 h-svh relative'>
      <Header
        score={score}
      />
      {playGame
        ? (
          <PlayGame buttonSelected={selectedButtonId} playGame={playGame} updateScore={updateScore} />
          )
        : (
          <Dashboard onButtonClick={handleButtonClick} />
          )}
      <RulesModal
        isVisible={isModalVisible}
        onClose={closeModal}
      />
      <div className='w-full flex items-center justify-center sm:justify-end sm:absolute sm:bottom-6 sm:right-12'>
        <button
          onClick={openModal}
          className='border text-white text-2xl font-normal px-14 sm:px-8 py-3 sm:py-1 rounded-lg hover:scale-105'
        >
          Rules
        </button>
      </div>
    </main>
  )
}

export default App
