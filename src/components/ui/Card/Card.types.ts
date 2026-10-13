/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Card component contract and types.
 */

import { ReactNode } from 'react';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';
import { SpacingKey } from '@/theme';

export type CardVariant = 'elevated' | 'outlined' | 'flat';

export interface CardProps extends ViewProps {
  /**
   * Visual elevation and border appearance.
   * @default 'outlined'
   */
  variant?: CardVariant;

  /**
   * Internal padding scale from design tokens.
   * @default 'md'
   */
  padding?: SpacingKey;

  /**
   * Optional click handler making the card interactive.
   */
  onPress?: () => void;

  /**
   * Container style overrides.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Child content.
   */
  children?: ReactNode;

  /**
   * Identifier for automated testing.
   */
  testID?: string;
}
