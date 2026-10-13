/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade Tabs navigation primitive.
 * Supports underline and pill variants with badge support and touch feedback.
 */

import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Badge } from '../Badge';
import { Text } from '../Text';
import { TabItem, TabsProps } from './Tabs.types';

export function Tabs<T extends string = string>({
  tabs,
  activeKey,
  onChange,
  variant = 'line',
  style,
  testID,
}: TabsProps<T>) {
  const { colors, radius, layout, hitSlop } = useTheme();

  return (
    <View
      testID={testID}
      accessibilityRole="tablist"
      style={[
        styles.container,
        variant === 'line' && [styles.lineContainer, { borderBottomColor: colors.borderSubtle }],
        style,
      ]}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {tabs.map((tab) => {
          const isActive = tab.key === activeKey;

          if (variant === 'pill') {
            return (
              <Pressable
                key={tab.key}
                accessibilityRole="tab"
                accessibilityState={{ selected: isActive }}
                onPress={() => onChange(tab.key)}
                hitSlop={hitSlop}
                style={[
                  styles.pillTab,
                  {
                    borderRadius: radius.full,
                    backgroundColor: isActive ? colors.primaryDark : colors.surfaceSubtle,
                  },
                ]}
              >
                {tab.icon ? <View style={styles.iconSlot}>{tab.icon}</View> : null}
                <Text
                  variant="bodySmMedium"
                  style={{ color: isActive ? colors.textInverse : colors.textPrimary }}
                >
                  {tab.label}
                </Text>
                {tab.badge !== undefined ? (
                  <Badge
                    label={String(tab.badge)}
                    variant={isActive ? 'primary' : 'secondary'}
                    size="sm"
                    style={styles.tabBadge}
                  />
                ) : null}
              </Pressable>
            );
          }

          // Line variant (default)
          return (
            <Pressable
              key={tab.key}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive }}
              onPress={() => onChange(tab.key)}
              hitSlop={hitSlop}
              style={[
                styles.lineTab,
                {
                  height: layout.tabHeight,
                  borderBottomColor: isActive ? colors.primaryDark : colors.transparent,
                },
              ]}
            >
              {tab.icon ? <View style={styles.iconSlot}>{tab.icon}</View> : null}
              <Text
                variant="bodySmMedium"
                color={isActive ? 'textPrimary' : 'textMuted'}
                style={{ fontWeight: isActive ? '700' : '500' }}
              >
                {tab.label}
              </Text>
              {tab.badge !== undefined ? (
                <Badge
                  label={String(tab.badge)}
                  variant={isActive ? 'primary' : 'secondary'}
                  size="sm"
                  style={styles.tabBadge}
                />
              ) : null}
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  lineContainer: {
    borderBottomWidth: 1,
  },
  scrollContent: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  lineTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    borderBottomWidth: 2.5,
  },
  pillTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
  },
  iconSlot: {
    marginRight: theme.spacing.xs,
  },
  tabBadge: {
    marginLeft: theme.spacing.xs,
  },
});
