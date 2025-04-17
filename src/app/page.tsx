import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>Welcome To Home Page</h1>
      <Link href="/blog">
        <h1>Blog</h1>
      </Link>
      <Link href="/products">
        <h1>Product</h1>
      </Link>
      <Link href="/order-product">
        <h1>Orders</h1>
      </Link>
    </div>
  );
};

export default Page;
