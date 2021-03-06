import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
  View,
  FlatList,
  InteractionManager,
} from 'react-native';

import appStore from '@stores/appStore';
import NativeButton from 'apsl-react-native-button';

import { ratio, statusBarHeight } from '@utils/Styles';
import {
  IC_MASK,
} from '@utils/Icons';

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight, // false to get height of android too.
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

class Page extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>Not Found</Text>
      </View>
    );
  }
}

export default Page;
