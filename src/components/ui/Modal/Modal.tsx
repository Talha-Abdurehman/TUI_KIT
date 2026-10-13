/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade Modal dialog primitive.
 * Zero web drift, native React Native Modal with darkened overlay backdrop and tokenized actions.
 */

import React from 'react';
import {
  Modal as NativeModal,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { theme, useTheme } from '@/theme';
import { Button } from '../Button';
import { Text } from '../Text';
import { ModalProps } from './Modal.types';

export const Modal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  title,
  description,
  primaryActionLabel = 'Confirm',
  onPrimaryAction,
  secondaryActionLabel = 'Cancel',
  children,
  style,
  testID,
}) => {
  const { colors, radius, layout, shadows } = useTheme();

  return (
    <NativeModal
      testID={testID}
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={[styles.backdrop, { backgroundColor: colors.overlay }]}>
        <Pressable style={styles.backdropPressable} onPress={onClose} />

        <View
          style={[
            styles.dialog,
            {
              backgroundColor: colors.surface,
              borderRadius: radius.xl,
              maxWidth: layout.modalMaxWidth,
            },
            shadows.lg,
            style,
          ]}
        >
          {title ? (
            <Text variant="titleMd" color="textPrimary" style={styles.title}>
              {title}
            </Text>
          ) : null}

          {description ? (
            <Text variant="body" color="textSecondary" style={styles.description}>
              {description}
            </Text>
          ) : null}

          {children}

          <View style={styles.actionRow}>
            {secondaryActionLabel ? (
              <Button
                label={secondaryActionLabel}
                variant="outline"
                size="md"
                onPress={onClose}
                style={styles.actionBtn}
              />
            ) : null}
            {primaryActionLabel ? (
              <Button
                label={primaryActionLabel}
                variant="primary"
                size="md"
                onPress={onPrimaryAction || onClose}
                style={styles.actionBtn}
              />
            ) : null}
          </View>
        </View>
      </View>
    </NativeModal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  backdropPressable: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  dialog: {
    width: '100%',
    padding: theme.spacing.lg,
  },
  title: {
    marginBottom: theme.spacing.xs,
  },
  description: {
    marginBottom: theme.spacing.md,
  },
  actionRow: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginTop: theme.spacing.lg,
  },
  actionBtn: {
    flex: 1,
  },
});
