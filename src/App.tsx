import * as React from 'react';
import {View, Image} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {CustomHeader} from './CustomHeader';
import {IMAGES} from './constants';

interface AppProps {}

const HEADER_HEIGHT = 150;

const App = (props: AppProps) => {
  const scrollY = useSharedValue(0);
  const scrollDirection = useSharedValue<'up' | 'down'>('down'); // Track scroll direction

  const handleScroll = useAnimatedScrollHandler({
    onScroll: event => {
      const currentOffset = event.contentOffset.y;
      const previousOffset = scrollY.value;

      if (currentOffset > previousOffset && scrollDirection.value === 'down') {
        scrollDirection.value = 'up';
      } else if (
        currentOffset < previousOffset &&
        scrollDirection.value === 'up'
      ) {
        scrollDirection.value = 'down';
      }

      scrollY.value = currentOffset;
    },
  });

  return (
    <View style={{flex: 1}}>
      <CustomHeader scrollY={scrollY} scrollDirection={scrollDirection} />

      <Animated.FlatList
        data={IMAGES}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{paddingTop: HEADER_HEIGHT}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View key={item.id} style={{height: 400, margin: 20}}>
            <Image
              source={{uri: item.uri}}
              style={{flex: 1, height: null, width: null, borderRadius: 10}}
            />
          </View>
        )}
      />
    </View>
  );
};

export default App;
