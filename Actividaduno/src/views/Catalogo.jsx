import Header from '../components/Header'
import Footer from '../components/Footer'
import Navegacion from '../components/Navegacion'
import Libro from '../components/Libro'
import { useCart } from '../hooks/useCart'
import Modallibro from '../components/Modallibro'
import { useState } from 'react'

export default function Catalogo() {

  const { isEmpty, cartTotal, data, cart, addToCart, removeFromCart, aumentarQuantity, disminuirQuantity, limpiarCarrito } = useCart()
  const [busqueda, setBusqueda] = useState('')
  const [libroSeleccionado, setLibroSeleccionado] = useState(null)
  const librosFiltrados = data.filter(libro =>
    libro.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    libro.autor.toLowerCase().includes(busqueda.toLowerCase())
  )

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
      <main className='libros'>
        <h2 className='libros-titulo'>Nuestros Libros</h2>
        <div className='header-busqueda'>
          <img className='header-busqueda__icon' src="/img/lupa.png" alt="" />
          <input
            className='header-busqueda__input'
            type="text"
            placeholder='Busqueda por titulo o autor'
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)} />
        </div>
        <div className='libros-listado'>
          {librosFiltrados.map((libro) => (
            <Libro
              key={libro.id}
              libro={libro}
              addToCart={addToCart}
              onVerLibro={() => setLibroSeleccionado(libro)}
            />
          ))}

        </div>

        <Modallibro
          libro={libroSeleccionado}
          onClose={() => setLibroSeleccionado(null)}
        />
      </main>
      <Footer />
    </>
  )
}
