export default function Header({ isEmpty, cartTotal, cart, removeFromCart, aumentarQuantity, disminuirQuantity, limpiarCarrito }) {

    return (
        <>
            <header className="header">
                <div className='header-logo'>
                    <a href="/">
                        <img className='header-logo__img' src="/img/logo.png" alt="logo" />
                    </a>
                </div>

                <h1 className="header-titulo">Relatos de papel</h1>

                <div className='header-carrito'>
                    <img className='header-carrito__img' src="/img/carrito.png" alt="carrito" />
                    <div className='header-carrito__detalles'>
                        {isEmpty ? (
                            <p className="header-carrito__crv">El carrito esta vacio</p>
                        ) : (
                            <>
                                <table className="header-carrito__table">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th>Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((libro) => (
                                            <tr key={libro.id}>
                                                <td>
                                                    <img className="header-carrito__tableimg" src={libro.imagen} alt="imagen guitarra" />
                                                </td>
                                                <td>{libro.titulo}</td>
                                                <td className="header-carrito__tableprc">
                                                    {libro.precio}
                                                </td>
                                                <td className="header-carrito__tablecnt">
                                                    <div className='header-carrito__tablecntf'>
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
                                                <td>
                                                    <button
                                                        className="btn btn-danger"
                                                        type="button"
                                                        onClick={() => removeFromCart(libro.id)}
                                                    >
                                                        X
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="text-end">Total a pagar: <span className="fw-bold">${cartTotal}</span></p>
                                <a className="btn btn-dark w-100 mt-3 p-2" href="/carrito">Pagar</a>

                            </>
                        )}
                        <button
                            className="btn btn-dark w-100 mt-3 p-2"
                            onClick={limpiarCarrito}
                        >Vaciar Carrito</button>

                    </div>
                </div>
            </header>
        </>
    )
}
