/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Spinner component types.
 */

import { ViewStyle } from 'react-native';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps {
  /** Size preset (sm, md, lg) */
  size?: SpinnerSize;
  /** Custom spinner color */
  color?: string;
  /** Optional descriptive label displayed beneath the spinner */
  label?: string;
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
