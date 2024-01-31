import PropTypes from "prop-types";
import styles from "./Button.module.css";
import classNames from "classnames";

const Button = ({ children, className }) => (
    <button className={classNames(className, styles.button)}>
        { children }
    </button>
)

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

export default Button;