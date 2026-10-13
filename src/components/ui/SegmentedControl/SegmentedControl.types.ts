/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * SegmentedControl component types and interfaces.
 */

import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface SegmentedControlItem<T extends string = string> {
  key: T;
  label: string;
  icon?: ReactNode;
}

export interface SegmentedControlProps<T extends string = string> {
  /** Array of available segment options */
  items: SegmentedControlItem<T>[];
  /** Currently active segment key */
  value: T;
  /** Callback fired when user selects a segment */
  onChange: (newValue: T) => void;
  /** Custom outer container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
