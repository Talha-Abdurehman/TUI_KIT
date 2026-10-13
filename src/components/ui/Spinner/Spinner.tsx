/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade Spinner loader primitive.
 * Consumes theme colors, offers 3 size variations, and supports assistive loading labels.
 */

import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { SpinnerProps } from './Spinner.types';

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color,
  label,
  style,
  testID,
}) => {
  const { colors } = useTheme();

  const indicatorSize = size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'small';
  const indicatorColor = color || colors.primaryDark;

  return (
    <View testID={testID} style={[styles.container, style]}>
      <ActivityIndicator size={indicatorSize} color={indicatorColor} />
      {label ? (
        <Text variant="captionMedium" color="textSecondary" style={styles.label}>
          {label}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.sm,
  },
  label: {
    marginTop: theme.spacing.sm,
  },
});
