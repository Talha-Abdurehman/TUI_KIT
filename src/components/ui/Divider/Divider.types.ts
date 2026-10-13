/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Divider component types.
 */

import { ViewStyle } from 'react-native';

export interface DividerProps {
  /** Optional text label centered in the divider */
  label?: string;
  /** Custom divider line color */
  color?: string;
  /** Vertical margin spacing */
  spacing?: number;
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
