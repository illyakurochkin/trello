import firebase from 'firebase';
import * as firebaseui from 'firebaseui'

const config = {
  apiKey: 'AIzaSyAF0D2aSgIguxzVzzxbHfvFJBTsVoCIhFA',
  authDomain: 'auth-f570a.firebaseapp.com',
  databaseURL: 'https://auth-f570a.firebaseio.com',
  projectId: 'auth-f570a',
  storageBucket: 'auth-f570a.appspot.com',
  messagingSenderId: '310591516617',
  appId: '1:310591516617:web:8f9a557197cb61db',
};

// This must run before any other firebase functions
firebase.initializeApp(config)

// This is our firebaseui configuration object
const uiConfig = ({
  signInSuccessUrl: '/trello',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '/terms-of-service', // This doesn't exist yet
})


// This sets up firebaseui
const ui = new firebaseui.auth.AuthUI(firebase.auth())

// This adds firebaseui to the page
// It does everything else on its own
export const startFirebaseUI = function (elementId) {
  ui.start(elementId, uiConfig)
}

export const getAuthorizedEmail = async () => (new Promise((resolve) => {
  const token = firebase.auth().currentUser?.email;

  if (token) {
    resolve(token);
  }

  firebase.auth().onAuthStateChanged(async () => {
    resolve(firebase.auth().currentUser?.email);
  });
}));

const currentToken = async () => firebase.auth().currentUser?.getIdToken(true);

export const getIdToken = async () => (
  new Promise(async (resolve) => {
    const token = await currentToken();

    if (token) {
      resolve(token);
    }

    firebase.auth().onAuthStateChanged(async () => {
      resolve(await currentToken());
    });
  }));


export const logout = async () => firebase.auth()
  .signOut()
  .finally(() => window.location.reload());
