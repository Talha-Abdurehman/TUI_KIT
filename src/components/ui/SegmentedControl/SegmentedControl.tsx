/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade SegmentedControl primitive.
 * Zero arbitrary values, pill geometry, high-contrast active state.
 */

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { SegmentedControlProps } from './SegmentedControl.types';

export function SegmentedControl<T extends string = string>({
  items,
  value,
  onChange,
  style,
  testID,
}: SegmentedControlProps<T>) {
  const { colors, radius, hitSlop } = useTheme();

  return (
    <View
      testID={testID}
      accessibilityRole="tablist"
      style={[
        styles.container,
        {
          backgroundColor: colors.surfaceSubtle,
          borderColor: colors.borderSubtle,
          borderRadius: radius.full,
        },
        style,
      ]}
    >
      {items.map((item) => {
        const isActive = item.key === value;

        return (
          <Pressable
            key={item.key}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
            accessibilityLabel={item.label}
            onPress={() => onChange(item.key)}
            hitSlop={hitSlop}
            style={[
              styles.segment,
              { borderRadius: radius.full },
              isActive && [
                styles.segmentActive,
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.borderSubtle,
                },
              ],
            ]}
          >
            {item.icon ? <View style={styles.iconSlot}>{item.icon}</View> : null}
            <Text
              variant="captionMedium"
              style={{
                color: isActive ? colors.textPrimary : colors.textMuted,
              }}
            >
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: theme.spacing.xxs,
    alignItems: 'center',
    height: theme.layout.segmentedControlHeight,
  },
  segment: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.ms,
    paddingVertical: theme.spacing.xs,
  },
  segmentActive: {
    borderWidth: 1,
    shadowColor: theme.colors.textPrimary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  iconSlot: {
    marginRight: theme.spacing.xs,
  },
});
