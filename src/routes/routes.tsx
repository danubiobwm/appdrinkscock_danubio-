import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home, Drink} from '../pages';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },

    Drinks: {
      screen: Drink,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
  },
  {
    initialRouteName: 'Home',
    //headerMode: 'none'
  },
);

const Aplication = createAppContainer(AppNavigator);

export default Aplication;
