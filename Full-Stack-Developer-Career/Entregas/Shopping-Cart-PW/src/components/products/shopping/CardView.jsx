import { useState } from "react";
import CartButton from "../../products/card_buttons/CartButton";
import DetailsButton from "../card_buttons/DetailsButton";
import CustomModal from "./modal/CustomModal";
import { useProducts } from "../../../context/useProducts";

function CardView() {
  const { filteredProducts } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <main className="flex flex-wrap justify-center space-x-4 ">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className={
            "max-w-xs rounded overflow-hidden shadow-lg flex flex-col mt-16 bg-orange-100"
          }
        >
          <div className="h-64 relative">
            <img
              className="absolute top-0 left-0 w-full h-full object-contain pt-2"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="px-6 py-4 flex-grow flex flex-col">
            <div className="font-bold text-xl mb-2 h-14 overflow-hidden flex-grow-0">
              {product.title}
            </div>

            <p className="text-gray-700 text-base flex-grow">
              {product.description.length > 100
                ? `${product.description.substr(0, 100)}...`
                : product.description}
            </p>
            <div className="flex px-6 py-4 justify-end">
              <p className="flex text-gray-900 font-semibold justify-end">
                U$S {product.price}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-around">
            <DetailsButton onClick={() => openModal(product)} />
            <CartButton product={product} />
          </div>
        </div>
      ))}
      {isModalOpen && (
        <CustomModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          selectedProduct={selectedProduct}
        />
      )}
    </main>
  );
}

export default CardView;
