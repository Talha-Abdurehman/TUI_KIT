/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Responsive Component Showcase - Full Desktop & Mobile Workbenches
 * Zero arbitrary values, 100% token-driven design system with Hermes performance.
 * Demonstrates all 14 UI Kit atomic & composite primitives.
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
import { theme, useResponsive, useTheme } from '@/theme';
import {
  ActionCircleButton,
  Avatar,
  Badge,
  Button,
  Card,
  CurrencyCard,
  DebitCardVisual,
  Input,
  ProgressBar,
  SegmentedControl,
  SettingRow,
  Text,
  Timeline,
  TransactionRow,
} from '@/components';

type ViewMode = 'auto' | 'desktop' | 'mobile';
type DemoCategory = 'all' | 'buttons' | 'forms' | 'cards' | 'fintech' | 'feedback';

export default function ResponsiveShowcaseScreen() {
  const router = useRouter();
  const { colors, spacing, radius, isDark, layout } = useTheme();
  const { isDesktop: detectedDesktop, width: windowWidth } = useResponsive();

  // Viewport mode: auto-detect by default, or manually forced by user
  const [viewMode, setViewMode] = useState<ViewMode>('auto');

  // Resolved active layout
  const isDesktop = viewMode === 'auto' ? detectedDesktop : viewMode === 'desktop';

  // Interactive component tester state
  const [btnLoading, setBtnLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [cardPressCount, setCardPressCount] = useState(0);
  const [cardFrozen, setCardFrozen] = useState(false);
  const [cardVariant, setCardVariant] = useState<'lime' | 'forest'>('lime');
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [activeCategory, setActiveCategory] = useState<DemoCategory>('all');
  const [demoSwitch1, setDemoSwitch1] = useState(true);
  const [demoSwitch2, setDemoSwitch2] = useState(false);
  const [demoSegment, setDemoSegment] = useState('daily');

  // =========================================================================
  // SHARED COMPONENT SECTIONS
  // =========================================================================

  const renderButtonsSection = () => (
    <Card variant="outlined" style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            1. Buttons Primitive
          </Text>
          <Text variant="caption" color="textMuted">
            Pill shape (radius.full), 5 semantic variants, 3 sizes, loading & disabled
          </Text>
        </View>
        <Pressable onPress={() => router.push('/showcase/button' as any)}>
          <Text variant="captionMedium" color="textSecondary">
            Isolated View →
          </Text>
        </Pressable>
      </View>

      {/* Interactive Controls Bar */}
      <View style={[styles.testControlsRow, { borderBottomColor: colors.borderSubtle }]}>
        <Text variant="captionMedium" color="textSecondary">
          Live Test:
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
        SEMANTIC VARIANTS (MD - 44PT)
      </Text>
      <View style={styles.buttonGrid}>
        <Button
          label="Primary"
          variant="primary"
          isLoading={btnLoading}
          isDisabled={btnDisabled}
        />
        <Button
          label="Secondary"
          variant="secondary"
          isLoading={btnLoading}
          isDisabled={btnDisabled}
        />
        <Button
          label="Outline"
          variant="outline"
          isLoading={btnLoading}
          isDisabled={btnDisabled}
        />
        <Button
          label="Ghost"
          variant="ghost"
          isLoading={btnLoading}
          isDisabled={btnDisabled}
        />
        <Button
          label="Danger"
          variant="danger"
          isLoading={btnLoading}
          isDisabled={btnDisabled}
        />
      </View>

      {/* Sizes */}
      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        STANDARD SIZES
      </Text>
      <View style={styles.sizesRow}>
        <Button label="Small (36pt)" size="sm" variant="primary" />
        <Button label="Medium (44pt)" size="md" variant="primary" />
        <Button label="Large (52pt)" size="lg" variant="primary" />
      </View>

      {/* Full width with icon */}
      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        FULL WIDTH WITH ICON
      </Text>
      <Button
        label="Send Instant Transfer"
        variant="primary"
        size="lg"
        isFullWidth={true}
        leftIcon={<Text variant="bodyBold" style={{ color: colors.primaryForeground }}>↗</Text>}
      />
    </Card>
  );

  const renderBadgesSection = () => (
    <Card variant="outlined" style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            2. Badges & Status Chips
          </Text>
          <Text variant="caption" color="textMuted">
            7 semantic states with accessible contrast ratios
          </Text>
        </View>
        <Pressable onPress={() => router.push('/showcase/badge' as any)}>
          <Text variant="captionMedium" color="textSecondary">
            Isolated View →
          </Text>
        </Pressable>
      </View>

      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        MEDIUM BADGES (STANDARD)
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
        SMALL STATUS CHIPS (COMPACT)
      </Text>
      <View style={styles.badgeWrap}>
        <Badge label="Active 🟢" variant="success" size="sm" />
        <Badge label="Processing ⏳" variant="warning" size="sm" />
        <Badge label="Declined ✕" variant="error" size="sm" />
        <Badge label="Verified ✓" variant="info" size="sm" />
        <Badge label="Digital" variant="secondary" size="sm" />
      </View>
    </Card>
  );

  const renderInputsSection = () => (
    <Card variant="outlined" style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            3. Input Fields & Forms
          </Text>
          <Text variant="caption" color="textMuted">
            Focus ring states, inline validation, and accessory slots
          </Text>
        </View>
        <Pressable onPress={() => router.push('/showcase/input' as any)}>
          <Text variant="captionMedium" color="textSecondary">
            Isolated View →
          </Text>
        </Pressable>
      </View>

      <Input
        label="Account Holder Name"
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
        helperText={inputError ? undefined : 'Live interactive input validation'}
        errorText={inputError}
        leftIcon={<Text variant="bodySm">👤</Text>}
      />

      <Input
        label="IBAN / Account Number"
        placeholder="GB29 NWBK 6016 1331 9268 19"
        defaultValue="GB29 NWBK 6016 1331 9268 19"
        helperText="International SEPA and UK format"
        leftIcon={<Text variant="bodySm">🏦</Text>}
        rightIcon={<Badge label="UK 🇬🇧" variant="primary" size="sm" />}
      />

      <Input
        label="Read-only Reference (Disabled)"
        value="REF-2026-X9920"
        isDisabled={true}
        helperText="Demonstrates disabled token styling"
      />
    </Card>
  );

  const renderCardsSection = () => (
    <View style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            4. Cards & Elevation Surfaces
          </Text>
          <Text variant="caption" color="textMuted">
            Flat, outlined, and elevated with 0.98 micro-press feedback
          </Text>
        </View>
        <Pressable onPress={() => router.push('/showcase/card' as any)}>
          <Text variant="captionMedium" color="textSecondary">
            Isolated View →
          </Text>
        </Pressable>
      </View>

      <View style={isDesktop ? styles.cardsRowDesktop : styles.cardsStackMobile}>
        <Card variant="flat" style={styles.cardVariantItem}>
          <Badge label="Flat" variant="secondary" size="sm" />
          <Text variant="bodyBold" color="textPrimary" style={styles.cardTitle}>
            Flat Surface
          </Text>
          <Text variant="caption" color="textSecondary">
            Subtle background blend with surfaceSubtle.
          </Text>
        </Card>

        <Card variant="outlined" style={styles.cardVariantItem}>
          <Badge label="Outlined" variant="outline" size="sm" />
          <Text variant="bodyBold" color="textPrimary" style={styles.cardTitle}>
            Outlined Surface
          </Text>
          <Text variant="caption" color="textSecondary">
            Precise 1px borderSubtle perimeter border.
          </Text>
        </Card>

        <Card
          variant="elevated"
          style={styles.cardVariantItem}
          onPress={() => setCardPressCount((c) => c + 1)}
        >
          <Badge label="Elevated (Pressable)" variant="primary" size="sm" />
          <Text variant="bodyBold" color="textPrimary" style={styles.cardTitle}>
            Press Counter ({cardPressCount})
          </Text>
          <Text variant="caption" color="textSecondary">
            Shadow token with smooth Hermes touch spring.
          </Text>
        </Card>
      </View>
    </View>
  );

  const renderAvatarsSection = () => (
    <Card variant="outlined" style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            5. Avatar Primitive
          </Text>
          <Text variant="caption" color="textMuted">
            Automatic initials extraction, custom icon slots, and 4 size presets
          </Text>
        </View>
      </View>

      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        SIZE PRESETS (SM: 32, MD: 38, LG: 44, XL: 56)
      </Text>
      <View style={styles.avatarRow}>
        <Avatar name="Talha Abdurehman" size="sm" />
        <Avatar name="Talha Abdurehman" size="md" />
        <Avatar name="Talha Abdurehman" size="lg" />
        <Avatar name="Talha Abdurehman" size="xl" />
      </View>

      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        VARIANTS & ICON FALLBACKS
      </Text>
      <View style={styles.avatarRow}>
        <Avatar name="Talha Abdurehman" variant="primary" size="lg" />
        <Avatar name="Sarah Jenkins" variant="subtle" size="lg" />
        <Avatar name="Alex Rivera" variant="outline" size="lg" />
        <Avatar icon={<Text variant="bodyBold">🇬🇧</Text>} size="lg" />
        <Avatar icon={<Text variant="bodyBold">💳</Text>} variant="primary" size="lg" />
      </View>
    </Card>
  );

  const renderFeedbackAndControlsSection = () => (
    <Card variant="outlined" style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            6. Feedback, Controls & Progress
          </Text>
          <Text variant="caption" color="textMuted">
            ProgressBar, SettingRow switches, Timeline step-tracker, and SegmentedControl
          </Text>
        </View>
      </View>

      {/* Segmented Control Demo */}
      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        SEGMENTED CONTROL
      </Text>
      <SegmentedControl
        items={[
          { key: 'daily', label: 'Daily' },
          { key: 'weekly', label: 'Weekly' },
          { key: 'monthly', label: 'Monthly' },
        ]}
        value={demoSegment}
        onChange={setDemoSegment}
      />

      {/* Progress Bars */}
      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        PROGRESS BARS (SEMANTIC FILL VARIANTS)
      </Text>
      <View style={styles.progressStack}>
        <ProgressBar label="Account Limit (Primary)" valueText="£450 / £3,000" progress={15} variant="primary" />
        <ProgressBar label="Monthly Savings (Success)" valueText="85%" progress={85} variant="success" />
        <ProgressBar label="ATM Quota (Warning)" valueText="65%" progress={65} variant="warning" />
      </View>

      {/* Setting Rows */}
      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        SETTING ROWS (ACCESSIBLE SWITCHES)
      </Text>
      <View style={[styles.settingBox, { backgroundColor: colors.surfaceSubtle, borderRadius: radius.lg }]}>
        <SettingRow
          title="Push Notifications"
          subtitle="Real-time instant spend and transfer alerts"
          value={demoSwitch1}
          onValueChange={setDemoSwitch1}
        />
        <SettingRow
          title="Biometric Face ID"
          subtitle="Require Face ID authentication before sending"
          value={demoSwitch2}
          onValueChange={setDemoSwitch2}
          hasDivider={true}
        />
      </View>

      {/* Timeline Tracker */}
      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        TIMELINE STEP TRACKER
      </Text>
      <Timeline
        steps={[
          {
            id: '1',
            title: 'Transfer initiated',
            description: 'Funds received from primary debit card',
            status: 'completed',
          },
          {
            id: '2',
            title: 'Converting GBP → EUR',
            description: 'Guaranteed rate locked at 1.1742',
            status: 'completed',
          },
          {
            id: '3',
            title: 'Dispatched to Deutsche Bank',
            description: 'Estimated delivery today by 17:00 UTC',
            status: 'active',
          },
        ]}
      />
    </Card>
  );

  const renderDebitCardSection = () => (
    <Card variant="outlined" style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            7. Debit Card Visual Primitive
          </Text>
          <Text variant="caption" color="textMuted">
            ISO 1.586 aspect ratio, EMV chip, and contactless waves
          </Text>
        </View>
      </View>

      {/* Card Interactive Controls */}
      <View style={[styles.testControlsRow, { borderBottomColor: colors.borderSubtle }]}>
        <Button
          label={cardFrozen ? 'Unfreeze Card' : 'Freeze Card ❄️'}
          variant={cardFrozen ? 'primary' : 'outline'}
          size="sm"
          onPress={() => setCardFrozen((f) => !f)}
        />
        <Button
          label={cardVariant === 'lime' ? 'Forest Variant' : 'Lime Variant'}
          variant="secondary"
          size="sm"
          onPress={() => setCardVariant((v) => (v === 'lime' ? 'forest' : 'lime'))}
        />
      </View>

      <View style={styles.debitCardFrame}>
        <DebitCardVisual
          cardHolder="TALHA ABDUREHMAN"
          lastFourDigits="4821"
          expiryDate="08/29"
          isFrozen={cardFrozen}
          themeVariant={cardVariant}
        />
      </View>
    </Card>
  );

  const renderFintechPrimitivesSection = () => (
    <Card variant="outlined" style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            8. Currency Rail & Action Bar
          </Text>
          <Text variant="caption" color="textMuted">
            Horizontal balance cards & 52pt circular action triggers
          </Text>
        </View>
      </View>

      {/* Currency Balance Rail */}
      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        CURRENCY BALANCES
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.currencyRail}
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

      {/* Action Circles */}
      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        CIRCULAR ACTION BUTTONS
      </Text>
      <View style={[styles.actionsBar, { backgroundColor: colors.surfaceSubtle, borderRadius: radius.xl }]}>
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
  );

  const renderTransactionsSection = () => (
    <Card variant="outlined" style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            9. Transaction Rows
          </Text>
          <Text variant="caption" color="textMuted">
            Avatar slot, category metadata, badges, and debit/credit status
          </Text>
        </View>
      </View>

      <TransactionRow
        title="Spotify Premium"
        subtitle="Subscription • Card •••• 4821"
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
        subtitle="Online order • Pending clearance"
        amount="-£42.99"
        statusBadge="Pending"
        avatarIcon={<Text variant="bodySm">📦</Text>}
      />
    </Card>
  );

  const renderTypographySection = () => (
    <Card variant="outlined" style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            10. Typography Presets
          </Text>
          <Text variant="caption" color="textMuted">
            12 typography presets strictly bound to theme contract
          </Text>
        </View>
        <Pressable onPress={() => router.push('/showcase/typography' as any)}>
          <Text variant="captionMedium" color="textSecondary">
            Isolated View →
          </Text>
        </Pressable>
      </View>

      <View style={isDesktop ? styles.typeGridDesktop : styles.typeStackMobile}>
        <View style={styles.typeBlock}>
          <Text variant="caption" color="textMuted">hero (40pt / w900)</Text>
          <Text variant="hero">£12,480.00</Text>
        </View>
        <View style={styles.typeBlock}>
          <Text variant="caption" color="textMuted">display (32pt / w800)</Text>
          <Text variant="display">Design Tokens</Text>
        </View>
        <View style={styles.typeBlock}>
          <Text variant="caption" color="textMuted">titleLg (24pt / w800)</Text>
          <Text variant="titleLg">Large Headline</Text>
        </View>
        <View style={styles.typeBlock}>
          <Text variant="caption" color="textMuted">titleMd (20pt / w700)</Text>
          <Text variant="titleMd">Section Title</Text>
        </View>
        <View style={styles.typeBlock}>
          <Text variant="caption" color="textMuted">bodyBold (16pt / w700)</Text>
          <Text variant="bodyBold">Body Bold Emphasis</Text>
        </View>
        <View style={styles.typeBlock}>
          <Text variant="caption" color="textMuted">body (16pt / w400)</Text>
          <Text variant="body">Fluid readability paragraph body.</Text>
        </View>
      </View>
    </Card>
  );

  return (
    <SafeAreaView edges={['top', 'left', 'right', 'bottom']} style={[styles.safeArea, { backgroundColor: colors.background }]}>
      {/* ============================================================== */}
      {/* TOP HEADER BAR (RESPONSIVE)                                    */}
      {/* ============================================================== */}
      <View style={[styles.topBar, { backgroundColor: colors.surface, borderBottomColor: colors.borderSubtle }]}>
        <View style={styles.topBarLeft}>
          <Text variant="titleMd" color="textPrimary">
            Corporate UI Kit
          </Text>
          <Badge
            label={isDesktop ? '🖥️ Desktop Layout' : '📱 Mobile Layout'}
            variant="primary"
            size="sm"
          />
          <Badge
            label={`${Math.round(windowWidth)}px`}
            variant="secondary"
            size="sm"
          />
        </View>

        {/* Viewport Mode Switcher Using SegmentedControl */}
        <View style={styles.topBarRight}>
          <SegmentedControl<ViewMode>
            items={[
              { key: 'desktop', label: '🖥️ Desktop' },
              { key: 'mobile', label: '📱 Mobile' },
              { key: 'auto', label: '⚡ Auto' },
            ]}
            value={viewMode}
            onChange={setViewMode}
            style={styles.headerSegmented}
          />

          {/* Quick Demo App Links */}
          <Button
            label="Cards Demo ↗"
            variant="outline"
            size="sm"
            onPress={() => router.push('/cards' as any)}
          />
          <Button
            label="Payments ↗"
            variant="outline"
            size="sm"
            onPress={() => router.push('/payments' as any)}
          />
        </View>
      </View>

      {/* ============================================================== */}
      {/* DESKTOP WORKBENCH LAYOUT                                       */}
      {/* ============================================================== */}
      {isDesktop ? (
        <View style={styles.desktopContainer}>
          {/* Desktop Left Sidebar */}
          <View style={[styles.desktopSidebar, { backgroundColor: colors.surface, borderRightColor: colors.borderSubtle }]}>
            <Text variant="captionMedium" color="textMuted" style={styles.sidebarHeader}>
              14 KIT PRIMITIVES
            </Text>

            <View style={styles.sidebarItem}>
              <Text variant="bodySmMedium" color="textPrimary">🔘 Button</Text>
              <Badge label="Core" variant="primary" size="sm" />
            </View>
            <View style={styles.sidebarItem}>
              <Text variant="bodySmMedium" color="textPrimary">🏷️ Badge</Text>
              <Badge label="7 types" variant="secondary" size="sm" />
            </View>
            <View style={styles.sidebarItem}>
              <Text variant="bodySmMedium" color="textPrimary">📝 Input</Text>
              <Badge label="Forms" variant="secondary" size="sm" />
            </View>
            <View style={styles.sidebarItem}>
              <Text variant="bodySmMedium" color="textPrimary">🗂️ Card</Text>
              <Badge label="3 types" variant="secondary" size="sm" />
            </View>
            <View style={styles.sidebarItem}>
              <Text variant="bodySmMedium" color="textPrimary">👤 Avatar</Text>
              <Badge label="4 sizes" variant="secondary" size="sm" />
            </View>
            <View style={styles.sidebarItem}>
              <Text variant="bodySmMedium" color="textPrimary">📊 ProgressBar</Text>
              <Badge label="Feedback" variant="secondary" size="sm" />
            </View>
            <View style={styles.sidebarItem}>
              <Text variant="bodySmMedium" color="textPrimary">⚙️ SettingRow</Text>
              <Badge label="Switch" variant="secondary" size="sm" />
            </View>
            <View style={styles.sidebarItem}>
              <Text variant="bodySmMedium" color="textPrimary">⏳ Timeline</Text>
              <Badge label="Steps" variant="secondary" size="sm" />
            </View>
            <View style={styles.sidebarItem}>
              <Text variant="bodySmMedium" color="textPrimary">🎛️ SegmentedControl</Text>
              <Badge label="Tabs" variant="secondary" size="sm" />
            </View>
            <View style={styles.sidebarItem}>
              <Text variant="bodySmMedium" color="textPrimary">💳 DebitCardVisual</Text>
              <Badge label="Fintech" variant="secondary" size="sm" />
            </View>
            <View style={styles.sidebarItem}>
              <Text variant="bodySmMedium" color="textPrimary">💱 CurrencyCard</Text>
              <Badge label="Fintech" variant="secondary" size="sm" />
            </View>
            <View style={styles.sidebarItem}>
              <Text variant="bodySmMedium" color="textPrimary">⚡ ActionCircle</Text>
              <Badge label="Triggers" variant="secondary" size="sm" />
            </View>
            <View style={styles.sidebarItem}>
              <Text variant="bodySmMedium" color="textPrimary">🧾 TransactionRow</Text>
              <Badge label="Feed" variant="secondary" size="sm" />
            </View>
            <View style={styles.sidebarItem}>
              <Text variant="bodySmMedium" color="textPrimary">🔤 Typography</Text>
              <Badge label="12 levels" variant="secondary" size="sm" />
            </View>

            {/* Token System Spec Box */}
            <View style={[styles.sidebarTokenBox, { backgroundColor: colors.surfaceSubtle, borderRadius: radius.lg }]}>
              <Text variant="captionMedium" color="textPrimary">
                TOKEN CONTRACT
              </Text>
              <Text variant="caption" color="textSecondary" style={{ marginTop: spacing.xxs }}>
                • Zero arbitrary values{'\n'}
                • 14 Reusable components{'\n'}
                • 12 Typography presets{'\n'}
                • 11 Spacing increments{'\n'}
                • 8 Border radii{'\n'}
                • 60-120 FPS Hermes
              </Text>
            </View>

            {/* Demo Apps Direct Nav */}
            <Text variant="captionMedium" color="textMuted" style={[styles.sidebarHeader, { marginTop: spacing.lg }]}>
              MOCK APPS
            </Text>
            <Button
              label="Cards Management"
              variant="secondary"
              size="sm"
              isFullWidth={true}
              onPress={() => router.push('/cards' as any)}
              style={{ marginBottom: spacing.xs }}
            />
            <Button
              label="Payments Hub"
              variant="secondary"
              size="sm"
              isFullWidth={true}
              onPress={() => router.push('/payments' as any)}
              style={{ marginBottom: spacing.xs }}
            />
            <Button
              label="Recipients Directory"
              variant="secondary"
              size="sm"
              isFullWidth={true}
              onPress={() => router.push('/recipients' as any)}
            />
          </View>

          {/* Desktop Right Main Content Workbench */}
          <ScrollView
            style={styles.desktopMainScroll}
            contentContainerStyle={[styles.desktopMainContent, { padding: spacing.lg }]}
            showsVerticalScrollIndicator={false}
          >
            {/* Desktop Hero Banner */}
            <Card variant="flat" style={styles.desktopHeroCard}>
              <View style={styles.heroTopRow}>
                <View>
                  <Text variant="captionMedium" color="textMuted">
                    PRODUCTION UI KIT TEMPLATE • TALHA ABDUREHMAN
                  </Text>
                  <Text variant="titleLg" color="textPrimary" style={styles.heroTitle}>
                    Design System Component Workbench
                  </Text>
                  <Text variant="body" color="textSecondary">
                    14 atomic & composite primitives deconstructed from Wise design language.
                  </Text>
                </View>
                <View style={styles.heroBadgesCol}>
                  <Badge label="Hermes Engine" variant="primary" size="md" />
                  <Badge label="Expo SDK 57" variant="secondary" size="md" />
                  <Badge label="Strict TypeScript" variant="info" size="md" />
                </View>
              </View>
            </Card>

            {/* 2-Column Responsive Grid */}
            <View style={styles.desktopTwoColGrid}>
              {/* Left Column: Form & Interaction Primitives */}
              <View style={styles.desktopCol}>
                {renderButtonsSection()}
                {renderBadgesSection()}
                {renderInputsSection()}
                {renderAvatarsSection()}
                {renderFeedbackAndControlsSection()}
              </View>

              {/* Right Column: Fintech & Visual Primitives */}
              <View style={styles.desktopCol}>
                {renderDebitCardSection()}
                {renderFintechPrimitivesSection()}
                {renderTransactionsSection()}
                {renderCardsSection()}
              </View>
            </View>

            {/* Full-width Typography Hierarchy */}
            {renderTypographySection()}

            {/* Desktop Footer */}
            <View style={styles.desktopFooter}>
              <Text variant="caption" color="textMuted" align="center">
                Corporate UI Kit System • Author: Talha Abdurehman (talhakyle124@gmail.com)
              </Text>
              <Text variant="caption" color="textMuted" align="center" style={{ marginTop: spacing.xxs }}>
                Zero Arbitrary Values • Responsive Desktop & Mobile Architecture
              </Text>
            </View>
          </ScrollView>
        </View>
      ) : (
        /* ============================================================== */
        /* MOBILE PHONE LAYOUT (OR MOBILE PREVIEW FRAME)                  */
        /* ============================================================== */
        <View style={styles.mobileOuterWrapper}>
          <ScrollView
            style={styles.mobileScrollView}
            contentContainerStyle={[
              styles.mobileContentContainer,
              { paddingHorizontal: spacing.md, paddingVertical: spacing.md },
            ]}
            showsVerticalScrollIndicator={false}
          >
            {/* Mobile Header Card */}
            <Card variant="flat" style={styles.mobileHeroCard}>
              <Text variant="captionMedium" color="textMuted">
                UI KIT MOBILE SHOWCASE
              </Text>
              <Text variant="titleLg" color="textPrimary" style={{ marginVertical: spacing.xs }}>
                Component Catalog
              </Text>
              <Text variant="bodySm" color="textSecondary">
                Mobile-optimized 44x44pt touch targets, smooth 60-120 FPS animations.
              </Text>

              {/* Mobile Quick Nav */}
              <View style={styles.mobileQuickNav}>
                <Button
                  label="Cards"
                  variant="outline"
                  size="sm"
                  onPress={() => router.push('/cards' as any)}
                />
                <Button
                  label="Payments"
                  variant="outline"
                  size="sm"
                  onPress={() => router.push('/payments' as any)}
                />
                <Button
                  label="Recipients"
                  variant="outline"
                  size="sm"
                  onPress={() => router.push('/recipients' as any)}
                />
              </View>
            </Card>

            {/* Stacked Mobile Primitives */}
            {renderButtonsSection()}
            {renderBadgesSection()}
            {renderInputsSection()}
            {renderCardsSection()}
            {renderAvatarsSection()}
            {renderFeedbackAndControlsSection()}
            {renderDebitCardSection()}
            {renderFintechPrimitivesSection()}
            {renderTransactionsSection()}
            {renderTypographySection()}

            {/* Mobile Footer */}
            <View style={styles.mobileFooter}>
              <Text variant="caption" color="textMuted" align="center">
                Mobile Layout Active • Talha Abdurehman
              </Text>
            </View>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.ms,
    borderBottomWidth: 1,
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  topBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    flexWrap: 'wrap',
  },
  headerSegmented: {
    minWidth: 260,
  },

  // Desktop Structure
  desktopContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  desktopSidebar: {
    width: theme.layout.sidebarWidth,
    borderRightWidth: 1,
    padding: theme.spacing.md,
  },
  sidebarHeader: {
    marginBottom: theme.spacing.sm,
    letterSpacing: 0.8,
  },
  sidebarItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.xxs,
  },
  sidebarTokenBox: {
    marginTop: theme.spacing.lg,
    padding: theme.spacing.md,
  },
  desktopMainScroll: {
    flex: 1,
  },
  desktopMainContent: {
    maxWidth: theme.layout.maxContentWidth,
    width: '100%',
    alignSelf: 'center',
    paddingBottom: theme.spacing.xxxl,
  },
  desktopHeroCard: {
    padding: theme.spacing.lg,
    borderRadius: theme.radius.xl,
    marginBottom: theme.spacing.lg,
  },
  heroTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  heroTitle: {
    marginVertical: theme.spacing.xs,
  },
  heroBadgesCol: {
    gap: theme.spacing.xs,
    alignItems: 'flex-end',
  },
  desktopTwoColGrid: {
    flexDirection: 'row',
    gap: theme.spacing.lg,
  },
  desktopCol: {
    flex: 1,
  },
  desktopFooter: {
    marginTop: theme.spacing.xl,
    paddingVertical: theme.spacing.lg,
  },

  // Mobile Structure
  mobileOuterWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  mobileScrollView: {
    width: '100%',
    maxWidth: theme.layout.phonePreviewWidth,
  },
  mobileContentContainer: {
    paddingBottom: theme.spacing.xxxl,
  },
  mobileHeroCard: {
    padding: theme.spacing.md,
    borderRadius: theme.radius.xl,
    marginBottom: theme.spacing.md,
  },
  mobileQuickNav: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginTop: theme.spacing.ms,
  },
  mobileFooter: {
    marginTop: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
  },

  // Shared Component Blocks
  componentCard: {
    padding: theme.spacing.md,
    borderRadius: theme.radius.xl,
    marginBottom: theme.spacing.lg,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.ms,
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
  buttonGrid: {
    gap: theme.spacing.sm,
  },
  sizesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  badgeWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  progressStack: {
    gap: theme.spacing.ms,
  },
  settingBox: {
    paddingHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  cardsRowDesktop: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginTop: theme.spacing.sm,
  },
  cardsStackMobile: {
    gap: theme.spacing.ms,
    marginTop: theme.spacing.sm,
  },
  cardVariantItem: {
    flex: 1,
    padding: theme.spacing.md,
    borderRadius: theme.radius.lg,
  },
  cardTitle: {
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.xxs,
  },
  debitCardFrame: {
    marginVertical: theme.spacing.xs,
  },
  currencyRail: {
    paddingRight: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  actionsBar: {
    padding: theme.spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowDivider: {
    borderTopWidth: 1,
  },
  typeGridDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
    marginTop: theme.spacing.sm,
  },
  typeStackMobile: {
    gap: theme.spacing.sm,
    marginTop: theme.spacing.sm,
  },
  typeBlock: {
    minWidth: theme.layout.typeSpecimenMinWidth,
    marginBottom: theme.spacing.sm,
  },
});
