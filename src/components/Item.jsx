import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export default function Item({ title, description, price, id, stock, imageId, categoryId }) {

  return (
    <Card className="mb-4" style={{ width: '18rem' }}>
      <Card.Body>
        
        <Card.Img className="mb-4" variant="top" src={imageId} />
        <div className="d-flex align-items-center justify-content-between">
          <Card.Title>{title}</Card.Title>
          <Badge bg="secondary">{categoryId}</Badge>
        </div>
        <p>Descripción: {description}</p>
        <h6><i>${price}</i></h6>
        
        <NavLink to={`/producto/${id}`}>
          <div className="d-grid gap-2 mt-3">
            <Button variant="outline-primary">Ver más</Button>
          </div>
        </NavLink>
        
      </Card.Body>
    </Card>
  );
}
