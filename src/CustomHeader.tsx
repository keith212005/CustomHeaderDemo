import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {HEADER_HEIGHT} from './constants';

export const CustomHeader = ({scrollY, scrollDirection}: any) => {
  const animatedStyle = useAnimatedStyle(() => {
    const headerY = interpolate(
      scrollY.value / 2,
      [0, HEADER_HEIGHT], // Interpolate headerY based on scrollY value
      [0, -HEADER_HEIGHT], // Header fully visible when scrollY is 0, fully hidden when scrollY is HEADER_HEIGHT
      Extrapolation.CLAMP,
    );

    const opacity = interpolate(
      scrollY.value / 2,
      [0, HEADER_HEIGHT], // Interpolate opacity based on scrollY value
      [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0], // Header fully visible when scrollY is 0, completely transparent when scrollY is HEADER_HEIGHT
    );

    const gradualOpacity = interpolate(
      scrollY.value / 5,
      [0, HEADER_HEIGHT], // Interpolate gradual opacity based on the distance from the target value
      [1, 0], // Opacity changes gradually from 1 to 0 as we approach HEADER_HEIGHT
    );

    console.log(scrollDirection.value, opacity, gradualOpacity);

    return {
      transform: [{translateY: headerY}],
      opacity: scrollDirection.value === 'up' ? gradualOpacity : opacity, // Show header if scrolling up, otherwise use the immediate opacity change
    };
  });

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: HEADER_HEIGHT,
          backgroundColor: 'grey',
          zIndex: 1000,
          elevation: 1000,
        },
      ]}
    />
  );
};
