import PropTypes from "prop-types";
import styles from "./FadeIn.module.css";

const FadeIn = ({ delay = "0", duration = "1s", children }) => (
    <span 
        style={{ animationDelay: delay, animationDuration: duration }}
        className={styles.delayed}
    >
        {children}
    </span>
)

FadeIn.propTypes = {
    delay : PropTypes.string,
    duration : PropTypes.string,
    children : PropTypes.node,
}

export default FadeIn;