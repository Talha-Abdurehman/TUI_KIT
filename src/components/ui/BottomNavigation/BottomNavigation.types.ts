/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * BottomNavigation component types.
 */

import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface BottomNavigationTab<T extends string = string> {
  key: T;
  label: string;
  icon: ReactNode;
  activeIcon?: ReactNode;
  badge?: string | number;
}

export interface BottomNavigationProps<T extends string = string> {
  /** Array of navigation tab definitions */
  tabs: BottomNavigationTab<T>[];
  /** Active tab key */
  activeKey: T;
  /** Tab selection callback */
  onChange: (key: T) => void;
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
