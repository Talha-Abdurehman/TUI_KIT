/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * EmptyState component - clean mobile empty slate presentation
 */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { layout, radius, spacing, useTheme } from '@/theme';
import { Button } from '../Button';
import { Text } from '../Text';
import type { EmptyStateProps } from './EmptyState.types';

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon = 'file-tray-outline',
  actionLabel,
  onAction,
  secondaryActionLabel,
  onSecondaryAction,
  style,
}) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, style]}>
      {/* Icon Graphic Container */}
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: theme.colors.surfaceSubtle,
            borderColor: theme.colors.borderSubtle,
          },
        ]}
      >
        {typeof icon === 'string' ? (
          <Ionicons
            name={icon as keyof typeof Ionicons.glyphMap}
            size={spacing.xl}
            color={theme.colors.textMuted}
          />
        ) : (
          icon
        )}
      </View>

      {/* Copy Block */}
      <View style={styles.copyBlock}>
        <Text variant="titleMd" color="textPrimary" align="center">
          {title}
        </Text>
        {description ? (
          <Text
            variant="bodySm"
            color="textSecondary"
            align="center"
            style={styles.description}
          >
            {description}
          </Text>
        ) : null}
      </View>

      {/* Actions */}
      {actionLabel || secondaryActionLabel ? (
        <View style={styles.actionBlock}>
          {actionLabel && onAction ? (
            <Button
              label={actionLabel}
              onPress={onAction}
              variant="primary"
              size="md"
            />
          ) : null}
          {secondaryActionLabel && onSecondaryAction ? (
            <Button
              label={secondaryActionLabel}
              onPress={onSecondaryAction}
              variant="ghost"
              size="md"
            />
          ) : null}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xxl,
    paddingHorizontal: spacing.lg,
  },
  iconContainer: {
    width: layout.emptyStateIconSize,
    height: layout.emptyStateIconSize,
    borderRadius: radius.full,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  copyBlock: {
    alignItems: 'center',
    maxWidth: 320,
    marginBottom: spacing.lg,
  },
  description: {
    marginTop: spacing.xs,
  },
  actionBlock: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.sm,
    width: '100%',
    maxWidth: 280,
  },
});
