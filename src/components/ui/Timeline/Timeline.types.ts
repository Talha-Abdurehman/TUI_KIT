/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Timeline component types and interfaces.
 */

import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export type TimelineStepStatus = 'completed' | 'active' | 'pending';

export interface TimelineStepItem {
  id: string;
  title: string;
  description?: string;
  status: TimelineStepStatus;
  timestamp?: string;
  icon?: ReactNode;
}

export interface TimelineProps {
  /** Array of chronological steps to render */
  steps: TimelineStepItem[];
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
