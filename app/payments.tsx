/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Wise Deconstructed Payments & International Transfer Hub Screen
 */

import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Badge, Button, Card, Input, Text, Timeline } from '@/components';

export default function PaymentsScreen() {
  const { colors, spacing, radius } = useTheme();
  const [sendAmount, setSendAmount] = useState('1000');

  const numericAmount = parseFloat(sendAmount) || 0;
  const fee = 3.65;
  const rate = 1.1742;
  const convertedAmount = Math.max(0, (numericAmount - fee) * rate).toFixed(2);

  return (
    <ScrollView
      contentContainerStyle={[styles.content, { padding: spacing.md, backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      <Text variant="titleLg" color="textPrimary" style={styles.screenTitle}>
        Send money abroad
      </Text>

      {/* Wise Live Currency Calculator */}
      <Card variant="outlined" style={styles.calculatorCard}>
        {/* You Send Input */}
        <View style={styles.inputBlock}>
          <Text variant="captionMedium" color="textSecondary" style={styles.inputLabel}>
            You send exactly
          </Text>
          <View style={styles.amountRow}>
            <Input
              value={sendAmount}
              onChangeText={setSendAmount}
              keyboardType="numeric"
              containerStyle={styles.amountInput}
            />
            <View style={[styles.currencyPill, { backgroundColor: colors.surfaceSubtle }]}>
              <Text variant="titleSm">🇬🇧</Text>
              <Text variant="bodyBold" style={{ marginLeft: spacing.sm }}>
                GBP
              </Text>
            </View>
          </View>
        </View>

        {/* Real-time Fee & Exchange Rate Breakdown */}
        <View style={styles.feeBreakdown}>
          <View style={styles.feeLine}>
            <Text variant="caption" color="textMuted">
              Our fee
            </Text>
            <Text variant="captionMedium" color="textPrimary">
              £{fee.toFixed(2)} GBP
            </Text>
          </View>
          <View style={styles.feeLine}>
            <Text variant="caption" color="textMuted">
              Guaranteed rate (24 hrs)
            </Text>
            <Badge label={`1 GBP = ${rate} EUR`} variant="success" size="sm" />
          </View>
        </View>

        {/* Recipient Gets */}
        <View style={styles.inputBlock}>
          <Text variant="captionMedium" color="textSecondary" style={styles.inputLabel}>
            Recipient gets
          </Text>
          <View style={styles.amountRow}>
            <View style={[styles.resultBox, { backgroundColor: colors.surfaceSubtle, borderRadius: radius.md }]}>
              <Text variant="titleMd" color="textPrimary">
                €{convertedAmount}
              </Text>
            </View>
            <View style={[styles.currencyPill, { backgroundColor: colors.surfaceSubtle }]}>
              <Text variant="titleSm">🇪🇺</Text>
              <Text variant="bodyBold" style={{ marginLeft: spacing.sm }}>
                EUR
              </Text>
            </View>
          </View>
        </View>

        {/* CTA Button */}
        <Button
          label="Continue with transfer"
          variant="primary"
          size="lg"
          isFullWidth={true}
          style={styles.ctaButton}
        />
      </Card>

      {/* Active Transfer Tracker */}
      <Text variant="titleSm" color="textPrimary" style={styles.sectionTitle}>
        Active transfer tracker
      </Text>

      <Card variant="flat" style={styles.trackerCard}>
        <View style={styles.trackerHeader}>
          <View>
            <Text variant="bodyBold">Transfer to Sarah Jenkins</Text>
            <Text variant="caption" color="textSecondary">
              £500.00 → €585.20 EUR
            </Text>
          </View>
          <Badge label="In Progress" variant="warning" size="sm" />
        </View>

        {/* Timeline Steps */}
        <Timeline
          steps={[
            {
              id: '1',
              title: '1. Money received',
              description: 'Funds cleared into holding account',
              status: 'completed',
            },
            {
              id: '2',
              title: '2. Converted at guaranteed rate',
              description: 'Rate locked at 1 GBP = 1.1742 EUR',
              status: 'completed',
            },
            {
              id: '3',
              title: '3. Sending to recipient bank',
              description: 'Estimated delivery in 2 hours',
              status: 'pending',
            },
          ]}
        />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: theme.spacing.xxl,
  },
  screenTitle: {
    marginBottom: theme.spacing.md,
  },
  calculatorCard: {
    padding: theme.spacing.md,
    borderRadius: theme.radius.xl,
    marginBottom: theme.spacing.lg,
  },
  inputBlock: {
    marginBottom: theme.spacing.ms,
  },
  inputLabel: {
    marginBottom: theme.spacing.sm,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.ms,
  },
  amountInput: {
    flex: 1,
    marginBottom: 0,
  },
  resultBox: {
    flex: 1,
    height: theme.layout.inputMinHeight,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.ms,
  },
  currencyPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.ms,
    height: theme.layout.inputMinHeight,
    borderRadius: theme.radius.md,
  },
  feeBreakdown: {
    borderLeftWidth: 2,
    borderLeftColor: theme.colors.brandLime,
    paddingLeft: theme.spacing.ms,
    marginVertical: theme.spacing.ms,
    gap: theme.spacing.sm,
  },
  feeLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ctaButton: {
    marginTop: theme.spacing.md,
  },
  sectionTitle: {
    marginBottom: theme.spacing.ms,
  },
  trackerCard: {
    padding: theme.spacing.md,
    borderRadius: theme.radius.lg,
  },
  trackerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.md,
  },
  timeline: {
    paddingLeft: theme.spacing.sm,
  },
  timelineStep: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.ms,
  },
  stepDot: {
    width: theme.layout.stepDotSize,
    height: theme.layout.stepDotSize,
    borderRadius: theme.layout.stepDotSize / 2,
  },
  stepLine: {
    width: theme.layout.stepLineWidth,
    height: theme.spacing.ml,
    marginLeft: theme.spacing.xs,
    marginVertical: theme.spacing.xxs,
  },
});
