import React, {
  Component,
  PropTypes,
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

export const Tabs = {
  HOME: 'HOME',
  JOURNAL: 'JOURNAL',
  SENSOR: 'SENSOR',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'transparent',
  },
  buttonHighlight: {
    backgroundColor: '#444444',
  },
  buttonText: {
    color: '#ffffff',
  },
  buttonHighlightText: {
    fontWeight: '600',
    color: '#dddddd',
  },
});

function TabButton(props) {
  let buttonStyle = props.selected ?
    [styles.button, styles.buttonHighlight] :
    styles.button;
  let textStyle = props.selected ?
    styles.buttonHighlightText :
    styles.buttonText;
  return <TouchableHighlight
    underlayColor="#888888"
    style={buttonStyle}
    onPress={props.onPress}
  >
    <Text style={textStyle}>{props.label}</Text>
  </TouchableHighlight>;
}
TabButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

class Tabbar extends Component {
  static propTypes = {
    selectedTab: PropTypes.oneOf([Tabs.HOME, Tabs.JOURNAL, Tabs.SENSOR]).isRequired,
    onTabChange: PropTypes.func.isRequired,
  };

  render() {
    let { selectedTab, onTabChange } = this.props;
    return <View style={styles.container}>
      <TabButton
        onPress={() => onTabChange(Tabs.HOME)}
        label="Home"
        selected={selectedTab === Tabs.HOME}
      />
      <TabButton
        onPress={() => onTabChange(Tabs.JOURNAL)}
        label="Add"
        selected={selectedTab === Tabs.JOURNAL}
      />
      <TabButton
        onPress={() => onTabChange(Tabs.SENSOR)}
        label="Sensor"
        selected={selectedTab === Tabs.SENSOR}
      />
    </View>;
  }
}

export default Tabbar;
