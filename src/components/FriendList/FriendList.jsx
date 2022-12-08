import css from "./FriendList.module.css";
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
    return <ul className={css.friend_list}>
        {friends.map(friend => (
            <li key={friend.id} className={css.item}>
                <span className={css.status}>{friend.isOnline}</span>
                <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
                <p className={css.name}>{friend.name}</p>
            </li>
        )
        )
        
        }
    </ul>
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
 isOnline: PropTypes.string.isRequired,
};