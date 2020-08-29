import React, { Component } from 'react';
import logo from '../TextChatComponents/logo.png';
import './Main.css';
import Form from '../TextChatComponents/Form/Form';
import firebase from 'firebase';
// import firebaseConfig from '../TextChatComponents/config';
import Fire from './fire';

 // firebase.initializeApp(Fire);
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,

      // CHANGES
 
      _id: null,
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }
  handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  handleLogOut() {
    firebase.auth().signOut();
  }
  render() {
    return (
      <div className="app">
        <div className="app__header" style = {{backgroundColor: 'Green'}}>
          <h2 className = "text-dark">
            Text Chat
          </h2>
          { !this.state.user ? (
            <button
              className="app__button btn-success"
              onClick={this.handleSignIn.bind(this)}
            >
              Sign in
            </button>
          ) : (
            <button
              className="app__button btn-success"
              onClick={this.handleLogOut.bind(this)}
            >
              Logout
            </button>
          )}
        </div>
        <div className="app__list">
          <Form user={this.state.user} />
        </div>
      </div>
    );
  }
}
export default Main;