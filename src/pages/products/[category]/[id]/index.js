import useApi from "@/Hooks/useApi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductsInfoPage = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getProductsById } = useApi();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id)
      getProductsById(id)
        .then((data) => {
          setProduct(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
  }, [id]);

  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center text-4xl font-bold animate-pulse">
        ...Loading
      </div>
    );

  return (
    <>
      <main className="min-h-screen my-32 flex justify-center items-center ">
        <div className="border rounded-lg p-4 max-w-xs mx-auto text-center shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto rounded-lg mb-4"
          />
          <h2 className="text-lg font-bold mb-2">{product.title}</h2>
          <p className="text-sm text-gray-500 mb-2">
            Category: {product.category}
          </p>
          <p className="text-sm text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-2">Price: ${product.price}</p>
          <p className="text-yellow-500">Rating: {product.rating.rate}/5</p>
        </div>
      </main>
    </>
  );
};

export default ProductsInfoPage;
