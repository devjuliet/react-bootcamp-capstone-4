import React from "react";
import { useProductCategories } from "../../utils/hooks/useProductCategories";
import Card from "../Card";
import Loading from "../Loading";

const ProductCategories = () => {
  const { data, isLoading } = useProductCategories();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <h4>Categories</h4>
      <div>
        {data.results.map(({ id, data }) => (
          <Card key={id} id={id} name={data.name} image={data.main_image.url} />
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
