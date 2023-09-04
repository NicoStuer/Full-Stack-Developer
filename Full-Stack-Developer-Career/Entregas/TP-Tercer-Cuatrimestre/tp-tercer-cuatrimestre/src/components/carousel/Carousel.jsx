import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "tailwindcss/tailwind.css";

const CarouselComponent = () => {
  const images = [
    "/images/nature-house.jpg",
    "/images/city-apartment.jpg",
    "/images/family-house.jpg",
    "/images/luxury-house.jpg",
    "/images/relax-house.jpg",
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index}`}
              className="w-full h-screen object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;