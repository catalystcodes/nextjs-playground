"use client";
import { notFound } from "next/navigation";
import React from "react";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error Loading Review");
  }

  if (parseInt(params.reviewId) >= 1000) {
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
