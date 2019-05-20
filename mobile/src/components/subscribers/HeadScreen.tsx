import React from 'react';
import { connect } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';
import {
  View,
  TouchableOpacity,
  Platform,
  StyleSheet,
  StyleProp,
  ViewStyle
} from 'react-native';

import Headline from '../common/Headline';
import Ionicons from '../../navigation/TopBarIcon';
import { authModuleName } from '../../core/constants';
import { AppState } from '../../core';

interface HeadScreenProps {
  styleWrapper: StyleProp<ViewStyle>;
  navigation: NavigationScreenProp<any, any>;
  isAuth: boolean;
}

const HeadScreen = ({
  styleWrapper,
  navigation: { navigate },
  isAuth
}: HeadScreenProps) => {
  return (
    <View style={styleWrapper}>
      <Headline text="Подписки" />
      <TouchableOpacity
        style={styles.icon}
        onPress={() => authCheck({ navigate, isAuth })}
      >
        <Ionicons
          name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
          focused={false}
        />
      </TouchableOpacity>
    </View>
  );
};

const authCheck = ({
  navigate,
  isAuth
}: {
  navigate: (screen: string) => any;
  isAuth: boolean;
}) => {
  if (isAuth) {
    navigate('Profile');
  } else {
    navigate('SignIn');
  }
};

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 100,
    paddingRight: 20,
    paddingBottom: 20
  }
});

const mapStateToProps = (state: AppState) => ({
  isAuth: !!state[authModuleName].token
});

export default connect(mapStateToProps)(HeadScreen);
