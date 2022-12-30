import { useRouter } from "next/router";

const ProductIdDetail = () => {
  const router = useRouter();

  console.log(router);

  return <div>Đây là trang product Id Detail</div>;
};

export default ProductIdDetail;
