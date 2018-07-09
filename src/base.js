import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAZLD85awuf9gVVHHHBe75zMVczDsEORaM",
  authDomain: "chatarang-2223d.firebaseapp.com",
  databaseURL: "https://chatarang-2223d.firebaseio.com",
  projectId: "chatarang-2223d",
  storageBucket: "",
  messagingSenderId: "520283062823"
};

const app = firebase.initializeApp(config)

// Configure authentication
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const githubProvider = new firebase.auth.GithubAuthProvider()

// Configure database and Rebase
const db = firebase.database(app)
const base = Rebase.createClass(db)
export default base