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
    <main className='py-10 h-screen relative'>
      <Header
        score={score}
      />
      <button
        onClick={openModal}
        className='absolute bottom-6 right-8 border text-white px-8 py-1 rounded-lg hover:scale-105'
      >
        Rules
      </button>
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
    </main>
  )
}

export default App
