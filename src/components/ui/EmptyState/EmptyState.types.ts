/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * EmptyState component type contract
 */
import type React from 'react';
import type { ViewStyle } from 'react-native';
import type { Ionicons } from '@expo/vector-icons';

export interface EmptyStateProps {
  /**
   * Title text describing the empty condition
   */
  title: string;
  /**
   * Optional supporting explanatory copy
   */
  description?: string;
  /**
   * Ionicon glyph name or custom React element
   */
  icon?: keyof typeof Ionicons.glyphMap | React.ReactNode;
  /**
   * Label for primary action button
   */
  actionLabel?: string;
  /**
   * Press handler for primary action button
   */
  onAction?: () => void;
  /**
   * Label for optional secondary action button
   */
  secondaryActionLabel?: string;
  /**
   * Press handler for secondary action button
   */
  onSecondaryAction?: () => void;
  /**
   * Optional container style
   */
  style?: ViewStyle;
}
