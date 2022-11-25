import { Col, Row } from "react-bootstrap";
import CardProduct from "../CardProduct";

const ItemListContainer = ({ products }) => {
  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} md={3} className="mt-3">
          <CardProduct product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ItemListContainer;
