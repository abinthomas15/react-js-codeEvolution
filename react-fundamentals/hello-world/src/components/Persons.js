import React from 'react'

function Persons({person}) {
  return (
    <div>
      <h2> I am {person.name}. I am {person.age}</h2>
    </div>
  )
}

export default Persons
