import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../containers/LoginScreen';

export default createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: () => null,
    },
  },
});
