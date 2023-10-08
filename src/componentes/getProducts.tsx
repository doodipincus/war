import axios from "axios";
import { useEffect, useState } from "react";
import Products from "./products";

export default function GetProducts() {
  const [data, setData] = useState<any>(null);

  const getProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      if (res.data) {
        const products = res.data.products;
        setData(products);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Products products={data} />
    </>
  );
}
