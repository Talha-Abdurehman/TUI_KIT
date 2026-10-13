/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production Component Showcase - Complete UI Kit Primitives Catalog
 * Deconstructed token-driven design system with 100% token fidelity.
 */

import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, useTheme } from '@/theme';
import {
  ActionCircleButton,
  Badge,
  Button,
  Card,
  CurrencyCard,
  DebitCardVisual,
  Input,
  Text,
  TransactionRow,
} from '@/components';

export default function ComponentShowcaseScreen() {
  const router = useRouter();
  const { colors, spacing, radius, isDark, layout } = useTheme();

  // Interactive showcase state controls
  const [btnLoading, setBtnLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [cardPressCount, setCardPressCount] = useState(0);
  const [cardFrozen, setCardFrozen] = useState(false);
  const [cardVariant, setCardVariant] = useState<'lime' | 'forest'>('lime');
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={[styles.safeArea, { backgroundColor: colors.background }]}>
      {/* Top Showcase App Bar */}
      <View style={[styles.headerBar, { borderBottomColor: colors.borderSubtle, backgroundColor: colors.surface }]}>
        <View style={styles.headerLeft}>
          <Text variant="titleMd" color="textPrimary">
            UI Kit Catalog
          </Text>
          <View style={styles.badgeRow}>
            <Badge label="Expo SDK 57" variant="secondary" size="sm" />
            <Badge label={isDark ? 'Dark Mode' : 'Light Mode'} variant="primary" size="sm" />
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Cards Demo"
          onPress={() => router.push('/cards' as any)}
          style={[styles.headerDemoBtn, { backgroundColor: colors.surfaceSubtle }]}
        >
          <Text variant="captionMedium" color="textPrimary">
            Demo Apps ↗
          </Text>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingHorizontal: spacing.md, paddingVertical: spacing.md }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Intro Banner */}
        <Card variant="flat" style={styles.introCard}>
          <Text variant="captionMedium" color="textMuted">
            DESIGN SYSTEM & COMPONENT SHOWCASE
          </Text>
          <Text variant="titleLg" color="textPrimary" style={styles.introTitle}>
            Fintech UI Primitives
          </Text>
          <Text variant="bodySm" color="textSecondary">
            Zero arbitrary values, 100% token-driven contract, Hermes-optimized, and built for strict TypeScript.
          </Text>

          {/* Quick Screen Navigation Links */}
          <View style={styles.quickNavRow}>
            <Button
              label="Cards Screen"
              variant="outline"
              size="sm"
              onPress={() => router.push('/cards' as any)}
            />
            <Button
              label="Payments Screen"
              variant="outline"
              size="sm"
              onPress={() => router.push('/payments' as any)}
            />
            <Button
              label="Recipients Screen"
              variant="outline"
              size="sm"
              onPress={() => router.push('/recipients' as any)}
            />
          </View>
        </Card>

        {/* ============================================================== */}
        {/* SECTION 1: BUTTONS                                              */}
        {/* ============================================================== */}
        <View style={styles.sectionHeader}>
          <Text variant="titleMd" color="textPrimary">
            1. Buttons
          </Text>
          <Pressable onPress={() => router.push('/showcase/button' as any)}>
            <Text variant="captionMedium" color="textSecondary">
              Dedicated Screen →
            </Text>
          </Pressable>
        </View>
        <Text variant="caption" color="textMuted" style={styles.sectionSubtitle}>
          Pill-shaped (radius.full), 5 semantic variants, 3 sizes, loading & disabled micro-states.
        </Text>

        <Card variant="outlined" style={styles.componentCard}>
          {/* Controls toggle bar */}
          <View style={[styles.testControlsRow, { borderBottomColor: colors.borderSubtle }]}>
            <Text variant="captionMedium" color="textSecondary">
              Interactive Test:
            </Text>
            <Button
              label={btnLoading ? 'Stop Loading' : 'Simulate Loading'}
              variant="secondary"
              size="sm"
              onPress={() => setBtnLoading((prev) => !prev)}
            />
            <Button
              label={btnDisabled ? 'Enable Buttons' : 'Disable Buttons'}
              variant="secondary"
              size="sm"
              onPress={() => setBtnDisabled((prev) => !prev)}
            />
          </View>

          {/* Variants */}
          <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
            VARIANTS (SIZE MD)
          </Text>
          <View style={styles.buttonStack}>
            <Button
              label="Primary Variant"
              variant="primary"
              isLoading={btnLoading}
              isDisabled={btnDisabled}
            />
            <Button
              label="Secondary Variant"
              variant="secondary"
              isLoading={btnLoading}
              isDisabled={btnDisabled}
            />
            <Button
              label="Outline Variant"
              variant="outline"
              isLoading={btnLoading}
              isDisabled={btnDisabled}
            />
            <Button
              label="Ghost Variant"
              variant="ghost"
              isLoading={btnLoading}
              isDisabled={btnDisabled}
            />
            <Button
              label="Danger Variant"
              variant="danger"
              isLoading={btnLoading}
              isDisabled={btnDisabled}
            />
          </View>

          {/* Sizes */}
          <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
            SIZES (PRIMARY)
          </Text>
          <View style={styles.sizesRow}>
            <Button label="Small (36)" size="sm" variant="primary" />
            <Button label="Medium (44)" size="md" variant="primary" />
            <Button label="Large (52)" size="lg" variant="primary" />
          </View>

          {/* Full Width & Icons */}
          <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
            WITH ICONS & FULL WIDTH
          </Text>
          <Button
            label="Send Payment Now"
            variant="primary"
            size="lg"
            isFullWidth={true}
            leftIcon={<Text variant="bodyBold" style={{ color: colors.primaryForeground }}>↗</Text>}
          />
        </Card>

        {/* ============================================================== */}
        {/* SECTION 2: BADGES                                               */}
        {/* ============================================================== */}
        <View style={styles.sectionHeader}>
          <Text variant="titleMd" color="textPrimary">
            2. Badges & Chips
          </Text>
          <Pressable onPress={() => router.push('/showcase/badge' as any)}>
            <Text variant="captionMedium" color="textSecondary">
              Dedicated Screen →
            </Text>
          </Pressable>
        </View>
        <Text variant="caption" color="textMuted" style={styles.sectionSubtitle}>
          Compact metadata labels with high-contrast accessibility foregrounds.
        </Text>

        <Card variant="outlined" style={styles.componentCard}>
          <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
            SEMANTIC VARIANTS (MEDIUM)
          </Text>
          <View style={styles.badgeWrap}>
            <Badge label="Primary" variant="primary" size="md" />
            <Badge label="Secondary" variant="secondary" size="md" />
            <Badge label="Success" variant="success" size="md" />
            <Badge label="Warning" variant="warning" size="md" />
            <Badge label="Error" variant="error" size="md" />
            <Badge label="Info" variant="info" size="md" />
            <Badge label="Outline" variant="outline" size="md" />
          </View>

          <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
            COMPACT SIZE (SMALL)
          </Text>
          <View style={styles.badgeWrap}>
            <Badge label="Live 🟢" variant="success" size="sm" />
            <Badge label="Pending ⏳" variant="warning" size="sm" />
            <Badge label="Failed ✕" variant="error" size="sm" />
            <Badge label="Verified ✓" variant="info" size="sm" />
          </View>
        </Card>

        {/* ============================================================== */}
        {/* SECTION 3: INPUT FIELDS                                         */}
        {/* ============================================================== */}
        <View style={styles.sectionHeader}>
          <Text variant="titleMd" color="textPrimary">
            3. Input Fields
          </Text>
          <Pressable onPress={() => router.push('/showcase/input' as any)}>
            <Text variant="captionMedium" color="textSecondary">
              Dedicated Screen →
            </Text>
          </Pressable>
        </View>
        <Text variant="caption" color="textMuted" style={styles.sectionSubtitle}>
          Token-driven text input primitives with focus rings, helper hints, and inline validation states.
        </Text>

        <Card variant="outlined" style={styles.componentCard}>
          <Input
            label="Account holder name"
            placeholder="e.g. Talha Abdurehman"
            value={inputValue}
            onChangeText={(txt) => {
              setInputValue(txt);
              if (txt.length > 0 && txt.length < 3) {
                setInputError('Name must be at least 3 characters');
              } else {
                setInputError('');
              }
            }}
            helperText={inputError ? undefined : 'Enter your full legal name as on passport'}
            errorText={inputError}
            leftIcon={<Text variant="bodySm">👤</Text>}
          />

          <Input
            label="IBAN / Account Number"
            placeholder="GB29 NWBK 6016 1331 9268 19"
            defaultValue="GB29 NWBK 6016 1331 9268 19"
            helperText="UK & SEPA International account format"
            leftIcon={<Text variant="bodySm">🏦</Text>}
            rightIcon={<Badge label="UK" variant="primary" size="sm" />}
          />

          <Input
            label="Read-only Reference"
            value="REF-2026-X9920"
            isDisabled={true}
            helperText="Auto-generated transfer identifier (disabled state)"
          />
        </Card>

        {/* ============================================================== */}
        {/* SECTION 4: CARDS & CONTAINERS                                   */}
        {/* ============================================================== */}
        <View style={styles.sectionHeader}>
          <Text variant="titleMd" color="textPrimary">
            4. Cards & Elevation Surfaces
          </Text>
          <Pressable onPress={() => router.push('/showcase/card' as any)}>
            <Text variant="captionMedium" color="textSecondary">
              Dedicated Screen →
            </Text>
          </Pressable>
        </View>
        <Text variant="caption" color="textMuted" style={styles.sectionSubtitle}>
          Outlined, elevated, and flat card primitives supporting pressable touch feedback.
        </Text>

        <View style={styles.cardGrid}>
          <Card variant="flat" style={styles.cardItem}>
            <Badge label="Flat" variant="secondary" size="sm" />
            <Text variant="bodyBold" color="textPrimary" style={styles.cardTitle}>
              Flat Surface
            </Text>
            <Text variant="caption" color="textSecondary">
              Blends softly with surfaceSubtle token background.
            </Text>
          </Card>

          <Card variant="outlined" style={styles.cardItem}>
            <Badge label="Outlined" variant="outline" size="sm" />
            <Text variant="bodyBold" color="textPrimary" style={styles.cardTitle}>
              Outlined Surface
            </Text>
            <Text variant="caption" color="textSecondary">
              Crisp 1px borderSubtle containment border.
            </Text>
          </Card>

          <Card
            variant="elevated"
            style={styles.cardItem}
            onPress={() => setCardPressCount((c) => c + 1)}
          >
            <Badge label="Elevated + Pressable" variant="primary" size="sm" />
            <Text variant="bodyBold" color="textPrimary" style={styles.cardTitle}>
              Press Me ({cardPressCount})
            </Text>
            <Text variant="caption" color="textSecondary">
              Soft iOS ambient shadow with 0.98 scale pressed interaction.
            </Text>
          </Card>
        </View>

        {/* ============================================================== */}
        {/* SECTION 5: DEBIT CARD VISUAL                                    */}
        {/* ============================================================== */}
        <View style={styles.sectionHeader}>
          <Text variant="titleMd" color="textPrimary">
            5. Debit Card Visual Primitive
          </Text>
        </View>
        <Text variant="caption" color="textMuted" style={styles.sectionSubtitle}>
          Fintech payment card with ISO aspect ratio (1.586), EMV chip, contactless waves, and freeze overlay.
        </Text>

        <Card variant="outlined" style={styles.componentCard}>
          {/* Card interactive toggles */}
          <View style={[styles.testControlsRow, { borderBottomColor: colors.borderSubtle }]}>
            <Button
              label={cardFrozen ? 'Unfreeze Card' : 'Freeze Card ❄️'}
              variant={cardFrozen ? 'primary' : 'outline'}
              size="sm"
              onPress={() => setCardFrozen((f) => !f)}
            />
            <Button
              label={cardVariant === 'lime' ? 'Switch to Forest' : 'Switch to Lime'}
              variant="secondary"
              size="sm"
              onPress={() => setCardVariant((v) => (v === 'lime' ? 'forest' : 'lime'))}
            />
          </View>

          <View style={styles.debitCardWrapper}>
            <DebitCardVisual
              cardHolder="TALHA ABDUREHMAN"
              lastFourDigits="4821"
              expiryDate="08/29"
              isFrozen={cardFrozen}
              themeVariant={cardVariant}
            />
          </View>
        </Card>

        {/* ============================================================== */}
        {/* SECTION 6: CURRENCY BALANCE CARDS                               */}
        {/* ============================================================== */}
        <View style={styles.sectionHeader}>
          <Text variant="titleMd" color="textPrimary">
            6. Multi-Currency Balance Cards
          </Text>
        </View>
        <Text variant="caption" color="textMuted" style={styles.sectionSubtitle}>
          Standardized balance card primitives with flag circle and dashed addition card.
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.currencySlider}
        >
          <CurrencyCard
            currencyCode="GBP"
            currencyName="British Pound"
            amount="£4,250.80"
            flagEmoji="🇬🇧"
          />
          <CurrencyCard
            currencyCode="EUR"
            currencyName="Euro"
            amount="€940.15"
            flagEmoji="🇪🇺"
          />
          <CurrencyCard
            currencyCode="USD"
            currencyName="US Dollar"
            amount="$1,180.00"
            flagEmoji="🇺🇸"
          />
          <CurrencyCard
            currencyCode="ADD"
            currencyName="Open account"
            amount=""
            isAddCard={true}
          />
        </ScrollView>

        {/* ============================================================== */}
        {/* SECTION 7: ACTION CIRCLE BUTTONS                                */}
        {/* ============================================================== */}
        <View style={styles.sectionHeader}>
          <Text variant="titleMd" color="textPrimary">
            7. Circular Action Buttons
          </Text>
        </View>
        <Text variant="caption" color="textMuted" style={styles.sectionSubtitle}>
          52pt quick-action circular triggers with hitSlop touch area and spring micro-press.
        </Text>

        <Card variant="flat" style={styles.componentCard}>
          <View style={styles.actionsBarRow}>
            <ActionCircleButton
              label="Send"
              isPrimary={true}
              icon={<Text variant="bodyBold" style={{ color: colors.primaryForeground }}>↗</Text>}
              onPress={() => router.push('/payments' as any)}
            />
            <ActionCircleButton
              label="Add"
              icon={<Text variant="titleSm" color="textPrimary">+</Text>}
            />
            <ActionCircleButton
              label="Request"
              icon={<Text variant="titleSm" color="textPrimary">↙</Text>}
            />
            <ActionCircleButton
              label="Cards"
              icon={<Text variant="titleSm" color="textPrimary">💳</Text>}
              onPress={() => router.push('/cards' as any)}
            />
          </View>
        </Card>

        {/* ============================================================== */}
        {/* SECTION 8: TRANSACTION FEED ROW                                 */}
        {/* ============================================================== */}
        <View style={styles.sectionHeader}>
          <Text variant="titleMd" color="textPrimary">
            8. Transaction Rows
          </Text>
        </View>
        <Text variant="caption" color="textMuted" style={styles.sectionSubtitle}>
          Feed rows displaying avatar, merchant, categorization, status badges, and currency values.
        </Text>

        <Card variant="outlined" style={styles.componentCard}>
          <TransactionRow
            title="Spotify Premium"
            subtitle="Subscription • Card ending 4821"
            amount="-£10.99"
            avatarIcon={<Text variant="bodySm">🎵</Text>}
          />
          <View style={[styles.rowDivider, { borderTopColor: colors.borderSubtle }]} />

          <TransactionRow
            title="Pret A Manger"
            subtitle="Food & Drink • Contactless NFC"
            amount="-£4.50"
            avatarIcon={<Text variant="bodySm">☕</Text>}
          />
          <View style={[styles.rowDivider, { borderTopColor: colors.borderSubtle }]} />

          <TransactionRow
            title="Google DeepMind"
            subtitle="Direct deposit • Completed"
            amount="+£3,500.00"
            isPositive={true}
            statusBadge="Received"
            avatarIcon={<Text variant="bodySm">💼</Text>}
          />
          <View style={[styles.rowDivider, { borderTopColor: colors.borderSubtle }]} />

          <TransactionRow
            title="Amazon UK"
            subtitle="Online shopping • Pending clearing"
            amount="-£42.99"
            statusBadge="Pending"
            avatarIcon={<Text variant="bodySm">📦</Text>}
          />
        </Card>

        {/* ============================================================== */}
        {/* SECTION 9: TYPOGRAPHY HIERARCHY                                 */}
        {/* ============================================================== */}
        <View style={styles.sectionHeader}>
          <Text variant="titleMd" color="textPrimary">
            9. Typography Scale
          </Text>
          <Pressable onPress={() => router.push('/showcase/typography' as any)}>
            <Text variant="captionMedium" color="textSecondary">
              Dedicated Screen →
            </Text>
          </Pressable>
        </View>
        <Text variant="caption" color="textMuted" style={styles.sectionSubtitle}>
          12 typography presets strictly locked into the theme contract.
        </Text>

        <Card variant="flat" style={styles.componentCard}>
          <View style={styles.typeSample}>
            <Text variant="caption" color="textMuted">hero (40pt / w900)</Text>
            <Text variant="hero">£12,480.00</Text>
          </View>
          <View style={styles.typeSample}>
            <Text variant="caption" color="textMuted">display (32pt / w800)</Text>
            <Text variant="display">Design System</Text>
          </View>
          <View style={styles.typeSample}>
            <Text variant="caption" color="textMuted">titleLg (24pt / w800)</Text>
            <Text variant="titleLg">Large Headline</Text>
          </View>
          <View style={styles.typeSample}>
            <Text variant="caption" color="textMuted">titleMd (20pt / w700)</Text>
            <Text variant="titleMd">Section Title Medium</Text>
          </View>
          <View style={styles.typeSample}>
            <Text variant="caption" color="textMuted">bodyBold (16pt / w700)</Text>
            <Text variant="bodyBold">Standard Body Bold</Text>
          </View>
          <View style={styles.typeSample}>
            <Text variant="caption" color="textMuted">body (16pt / w400)</Text>
            <Text variant="body">Regular body text for fluid paragraph readability.</Text>
          </View>
          <View style={styles.typeSample}>
            <Text variant="caption" color="textMuted">captionMedium (12pt / w600)</Text>
            <Text variant="captionMedium">METADATA LABELS & STATUS</Text>
          </View>
        </Card>

        {/* Footer Note */}
        <View style={styles.footer}>
          <Text variant="caption" color="textMuted" align="center">
            Corporate UI Kit Template • Talha Abdurehman
          </Text>
          <Text variant="caption" color="textMuted" align="center" style={{ marginTop: spacing.xxs }}>
            Hermes Engine • New Architecture • Zero Arbitrary Values
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.ms,
    borderBottomWidth: 1,
  },
  headerLeft: {
    gap: theme.spacing.xs,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: theme.spacing.xs,
  },
  headerDemoBtn: {
    paddingHorizontal: theme.spacing.ms,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radius.full,
  },
  scrollContent: {
    paddingBottom: theme.spacing.xxxl,
  },
  introCard: {
    padding: theme.spacing.lg,
    borderRadius: theme.radius.xl,
    marginBottom: theme.spacing.lg,
  },
  introTitle: {
    marginVertical: theme.spacing.xs,
  },
  quickNavRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
    marginTop: theme.spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.lg,
  },
  sectionSubtitle: {
    marginTop: theme.spacing.xxs,
    marginBottom: theme.spacing.ms,
  },
  componentCard: {
    padding: theme.spacing.md,
    borderRadius: theme.radius.xl,
    marginBottom: theme.spacing.md,
  },
  testControlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
    paddingBottom: theme.spacing.ms,
    marginBottom: theme.spacing.md,
    borderBottomWidth: 1,
  },
  subHeading: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    letterSpacing: 0.8,
  },
  buttonStack: {
    gap: theme.spacing.sm,
  },
  sizesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  badgeWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  cardGrid: {
    gap: theme.spacing.ms,
    marginBottom: theme.spacing.md,
  },
  cardItem: {
    padding: theme.spacing.md,
    borderRadius: theme.radius.lg,
  },
  cardTitle: {
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.xxs,
  },
  debitCardWrapper: {
    marginVertical: theme.spacing.xs,
  },
  currencySlider: {
    paddingRight: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  actionsBarRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowDivider: {
    borderTopWidth: 1,
  },
  typeSample: {
    marginBottom: theme.spacing.ms,
  },
  footer: {
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.lg,
  },
});
