import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const navigate = useNavigate();
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

  const getProductById = (id: string) => {
    navigate(`/productDetail/${id}`);
  };
  return (
    <main>
      {data === null ? (
        <p></p>
      ) : (
        <div>
          <div>
            {
              <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
              ></link>
            }
            <i id="addIcon" className="material-icons" onClick={() => {}}>
              view_comfy
            </i>
            <i id="addIcon" className="material-icons" onClick={() => {}}>
              view_headline
            </i>
          </div>
          <h1>ALL PRODUCTS</h1>
          <h3>dudi</h3>
          {data.map((product: any) => {
            return (
              <div key={product.id} onClick={() => getProductById(product.id)}>
                <p>{product.title}</p>
                <hr></hr>
                <img src={product.images[0]} />
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
