
export default function Modallibro({ libro, onClose }) {

    if (!libro) return null
    const { imagen, titulo, autor, sinopsis, precio } = libro
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
                <button className="modal-cerrar" onClick={onClose}>✕</button>

                <img src={imagen} alt={titulo} className="modal-imagen" />

                <h2 className="modal-contenido__titulo">{titulo}</h2>
                <p><strong>Autor:</strong> {autor}</p>
                <p><strong>Sinopsis:</strong> {sinopsis}</p>
                <p><strong>Precio:</strong> $ {precio}</p>
            </div>
        </div>
    )
}
