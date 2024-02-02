import React from 'react'
import { useParams } from 'react-router-dom'

const UpdatePage = () => {
  const { id } = useParams()

  return (
    <div>
      UpdatePage
      <br />
      {id}
    </div>
  )
}

export default UpdatePage