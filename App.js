import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { SafeAreaView } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";
import { scale, moderateScale, verticalScale} from './scaling';
import Calculator from './components/Calculator.js'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  total: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD': 
      return {
        total: state.total + 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{flex: 1, backgroundColor: '#000'}} forceInset={{ top: 'always' }}>
          <Calculator />
        </SafeAreaView>
      </Provider>
    );
  }
}

// export default class App extends React.Component {
//   render() {
//     return (
//       // <View style={styles.container}>
//       //   <Text style={styles.header}>Open up App.js to start working on your app!</Text>
//       //   <Image 
//       //     style={{width: 100, height: 50}}
//       //     source={{uri: 'https://i.ytimg.com/vi/YwCEgBIrsYc/maxresdefault.jpg'}} />
//       //   <Text>Changes you make will automatically reload.</Text>
//       //   <Text>Shake your phone to open the developer menu.</Text>
//       // </View>
//       <SafeAreaView style={{flex: 1, backgroundColor: '#000'}} forceInset={{ top: 'always' }}>
//         <Calculator />
//       </SafeAreaView>
//     );
//   }
// }

const styles = StyleSheet.create({
  text: {
    // justifyContent: 'center',
    backgroundColor: '#AAA'
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#000',
    backgroundColor: '#AAA'
  }
});


const styles_scale = StyleSheet.create({
    box: {
        width: moderateScale(300),
        height: verticalScale(450),
        padding: scale(10),
    },
    title: {
        fontSize: moderateScale(20, 0.4),
        marginBottom: scale(10),
    },
    text: {
        fontSize: moderateScale(14),
    },
    button: {
        width: moderateScale(150, 0.3),
        height: moderateScale(45, 0.3),
        marginBottom: moderateScale(10),
    },
    buttonText: {
        fontSize: moderateScale(14),
    }
});
