import React, {
  Component,
  View,
} from 'react-native';

import HomeScreen from './HomeScreen';
import JournalScreen from './JournalScreen';
import SensorScreen from './SensorScreen';
import Tabbar, { Tabs } from './Tabbar';

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

    return <View style={{ flex: 1 }}>
      {screen}
      <Tabbar
        selectedTab={this.state.selectedTab}
        onTabChange={this.handleTabChange}
      />
    </View>;
  }
}

export default Root;
