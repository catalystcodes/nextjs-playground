import { notFound } from "next/navigation";
import React from "react";

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.reviewId) >= 100) {
    return notFound();
  }

  return (
    <div>
      <h1>
        Review {params.reviewId} for product {params.productId}
      </h1>
    </div>
  );
};

export default ReviewDetail;
