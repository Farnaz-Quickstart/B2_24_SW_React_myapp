import React, { useState } from 'react'

export default function Counter() {
  const [counter, setCounter] = useState(0)
  let handleClick = () => {
    setCounter (counter+1)
  }

  return (
    <>
      <h1>This is Counter component {counter}</h1>
      <button type="button" onClick={handleClick} >Click Here</button>
    </>
  )
}
