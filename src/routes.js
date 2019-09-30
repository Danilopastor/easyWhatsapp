import Keyboard from './keyboard';
import Pref from './pref';
import about from './about';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home   : Keyboard,
    Config : Pref,
    About  : about
  })
);

export default Routes;