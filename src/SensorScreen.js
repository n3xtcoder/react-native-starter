import React, {
  Component,
  Text,
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    marginTop: 60,
    flex: 1,
    padding: 10,
  },
  welcomeText: {
    color: '#444444',
    textAlign: 'center',
    marginVertical: 40,
  },
});

class SensorScreen extends Component {
  render() {
    return <View
      style={styles.screen}
    >
      <Text style={styles.welcomeText}>Sensor data</Text>
    </View>;
  }
}

export default SensorScreen;
