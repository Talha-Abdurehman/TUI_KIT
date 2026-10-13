/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Banner component types.
 */

import { ViewStyle } from 'react-native';

export type BannerVariant = 'info' | 'warning' | 'error' | 'success';

export interface BannerProps {
  /** Banner title or headline */
  title: string;
  /** Explanatory message text */
  message?: string;
  /** Status color variant */
  variant?: BannerVariant;
  /** Optional action button text */
  actionLabel?: string;
  /** Action button callback */
  onAction?: () => void;
  /** Whether the banner can be dismissed */
  isDismissible?: boolean;
  /** Callback fired when user taps close */
  onDismiss?: () => void;
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
