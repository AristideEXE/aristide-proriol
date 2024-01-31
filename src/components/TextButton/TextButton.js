import PropTypes from "prop-types";
import styles from "./TextButton.module.css";
import Button from "../Button/Button";

const TextButton = ({ text, className }) => (
    <Button className={className}>
        <p className={styles.text}>{ text }</p>
    </Button>
);

TextButton.propTypes = {
    text : PropTypes.string,
    className: PropTypes.string,
}

export default TextButton;