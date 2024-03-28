import React from 'react'
import { Usuarios } from '../interfaces/users.interface';

const TablaPart = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: Usuarios[] = await res.json();

    return (
        <div className="overflow-auto h-44">
            <table className="table table-pin-rows">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody> 
                {data.map(user => (
                    <tr key={user.id}>
                        <td></td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                        ))}                
                </tbody>
            </table>
        </div>
    )
}

export default TablaPart
