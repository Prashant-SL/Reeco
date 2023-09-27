import { useDispatch } from "react-redux";
import Button from "./Button";
import { approveAllProducts } from "../Redux/reducers/orderReducer";

const OrderHeader = () => {
  const dispatch = useDispatch();
  const handleApproveAllProducts = () => {
    dispatch(approveAllProducts());
  };

  return (
    <div className="w-[85%] mx-auto py-2 flex flex-col gap-y-3">
      <p>
        Orders &gt;&nbsp;
        <span className="underline underline-offset-4">Order 32457ABC</span>
      </p>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-xl">Order 32457ABC</p>
        <div className="flex gap-x-4">
          <Button text={"Back"} type="secondary" />
          <Button onClick={handleApproveAllProducts} text={"Approve Order"} />
        </div>
      </div>
    </div>
  );
};

export default OrderHeader;
