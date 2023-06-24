import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
export default class Sair extends Component {
  componentDidMount() {
    firebase.auth().signOut();
    alert("voce se deslogou com sucesso da sua conta. Até mais");
    this.props.navigation.replace("login");
  }
  render() {
    return <View></View>;
  }
}