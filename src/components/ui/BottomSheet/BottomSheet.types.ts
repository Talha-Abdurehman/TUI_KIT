/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * BottomSheet component types.
 */

import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface BottomSheetProps {
  /** Whether the bottom sheet is open */
  isOpen: boolean;
  /** Dismiss callback when backdrop or close button is tapped */
  onClose: () => void;
  /** Optional sheet header title */
  title?: string;
  /** Sheet body content */
  children: ReactNode;
  /** Custom sheet container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
