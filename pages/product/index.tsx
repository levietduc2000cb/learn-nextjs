import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  console.log(router.query);

  return <div>{`Welcome to Product Page in Link`}</div>;
};

export default Product;
