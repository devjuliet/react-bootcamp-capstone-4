import React from "react";
import Card from "../Card/Card";
import Button from '@mui/material/Button';
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";
import { Link } from 'react-router-dom';
import "./FeaturedProduct.css";

const FeaturedProducts = () => {
  const { data, isLoading } = useFeaturedProducts();
  if (isLoading) {
    return <div>{"..."}</div>;
  }

  return (
    <div>
      <h4>Featured Products</h4>
      <div className='content'>
        {data.results.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.data.name}
            image={product.data.mainimage.url}
            price={product.data.price}
            category={product.data.category.slug}
            isProduct={true}
          />
        ))}
      </div>
      <Button component={Link} to="/product-list" variant="contained" color="primary">
        View all products
      </Button>
    </div>
  );
};

export default FeaturedProducts;
