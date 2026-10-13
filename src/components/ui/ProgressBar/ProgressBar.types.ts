/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * ProgressBar component types and interfaces.
 */

import { ViewStyle } from 'react-native';

export type ProgressBarVariant = 'primary' | 'success' | 'warning' | 'error';

export interface ProgressBarProps {
  /** Progress percentage value between 0 and 100 */
  progress: number;
  /** Semantic color theme variant */
  variant?: ProgressBarVariant;
  /** Custom progress track height override */
  height?: number;
  /** Optional label shown above the track */
  label?: string;
  /** Optional current/max value formatted text (e.g. "£450 / £3,000") */
  valueText?: string;
  /** Custom container style */
  style?: ViewStyle;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Test identifier */
  testID?: string;
}
