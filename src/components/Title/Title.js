import PropTypes from "prop-types";
import styles from "./Title.module.css";

const Title = ({ title, afterTitle }) => (
    <div className={styles.title}>
        <h1>{ title }</h1>
        {afterTitle}
    </div>
);

Title.propTypes = {
    title : PropTypes.string.isRequired,
    afterTitle: PropTypes.node
}

export default Title;