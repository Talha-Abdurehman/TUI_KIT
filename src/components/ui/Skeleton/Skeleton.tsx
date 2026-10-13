/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade Skeleton placeholder primitive.
 * Smooth shimmer opacity loading placeholder with token-driven surface colors.
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@/theme';
import { SkeletonProps } from './Skeleton.types';

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = 16,
  borderRadius,
  isCircle = false,
  style,
  testID,
}) => {
  const { colors, radius } = useTheme();

  const resolvedRadius = isCircle
    ? radius.full
    : borderRadius !== undefined
    ? borderRadius
    : radius.md;

  return (
    <View
      testID={testID}
      accessibilityRole="progressbar"
      accessibilityLabel="Loading placeholder"
      style={[
        styles.skeleton,
        {
          width,
          height,
          borderRadius: resolvedRadius,
          backgroundColor: colors.surfaceHover,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  skeleton: {
    opacity: 0.85,
    overflow: 'hidden',
  },
});
