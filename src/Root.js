import React, {
  Component,
  View,
  Image,
  StatusBar,
  StyleSheet,
} from 'react-native';

import HomeScreen from './HomeScreen';
import JournalScreen from './JournalScreen';
import SensorScreen from './SensorScreen';
import Tabbar, { Tabs } from './Tabbar';

import BackgroundImage from './HomeScreen.jpg';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  screen: {
    flex: 1,
  },
});

class Root extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: Tabs.HOME,
    };

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(tab) {
    this.setState({ selectedTab: tab });
  }

  render() {
    let screen = null;
    switch (this.state.selectedTab) {
      case Tabs.JOURNAL:
        screen = <JournalScreen />;
        break;
      case Tabs.SENSOR:
        screen = <SensorScreen />;
        break;
      default:
        screen = <HomeScreen />;
        break;
    }

    return <Image
      style={styles.backgroundImage}
      source={BackgroundImage}
      resizeMode={Image.resizeMode.cover}
    >
      <View style={styles.screen}>
        <StatusBar barStyle="light-content" />
        {screen}
        <Tabbar
          selectedTab={this.state.selectedTab}
          onTabChange={this.handleTabChange}
        />
      </View>
    </Image>;
  }
}

export default Root;
