import PropTypes from "prop-types";
import styles from "./SeparationLine.module.css";
import classNames from "classnames";

const SeparationLine = ({ width, delay, className}) => (
    <div 
        className={classNames(styles.line, className)}
        style={{ maxWidth: width, animationDelay: delay }}>
    </div>
);

SeparationLine.propTypes = {
    width: PropTypes.string,
    delay: PropTypes.string,
    className: PropTypes.string,
}

export default SeparationLine;