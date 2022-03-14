import { useState } from 'react';
import Card from '../../components/Card/Card';

const FilteredProducts = ({ selectedProducts }) => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return <div>{"..."}</div>;
  }
  return (
    <div>
      {selectedProducts.length > 0 ? (
        selectedProducts.map((product) => (
          <Card
            key={product.id}
            name={product.data.name}
            image={product.data.mainimage.url}
            isProduct={true}
            price={product.data.price}
          />
        ))
      ) : (
        <p>No products</p>
      )}
    </div>
  );
};


export default FilteredProducts;
