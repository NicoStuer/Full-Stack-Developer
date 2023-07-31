import { useState } from "react";
import CartButton from "../../products/card_buttons/CartButton";
import DetailsButton from "../../products/card_buttons/DetailsButton";
import { useProducts } from "../../../context/useProducts";
import CustomModal from "./modal/CustomModal";

function ListView() {
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
    <main>
      <ul className="grid gap-4 grid-cols-1">
        {filteredProducts.map((product) => (
          <li key={product.id} className="bg-white rounded-lg shadow-md flex">
            <img
              src={product.image}
              alt={product.title}
              className="w-1/3 h-48 object-cover rounded-l-lg"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="text-gray-800 text-xl font-bold">
                  ${product.price}
                </p>
              </div>
              <p className="text-gray-600 mb-4">
                {product.description.substring(0, 100)}...
              </p>
              <div className="flex justify-between">
                <DetailsButton onClick={() => openModal(product)} />
                <CartButton product={product} />
              </div>
            </div>
          </li>
        ))}
        {isModalOpen && (
          <CustomModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            selectedProduct={selectedProduct}
          />
        )}
      </ul>
    </main>
  );
}

export default ListView;
