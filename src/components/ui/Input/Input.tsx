/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Accessible, token-driven TextInput primitive.
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput as NativeTextInput,
  View,
} from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { InputProps } from './Input.types';

export const Input: React.FC<InputProps> = ({
  label,
  errorText,
  helperText,
  isDisabled = false,
  leftIcon,
  rightIcon,
  containerStyle,
  style,
  testID,
  onFocus,
  onBlur,
  ...textInputProps
}) => {
  const { colors, spacing, radius, layout } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const hasError = Boolean(errorText);

  const getBorderColor = () => {
    if (hasError) return colors.error;
    if (isFocused) return colors.borderFocus;
    return colors.border;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <Text
          variant="bodySmMedium"
          color={hasError ? 'error' : 'textSecondary'}
          style={styles.label}
        >
          {label}
        </Text>
      ) : null}

      <View
        style={[
          styles.inputWrapper,
          {
            backgroundColor: colors.surface,
            borderColor: getBorderColor(),
            borderRadius: radius.md,
            paddingHorizontal: spacing.sm,
          },
          isDisabled && styles.disabled,
          style,
        ]}
      >
        {leftIcon ? <View style={styles.iconLeft}>{leftIcon}</View> : null}

        <NativeTextInput
          testID={testID}
          editable={!isDisabled}
          placeholderTextColor={colors.textMuted}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          style={[
            styles.input,
            {
              color: colors.textPrimary,
            },
          ]}
          {...textInputProps}
        />

        {rightIcon ? <View style={styles.iconRight}>{rightIcon}</View> : null}
      </View>

      {hasError ? (
        <Text variant="caption" color="error" style={styles.helper}>
          {errorText}
        </Text>
      ) : helperText ? (
        <Text variant="caption" color="textMuted" style={styles.helper}>
          {helperText}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: theme.spacing.ms,
  },
  label: {
    marginBottom: theme.spacing.sm,
  },
  inputWrapper: {
    minHeight: theme.layout.inputMinHeight,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: theme.typography.size.md,
    paddingVertical: theme.spacing.ms,
  },
  iconLeft: {
    marginRight: theme.spacing.sm,
  },
  iconRight: {
    marginLeft: theme.spacing.sm,
  },
  helper: {
    marginTop: theme.spacing.xs,
  },
  disabled: {
    opacity: 0.5,
  },
});
