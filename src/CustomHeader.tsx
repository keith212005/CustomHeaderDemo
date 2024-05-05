import React, {useEffect} from 'react';
import {HEADER_HEIGHT} from './constants';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  Easing,
} from 'react-native-reanimated';

interface CustomHeaderProps {
  y: any;
  direction: string;
}

export const CustomHeader = (props: CustomHeaderProps) => {
  const transY = useSharedValue(0);
  const {direction, y} = props;

  useEffect(() => {
    if (direction === 'up') {
      transY.value = withTiming(0, {
        duration: 300,
        easing: Easing.out(Easing.ease),
      });
    } else {
      transY.value = withTiming(-HEADER_HEIGHT, {
        duration: 300,
        easing: Easing.out(Easing.ease),
      });
    }
  }, [direction]);

  const headerStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      transY.value,
      [-HEADER_HEIGHT, 0],
      [-HEADER_HEIGHT, 0],
      Extrapolation.CLAMP,
    );

    const opacity = interpolate(
      transY.value,
      [-HEADER_HEIGHT, 0],
      [0, 1],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{translateY: translateY}],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        headerStyle,
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
        },
      ]}
    />
  );
};
