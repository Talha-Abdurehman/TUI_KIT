/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * SearchBar component types.
 */

import { ViewStyle } from 'react-native';

export interface SearchBarProps {
  /** Current search query value */
  value: string;
  /** Callback fired on query text change */
  onChangeText: (text: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Callback fired when user taps the clear button */
  onClear?: () => void;
  /** Optional cancel button on the right */
  showCancel?: boolean;
  /** Callback fired on cancel tap */
  onCancel?: () => void;
  /** Disabled state */
  isDisabled?: boolean;
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
