import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';

import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  handleThemesPress = () => {};

  handleSitePress = () => {};

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

export default Options;
