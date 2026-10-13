/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Input component contract and types.
 */

import { ReactNode } from 'react';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  /**
   * Field label displayed above the input field.
   */
  label?: string;

  /**
   * Error message displayed beneath the input, highlights border in error state.
   */
  errorText?: string;

  /**
   * Helper description text beneath the input when no error is present.
   */
  helperText?: string;

  /**
   * When true, disables the input field and dims opacity.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Optional icon/element inside the left side of the input.
   */
  leftIcon?: ReactNode;

  /**
   * Optional icon/element inside the right side of the input.
   */
  rightIcon?: ReactNode;

  /**
   * Container style override.
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Input text area style override.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Identifier for automated testing.
   */
  testID?: string;
}
