/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade OTPInput primitive.
 * Multi-box PIN code entry, focus rings, security masking, and verification error feedback.
 */

import React, { useRef } from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { OTPInputProps } from './OTPInput.types';

export const OTPInput: React.FC<OTPInputProps> = ({
  value,
  onChange,
  length = 4,
  isSecure = false,
  errorText,
  isDisabled = false,
  style,
  testID,
}) => {
  const { colors, radius, layout } = useTheme();
  const inputRef = useRef<TextInput>(null);

  const boxes = Array.from({ length }, (_, i) => i);
  const hasError = Boolean(errorText);

  return (
    <View testID={testID} style={[styles.container, style]}>
      {/* Hidden native input capturing keyboard events */}
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={(text) => {
          const sanitized = text.replace(/[^0-9]/g, '').slice(0, length);
          onChange(sanitized);
        }}
        keyboardType="number-pad"
        maxLength={length}
        editable={!isDisabled}
        style={styles.hiddenInput}
        aria-hidden={true}
      />

      {/* Visual digit boxes */}
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Enter PIN code"
        onPress={() => inputRef.current?.focus()}
        style={styles.boxRow}
      >
        {boxes.map((index) => {
          const char = value[index] || '';
          const isCurrent = value.length === index;
          const displayChar = isSecure && char ? '●' : char;

          const getBorderColor = () => {
            if (hasError) return colors.error;
            if (isCurrent) return colors.borderFocus;
            if (char) return colors.primaryDark;
            return colors.border;
          };

          return (
            <View
              key={index}
              style={[
                styles.box,
                {
                  width: layout.otpBoxSize,
                  height: layout.otpBoxSize,
                  borderRadius: radius.md,
                  backgroundColor: colors.surface,
                  borderColor: getBorderColor(),
                },
              ]}
            >
              <Text
                variant="titleLg"
                style={{
                  color: hasError ? colors.error : colors.textPrimary,
                }}
              >
                {displayChar}
              </Text>
            </View>
          );
        })}
      </Pressable>

      {errorText ? (
        <Text variant="caption" color="error" style={styles.errorText}>
          {errorText}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  hiddenInput: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
  },
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: theme.spacing.md,
  },
  box: {
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    marginTop: theme.spacing.sm,
  },
});
