import {useState, useRef} from 'react';
import {View, Image} from 'react-native';
import {CustomHeader} from './CustomHeader';
import {HEADER_HEIGHT, IMAGES} from './constants';
import Animated, {useSharedValue} from 'react-native-reanimated';

const App = () => {
  const currentOffset = useRef(0);
  const currentScrollingDirection = useRef('up');
  const [scrollingDirection, setScrollingDirection] = useState('up');
  const y = useSharedValue(0);

  const handleScroll = (event: any) => {
    const offSetY = event.nativeEvent.contentOffset.y;
    const direction = offSetY > currentOffset.current ? 'down' : 'up';
    if (currentScrollingDirection.current !== direction) {
      currentScrollingDirection.current = direction;
      setScrollingDirection(direction);
    }
    currentOffset.current = offSetY;
    y.value = offSetY;
  };

  return (
    <View style={{flex: 1}}>
      <CustomHeader y={y} direction={scrollingDirection} />

      <Animated.FlatList
        bounces={false}
        data={IMAGES}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{marginTop: HEADER_HEIGHT}}
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
