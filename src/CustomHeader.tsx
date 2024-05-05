import * as React from 'react';
import {Text, View, Animated} from 'react-native';
import {HEADER_HEIGHT} from './constants';

interface CustomHeaderProps {
  direction: string;
}

export const CustomHeader = (props: CustomHeaderProps) => {
  const transY = React.useRef(new Animated.Value(0));
  const {direction} = props;

  React.useEffect(() => {
    if (direction == 'up') {
      startAnimation(0);
    } else {
      startAnimation(-150);
    }
  }, [direction]);

  const startAnimation = (toValue: number) => {
    Animated.timing(transY.current, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const opacity = transY.current.interpolate({
    inputRange: [-150, 0],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        {
          height: HEADER_HEIGHT,
          backgroundColor: 'lightblue',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          elevation: 1000,
          transform: [{translateY: transY.current}],
          opacity,
        },
      ]}></Animated.View>
  );
};
