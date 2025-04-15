import React from "react";

const ProductPage = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <h1>Product Details page {params.productId}</h1>
    </div>
  );
};

export default ProductPage;
