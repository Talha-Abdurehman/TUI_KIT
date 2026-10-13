/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Chip component types.
 */

import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface ChipProps {
  /** Label text */
  label: string;
  /** Whether the chip is currently selected */
  isSelected?: boolean;
  /** Selection toggle callback */
  onPress?: () => void;
  /** Optional remove/close trigger callback */
  onRemove?: () => void;
  /** Left icon accessory */
  icon?: ReactNode;
  /** Disabled state */
  isDisabled?: boolean;
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
