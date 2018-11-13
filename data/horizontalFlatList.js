const horizontalStatus = {
  rainy: {
    ios: 'ios-rainy',
    android: 'md-rainy'
  },
  cloud: {
    ios: 'ios-cloud',
    android: 'md-cloud'
  },
  thunderstorm: {
    ios: 'ios-thunderstorm',
    android: 'md-thunderstorm'
  },
  sunny: {
    ios: 'ios-sunny',
    android: 'md-sunny'
  }
}
const horizontalFlatListData = [
  {
    key: 'a',
    hour: '1:00 AM',
    status: horizontalStatus.rainy,
    degrees: 50,
  },
  {
    key: 'b',
    hour: '2:00 AM',
    status: horizontalStatus.thunderstorm,
    degrees: 55,
  },
  {
    key: 'c',
    hour: '3:00 AM',
    status: horizontalStatus.cloud,
    degrees: 57,
  },
  {
    key: 'd',
    hour: '4:00 AM',
    status: horizontalStatus.sunny,
    degrees: 60,
  },
  {
    key: 'e',
    hour: '5:00 AM',
    status: horizontalStatus.thunderstorm,
    degrees: 55,
  },
  {
    key: 'f',
    hour: '6:00 AM',
    status: horizontalStatus.rainy,
    degrees: 59,
  },
  ,
  {
    key: 'g',
    hour: '7:00 AM',
    status: horizontalStatus.thunderstorm,
    degrees: 57,
  },
  {
    key: 'h',
    hour: '8:00 AM',
    status: horizontalStatus.rainy,
    degrees: 58,
  },
];

module.exports = horizontalFlatListData, horizontalStatus;
