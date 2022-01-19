
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const CartItem = ({ producto, borrarItem }) => {
  return (
    <Card>
      <Container>
        <Row>
        {console.log(producto)}
          <Col>{producto.product.nombre}</Col>
          <Col>Cantidad :{producto.count}</Col>
          <Col>${producto.product.precio}</Col>
          <Col>
            <Button className="buttonVerMas" onClick={() => borrarItem(producto.product.id)}>Borrar Item</Button>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default CartItem;

