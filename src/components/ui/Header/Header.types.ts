/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Header navigation bar component types.
 */

import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface HeaderProps {
  /** Screen title displayed in the center or left */
  title: string;
  /** Optional secondary subtitle */
  subtitle?: string;
  /** Whether to show a left back button */
  showBack?: boolean;
  /** Back button callback */
  onBack?: () => void;
  /** Custom left accessory component (e.g. user avatar) */
  leftAccessory?: ReactNode;
  /** Custom right action accessories */
  rightAccessory?: ReactNode;
  /** Center align title (iOS standard) vs left align */
  isCenterTitle?: boolean;
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
