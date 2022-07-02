import React from 'react'

function Cards({ cards, onDelete }) {
  const cardList = cards.map((e) => {
    return (
      <div key={e.id}>
        <div>{e.content}</div>
        <button onClick={() => onDelete(e.id)}>
            закрыть
        </button>
      </div>
    )
  })
  return (
    <div>
      {cardList}
    </div>
  )
}

export default Cards