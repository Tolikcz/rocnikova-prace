import React from 'react'
import { useParams } from 'react-router-dom'

export default function Kokot() {
    const {id} = useParams()

       const handlePost = () => {
        console.log(id)
       } 

  return (
    <div>{id}</div>
  )
}
