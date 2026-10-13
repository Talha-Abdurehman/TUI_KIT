/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Radio and RadioGroup component types.
 */

import { ViewStyle } from 'react-native';

export interface RadioOption<T extends string = string> {
  value: T;
  label: string;
  description?: string;
  isDisabled?: boolean;
}

export interface RadioProps {
  /** Whether the radio is currently selected */
  isSelected: boolean;
  /** Selection callback */
  onSelect: () => void;
  /** Label text next to the radio circle */
  label?: string;
  /** Optional secondary description */
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

export interface RadioGroupProps<T extends string = string> {
  /** Array of selectable options */
  options: RadioOption<T>[];
  /** Currently selected value */
  value: T;
  /** Value change callback */
  onChange: (newValue: T) => void;
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
