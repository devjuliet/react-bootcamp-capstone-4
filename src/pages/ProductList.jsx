import React, { useState, useEffect, useCallback } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import FilteredProducts from '../components/FilteredProducts';
import FilterByCategory from '../components/FilterByCategory';
import categoriesData from '../mocks/en-us/product-categories.json';
import productsData from '../mocks/en-us/products.json';

const ProductList = () => {
  const [categories, setCategories] = useState(() => {
    return categoriesData.results.map((category) => ({
      ...category,
      isActive: false,
    }));
  });

  const [filteredProducts, setFilteredProducts] = useState(() => [
    ...productsData.results,
  ]);

  const filterProducts = (activeCategoriesIds) => {
    const newProducts = productsData.results.filter((product) =>
      activeCategoriesIds.includes(product.data.category.id)
    );
    setFilteredProducts(newProducts);
  };

  const getActiveCategories =  useCallback(() => {
    const getCategories = categories.filter(
      (category) => category.isActive
    )
    .map((category) => category.id);
    return getCategories;
  }, [categories]);

  const categoriesSelected = (id) => {
    const modifiedCategories = categories.map((category) =>
      category.id === id ? { ...category, isActive: !category.isActive } : category
    );
    setCategories(modifiedCategories);
  };

  useEffect(() => {
    const activeCategories = getActiveCategories();
    if (activeCategories.length === 0) {
      setFilteredProducts([...productsData.results]);
      return;
    }
    filterProducts(activeCategories);
  }, [categories, getActiveCategories]);

  return (
    <div>
      <h1>Product List</h1>
      <section>
        <FilterByCategory
          renderProductsByCategories={categoriesSelected}
          categories={categories}
        />
        <FilteredProducts selectedProducts={filteredProducts} />
        <Stack spacing={2}>
          <Pagination count={10} />
        </Stack>
      </section>
    </div>
  );
};

export default ProductList;
