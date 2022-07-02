import React from 'react'

function Head({handler}) {
  return (
    <div>
      <div>Заметки</div>
      <button onClick={handler}>
          Обновить
      </button>
    </div>
  )
}

export default Head