/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Keypad component - mobile fintech and PIN entry numeric keypad
 */
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { layout, radius, spacing, useTheme } from '@/theme';
import { Text } from '../Text';
import type { KeypadProps } from './Keypad.types';

const KEY_SUBTITLES: Record<string, string> = {
  '2': 'ABC',
  '3': 'DEF',
  '4': 'GHI',
  '5': 'JKL',
  '6': 'MNO',
  '7': 'PQRS',
  '8': 'TUV',
  '9': 'WXYZ',
};

const ROWS: string[][] = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
];

export const Keypad: React.FC<KeypadProps> = ({
  onKeyPress,
  onDelete,
  onLongDelete,
  showDecimal = true,
  customLeftKey,
  disabled = false,
  style,
}) => {
  const theme = useTheme();

  const renderKey = (val: string) => {
    const subtitle = KEY_SUBTITLES[val];

    return (
      <Pressable
        key={val}
        disabled={disabled}
        accessibilityRole="button"
        accessibilityLabel={`Key ${val}`}
        onPress={() => onKeyPress(val)}
        style={({ pressed }) => [
          styles.key,
          {
            backgroundColor: pressed ? theme.colors.surfaceActive : theme.colors.surfaceSubtle,
            opacity: disabled ? 0.4 : 1,
            transform: [{ scale: pressed ? 0.94 : 1 }],
          },
        ]}
      >
        <Text variant="titleLg" color="textPrimary">
          {val}
        </Text>
        {subtitle ? (
          <Text variant="caption" color="textMuted" style={styles.subtitle}>
            {subtitle}
          </Text>
        ) : null}
      </Pressable>
    );
  };

  return (
    <View style={[styles.container, style]}>
      {/* Rows 1-3 */}
      {ROWS.map((row, idx) => (
        <View key={`row-${idx}`} style={styles.row}>
          {row.map(renderKey)}
        </View>
      ))}

      {/* Row 4: Left Action, 0, Backspace */}
      <View style={styles.row}>
        {/* Bottom Left Key */}
        {customLeftKey ? (
          <Pressable
            disabled={disabled}
            accessibilityRole="button"
            accessibilityLabel={customLeftKey.accessibilityLabel ?? customLeftKey.label ?? 'Custom action'}
            onPress={customLeftKey.onPress}
            style={({ pressed }) => [
              styles.key,
              {
                backgroundColor: pressed ? theme.colors.surfaceActive : theme.colors.surfaceSubtle,
                opacity: disabled ? 0.4 : 1,
                transform: [{ scale: pressed ? 0.94 : 1 }],
              },
            ]}
          >
            {customLeftKey.icon ? (
              <Ionicons
                name={customLeftKey.icon}
                size={spacing.lg}
                color={theme.colors.textPrimary}
              />
            ) : customLeftKey.label ? (
              <Text variant="titleMd" color="textPrimary">
                {customLeftKey.label}
              </Text>
            ) : null}
          </Pressable>
        ) : showDecimal ? (
          <Pressable
            disabled={disabled}
            accessibilityRole="button"
            accessibilityLabel="Decimal point"
            onPress={() => onKeyPress('.')}
            style={({ pressed }) => [
              styles.key,
              {
                backgroundColor: pressed ? theme.colors.surfaceActive : theme.colors.surfaceSubtle,
                opacity: disabled ? 0.4 : 1,
                transform: [{ scale: pressed ? 0.94 : 1 }],
              },
            ]}
          >
            <Text variant="display" color="textPrimary">
              .
            </Text>
          </Pressable>
        ) : (
          <View style={styles.keyPlaceholder} />
        )}

        {/* 0 Key */}
        {renderKey('0')}

        {/* Backspace Key */}
        <Pressable
          disabled={disabled}
          accessibilityRole="button"
          accessibilityLabel="Delete"
          onPress={onDelete}
          onLongPress={onLongDelete}
          style={({ pressed }) => [
            styles.key,
            {
              backgroundColor: pressed ? theme.colors.surfaceActive : theme.colors.surfaceSubtle,
              opacity: disabled ? 0.4 : 1,
              transform: [{ scale: pressed ? 0.94 : 1 }],
            },
          ]}
        >
          <Ionicons
            name="backspace-outline"
            size={spacing.lg}
            color={theme.colors.textPrimary}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    width: '100%',
    paddingVertical: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.md,
    width: '100%',
  },
  key: {
    width: layout.keypadKeyWidth,
    height: layout.keypadKeyHeight,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyPlaceholder: {
    width: layout.keypadKeyWidth,
    height: layout.keypadKeyHeight,
  },
  subtitle: {
    marginTop: -2,
    letterSpacing: 1.5,
  },
});
