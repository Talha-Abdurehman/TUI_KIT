/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Standalone Switch primitive types.
 */

import { ViewStyle } from 'react-native';

export interface SwitchProps {
  /** Whether the switch is active (on) */
  value: boolean;
  /** Callback fired when the switch value changes */
  onValueChange: (newValue: boolean) => void;
  /** Disabled state */
  isDisabled?: boolean;
  /** Optional accessible label */
  accessibilityLabel?: string;
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
