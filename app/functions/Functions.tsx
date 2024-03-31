import React from 'react'

export async function actualizar(id: { id: string, estado: string, prjID:string}): Promise<void> {
    const s: string = id.id;
    const p: string = id.prjID;
    console.log(s);
    const e: string = id.estado;
    const url: string = 'http://localhost:9000/api/proyectos/' +p +'/tareasEstado/'+ s;
    console.log(url);
    console.log(e);
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            estado: e
        })
    }).then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

export async function eliminar(id: { id: string, estado: string, prjID:string}): Promise<void> {
    const s: string = id.id;
    const p: string = id.prjID;
    const url: string = 'http://localhost:9000/api/proyectos/' +p +'/tareasD/'+ s;
    fetch(url, {
        method: 'GET',
    }).then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

