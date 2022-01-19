import React, { useState } from "react"

const ItemCount = ( {stock, initial, OnAdd}) => {

    const [ contador, setContador ] = useState(initial);

    const sumarProducto = () => {
        setContador(contador + 1)
    }
    const restarProducto = () => {
            setContador(contador - 1)
    }

    const AddtoCart = () => {
        OnAdd(contador);
       
      };

    return (
    <div className="divCentrado">
        <button type="button" className="btn btn-secondary px-3 my-3" onClick={() => restarProducto()} disabled={contador === initial}> - </button>
        <p className="linksEstilo">{contador}</p>
        <button type="button" className="btn btn-secondary px-3 my-3" onClick={() => sumarProducto()} disabled={contador >= stock}> + </button>

        <button type="button" className="btn btn-secondary p-2" onClick={AddtoCart}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount;