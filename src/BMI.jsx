import PropTypes from "prop-types";

export default function FormBMI({
  handleSubmit,
  handleHeight,
  handleM,
  height,
  m,
}) {
  return (
    <form>
      <input
        type="text"
        value={height}
        onChange={handleHeight}
        placeholder="height"
      />
      <input type="text" value={m} onChange={handleM} placeholder="m" />
      <button onClick={handleSubmit} type="button">
        Calculate BMI
      </button>
    </form>
  );
}

FormBMI.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleM: PropTypes.func.isRequired,
  handleHeight: PropTypes.func.isRequired,
  m: PropTypes.string.isRequired,
  heigth: PropTypes.string.isRequired,
};
