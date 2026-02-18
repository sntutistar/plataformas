import Header from '../components/Header'
import Navegacion from '../components/Navegacion'
import Footer from '../components/Footer'
import Sesion from '../components/Sesion'
import Generos from '../components/Generos'
import { useCart } from '../hooks/useCart'
import Vistapreeliminar from '../components/Vistapreeliminar'

export default function Index() {

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

            <main className="informativo">
                <Vistapreeliminar />
            </main>

            <section className='generos'>
                <Generos/>

            </section>

            <section className='sesion'>
                <Sesion/>
            </section>

            <Footer />


        </>
    )
}
