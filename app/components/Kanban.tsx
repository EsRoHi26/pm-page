'use client'
import Link from 'next/link'
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
            <div className='flex-1 bg-gray-300 shadow-md p-4 rounded-md bg-opacity-40'>
                <div className='flex text-white'>
                    <div className='flex-1'>
                        <h1>Todo</h1>
                    </div>
                    <div className='flex'>
                        <div className='rounded bg-gray-400 bg-opacity-0 px-2 text-center shadow-md hover:shadow-none hover:bg-opacity-60'>
                            <Link href={"/new-task"}>+</Link>
                        </div>
                    </div>
                </div>
                {todo.map(({ id, name }) => (
                    <div key={id}>
                        <div className="bg-white shadow-md p-4 my-1 rounded-md">
                            <h1>{name}</h1>
                            <button onClick={sig(todo, prog, id)}>click</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex-1 bg-gray-300 shadow-md p-4 rounded-md bg-opacity-40'>
            <div className='flex text-white'>
                    <div className='flex-1'>
                        <h1>In Progress</h1>
                    </div>
                    <div className='flex'>
                        <div className='rounded bg-gray-400 bg-opacity-0 px-2 text-center text-white shadow-md hover:shadow-none hover:bg-opacity-60'>
                            <Link href={"/new-task"}>+</Link>
                        </div>
                    </div>
                </div>
                {prog.map(({ id, name }) => (
                    <div key={id}>
                        <div className="bg-white shadow-md p-4 my-1 rounded-md">
                            <h1>{name}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex-1 bg-gray-300 shadow-md p-4 rounded-md bg-opacity-40'>
            <div className='flex text-white'>
                    <div className='flex-1'>
                        <h1>Done</h1>
                    </div>
                    <div className='flex'>
                        <div className='rounded bg-gray-400 bg-opacity-0 px-2 text-center text-white shadow-md hover:shadow-none hover:bg-opacity-60'>
                            <Link href={"/new-task"}>+</Link>
                        </div>
                    </div>
                </div>
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
