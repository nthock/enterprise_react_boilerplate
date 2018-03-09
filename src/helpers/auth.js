const Auth = {
  currentUser: () => {
    const user = localStorage.getItem('frontendReact:user');
    return user ? JSON.parse(user) : null;
  },
  fetchToken: () => {
    const user = Auth.currentUser();
    return user ? user.token : null;
  },
  signIn: (user) => {
    localStorage.setItem('frontendReact:user', JSON.stringify(user));
  },
  signOut: () => {
    localStorage.removeItem('frontendReact:user');
  },
};

export default Auth;
