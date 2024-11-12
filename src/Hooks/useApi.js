const useApi = () => {
  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (res.status === 200) {
        return await res.json();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getProductsByCategory = async (category) => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      if (res.status === 200) {
        return await res.json();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getProductsById = async (id) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (res.status === 200) {
        return await res.json();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { getProducts, getProductsByCategory, getProductsById };
};

export default useApi;
