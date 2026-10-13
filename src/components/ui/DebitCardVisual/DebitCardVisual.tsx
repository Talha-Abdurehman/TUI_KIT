/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * DebitCardVisual types and component.
 */

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Badge } from '../Badge';
import { Text } from '../Text';

export interface DebitCardVisualProps {
  cardHolder?: string;
  lastFourDigits?: string;
  expiryDate?: string;
  isFrozen?: boolean;
  themeVariant?: 'lime' | 'forest';
  onPress?: () => void;
  testID?: string;
}

export const DebitCardVisual: React.FC<DebitCardVisualProps> = ({
  cardHolder = 'TALHA ABDUREHMAN',
  lastFourDigits = '4821',
  expiryDate = '08/29',
  isFrozen = false,
  themeVariant = 'lime',
  onPress,
  testID,
}) => {
  const { colors, radius, shadows } = useTheme();

  const isLime = themeVariant === 'lime';
  const bgColor = isLime ? colors.brandLime : colors.brandForest;
  const textColor = isLime ? colors.brandForest : colors.textPrimary;
  // Derived tint — not in token palette
  const chipBg = isLime ? '#88D05C' : '#284E0B';

  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      onPress={onPress}
      style={[
        styles.cardContainer,
        {
          backgroundColor: bgColor,
          borderRadius: radius.xl,
        },
        shadows.lg,
      ]}
    >
      {/* Top Header */}
      <View style={styles.topRow}>
        <View style={styles.brandRow}>
          <Text
            variant="titleLg"
            style={[styles.brandLogo, { color: textColor }]}
          >
            wise
          </Text>
        </View>

        <View style={styles.topRightBadge}>
          {isFrozen ? (
            <Badge label="Frozen ❄️" variant="secondary" size="sm" />
          ) : (
            <Text variant="bodyBold" style={{ color: textColor }}>
              digital
            </Text>
          )}
        </View>
      </View>

      {/* Chip & Contactless */}
      <View style={styles.chipRow}>
        <View style={[styles.emvChip, { backgroundColor: chipBg }]} />
        <Text variant="titleSm" style={{ color: textColor, opacity: 0.75 }}>
          )))
        </Text>
      </View>

      {/* Bottom Information */}
      <View style={styles.bottomBlock}>
        <View style={styles.digitsRow}>
          <Text
            variant="titleMd"
            style={[styles.cardNumber, { color: textColor }]}
          >
            •••• •••• •••• {lastFourDigits}
          </Text>
        </View>

        <View style={styles.holderRow}>
          <View>
            <Text
              variant="caption"
              style={{ color: textColor, opacity: 0.7, letterSpacing: 0.5 }}
            >
              CARDHOLDER
            </Text>
            <Text
              variant="bodySmMedium"
              style={{ color: textColor, letterSpacing: 1 }}
            >
              {cardHolder}
            </Text>
          </View>

          <View style={styles.expiryCol}>
            <Text
              variant="caption"
              style={{ color: textColor, opacity: 0.7, letterSpacing: 0.5 }}
            >
              EXPIRES
            </Text>
            <Text
              variant="bodySmMedium"
              style={{ color: textColor, letterSpacing: 1 }}
            >
              {expiryDate}
            </Text>
          </View>

          {/* Mastercard circles logo */}
          <View style={styles.mastercardLogo}>
            <View
              style={[
                styles.mcCircle,
                { backgroundColor: '#EB001B' }, // Mastercard brand red
              ]}
            />
            <View
              style={[
                styles.mcCircle,
                styles.mcCircleRight,
                { backgroundColor: '#F79E1B' }, // Mastercard brand amber
              ]}
            />
          </View>
        </View>
      </View>

      {isFrozen ? (
        <View
          style={[
            styles.frozenOverlay,
            { backgroundColor: colors.cardFrozenOverlay },
          ]}
        />
      ) : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    aspectRatio: theme.layout.debitCardAspectRatio,
    padding: theme.spacing.lg,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandLogo: {
    fontStyle: 'italic',
    letterSpacing: -1,
  },
  topRightBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.ms,
  },
  emvChip: {
    width: theme.layout.emvChipWidth,
    height: theme.layout.emvChipHeight,
    borderRadius: theme.radius.sm,
  },
  bottomBlock: {
    marginTop: 'auto',
  },
  digitsRow: {
    marginBottom: theme.spacing.ms,
  },
  cardNumber: {
    letterSpacing: 2,
  },
  holderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  expiryCol: {
    marginLeft: theme.spacing.ms,
  },
  mastercardLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: theme.layout.mastercardLogoWidth,
    height: theme.layout.mastercardLogoHeight,
  },
  mcCircle: {
    width: theme.layout.mcCircleSize,
    height: theme.layout.mcCircleSize,
    borderRadius: theme.layout.mcCircleSize / 2,
    opacity: 0.9,
  },
  mcCircleRight: {
    marginLeft: theme.layout.mcCircleOverlap,
  },
  frozenOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: theme.colors.cardFrozenOverlay,
  },
});
