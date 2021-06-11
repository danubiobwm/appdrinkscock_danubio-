import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home, DrinkScreen} from '../pages';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },

    Drinks: {
      screen: DrinkScreen,
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
