import React from 'react';
import '../css/Item.css';
import { Link } from 'react-router-dom';


function Item( {producto} ) {
  return (
    <div className='itemContainer'>
      <h3 className='itemTitulo'>{producto.titulo}</h3>
      <div className='itemImgContainer'>
        <img className='itemImg' src={producto.img} type='image/jpeg' alt={producto.titulo} />
      </div>
      <p className='itemStock'>Stock: {producto.stock}</p>
      <h4 className='itemPrecio'>Precio: ${producto.precio}</h4>
      <Link to={`/producto/${producto.id}`}>
        <button className='btn__vermas'>Ver mas</button>
      </Link>
    </div>
  )
}

export default Item;