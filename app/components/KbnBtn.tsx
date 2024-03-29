'use client'
import React from 'react'
import { actualizar } from '../functions/Functions';

const KbnBtn = (id:{id:string,  estado:string, prjID:string}) => {
  return (
    <div>
      <button type="button" className="shadow-md bg-gray-400 rounded-md p-2" onClick={() => actualizar(id)}>
        </button>
    </div>
  )
}

export default KbnBtn
