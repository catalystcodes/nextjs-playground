import Link from "next/link";
import React from "react";

const Page = () => {
  const productId = 100;
  return (
    <div>
      <h1>Products List</h1>
      <Link href="/products/1">
        <h2>Product 1</h2>
      </Link>
      <Link href="/products/2">
        <h2>Product 2</h2>
      </Link>
      <Link href="/products/3">
        <h2>Product 3</h2>
      </Link>
      <Link href="/products/4">
        <h3>Product {productId}</h3>
      </Link>
    </div>
  );
};

export default Page;
