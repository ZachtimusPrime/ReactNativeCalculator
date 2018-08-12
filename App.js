import React from 'react'; 
import { SafeAreaView } from 'react-navigation';
import Calculator from './components/Calculator'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from "./reducers/calculatorReducer";

const store = createStore(reducers);

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