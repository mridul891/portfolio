import React from 'react'

const card = (props) => {
  return (
    <div className="timeline__item">
      <h1 className='timeline__title'>{props.category}</h1>
        <h3 className="timeline__title">{props.title}</h3>
    </div>
  )
}

export default card
