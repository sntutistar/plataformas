import React from 'react'

export default function Libro({ libro, addToCart, onVerLibro }) {
    const { id, imagen, titulo, sinopsis, autor, precio } = libro

    return (
        <>
            <div className='libro'>
                <div className='libro-general'>
                    <div className='libro-imagen'>
                        <img src={imagen} alt="titulolibro" />
                    </div>
                    <div className='libro-informacion'>
                        <div className='libro-titulo'>
                            <p>{titulo}</p>
                        </div>
                        <div className='libro-autor'>
                            <p>Autor: <span> {autor}</span></p>
                        </div>
                        <div className='libro-sinopsis'>
                            <p>Sinopsis:{" "}<span>{sinopsis}</span></p>
                        </div>

                        <div className='libro-precio'>
                            <p>Precio:{" "}<span>$ {precio}</span></p>
                        </div>
                        <div className='libro-ver'>
                            <button
                                className='libro-ver__btn'
                                type="button"
                                onClick={onVerLibro}
                            >
                                Ver Libro
                            </button>
                            <button
                                type='button'
                                className='libro-comprar__btn'
                                onClick={() => addToCart(libro)}
                            >
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
