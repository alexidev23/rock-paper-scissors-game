import React from 'react'

function RestarGameModal ({ result, onClose }) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg text-center'>
        <h2 className='text-2xl mb-4 text-blue-700'>{result}</h2>
        <button
          onClick={onClose}
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default RestarGameModal
