/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Accordion component types.
 */

import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  subtitle?: string;
  icon?: ReactNode;
}

export interface AccordionProps {
  /** Array of expandable accordion items */
  items: AccordionItem[];
  /** Allow multiple items to be expanded simultaneously */
  allowMultiple?: boolean;
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
