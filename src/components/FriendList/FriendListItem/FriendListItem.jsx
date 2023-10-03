import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const classNames = [css.status];
  if (isOnline) classNames.push(css.true);

  return (
    <li className={css.item}>
      <span className={classNames.join(' ')}></span>
      <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      ></img>
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
