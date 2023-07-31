import "./App.css";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import ProductState from "./context/products/ProductState";

function App() {
  return (
    <>
      <ProductState>
        <div>
          <div>
            <div>
              <ProductList />
            </div>
            <div>
              <Details />
            </div>
          </div>
        </div>
      </ProductState>
    </>
  );
}

export default App;
