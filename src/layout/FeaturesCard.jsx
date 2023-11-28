import PropTypes from "prop-types";

function FeaturesCard(props) {
  return (
    <div className="flex flex-col items-center text-center p-5 w-full lg:w-1/4 border-2 border-brightColor bg-[#F0F0F6] cursor-pointer rounded-xl gap-2 hover:shadow-[0_3px_10px_rgb(0,0,0,0.5)]">
      {props.icon}
      <h3 className="font-semibold text-xl">{props.title}</h3>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est
        laboriosam reprehenderit aliquam similique a ratione molestiae odit
        atque! Nesciunt!
      </p>
    </div>
  );
}

FeaturesCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default FeaturesCard;
