import React, { useState } from 'react'

function Input({ sendMessage }) {
  const [textArea, setTextArea] = useState('');

  function handler1({ target }) {
    setTextArea(target.value);
  }

  function handler2() {
    if (textArea === '') return
    sendMessage(textArea);
    setTextArea('');
  }

  return (
    <div>
      <label>Новая </label>
      <textarea name="text" cols="8" rows="8" id="" value={textArea} onChange={handler1}></textarea>
      <button onClick={handler2}>
          Отправить
      </button>
    </div>
  )
}

export default Input