import React from 'react';
import PropsType from 'prop-types';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';

const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image style={styles.image} resizeMode="contain" source={require('./images/icon.png')} />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

ClearButton.propTypes = {
  text: PropsType.string,
  onPress: PropsType.func,
};

export default ClearButton;
