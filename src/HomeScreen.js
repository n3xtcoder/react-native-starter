import React, {
  Component,
  Text,
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  welcomeText: {
    color: '#444444',
    textAlign: 'center',
    marginVertical: 40,
  },
});

class HomeScreen extends Component {
  render() {
    return <View style={styles.screen}>
      <Text style={styles.welcomeText}>Welcome to N3xtcoder</Text>
    </View>;
  }
}

export default HomeScreen;
