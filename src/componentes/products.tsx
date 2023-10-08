export default function Products(props: any) {
  const products = props.products;
  console.log(products);
  return (
    <>
      {products === null ? (
        <p></p>
      ) : (
        products.map((product: any) => {
          return (
            <div key={product.id}>
              <p>{product.title}</p>
              <hr></hr>
              <img src={product.images[0]} />;
            </div>
          );
        })
      )}
    </>
  );
}
