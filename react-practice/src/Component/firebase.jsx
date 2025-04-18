import { getDatabase, ref, set } from 'firebase/database'
import React from 'react'
import { app } from './FirbaseConfig'

const db = getDatabase(app)

const Firebase = () => {

  const putdata = () => {
    set(ref(db, "xyz/users"),{
      id: 1,
      name: "aryan",
      age: 20
    })

  }
  return (
    <div>
      <h1>Welcome Firebase Database</h1>
      <button className='border p-2' onClick={putdata}>Putdata</button>
    </div>
  )
}

export default Firebase
