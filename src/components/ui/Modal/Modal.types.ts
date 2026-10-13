/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Modal dialog component types.
 */

import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface ModalProps {
  /** Whether the modal dialog is visible */
  isVisible: boolean;
  /** Callback fired when user dismisses the modal backdrop */
  onClose: () => void;
  /** Modal header title */
  title?: string;
  /** Modal body description */
  description?: string;
  /** Primary action button label */
  primaryActionLabel?: string;
  /** Primary action callback */
  onPrimaryAction?: () => void;
  /** Secondary cancel button label */
  secondaryActionLabel?: string;
  /** Custom inner children content */
  children?: ReactNode;
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
