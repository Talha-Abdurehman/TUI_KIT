/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Wise Deconstructed Cards Management Screen
 */

import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Switch, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Badge, Button, Card, DebitCardVisual, ProgressBar, SettingRow, Text } from '@/components';

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
        <SettingRow
          title="Online payments"
          subtitle="E-commerce, digital subscriptions, and mobile apps"
          value={onlineEnabled}
          onValueChange={setOnlineEnabled}
        />
        <SettingRow
          title="ATM cash withdrawals"
          subtitle="Up to £200/month free worldwide"
          value={atmEnabled}
          onValueChange={setAtmEnabled}
          hasDivider={true}
        />
        <SettingRow
          title="Contactless & tap payments"
          subtitle="Physical POS chip & NFC readers"
          value={contactlessEnabled}
          onValueChange={setContactlessEnabled}
          hasDivider={true}
        />
      </Card>

      {/* Spending Limits Card */}
      <Text variant="titleSm" color="textPrimary" style={styles.sectionTitle}>
        Monthly spending limit
      </Text>
      <Card variant="flat" style={styles.limitsCard}>
        <ProgressBar
          label="Spent this month"
          valueText="£450 / £3,000"
          progress={15}
          variant="primary"
        />

        <Text variant="caption" color="textMuted" style={{ marginTop: spacing.sm }}>
          Resets on the 1st of every month
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: theme.spacing.xxl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.ml,
  },
  cardWrapper: {
    marginBottom: theme.spacing.ml,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: theme.spacing.ms,
    marginBottom: theme.spacing.lg,
  },
  actionBtn: {
    flex: 1,
  },
  sectionTitle: {
    marginBottom: theme.spacing.ms,
  },
  controlsCard: {
    padding: theme.spacing.md,
    borderRadius: theme.radius.lg,
    marginBottom: theme.spacing.lg,
  },
  controlRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.ms,
  },
  divider: {
    borderTopWidth: 1,
  },
  controlText: {
    flex: 1,
    marginRight: theme.spacing.md,
  },
  limitsCard: {
    padding: theme.spacing.md,
    borderRadius: theme.radius.lg,
  },
  limitHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.ms,
  },
  progressTrack: {
    width: '100%',
    height: theme.layout.progressBarHeight,
    borderRadius: theme.radius.xs,
    overflow: 'hidden',
  },
  progressFill: {
    width: '15%',
    height: '100%',
  },
});
