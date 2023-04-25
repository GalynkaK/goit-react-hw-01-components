import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friend}>
      <span className={isOnline ? css.isOnline : css.isOffline}></span>
      <img className={css.avatarImg}
        src={avatar}
        alt={name}
        width="6" />
      {name}
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};