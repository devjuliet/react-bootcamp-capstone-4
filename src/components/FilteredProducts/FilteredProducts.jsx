import { useState } from 'react';
import Card from '../../components/Card/Card';

const products = ({ products }) => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  if (isLoading) {
    return <div>{"..."}</div>;
  }
  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <Card
            key={product.id}
            name={product.data.name}
            image={product.data.mainimage.url}
            price={product.data.price}
            category={product.data.category.slug}
          />
        ))
      ) : (
        <p>No products</p>
      )}
    </div>
  );
};


export default products;
