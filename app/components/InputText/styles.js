import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {

  },
  inputWrapper: {
    marginTop: 5,
    borderColor: '$purple',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    width: '100%',
    height: 40,
  },
  input: {
    flex: 1,
    backgroundColor: '$white',
    padding: 10,
  },
  errorText: {
    marginTop: 5,
    marginBottom: 10,
    color: '$red',
    fontStyle: 'italic',
  },
});
