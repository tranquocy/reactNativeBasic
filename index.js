/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import FlatListBasic from './components/FlatListBasic';
import HorizontalFlatList from './components/HorizontalFlatList/HorizontalFlatList';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HorizontalFlatList);
