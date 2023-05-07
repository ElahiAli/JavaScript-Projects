import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={showAdd ? "Close" : "Add"}
        color={showAdd ? "red" : "green"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propType = {
  title: PropTypes.string.isRequired,
};

// css in js
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };
// how to use? <h1 style={headingStyle}>{title}</h1>
export default Header;
