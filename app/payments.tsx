/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Wise Deconstructed Payments & International Transfer Hub Screen
 */

import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from '@/theme';
import { Badge, Button, Card, Input, Text } from '@/components';

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
              <Text variant="bodyBold" style={{ marginLeft: 6 }}>
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
              <Text variant="bodyBold" style={{ marginLeft: 6 }}>
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
        <View style={styles.timeline}>
          <View style={styles.timelineStep}>
            <View style={[styles.stepDot, { backgroundColor: colors.primaryDark }]} />
            <Text variant="captionMedium" color="textPrimary">
              1. Money received
            </Text>
          </View>
          <View style={[styles.stepLine, { backgroundColor: colors.primaryDark }]} />
          <View style={styles.timelineStep}>
            <View style={[styles.stepDot, { backgroundColor: colors.primaryDark }]} />
            <Text variant="captionMedium" color="textPrimary">
              2. Converted at guaranteed rate
            </Text>
          </View>
          <View style={[styles.stepLine, { backgroundColor: colors.borderSubtle }]} />
          <View style={styles.timelineStep}>
            <View style={[styles.stepDot, { backgroundColor: colors.surfaceHover }]} />
            <Text variant="captionMedium" color="textMuted">
              3. Sending to recipient bank (est. 2 hrs)
            </Text>
          </View>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 40,
  },
  screenTitle: {
    marginBottom: 16,
  },
  calculatorCard: {
    padding: 18,
    borderRadius: 20,
    marginBottom: 24,
  },
  inputBlock: {
    marginBottom: 12,
  },
  inputLabel: {
    marginBottom: 6,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  amountInput: {
    flex: 1,
    marginBottom: 0,
  },
  resultBox: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  currencyPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 44,
    borderRadius: 12,
  },
  feeBreakdown: {
    borderLeftWidth: 2,
    borderLeftColor: '#9FE870',
    paddingLeft: 12,
    marginVertical: 12,
    gap: 6,
  },
  feeLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ctaButton: {
    marginTop: 16,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  trackerCard: {
    padding: 18,
    borderRadius: 16,
  },
  trackerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  timeline: {
    paddingLeft: 6,
  },
  timelineStep: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  stepDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  stepLine: {
    width: 2,
    height: 20,
    marginLeft: 5,
    marginVertical: 3,
  },
});
