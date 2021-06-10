// const getIsAuthenticated = state => Boolean(state.auth.token);
const getIsAuthenticated = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.email;

// eslint-disable-next-line import/no-anonymous-default-export
export default { getIsAuthenticated: getIsAuthenticated, getUserName };
