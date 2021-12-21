import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Controls from './Controls';

const App = () => {
  const isDarkMode = true;

  return (
    <SafeAreaView style={{ backgroundColor: isDarkMode ? Colors.darker : Colors.lighter }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
          height: '100%'
        }}
      >
        <Controls />
      </View>
    </SafeAreaView>
  );
};

export default App;