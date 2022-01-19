import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import ItemCount from "./ItemCount";
import { UseCartContext } from './CartContext'


const ItemDetail  = ({producto}) => {

    const {addtoCart} = UseCartContext();

    const OnAdd = (contador) => {

        addtoCart(producto, contador);
    
       };
    

    return (
        <Container>
            <Row>
                <Col><h3>{producto.nombre}</h3>
                    <img src={producto.img} alt={producto.nombre} width="50%"/>
                </Col>
                <Col style={{display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <p>Categoría: {producto.categoria} </p>
                    <p>Precio: ${producto.precio} </p>
                    <p>{producto.detalle}</p>
                     <ItemCount stock= {producto.stock} initial={1} OnAdd={OnAdd} />
                        <Link className='btn btn-secondary' to={`/`}>Volver a Inicio</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail;


