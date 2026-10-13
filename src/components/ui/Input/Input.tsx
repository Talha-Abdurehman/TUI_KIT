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
import { useTheme } from '@/theme';
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
  const { colors, spacing, radius } = useTheme();
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
    marginBottom: 12,
  },
  label: {
    marginBottom: 6,
  },
  inputWrapper: {
    minHeight: 44,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  helper: {
    marginTop: 4,
  },
  disabled: {
    opacity: 0.5,
  },
});
