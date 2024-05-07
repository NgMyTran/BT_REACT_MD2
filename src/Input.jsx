import PropTypes from "prop-types";

export default function Input({ type, id, placeholder, value, onClick }) {
  return (
    <input
      type="password"
      id="id"
      placeholder="placeholder"
      value={value}
      onClick={onClick}
    ></input>
  );
}

Input.propTypes = {
  type: propTypes.string,
  id: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.func,
  onClick: propTypes.string,
};
