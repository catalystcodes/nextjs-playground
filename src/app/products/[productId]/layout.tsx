import React from "react";

const ProductDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <h2>Features Product</h2>
    </>
  );
};

export default ProductDetailLayout;
