import PropTypes from "prop-types";

const Card = ({ data }) => {
  return (
    <>
      <li
        style={{
          border: "1px solid black",
          listStyle: "none",
          width: "120px",
        }}
      >
        <p>{data.name}</p>
      </li>
    </>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
