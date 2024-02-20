import React from 'react'
import Card from './Card'

const ListCar = ({list}) => {
  return (
    <div>
    {list.map((el) => (
    <Card mov={el} key={el.id}/>
  )
  )}
    </div>
  )
}

export default ListCar