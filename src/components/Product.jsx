import ProductCard from "../layout/ProductCard";

// ! Import All Image Product

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";

function Product() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold mt-24 lg:mt-14 text-center lg:text-start">
        Our Product
      </h1>
      <p className="mt-2 text-center lg:text-start">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
        cumque in quaerat saepe magnam.
      </p>

      <div className="flex flex-col lg:flex-row gap-7 mt-4">
        <ProductCard
          img={product1}
          alt="product-image1"
          val="$ 299"
          title="White Headphone"
        />
        <ProductCard
          img={product2}
          alt="product-image1"
          val="$ 399"
          title="Black Headphone"
        />
        <ProductCard
          img={product3}
          alt="product-image1"
          val="$ 599"
          title="Green Headphone"
        />
        <ProductCard
          img={product4}
          alt="product-image1"
          val="$ 799"
          title="Red Headphone"
        />
      </div>
    </div>
  );
}

export default Product;
