import Layout from "@/components/Layout";
import ProductLayout from "@/components/ProductLayout";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";

const ConditionLayout = ["/"];

export default function App({ Component, pageProps }) {
  const path = usePathname();
  const GetLayout = ConditionLayout.includes(path) ? Layout : ProductLayout;

  return (
    <>
      <GetLayout>
        <Component {...pageProps} />
      </GetLayout>
    </>
  );
}
