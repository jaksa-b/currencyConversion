import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Container } from '../components/Container';

class Home extends Component {
  state = {};
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Text>Home</Text>
      </Container>
    );
  }
}

export default Home;
