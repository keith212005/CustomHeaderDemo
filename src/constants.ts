export const HEADER_HEIGHT = 150;
export const IMAGES = [
  {id: 1, uri: 'https://picsum.photos/id/1/200/300'},
  {id: 2, uri: 'https://picsum.photos/id/2/200/300'},
  {id: 3, uri: 'https://picsum.photos/id/3/200/300'},
  {id: 4, uri: 'https://picsum.photos/id/4/200/300'},
  {id: 5, uri: 'https://picsum.photos/id/5/200/300'},
  {id: 6, uri: 'https://picsum.photos/id/6/200/300'},
  {id: 7, uri: 'https://picsum.photos/id/7/200/300'},
  {id: 8, uri: 'https://picsum.photos/id/8/200/300'},
  {id: 9, uri: 'https://picsum.photos/id/9/200/300'},
  {id: 10, uri: 'https://picsum.photos/id/10/200/300'},
  {id: 11, uri: 'https://picsum.photos/id/11/200/300'},
  {id: 12, uri: 'https://picsum.photos/id/12/200/300'},
  {id: 13, uri: 'https://picsum.photos/id/13/200/300'},
  {id: 14, uri: 'https://picsum.photos/id/14/200/300'},
  {id: 15, uri: 'https://picsum.photos/id/15/200/300'},
  {id: 16, uri: 'https://picsum.photos/id/16/200/300'},
  {id: 17, uri: 'https://picsum.photos/id/17/200/300'},
  {id: 18, uri: 'https://picsum.photos/id/18/200/300'},
  {id: 19, uri: 'https://picsum.photos/id/19/200/300'},
  {id: 20, uri: 'https://picsum.photos/id/20/200/300'},
];

// import React, {useEffect} from 'react';
// import {HEADER_HEIGHT} from './constants';
// import Animated, {
//   useSharedValue,
//   withTiming,
//   useAnimatedStyle,
// } from 'react-native-reanimated';

// interface CustomHeaderProps {
//   direction: string;
// }

// export const CustomHeader = (props: CustomHeaderProps) => {
//   const transY = useSharedValue(0);
//   const {direction} = props;

//   console.log(direction);

//   useEffect(() => {
//     if (direction === 'up') {
//       transY.value = withTiming(0, {duration: 500});
//     } else {
//       transY.value = withTiming(-HEADER_HEIGHT, {duration: 500});
//     }
//   }, [direction]);

//   const headerStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{translateY: transY.value}],
//       opacity: transY.value === 0 ? 1 : 0, // Show header when translateY is 0
//     };
//   });

//   return (
//     <Animated.View
//       style={[
//         headerStyle,
//         {
//           height: HEADER_HEIGHT,
//           backgroundColor: 'lightblue',
//           justifyContent: 'center',
//           alignItems: 'center',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 2,
//           elevation: 1000,
//         },
//       ]}
//     />
//   );
// };

// import {useState, useRef} from 'react';
// import {View, Image, FlatList, Text} from 'react-native';
// import {CustomHeader} from './CustomHeader';
// import {HEADER_HEIGHT, IMAGES} from './constants';
// import Animated from 'react-native-reanimated';

// const App = () => {
//   const currentOffset = useRef(0);
//   const currentScrollingDirection = useRef('up');
//   const [scrollingDirection, setScrollingDirection] = useState('up');

//   const handleScroll = (event: any) => {
//     const offSetY = event.nativeEvent.contentOffset.y;
//     const direction = offSetY > currentOffset.current ? 'down' : 'up';
//     if (currentScrollingDirection.current !== direction) {
//       console.log(`currentScrollingDirectionl>>>`, scrollingDirection);

//       currentScrollingDirection.current = direction;
//       setScrollingDirection(direction);
//     }
//     currentOffset.current = offSetY;
//   };

//   return (
//     <View style={{flex: 1}}>
//       <CustomHeader direction={scrollingDirection} />

//       <Animated.FlatList
//         data={IMAGES}
//         onScroll={handleScroll}
//         scrollEventThrottle={16}
//         contentContainerStyle={{marginTop: HEADER_HEIGHT}}
//         showsVerticalScrollIndicator={false}
//         renderItem={({item}) => (
//           <View key={item.id} style={{height: 400, margin: 20}}>
//             <Image
//               source={{uri: item.uri}}
//               style={{flex: 1, height: null, width: null, borderRadius: 10}}
//             />
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default App;
