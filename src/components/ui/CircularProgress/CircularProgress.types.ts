/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * CircularProgress component type contract
 */
import type { ViewStyle } from 'react-native';

export type CircularProgressSize = 'sm' | 'md' | 'lg';

export interface CircularProgressProps {
  /**
   * Progress value between 0 and 100
   * @default 0
   */
  value: number;
  /**
   * Size preset or custom diameter in points
   * @default 'md'
   */
  size?: CircularProgressSize | number;
  /**
   * Stroke width in points
   * @default 6
   */
  strokeWidth?: number;
  /**
   * Primary indicator color token or override
   */
  color?: string;
  /**
   * Background track ring color token or override
   */
  trackColor?: string;
  /**
   * Whether to display the percentage label in the center
   * @default true
   */
  showLabel?: boolean;
  /**
   * Custom center label or text override
   */
  label?: string;
  /**
   * Optional custom container style
   */
  style?: ViewStyle;
  /**
   * Accessibility label
   */
  accessibilityLabel?: string;
}
