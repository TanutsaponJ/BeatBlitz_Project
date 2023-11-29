import PropTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Collapse } from "react-collapse";

function FaqCard(props) {
  const { open, toggle, title, dec } = props;

  return (
    <div className="pt-[4px] mt-2">
      <div
        className="bg-slate-100 py-4 lg:px-[50px] px-5 flex justify-between items-center cursor-pointer rounded-t-xl"
        onClick={toggle}
      >
        <p className="text-xl font-semibold">{title}</p>
        <div className="text-lg">
          {open ? <FaMinus size={20} /> : <FaPlus size={20} />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="bg-slate-100 rounded-b-xl px-[50px] pb-[20px]">
          {dec}
        </div>
      </Collapse>
    </div>
  );
}

FaqCard.propTypes = {
  open: PropTypes.string.isRequired,
  dec: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default FaqCard;
