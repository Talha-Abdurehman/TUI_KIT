/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * OTPInput component types.
 */

import { ViewStyle } from 'react-native';

export interface OTPInputProps {
  /** Value string of digits (e.g. "4821") */
  value: string;
  /** Callback fired when pin value changes */
  onChange: (pin: string) => void;
  /** Number of pin boxes (default 4 or 6) */
  length?: number;
  /** Whether digits are masked as dots */
  isSecure?: boolean;
  /** Inline error message if verification fails */
  errorText?: string;
  /** Disabled state */
  isDisabled?: boolean;
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
