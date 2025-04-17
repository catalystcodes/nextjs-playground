"use client";
import { useRouter } from "next/navigation";

const OrderProductPage = () => {
  const route = useRouter();
  const handleClick = () => {
    console.log("Order Placed");
    route.push("/");
  };

  return (
    <div>
      <h2>Order Product</h2>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default OrderProductPage;
