import css from "./FriendListItem.module.css";
import PropTypes from "prop-types";

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return <li key={id} className={css.item}>
        <span className={css.status}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
    </li>
};


FriendListItem.propTypes = {
id: PropTypes.number.isRequired,
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.string.isRequired,
}