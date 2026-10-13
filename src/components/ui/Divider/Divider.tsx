/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade Divider primitive.
 * Crisp separator with optional centered text tag.
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { DividerProps } from './Divider.types';

export const Divider: React.FC<DividerProps> = ({
  label,
  color,
  spacing,
  style,
  testID,
}) => {
  const { colors, layout } = useTheme();

  const lineColor = color || colors.borderSubtle;
  const marginV = spacing !== undefined ? spacing : theme.spacing.md;

  if (label) {
    return (
      <View
        testID={testID}
        style={[styles.containerWithLabel, { marginVertical: marginV }, style]}
      >
        <View style={[styles.line, { backgroundColor: lineColor, height: layout.dividerThickness }]} />
        <Text variant="caption" color="textMuted" style={styles.label}>
          {label}
        </Text>
        <View style={[styles.line, { backgroundColor: lineColor, height: layout.dividerThickness }]} />
      </View>
    );
  }

  return (
    <View
      testID={testID}
      style={[
        styles.line,
        {
          backgroundColor: lineColor,
          height: layout.dividerThickness,
          marginVertical: marginV,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  line: {
    width: '100%',
  },
  containerWithLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  label: {
    paddingHorizontal: theme.spacing.sm,
    letterSpacing: 0.5,
  },
});
