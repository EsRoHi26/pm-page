import React from 'react'
import { Participante, Proyectos } from '../interfaces/project.interface';

const TablaPart = async (id: {id:string}) => {
    const test:string = id.id;
    const url: string = 'https://pm-app-tmfg.onrender.com/api/proyectos/' + test;

    const res = await fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then((data: Proyectos) => data.correoColaboradores)
        .then(async (respu) => {
            const resp = await fetch('https://pm-app-tmfg.onrender.com/api/usuarios', { method: 'GET' })
                .then(response => response.json())
                .then(data => {
                    let lista: Participante[] = []; // Initialize lista as an empty array
                    data.map((user: Participante) => {
                        for (let email of respu){
                            if (user.email === email) {
                                lista.push(user); // Push user to lista
                            }
                        }
                    });
                    return lista; // Return lista instead of data
                });
            return resp; // Return resp instead of data
        });

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
                    {res.map(user => {
                        return (
                            <tr key={user._id}>
                                <td></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.telefono}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TablaPart
