/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * SettingRow component types and interfaces.
 */

import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface SettingRowProps {
  /** Primary label of the setting */
  title: string;
  /** Subtitle or explanatory text */
  subtitle?: string;
  /** Switch value state (boolean) */
  value: boolean;
  /** Callback triggered when switch value changes */
  onValueChange: (newValue: boolean) => void;
  /** Disabled state */
  isDisabled?: boolean;
  /** Optional icon rendered on the left */
  leftIcon?: ReactNode;
  /** Whether to render top divider */
  hasDivider?: boolean;
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
