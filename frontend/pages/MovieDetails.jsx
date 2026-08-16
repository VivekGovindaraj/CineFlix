import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDeatils = () => {
  const {id} = useParams();
  return (
    <div>MovieDeatils{id}</div>
  )
}

export default MovieDeatils