import OrderHeader from "./components/OrderHeader";
import SupplierDetails from "./components/SupplierDetails";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div id="app">
      <div className="shadow-md bg-white w-full pb-1">
        <OrderHeader />
      </div>
      <div className="w-[85%] my-4 mx-auto flex flex-col">
        <SupplierDetails />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
