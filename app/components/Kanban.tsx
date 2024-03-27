'use client'
import React from 'react'

let todo = [
    { "id": 1, "name": "Task1" },
    { "id": 2, "name": "Task2" }
]

let prog = [
    { "id": 3, "name": "Task3" },
    { "id": 4, "name": "Task4" }
]

let done = [
    { "id": 5, "name": "Task5" },
    { "id": 6, "name": "Task6" }
]

type tarea ={
    id:number,
    name:string
}

const Kanban = () => {

    function sig(list1:Array<tarea>, list2:Array<tarea>, id:number):any {
        for (let index = 1; index < list1.length; index++) {
            const element = list1[index];
            if(element.id === id){
                list2.concat([element])
            }
            console.log("hiiii")
        }
    }

    return (
        <div className='flex space-x-3 p-5'>
            <div className='flex-1 bg-lime-300 shadow-md p-4 rounded-md'>
                <h1>Todo</h1>
                {todo.map(({ id, name }) => (
                    <div key={id}>
                        <div className="bg-white shadow-md p-4 my-1 rounded-md">
                            <h1>{name}</h1>
                            <button onClick={sig(todo, prog, id)}>click</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex-1 bg-lime-500 shadow-md p-4 rounded-md'>
                <h1>In Progress</h1>
                {prog.map(({ id, name }) => (
                    <div key={id}>
                        <div className="bg-white shadow-md p-4 my-1 rounded-md">
                            <h1>{name}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex-1 bg-lime-700 shadow-md p-4 rounded-md'>
                <h1>Done</h1>
                {done.map(({ id, name }) => (
                    <div key={id}>
                        <div className="bg-white shadow-md p-4 my-1 rounded-md">
                            <h1>{name}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Kanban
