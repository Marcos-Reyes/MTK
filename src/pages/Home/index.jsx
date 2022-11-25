import Layout from "../../components/Layout";
import ItemListContainer from "../../components/ItemListContainer";
import { useEffect, useState } from "react";
import { getProductsRequest } from "../../api/products";
import { useParams } from "react-router";
const Home = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [categoryId]);

  async function getProducts() {
    const productsResponse = await getProductsRequest(categoryId);
    setProducts(productsResponse);
  }
  return (
    <Layout>
      <ItemListContainer products={products} />
    </Layout>
  );
};

export default Home;
