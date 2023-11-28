import PropTypes from "prop-types";

function Button(props) {
  return (
    <div>
      <button className="bg-backgroundColor text-white px-4 py-2 rounded-md hover:bg-brightColor transition duration-300 ease-in-out ">
        {props.title}
      </button>
    </div>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
