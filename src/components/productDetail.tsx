import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductDetail() {
  const [product, setProduct] = useState<any>(null);
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const res = await axios.get<any>(`https://dummyjson.com/products/${id}`);

      if (res.data) {
        const tripsFromServer = res.data;
        setProduct(tripsFromServer);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <main>
      {product === null ? (
        <p></p>
      ) : (
        <div>
          {product.images.map((img: any) => {
            return <img src={img} alt="dudi" />;
          })}
          <hr></hr>
        </div>
      )}
    </main>
  );
}
