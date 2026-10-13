/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade BottomSheet drawer primitive.
 * Slide-up mobile modal with drag indicator bar, safe area padding, and tokenized surfaces.
 */

import React from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { BottomSheetProps } from './BottomSheet.types';

export const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  title,
  children,
  style,
  testID,
}) => {
  const { colors, radius, layout, shadows } = useTheme();

  return (
    <Modal
      testID={testID}
      visible={isOpen}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable
          style={[styles.backdrop, { backgroundColor: colors.overlay }]}
          onPress={onClose}
        />

        <View
          style={[
            styles.sheet,
            {
              backgroundColor: colors.surface,
              borderTopLeftRadius: radius.xxl,
              borderTopRightRadius: radius.xxl,
              maxHeight: layout.bottomSheetMaxHeight,
            },
            shadows.lg,
            style,
          ]}
        >
          {/* Centered drag handle */}
          <View style={styles.handleContainer}>
            <View
              style={[
                styles.dragHandle,
                {
                  width: layout.bottomSheetDragHandleWidth,
                  height: layout.bottomSheetDragHandleHeight,
                  borderRadius: radius.full,
                  backgroundColor: colors.border,
                },
              ]}
            />
          </View>

          {/* Header */}
          {title ? (
            <View style={[styles.headerRow, { borderBottomColor: colors.borderSubtle }]}>
              <Text variant="titleSm" color="textPrimary">
                {title}
              </Text>
              <Pressable accessibilityRole="button" onPress={onClose} hitSlop={theme.hitSlop}>
                <Text variant="bodyBold" color="textMuted">
                  ✕
                </Text>
              </Pressable>
            </View>
          ) : null}

          {/* Scrollable sheet body */}
          <ScrollView
            contentContainerStyle={styles.bodyContent}
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  sheet: {
    width: '100%',
    paddingBottom: theme.spacing.xl,
  },
  handleContainer: {
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
  },
  dragHandle: {},
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.sm,
    borderBottomWidth: 1,
  },
  bodyContent: {
    padding: theme.spacing.lg,
  },
});
