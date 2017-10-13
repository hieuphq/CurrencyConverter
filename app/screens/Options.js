import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  handleThemesPress = () => {
    this.props.navigation.navigate('Themes');
  };

  handleSitePress = () => {
    Linking.openURL('http://fixer.io').catch(() =>
      this.props.alertWithType('error', 'Sorry!', "Fixer.io can't be open right now"));
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem text="Themes" onPress={this.handleThemesPress} />
        <Separator />
        <ListItem text="Fixer.io" onPress={this.handleSitePress} />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
