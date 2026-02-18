import { NavLink } from "react-router-dom";

export default function Navegacion() {
    return (
        <>
            <div className='menu'>
                    <div className='menu-espacio'>
                        <NavLink 
                        to="/inicio"
                        className={({isActive}) => 
                            isActive ? 'menu-espacio__activo' : 'menu-espacio__desactivo'
                        }
                        >Inicio</NavLink>
                        <NavLink 
                        to="/catalogo"
                        className={({isActive}) => 
                            isActive ? 'menu-espacio__activo' : 'menu-espacio__desactivo'
                        }
                        >Catalogo</NavLink>
                        <NavLink 
                        to="/carrito"
                        className={({isActive}) => 
                            isActive ? 'menu-espacio__activo' : 'menu-espacio__desactivo'
                        }
                        >Carrito</NavLink>
                        <NavLink 
                        to="/"
                        className={({isActive}) => 
                            isActive ? 'menu-espacio__activo' : 'menu-espacio__desactivo'
                        }
                        >Mi cuenta</NavLink>
                    </div>
            </div>
        </>
    )
}