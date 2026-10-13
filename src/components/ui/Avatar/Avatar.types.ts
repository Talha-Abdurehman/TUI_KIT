/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Avatar component types and interfaces.
 */

import React, { ReactNode } from 'react';
import { ImageSourcePropType, ViewStyle } from 'react-native';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarVariant = 'primary' | 'subtle' | 'outline';

export interface AvatarProps {
  /** Text initials or full name to extract 1-2 letter initials from */
  name?: string;
  /** Image source if displaying a user photograph */
  source?: ImageSourcePropType;
  /** Fallback icon element if name/image are omitted */
  icon?: ReactNode;
  /** Avatar dimension preset (sm: 32, md: 38, lg: 44, xl: 56) */
  size?: AvatarSize;
  /** Color theme variant */
  variant?: AvatarVariant;
  /** Custom container style */
  style?: ViewStyle;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Test identifier */
  testID?: string;
}
