import PropTypes from "prop-types";

import Button from "./Button";

function ProductCard(props) {
  const { img, title, val } = props;

  return (
    <div className="flex flex-col items-center gap-4 bg-slate-100 w-full lg:w-2/4 p-5 rounded-lg cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition duration-300 ease-in-out">
      <img src={img} alt="product-img" />
      <h1 className="font-semibold text-3xl">{title}</h1>
      <h3>{val}</h3>
      <Button title="But Now" />
    </div>
  );
}

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
};

export default ProductCard;
