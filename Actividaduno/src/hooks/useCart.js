import { useState, useEffect, useMemo} from 'react'
import { db } from '../data/db'


export const useCart = () => {

    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }


    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)
    const MAX_ITEM = 5;
    const MIN_ITEM = 1

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCart(item) {
        const itemExist = cart.findIndex((libro) => libro.id === item.id)
        if (itemExist >= 0) {
            const updateCart = [...cart]
            updateCart[itemExist].quantity++
            setCart(updateCart)
        } else {
            item.quantity = 1
            setCart([...cart, item])
        }
    }

    function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(libro => libro.id !== id))
    }

    function aumentarQuantity(id) {
        const updateCart = cart.map(item => {
            if (item.id === id && item.quantity < MAX_ITEM) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updateCart)
    }

    function disminuirQuantity(id) {
        const updateCart = cart.map(item => {
            if (item.id === id && item.quantity > MIN_ITEM) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updateCart)
    }

    function limpiarCarrito() {
        setCart([])
    }

    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.precio), 0), [cart])


    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        aumentarQuantity,
        disminuirQuantity,
        limpiarCarrito,
        isEmpty,
        cartTotal
    }
}