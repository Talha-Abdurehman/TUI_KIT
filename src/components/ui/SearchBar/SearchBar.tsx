/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade SearchBar primitive.
 * Pill styling, search icon, fast clear trigger, and cancel action.
 */

import React from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { SearchBarProps } from './SearchBar.types';

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Search...',
  onClear,
  showCancel = false,
  onCancel,
  isDisabled = false,
  style,
  testID,
}) => {
  const { colors, radius, layout, hitSlop } = useTheme();

  const handleClear = () => {
    onChangeText('');
    onClear?.();
  };

  return (
    <View testID={testID} style={[styles.outerRow, style]}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.surfaceSubtle,
            borderColor: colors.borderSubtle,
            borderRadius: radius.full,
            minHeight: layout.inputMinHeight,
          },
          isDisabled && styles.disabled,
        ]}
      >
        <Text variant="bodyMedium" style={styles.searchIcon}>
          🔍
        </Text>

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          editable={!isDisabled}
          style={[styles.input, { color: colors.textPrimary }]}
          returnKeyType="search"
          clearButtonMode="never"
        />

        {value.length > 0 ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Clear search"
            onPress={handleClear}
            hitSlop={hitSlop}
            style={[styles.clearBtn, { backgroundColor: colors.surfaceHover, borderRadius: radius.full }]}
          >
            <Text variant="captionMedium" color="textSecondary">
              ✕
            </Text>
          </Pressable>
        ) : null}
      </View>

      {showCancel ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Cancel search"
          onPress={onCancel}
          hitSlop={hitSlop}
          style={styles.cancelBtn}
        >
          <Text variant="bodySmMedium" color="primary">
            Cancel
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  outerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: theme.spacing.md,
  },
  searchIcon: {
    marginRight: theme.spacing.sm,
    fontSize: 14,
  },
  input: {
    flex: 1,
    fontSize: theme.typography.size.md,
    paddingVertical: theme.spacing.sm,
  },
  clearBtn: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: theme.spacing.sm,
  },
  cancelBtn: {
    marginLeft: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
  },
  disabled: {
    opacity: 0.5,
  },
});
