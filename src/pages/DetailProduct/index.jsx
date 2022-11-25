import Layout from "../../components/Layout";
import { getDetailProductRequest } from "../../api/products";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
const DetailProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    return () => {
      getDetailProduct();
    };
  }, [productId]);

  const getDetailProduct = async () => {
    const productResponse = await getDetailProductRequest(productId);
    setProduct(productResponse);
  };

  return (
    <Layout>
      {product && (
        <Row>
          <Col md={4}>
            <img className="w-100" src={product.url} alt={product.name} />
          </Col>
          <Col md={8}>
            <h2>{product.name}</h2>
            <p>{product.descripcion}</p>
            <p>Precio: {product.precio}</p>
          </Col>
        </Row>
      )}
    </Layout>
  );
};

export default DetailProduct;
