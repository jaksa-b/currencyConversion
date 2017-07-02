import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';

class Home extends Component {
  state = {};
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
      </Container>
    );
  }
}

export default Home;
