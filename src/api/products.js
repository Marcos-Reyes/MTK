export const getProductsRequest = async (categoryId) => {
  const response = await fetch(
    "https://my.api.mockaroo.com/products.json?key=19de51b0"
  );
  const jsonResponse = await response.json();
  if (categoryId) {
    return jsonResponse.filter((product) => product.categoria === categoryId);
  }
  return jsonResponse;
};

export const getDetailProductRequest = async (productId) => {
  const response = await fetch(
    "https://my.api.mockaroo.com/products.json?key=19de51b0"
  );
  const jsonResponse = await response.json();
  if (productId) {
    return jsonResponse.find((product) => product.id === Number(productId));
  }
  return jsonResponse;
};
