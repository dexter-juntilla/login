import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    marginTop: 20,
  },
  wrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    position: 'absolute',
    left: 20,
  },
  buttonEnabled: {
    backgroundColor: '$purple',
    borderColor: '$purple',
  },
  buttonDisabled: {
    backgroundColor: '$lightPurple',
    borderColor: '$lightPurple',
  },
  text: {
    color: '$white',
    fontWeight: '600',
    fontSize: 25,
  },
  errorText: {
    color: '$red',
    fontStyle: 'italic',
  },
});
