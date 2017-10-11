import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 20,
    marginRight: 12,
  },
  text: {
    color: '$white',
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 20,
  },
});
