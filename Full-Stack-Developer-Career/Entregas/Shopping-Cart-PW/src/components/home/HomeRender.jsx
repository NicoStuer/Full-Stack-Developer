import { useState, useEffect } from "react";
import { useProducts } from "../../context/useProducts";
import "./HomeRender.css";

function HomeRender() {
  const { products } = useProducts();
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * products.length);
        } while (randomIndex === prevIndex);

        return randomIndex;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [products]);

  const currentProduct = products[currentImageIndex];
  const categoryInUpperCase = currentProduct.category.toUpperCase();

  return (
    <div className="flex items-center justify-center">
      <div className="flex tems-center justify-center image-container pt-8">
        <div
          className="custom-shape-image w-1/2 sm:w-1/3 h-1/2 sm:h-1/3"
          style={{
            backgroundImage: `url(${products[currentImageIndex].image})`,
          }}
        >
          <span className="absolute font-bold bottom-1/3 right-1/3 p-6 text-4xl rounded-full bg-red-700 text-black">
            {categoryInUpperCase}
          </span>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute">
        <defs>
          <clipPath id="mask">
            <path
              d="M0,370.6c-0.5,35,29.5,68,60,82.8c40.8,19.7,82.2,6.8,99.3,1.4c76-23.8,83.3-81.4,130.3-79.9c43.9,1.4,53.2,52.1,102.2,52.5
          c38.6,0.3,67.2-30.9,79.9-44.6c44.4-48.3,49.5-116.9,33.1-165.5c-6-17.7-11.5-34.1-27.4-45.3c-30.9-22-62.5,2.7-96.2-16.2
          c-27.9-15.7-17.7-39-44.8-68c-44.9-47.9-125.5-40.2-155.5-37.3C145.6,53.7,101.3,58,66.5,92c-43.9,42.9-46.3,107.1-46.8,120.2
          c-1.7,45.2,14.1,62.2,1.4,103.6C12.1,345.6,0.3,348.8,0,370.6z"
              stroke="white"
            />
            <path
              d="M373.8,89.9c2.7-4.9,14.3-24.5,37.4-30.2c5.6-1.4,18.5-4.6,30.9,2.2c18.8,10.2,20,33.9,20.2,38.1c0.1,3.2,0.6,21.6-8.6,25.9
          c-6.9,3.3-13-4.5-24.5-1.4c-7.4,1.9-7.1,5.7-13.7,7.9c-12.5,4.2-32-3.2-39.6-18.7C371.2,103.7,372.8,94,373.8,89.9z"
              stroke="white"
            />
            <path
              d="M432.1,133.8c-4.2,1.6-9.3,6-8.6,10.8c0.7,5.5,8.7,9.2,15.1,7.9c6.7-1.4,12.4-8.5,10.8-13.7
          C447.7,133.4,438.5,131.3,432.1,133.8z"
              stroke="white"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default HomeRender;
