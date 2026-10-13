/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Checkbox component types and interfaces.
 */

import { ViewStyle } from 'react-native';

export interface CheckboxProps {
  /** Whether the checkbox is checked */
  isChecked: boolean;
  /** Callback fired when toggle is tapped */
  onToggle: (checked: boolean) => void;
  /** Optional label text next to the box */
  label?: string;
  /** Optional subtitle or description */
  description?: string;
  /** Disabled state */
  isDisabled?: boolean;
  /** Custom container style */
  style?: ViewStyle;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Test identifier */
  testID?: string;
}
