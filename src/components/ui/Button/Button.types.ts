/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Button component contract and types.
 */

import { ReactNode } from 'react';
import { PressableProps, StyleProp, ViewStyle } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  /**
   * Visual visual appearance variant.
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Size dimension variant determining height and padding.
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * Text label displayed inside the button.
   */
  label?: string;

  /**
   * When true, displays an activity indicator and disables press interaction.
   * @default false
   */
  isLoading?: boolean;

  /**
   * When true, dims the button and disables press events.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * When true, button expands to fill parent width.
   * @default false
   */
  isFullWidth?: boolean;

  /**
   * Optional custom icon rendered before the label.
   */
  leftIcon?: ReactNode;

  /**
   * Optional custom icon rendered after the label.
   */
  rightIcon?: ReactNode;

  /**
   * Optional custom style override for the container.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Identifier for automated testing.
   */
  testID?: string;

  /**
   * Custom children to render instead of label string.
   */
  children?: ReactNode;
}
