import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './views/Index'
import Catalogo from './views/Catalogo'
import Landing from './views/Landing'
import Carrito from './views/Carrito'
import Pagado from './views/Pagado'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/pagado' element={<Pagado/>}/>
            <Route path='/inicio' element={<Index/>}/>
            <Route path='/catalogo' element={<Catalogo/>}/>
            <Route path='/carrito' element={<Carrito/>}/>
        </Routes>
    </BrowserRouter>
  )
}
