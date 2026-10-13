/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Tabs component types.
 */

import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface TabItem<T extends string = string> {
  key: T;
  label: string;
  badge?: string | number;
  icon?: ReactNode;
}

export interface TabsProps<T extends string = string> {
  /** Array of tab definitions */
  tabs: TabItem<T>[];
  /** Active tab key */
  activeKey: T;
  /** Tab change callback */
  onChange: (key: T) => void;
  /** Visual presentation style ("line" with underline or "pill") */
  variant?: 'line' | 'pill';
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
