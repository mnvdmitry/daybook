import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { wrapperBottomTabNavigator as wrapper } from '../constants/Style';
import CategorySelection from '../components/categories/categorySelection';
import Headline from '../components/common/Headline';
import Journals from '../components/journals';
import { headSubscribeHomeScreen } from '../constants/Style';

interface HomeScreen {
  navigation: NavigationScreenProp<any, any>;
}

class HomeScreen extends Component<HomeScreen> {
  render() {
    return (
      <View style={wrapper}>
        <View style={styles.head}>
          <View style={styles.headline}>
            <Headline text="Главная" />
          </View>

          <CategorySelection navigation={this.props.navigation} />
        </View>

        <View style={styles.body}>
          <Journals />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    ...headSubscribeHomeScreen,
    height: '18%'
  },
  body: {
    height: '82%'
  },
  headline: {
    alignItems: 'flex-start'
  }
});

export default HomeScreen;
