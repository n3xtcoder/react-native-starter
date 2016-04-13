import React, {
  Component,
  Text,
  StyleSheet,
  View,
} from 'react-native';


const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  welcomeText: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 70,
    marginBottom: 30,
    fontSize: 20,
  },
});

class HomeScreen extends Component {
  render() {
    return <View style={styles.screen}>
      <Text style={styles.welcomeText}>Welcome to N3XTCODER &amp; Arya</Text>
    </View>;
  }
}

export default HomeScreen;
