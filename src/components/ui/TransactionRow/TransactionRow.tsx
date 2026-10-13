/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * TransactionRow types and component.
 */

import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useTheme } from '@/theme';
import { Badge } from '../Badge';
import { Text } from '../Text';

export interface TransactionRowProps {
  title: string;
  subtitle: string;
  amount: string;
  isPositive?: boolean;
  avatarIcon?: ReactNode;
  avatarText?: string;
  statusBadge?: string;
  onPress?: () => void;
  testID?: string;
}

export const TransactionRow: React.FC<TransactionRowProps> = ({
  title,
  subtitle,
  amount,
  isPositive = false,
  avatarIcon,
  avatarText,
  statusBadge,
  onPress,
  testID,
}) => {
  const { colors, radius } = useTheme();

  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.row,
        pressed && styles.pressed,
      ]}
    >
      <View
        style={[
          styles.avatar,
          {
            backgroundColor: colors.surfaceSubtle,
            borderColor: colors.borderSubtle,
            borderRadius: radius.full,
          },
        ]}
      >
        {avatarIcon ? (
          avatarIcon
        ) : (
          <Text variant="bodyBold" color="textPrimary">
            {avatarText || title.charAt(0)}
          </Text>
        )}
      </View>

      <View style={styles.textContainer}>
        <View style={styles.titleRow}>
          <Text variant="bodyBold" numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          {statusBadge ? (
            <Badge label={statusBadge} variant="warning" size="sm" />
          ) : null}
        </View>
        <Text variant="caption" color="textSecondary" numberOfLines={1}>
          {subtitle}
        </Text>
      </View>

      <View style={styles.amountContainer}>
        <Text
          variant="bodyBold"
          style={{
            color: isPositive ? colors.success : colors.textPrimary,
          }}
        >
          {amount}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    marginRight: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 2,
  },
  title: {
    flexShrink: 1,
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  pressed: {
    opacity: 0.7,
  },
});
