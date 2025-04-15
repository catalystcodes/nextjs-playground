import React from "react";

const Docs = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug.length === 2) {
    return (
      <h1>
        Docs Page for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug.length === 1) {
    return <h1>Docs Page for {params.slug[0]}</h1>;
  }

  return (
    <div>
      <h1>Docs Page</h1>
    </div>
  );
};

export default Docs;
