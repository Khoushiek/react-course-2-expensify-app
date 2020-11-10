import {firebase, googleAuthProvider, facebookAuthProvider} from "../firebase/firebase";

export const login = (uid) => {
  return {
    type: "LOGIN",
    uid
  };
};

export const startLoginWithGoogle = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider).then(function(result) {
      // Accounts successfully linked.
      var credential = result.credential;
      var user = result.user;
      // ...
    }).catch(function(error) {
      console.log(error);
      // Handle Errors here.
      // ...
    });;
  }
};

export const startLoginWithFacebook = () => {
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider).then(function(result) {
      // Accounts successfully linked.
      var credential = result.credential;
      var user = result.user;
      // ...
    }).catch(function(error) {
      console.log(error);
      // Handle Errors here.
      // ...
    });;
  }
};

export const logout = () => {
  return {
    type: "LOGOUT"
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
};