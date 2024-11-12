import Card from "@/components/Card";
import useApi from "@/Hooks/useApi";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { getProducts } = useApi();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {};
  }, []);

  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center text-4xl font-bold animate-pulse">
        ...Loading
      </div>
    );
  return (
    <>
      <main className="min-h-screen my-32 ">
        <div className="container grid grid-cols-6 gap-10 ">
          {products?.map((item) => {
            return (
              <Link
                key={item.id}
                className="flex justify-cente"
                href={`/products/${item.category}/${item.id}`}
              >
                <Card {...item} />
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default ProductsPage;
