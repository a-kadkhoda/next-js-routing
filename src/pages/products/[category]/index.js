import Card from "@/components/Card";
import useApi from "@/Hooks/useApi";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const { getProductsByCategory } = useApi();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { category } = router.query;
  useEffect(() => {
    if (category)
      getProductsByCategory(category)
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
  }, [category]);




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
                className="flex justify-center"
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

export default CategoryPage;
