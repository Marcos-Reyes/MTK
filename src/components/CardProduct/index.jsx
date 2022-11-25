import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const CardProduct = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        alt={product.name}
        src={product.url}
        className={styles.imageCard}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.descripcion}</Card.Text>
        <div className="d-flex justify-content-center">
          <NavLink to={`/detalle/${product.id}`} className="btn btn-primary">
            Ver más
          </NavLink>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
