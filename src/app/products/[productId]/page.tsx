import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product  ${params.productId}`,
  };
};

const ProductPage = ({ params }: Props) => {
  return (
    <div>
      <h1>Product Details page {params.productId}</h1>
    </div>
  );
};

export default ProductPage;
