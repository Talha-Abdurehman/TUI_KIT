/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Keypad component type contract
 */
import type { ViewStyle } from 'react-native';
import type { Ionicons } from '@expo/vector-icons';

export interface KeypadProps {
  /**
   * Callback fired when a numeric key or decimal is tapped
   */
  onKeyPress: (char: string) => void;
  /**
   * Callback fired when backspace key is tapped
   */
  onDelete: () => void;
  /**
   * Optional long-press handler on delete key (e.g. clear all)
   */
  onLongDelete?: () => void;
  /**
   * Whether to display the decimal point key in bottom-left position
   * @default true
   */
  showDecimal?: boolean;
  /**
   * Optional custom bottom-left key icon or label
   */
  customLeftKey?: {
    label?: string;
    icon?: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
    accessibilityLabel?: string;
  };
  /**
   * Whether keypad keys are disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Container style override
   */
  style?: ViewStyle;
}
