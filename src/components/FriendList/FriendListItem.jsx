import styles from "./FriendListItem.module.css";
import PropTypes from "prop-types";

export const FriendListItem = ({ avatar, name, isOnline}) => {
    return <li className={styles.item}>
        <span className={isOnline ? styles.true : styles.false}>{isOnline}</span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
    </li>
};


FriendListItem.propTypes = {
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired,
}
