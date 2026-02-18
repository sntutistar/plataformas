import React from 'react'
import Header from '../components/Header'
import Navegacion from '../components/Navegacion'
import { useCart } from '../hooks/useCart'
import Listarcompra from '../components/Listarcompra'

export default function Carrito() {

    const { isEmpty, cartTotal, cart, removeFromCart, aumentarQuantity, disminuirQuantity, limpiarCarrito } = useCart()

    return (
        <>
            <Header
                cart={cart}
                removeFromCart={removeFromCart}
                aumentarQuantity={aumentarQuantity}
                disminuirQuantity={disminuirQuantity}
                limpiarCarrito={limpiarCarrito}
                isEmpty={isEmpty}
                cartTotal={cartTotal}
            />
            <Navegacion />

            <Listarcompra
                cart={cart}
                removeFromCart={removeFromCart}
                aumentarQuantity={aumentarQuantity}
                disminuirQuantity={disminuirQuantity}
                limpiarCarrito={limpiarCarrito}
                isEmpty={isEmpty}
                cartTotal={cartTotal}
            />

        </>

    )
}
