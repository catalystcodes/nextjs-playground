"use client";

import { useRouter } from "next/navigation";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: {
//     absolute: "Blog",
//   },
// };

const Blog = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <h1>Blog Page</h1>
      <button onClick={handleClick}>Go back</button>
    </div>
  );
};

export default Blog;
