import React from 'react'
import './Card1.css'


export default function Card1({gname, gyear}) {
  return (
    <div className='card'>Greeting from {gname} {gyear}</div>
  )
}
