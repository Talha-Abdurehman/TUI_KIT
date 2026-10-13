/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade ProgressBar primitive.
 * Zero arbitrary values, strictly consuming layout and semantic color tokens.
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { ProgressBarProps, ProgressBarVariant } from './ProgressBar.types';

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  variant = 'primary',
  height,
  label,
  valueText,
  style,
  accessibilityLabel,
  testID,
}) => {
  const { colors, radius, layout, spacing } = useTheme();

  // Clamp progress between 0 and 100
  const clampedProgress = Math.min(100, Math.max(0, progress));
  const trackHeight = height || layout.progressBarHeight;

  const getFillColor = (v: ProgressBarVariant): string => {
    switch (v) {
      case 'success':
        return colors.success;
      case 'warning':
        return colors.warning;
      case 'error':
        return colors.error;
      case 'primary':
      default:
        return colors.primaryDark;
    }
  };

  return (
    <View
      testID={testID}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: clampedProgress }}
      accessibilityLabel={accessibilityLabel || label || 'Progress'}
      style={[styles.container, style]}
    >
      {(label || valueText) ? (
        <View style={styles.headerRow}>
          {label ? (
            <Text variant="bodySmMedium" color="textSecondary">
              {label}
            </Text>
          ) : null}
          {valueText ? (
            <Text variant="bodyBold" color="textPrimary">
              {valueText}
            </Text>
          ) : null}
        </View>
      ) : null}

      <View
        style={[
          styles.track,
          {
            height: trackHeight,
            borderRadius: radius.full,
            backgroundColor: colors.surfaceHover,
          },
        ]}
      >
        <View
          style={[
            styles.fill,
            {
              width: `${clampedProgress}%`,
              height: trackHeight,
              borderRadius: radius.full,
              backgroundColor: getFillColor(variant),
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  track: {
    width: '100%',
    overflow: 'hidden',
  },
  fill: {
    minWidth: 4,
  },
});
