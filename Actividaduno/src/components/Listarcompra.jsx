import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Listarcompra({ isEmpty, cartTotal, cart, removeFromCart, aumentarQuantity, disminuirQuantity, limpiarCarrito }) {

    const [pagoRealizado, setPagoRealizado] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!pagoRealizado) return;

        const timer = setTimeout(() => {
            navigate("/pagado");
        }, 1000);

        return () => clearTimeout(timer);
    }, [pagoRealizado, navigate]);


    return (
        <>
            <div className='listarcntd'>
                {isEmpty ? (
                    <p className="header-carrito__crv">El carrito esta vacio</p>
                ) : (
                    <>
                        <table className='carrito-table'>
                            <thead>
                                <tr className='carrito-table__thead carrito-table__tr'>
                                    <th>Imagen</th>
                                    <th>titulo</th>
                                    <th>Precio U</th>
                                    <th>Precio T</th>
                                    <th>Cantidad</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((libro) => (
                                    <tr className='carrito-table__tr' key={libro.id}>
                                        <td><img className='carrito-table__img' src={libro.imagen} alt={libro.imagen} /></td>
                                        <td>{libro.titulo}</td>
                                        <td>{libro.precio}</td>
                                        <td>{libro.precio * libro.quantity}</td>
                                        <td><div className='header-carrito__tablecntf'>
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                                onClick={() => disminuirQuantity(libro.id)}
                                            >
                                                -
                                            </button>
                                            {libro.quantity}
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                                onClick={() => aumentarQuantity(libro.id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        </td>
                                        <td><button
                                            className="btn btn-danger"
                                            type="button"
                                            onClick={() => removeFromCart(libro.id)}
                                        >
                                            X
                                        </button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <p className="text-end">Total a pagar: <span className="fw-bold">${cartTotal}</span></p>
                        <button
                            className="btn btn-dark w-100 mt-3 p-2"
                            onClick={() => {
                                limpiarCarrito();
                                setPagoRealizado(true);
                            }}
                        >
                            Pagar
                        </button>
                    </>
                )}

            </div>
        </>
    )
}
