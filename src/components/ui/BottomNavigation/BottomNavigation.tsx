/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade BottomNavigation mobile tab bar primitive.
 * Zero arbitrary values, uses layout.bottomNavHeight, provides 44x44pt touch areas and active states.
 */

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Badge } from '../Badge';
import { Text } from '../Text';
import { BottomNavigationProps, BottomNavigationTab } from './BottomNavigation.types';

export function BottomNavigation<T extends string = string>({
  tabs,
  activeKey,
  onChange,
  style,
  testID,
}: BottomNavigationProps<T>) {
  const { colors, layout, hitSlop } = useTheme();

  return (
    <View
      testID={testID}
      accessibilityRole="tablist"
      style={[
        styles.container,
        {
          height: layout.bottomNavHeight,
          backgroundColor: colors.surface,
          borderTopColor: colors.borderSubtle,
        },
        style,
      ]}
    >
      {tabs.map((tab) => {
        const isActive = tab.key === activeKey;

        return (
          <Pressable
            key={tab.key}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
            accessibilityLabel={tab.label}
            onPress={() => onChange(tab.key)}
            hitSlop={hitSlop}
            style={({ pressed }) => [
              styles.tabItem,
              pressed && styles.pressed,
            ]}
          >
            <View style={styles.iconContainer}>
              {isActive && tab.activeIcon ? tab.activeIcon : tab.icon}
              {tab.badge !== undefined ? (
                <View style={styles.badgeWrapper}>
                  <Badge
                    label={String(tab.badge)}
                    variant="primary"
                    size="sm"
                  />
                </View>
              ) : null}
            </View>

            <Text
              variant="caption"
              style={{
                color: isActive ? colors.textPrimary : colors.textMuted,
                fontWeight: isActive ? '700' : '400',
              }}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    paddingBottom: theme.spacing.sm,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  iconContainer: {
    position: 'relative',
    marginBottom: theme.spacing.xxs,
  },
  badgeWrapper: {
    position: 'absolute',
    top: -6,
    right: -12,
  },
  pressed: {
    transform: [{ scale: 0.95 }],
  },
});
