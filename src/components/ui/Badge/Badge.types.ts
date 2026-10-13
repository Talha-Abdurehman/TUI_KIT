/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Badge component contract and types.
 */

import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'outline';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  /**
   * Semantic color variant.
   * @default 'primary'
   */
  variant?: BadgeVariant;

  /**
   * Badge size.
   * @default 'md'
   */
  size?: BadgeSize;

  /**
   * Text label.
   */
  label?: string;

  /**
   * Optional custom children.
   */
  children?: ReactNode;

  /**
   * Style override.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Identifier for automated testing.
   */
  testID?: string;
}
