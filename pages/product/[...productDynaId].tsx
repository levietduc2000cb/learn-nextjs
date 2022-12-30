import { useRouter } from "next/router";

export interface productDyna {}

const ProductDynaId = (props: productDyna) => {
  const router = useRouter();
  console.log(router);

  return <div>Đây là trang product Dyna Id</div>;
};
export default ProductDynaId;
