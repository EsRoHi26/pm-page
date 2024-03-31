'use client'
import React from 'react'
import { eliminar } from '../functions/Functions';

const KbnDelBtn = (id:{id:string,  estado:string, prjID:string}) => {
  return (
    <div>
      <button type="button" className="shadow-md bg-red-700 rounded-md p-2" onClick={() => eliminar(id)}>
        </button>
    </div>
  )
}

export default KbnDelBtn