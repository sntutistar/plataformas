import { useEffect, useState } from "react";
import { db } from "../data/db";

export default function Vistapreeliminar() {

    const [item, setItem] = useState(0)

    useEffect(() => {
        const intervalo = setInterval(() => {
            setItem((prevItem) => prevItem === db.length - 1 ? 0 : prevItem + 1)
        }, 3000)
        return () => clearInterval(intervalo)
    }, [])

    const libroActual = db[item];
    return (
        <>
            <div className='informativo-contenedor'>
                <div className='informativo-contenedor__img'>
                    <img src={libroActual.imagen} alt="imagenlibro" />
                </div>
                <div className='informativo-contenedor__libro'>
                    <p>
                        Titulo: <span> {libroActual.titulo} </span>
                    </p>
                    <p>
                        Autor: <span> {libroActual.autor}</span>
                    </p>
                    <p>
                        Sinopsis
                    </p>
                    <p className='informativo-contenedor__sinopsis'>
                        {libroActual.sinopsis}
                    </p>
                    <div className='informativo-contenedor__op'>
                        <p>"A todos nos toca un relato"</p>
                        <a href="/catalogo">Ver Similares</a>
                    </div>
                </div>
            </div>
        </>

    )
}
