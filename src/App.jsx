import { useState } from 'react'
import { Header } from './components/Header'
import { RulesModal } from './components/RulesModal'
import './index.css'
import { Dashboard } from './components/Dashboard';
import { PlayGame } from './components/PlayGame';

function App () {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const playGame = false

  return (
    <main className='py-10 h-screen relative'>
      <Header />
      <button 
        onClick={openModal} 
        className="absolute bottom-6 right-8 border text-white px-8 py-1 rounded-lg hover:scale-105"
      >
        Rules
      </button>
      {
        playGame ? (
          <PlayGame 
            buttonSelected={'1'}
          />
        ) : (
          <Dashboard />
        )
      }
      <RulesModal
        isVisible={isModalVisible} 
        onClose={closeModal}
      />
    </main>
  )
}

export default App
