import { useState, useEffect } from "react";
import { useProducts } from "../../context/useProducts";
import { NavLink } from "./NavLink";
import Cart from "../products/cart/Cart";
import { useLocation, useNavigate } from "react-router-dom";
import { ImList2 } from "react-icons/im";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";

function Navbar({ onViewChange, isListView }) {
  const { filters, setFilters } = useProducts();

  const [isShoppingSelected, setShoppingSelected] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  // Variable de estado para controlar la carga inicial
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleMobileMenuClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige automáticamente a la página "Home" cuando se actualiza la página
    if (isLoading && location.pathname !== "/") {
      navigate("/");
    }

    // Desactivar la carga inicial después del primer renderizado
    setIsLoading(false);
  }, [navigate, location, isLoading]);

  // Mostrar el buscador al seleccionar "Shopping"
  const handleShoppingClick = () => {
    setShoppingSelected(true);
    setShowSearch(true);
  };

  // Ocultar el buscador al hacer clic en "Home" o "Contact"
  const handleHomeContactClick = () => {
    setShoppingSelected(false);
    setShowSearch(false);
  };

  // Llamamos a la función para cambiar la vista, que se pasó como prop
  const handleViewChange = () => {
    onViewChange();
  };

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <nav className="bg-rose-950 fixed w-full z-10">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-start">
            <div className="hidden md:block">
              <div className="ml-0 flex items-baseline space-x-4">
                <NavLink
                  to="/"
                  exact
                  onClick={handleHomeContactClick}
                  isActive={() => location.pathname === "/"}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/shopping"
                  onClick={handleShoppingClick}
                  isActive={() => location.pathname.includes("/shopping")}
                >
                  Shopping
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={handleHomeContactClick}
                  isActive={() => location.pathname === "/contact"}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          {isShoppingSelected && (
            <div className="flex items-center justify-between space-x-4 mr-8">
              {showSearch && (
                <>
                  <div className="flex flex-col items-center">
                    <label
                      className="text-gray-300 text-lg font-medium"
                      htmlFor="price"
                    >
                      Price
                    </label>
                    <input
                      type="range"
                      id="price"
                      min="0"
                      max="1000"
                      onChange={handleChangeMinPrice}
                      value={filters.minPrice}
                    />
                    <span className="text-gray-300 text-lg font-normal pb-1">
                      U$S {filters.minPrice}
                    </span>
                  </div>
                  <div className="flex flex-col items-center mt-0 pt-0">
                    <label
                      htmlFor="category"
                      className="text-gray-300 text-lg font-medium pt-0"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      onChange={handleChangeCategory}
                      className="px-4 py-2 rounded bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 w-full mb-2"
                    >
                      <option value="all">All</option>
                      <option value="women's clothing">Women`s Clothing</option>
                      <option value="men's clothing">Men`s Clothing</option>
                      <option value="electronics">Electronics</option>
                      <option value="jewelery">Jewelery</option>
                    </select>
                  </div>
                </>
              )}
              <button
                className="bg-gray-600 px-3 py-2 rounded"
                onClick={handleViewChange}
              >
                {isListView ? <HiOutlineSquares2X2 /> : <ImList2 />}
              </button>
              <div className="flex items-center mt-3">
                <Cart className="mt-3" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="md:hidden text-white flex justify-center p-4 bg-gray-800">
        <button
          className="text-white focus:outline-none"
          onClick={handleMobileMenuClick}
        >
          <FaBars className="h-6 w-6" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden text-white text-center bg-gray-800 p-4">
          <NavLink
            to="/"
            exact
            onClick={handleHomeContactClick}
            isActive={() => location.pathname === "/"}
            className="block py-2 px-4 hover:text-blue-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/shopping"
            onClick={handleShoppingClick}
            isActive={() => location.pathname.includes("/shopping")}
            className="block py-2 px-4 hover:text-blue-300"
          >
            Shopping
          </NavLink>
          <NavLink
            to="/contact"
            onClick={handleHomeContactClick}
            isActive={() => location.pathname === "/contact"}
            className="block py-2 px-4 hover:text-blue-300"
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
