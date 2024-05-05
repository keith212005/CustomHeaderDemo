import {useState, useRef} from 'react';
import {View, Image, FlatList, Text} from 'react-native';
import {CustomHeader} from './CustomHeader';
import {IMAGES} from './constants';

const HEADER_HEIGHT = 150;

const App = () => {
  const currentOffset = useRef(0);
  const currentScrollingDirection = useRef('up');
  const [scrollingDirection, setScrollingDirection] = useState('up');

  const handleScroll = (event: any) => {
    const offSetY = event.nativeEvent.contentOffset.y;
    const direction = offSetY > currentOffset.current ? 'down' : 'up';
    if (currentScrollingDirection.current !== direction) {
      console.log(`currentScrollingDirectionl>>>`, scrollingDirection);

      currentScrollingDirection.current = direction;
      setScrollingDirection(direction);
    }
    currentOffset.current = offSetY;
  };

  return (
    <View style={{flex: 1}}>
      <CustomHeader direction={scrollingDirection} />

      <FlatList
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
