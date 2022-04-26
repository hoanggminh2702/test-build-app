import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Products = (props: Props) => {
  return (
    <div>
      Products
      <Link to={"/products/1"}>Click Me</Link>
    </div>
  );
};

export default Products;
