/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Toast notification component types.
 */

import { ViewStyle } from 'react-native';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  /** Notification message body */
  message: string;
  /** Toast color variant */
  variant?: ToastVariant;
  /** Whether the toast is active and displayed */
  isVisible: boolean;
  /** Callback fired when user dismisses the toast */
  onDismiss?: () => void;
  /** Optional action button text (e.g. "Undo") */
  actionLabel?: string;
  /** Callback fired when action button is tapped */
  onAction?: () => void;
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
