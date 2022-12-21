import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import { AppContext } from './src/context';
import ScreenOne from './src/components/screen_one';
import ScreenTwo from './src/components/screen_two';

class App extends Component {

static contextType = AppContext;

  render(){
    return(
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          {
            this.context.state.stage === 1 ?
            <ScreenOne/>
            :
            <ScreenTwo/>
          }
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 80 : 30
  },
});

export default App;