/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * ActionCircleButton types and component.
 */

import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';

export interface ActionCircleButtonProps {
  label: string;
  icon: ReactNode;
  onPress?: () => void;
  isPrimary?: boolean;
  testID?: string;
}

export const ActionCircleButton: React.FC<ActionCircleButtonProps> = ({
  label,
  icon,
  onPress,
  isPrimary = false,
  testID,
}) => {
  const { colors, radius, hitSlop } = useTheme();

  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      hitSlop={hitSlop}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
      ]}
    >
      <View
        style={[
          styles.circle,
          {
            backgroundColor: isPrimary ? colors.primary : colors.surfaceSubtle,
            borderColor: isPrimary ? colors.transparent : colors.borderSubtle,
            borderRadius: radius.full,
          },
        ]}
      >
        {icon}
      </View>
      <Text
        variant="captionMedium"
        color="textPrimary"
        align="center"
        style={styles.label}
        numberOfLines={1}
      >
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: theme.layout.actionCircleContainerWidth,
  },
  circle: {
    width: theme.layout.actionCircleSize,
    height: theme.layout.actionCircleSize,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.sm,
  },
  label: {
    width: '100%',
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.96 }],
  },
});
