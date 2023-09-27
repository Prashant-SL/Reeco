import { SUPPLIERS_DETAILS } from "../data/order-data";

const SupplierDetails = () => {
  return (
    <div className="flex rounded-2xl bg-white divide-x-2 py-5 px-14 w-full justify-center mb-4">
      {SUPPLIERS_DETAILS.map((detail) => (
        <div key={detail.label} className="flex flex-col basis-1/6">
          <div className="mx-auto ml-5">
            <p className="text-gray-500 font-medium mb-1">{detail.label}</p>
            <p className="text-black font-semibold text-lg">{detail.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupplierDetails;
