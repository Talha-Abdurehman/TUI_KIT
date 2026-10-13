/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * ListItem component types.
 */

import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface ListItemProps {
  /** Primary title of the list row */
  title: string;
  /** Secondary subtitle or description */
  subtitle?: string;
  /** Left accessory (e.g. Avatar, Icon, Checkbox) */
  leftAccessory?: ReactNode;
  /** Right accessory (e.g. Badge, Button, Switch) */
  rightAccessory?: ReactNode;
  /** Right string value (e.g. "+£300.00", "USD") */
  valueText?: string;
  /** Whether to show right navigation chevron (>) */
  showChevron?: boolean;
  /** Press callback */
  onPress?: () => void;
  /** Whether to show bottom divider */
  hasDivider?: boolean;
  /** Disabled state */
  isDisabled?: boolean;
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
