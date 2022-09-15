import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "./Item";
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import {data} from "./data.js";


export default function ItemList() {

  const [vestidos, setVestidos] = useState([]);
  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    getItem.then((res) => {
      console.log(res);
      setVestidos(res);
    });
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {vestidos.length !== 0 ? (
          vestidos.map((item) => {
            return (
              <Col>
                <Item
                  key={item.id}
                  name={item.nombre}
                  description={item.descripcion}
                  price={item.precio}
                  id={item.id}
                  stock={item.stock}
                ></Item>
              </Col>
            );
          })
        ) : (
          <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          </div>
        )}
      </Row>
    </Container>
  );
}