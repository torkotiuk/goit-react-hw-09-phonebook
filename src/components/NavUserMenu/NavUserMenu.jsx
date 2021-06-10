import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import avatarImage from './defaultAvatar.jpg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
    cursor: 'pointer',
  },
};
const NavUserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      {/* <button type="button" onClick={onLogout}>
        Logout
      </button> */}
      {/* <Button type="submit" variant="contained" size="small" onClick={onLogout}>
        Logout
      </Button> */}
      <p onClick={onLogout} style={styles.link}>
        Logout
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: avatarImage,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavUserMenu);
