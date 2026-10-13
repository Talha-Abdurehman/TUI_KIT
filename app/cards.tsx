/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Wise Deconstructed Cards Management Screen
 */

import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Switch, View } from 'react-native';
import { useTheme } from '@/theme';
import { Badge, Button, Card, DebitCardVisual, Text } from '@/components';

export default function CardsScreen() {
  const { colors, spacing, radius } = useTheme();
  const [isFrozen, setIsFrozen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [onlineEnabled, setOnlineEnabled] = useState(true);
  const [atmEnabled, setAtmEnabled] = useState(true);
  const [contactlessEnabled, setContactlessEnabled] = useState(true);

  return (
    <ScrollView
      contentContainerStyle={[styles.content, { padding: spacing.md, backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Summary */}
      <View style={styles.header}>
        <Text variant="titleLg" color="textPrimary">
          Your cards
        </Text>
        <Badge
          label={isFrozen ? 'Card Frozen' : 'Active & Ready'}
          variant={isFrozen ? 'warning' : 'success'}
        />
      </View>

      {/* Visual Debit Card */}
      <View style={styles.cardWrapper}>
        <DebitCardVisual
          cardHolder="TALHA ABDUREHMAN"
          lastFourDigits={showDetails ? '9832' : '4821'}
          expiryDate="08/29"
          isFrozen={isFrozen}
          themeVariant="lime"
        />
      </View>

      {/* Primary Card Actions */}
      <View style={styles.actionsRow}>
        <Button
          label={isFrozen ? 'Unfreeze card' : 'Freeze card'}
          variant={isFrozen ? 'primary' : 'outline'}
          onPress={() => setIsFrozen((f) => !f)}
          style={styles.actionBtn}
        />
        <Button
          label={showDetails ? 'Hide details' : 'Show details'}
          variant="secondary"
          onPress={() => setShowDetails((d) => !d)}
          style={styles.actionBtn}
        />
      </View>

      {/* Card Controls & Limits */}
      <Text variant="titleSm" color="textPrimary" style={styles.sectionTitle}>
        Security & controls
      </Text>

      <Card variant="outlined" style={styles.controlsCard}>
        <View style={styles.controlRow}>
          <View style={styles.controlText}>
            <Text variant="bodyBold">Online payments</Text>
            <Text variant="caption" color="textSecondary">
              E-commerce, digital subscriptions, and mobile apps
            </Text>
          </View>
          <Switch
            value={onlineEnabled}
            onValueChange={setOnlineEnabled}
            trackColor={{ false: colors.borderSubtle, true: colors.primary }}
          />
        </View>

        <View style={[styles.controlRow, styles.divider, { borderTopColor: colors.borderSubtle }]}>
          <View style={styles.controlText}>
            <Text variant="bodyBold">ATM cash withdrawals</Text>
            <Text variant="caption" color="textSecondary">
              Up to £200/month free worldwide
            </Text>
          </View>
          <Switch
            value={atmEnabled}
            onValueChange={setAtmEnabled}
            trackColor={{ false: colors.borderSubtle, true: colors.primary }}
          />
        </View>

        <View style={[styles.controlRow, styles.divider, { borderTopColor: colors.borderSubtle }]}>
          <View style={styles.controlText}>
            <Text variant="bodyBold">Contactless & tap payments</Text>
            <Text variant="caption" color="textSecondary">
              Physical POS chip & NFC readers
            </Text>
          </View>
          <Switch
            value={contactlessEnabled}
            onValueChange={setContactlessEnabled}
            trackColor={{ false: colors.borderSubtle, true: colors.primary }}
          />
        </View>
      </Card>

      {/* Spending Limits Card */}
      <Text variant="titleSm" color="textPrimary" style={styles.sectionTitle}>
        Monthly spending limit
      </Text>
      <Card variant="flat" style={styles.limitsCard}>
        <View style={styles.limitHeader}>
          <Text variant="bodySmMedium" color="textSecondary">
            Spent this month
          </Text>
          <Text variant="bodyBold">£450 / £3,000</Text>
        </View>

        {/* Progress bar */}
        <View style={[styles.progressTrack, { backgroundColor: colors.surfaceHover }]}>
          <View style={[styles.progressFill, { backgroundColor: colors.primaryDark }]} />
        </View>

        <Text variant="caption" color="textMuted" style={{ marginTop: 8 }}>
          Resets on the 1st of every month
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardWrapper: {
    marginBottom: 20,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  actionBtn: {
    flex: 1,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  controlsCard: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
  },
  controlRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  divider: {
    borderTopWidth: 1,
  },
  controlText: {
    flex: 1,
    marginRight: 16,
  },
  limitsCard: {
    padding: 18,
    borderRadius: 16,
  },
  limitHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  progressTrack: {
    width: '100%',
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    width: '15%',
    height: '100%',
  },
});
