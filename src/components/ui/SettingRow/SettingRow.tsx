/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade SettingRow component.
 * Standard list row with title, description, and Switch toggle.
 */

import React from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { SettingRowProps } from './SettingRow.types';

export const SettingRow: React.FC<SettingRowProps> = ({
  title,
  subtitle,
  value,
  onValueChange,
  isDisabled = false,
  leftIcon,
  hasDivider = false,
  style,
  testID,
}) => {
  const { colors } = useTheme();

  return (
    <View
      testID={testID}
      style={[
        styles.row,
        hasDivider && [styles.divider, { borderTopColor: colors.borderSubtle }],
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {leftIcon ? <View style={styles.iconSlot}>{leftIcon}</View> : null}

      <View style={styles.textContainer}>
        <Text variant="bodyBold" color="textPrimary">
          {title}
        </Text>
        {subtitle ? (
          <Text variant="caption" color="textSecondary" style={styles.subtitle}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      <Switch
        value={value}
        onValueChange={onValueChange}
        disabled={isDisabled}
        trackColor={{ false: colors.borderSubtle, true: colors.primary }}
        thumbColor={colors.surface}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.ms,
  },
  divider: {
    borderTopWidth: 1,
  },
  iconSlot: {
    marginRight: theme.spacing.md,
  },
  textContainer: {
    flex: 1,
    marginRight: theme.spacing.md,
  },
  subtitle: {
    marginTop: theme.spacing.xxs,
  },
  disabled: {
    opacity: 0.5,
  },
});
