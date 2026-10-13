/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Skeleton loader component types.
 */

import { DimensionValue, ViewStyle } from 'react-native';

export interface SkeletonProps {
  /** Width dimension of the placeholder */
  width?: DimensionValue;
  /** Height dimension of the placeholder */
  height?: DimensionValue;
  /** Border radius preset */
  borderRadius?: number;
  /** Whether the shape is a circle (e.g. for avatar placeholders) */
  isCircle?: boolean;
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
