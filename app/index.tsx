/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Responsive Component Showcase - Full Desktop & Mobile Workbenches
 * Zero arbitrary values, 100% token-driven design system with Hermes performance.
 * Demonstrates all 36 UI Kit atomic & composite primitives.
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
import { Ionicons } from '@expo/vector-icons';
import { theme, useResponsive, useTheme } from '@/theme';
import {
  Accordion,
  ActionCircleButton,
  Avatar,
  Badge,
  Banner,
  BottomNavigation,
  BottomSheet,
  Button,
  Card,
  Checkbox,
  Chip,
  CircularProgress,
  CurrencyCard,
  DebitCardVisual,
  Divider,
  EmptyState,
  Header,
  Input,
  Keypad,
  ListItem,
  Modal,
  OTPInput,
  ProgressBar,
  RadioGroup,
  SearchBar,
  SegmentedControl,
  SettingRow,
  Skeleton,
  Slider,
  Spinner,
  Switch,
  Tabs,
  Text,
  Timeline,
  Toast,
  TransactionRow,
} from '@/components';

type ViewMode = 'auto' | 'desktop' | 'mobile';

export default function ResponsiveShowcaseScreen() {
  const router = useRouter();
  const { colors, spacing, radius, isDark, layout } = useTheme();
  const { isDesktop: detectedDesktop, width: windowWidth } = useResponsive();

  // Viewport mode: auto-detect by default, or manually forced by user
  const [viewMode, setViewMode] = useState<ViewMode>('auto');
  const isDesktop = viewMode === 'auto' ? detectedDesktop : viewMode === 'desktop';

  // Interactive component tester state
  const [btnLoading, setBtnLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [otpValue, setOtpValue] = useState('4821');
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(false);
  const [radioChoice, setRadioChoice] = useState('monthly');
  const [standaloneSwitch, setStandaloneSwitch] = useState(true);
  const [sliderValue, setSliderValue] = useState(65);
  const [segmentedValue, setSegmentedValue] = useState('daily');
  const [selectedChip, setSelectedChip] = useState('all');
  const [activeTab, setActiveTab] = useState('all');
  const [activeBottomNav, setActiveBottomNav] = useState('home');

  // Overlay states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  // Keypad & fintech state
  const [keypadAmount, setKeypadAmount] = useState('250.00');
  const [cardFrozen, setCardFrozen] = useState(false);
  const [cardVariant, setCardVariant] = useState<'lime' | 'forest'>('lime');

  // =========================================================================
  // 1. BUTTONS & ACTIONS
  // =========================================================================
  const renderButtonsSection = () => (
    <Card variant="outlined" style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            1. Buttons & Actions
          </Text>
          <Text variant="caption" color="textMuted">
            5 semantic variants, 3 sizes, full-width and action circles
          </Text>
        </View>
        <Pressable onPress={() => router.push('/showcase/button' as any)}>
          <Text variant="captionMedium" color="textSecondary">
            Isolated View →
          </Text>
        </Pressable>
      </View>

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

      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        SEMANTIC VARIANTS (MD - 44PT)
      </Text>
      <View style={styles.buttonGrid}>
        <Button label="Primary" variant="primary" isLoading={btnLoading} isDisabled={btnDisabled} />
        <Button label="Secondary" variant="secondary" isLoading={btnLoading} isDisabled={btnDisabled} />
        <Button label="Outline" variant="outline" isLoading={btnLoading} isDisabled={btnDisabled} />
        <Button label="Ghost" variant="ghost" isLoading={btnLoading} isDisabled={btnDisabled} />
        <Button label="Danger" variant="danger" isLoading={btnLoading} isDisabled={btnDisabled} />
      </View>

      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        STANDARD SIZES
      </Text>
      <View style={styles.sizesRow}>
        <Button label="Small (36pt)" size="sm" variant="primary" />
        <Button label="Medium (44pt)" size="md" variant="primary" />
        <Button label="Large (52pt)" size="lg" variant="primary" />
      </View>

      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        ACTION CIRCLES
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

  // =========================================================================
  // 2. BADGES & CHIPS
  // =========================================================================
  const renderBadgesAndChipsSection = () => (
    <Card variant="outlined" style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            2. Badges & Chips
          </Text>
          <Text variant="caption" color="textMuted">
            Status indicators and selectable filter tags
          </Text>
        </View>
        <Pressable onPress={() => router.push('/showcase/badge' as any)}>
          <Text variant="captionMedium" color="textSecondary">
            Isolated View →
          </Text>
        </Pressable>
      </View>

      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        SEMANTIC STATUS BADGES
      </Text>
      <View style={styles.badgeWrap}>
        <Badge label="Primary" variant="primary" size="md" />
        <Badge label="Secondary" variant="secondary" size="md" />
        <Badge label="Success 🟢" variant="success" size="md" />
        <Badge label="Warning ⏳" variant="warning" size="md" />
        <Badge label="Error ✕" variant="error" size="md" />
        <Badge label="Info" variant="info" size="md" />
      </View>

      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        SELECTABLE INTERACTIVE CHIPS
      </Text>
      <View style={styles.badgeWrap}>
        <Chip
          label="All Accounts"
          isSelected={selectedChip === 'all'}
          onPress={() => setSelectedChip('all')}
        />
        <Chip
          label="GBP Wallet"
          isSelected={selectedChip === 'gbp'}
          onPress={() => setSelectedChip('gbp')}
        />
        <Chip
          label="EUR Wallet"
          isSelected={selectedChip === 'eur'}
          onPress={() => setSelectedChip('eur')}
        />
        <Chip
          label="Removable Tag"
          isSelected={selectedChip === 'tag'}
          onPress={() => setSelectedChip('tag')}
          onRemove={() => setSelectedChip('all')}
        />
      </View>
    </Card>
  );

  // =========================================================================
  // 3. INPUT FIELDS & TEXT ENTRY
  // =========================================================================
  const renderInputsSection = () => (
    <Card variant="outlined" style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            3. Form Inputs & Text Entry
          </Text>
          <Text variant="caption" color="textMuted">
            Text input, search bar with debounce, and PIN/OTP code entry
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

      <View style={{ marginTop: spacing.md }}>
        <Text variant="captionMedium" color="textMuted" style={{ marginBottom: spacing.xs }}>
          SEARCH BAR
        </Text>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search transactions or recipients..."
          onClear={() => setSearchQuery('')}
        />
      </View>

      <View style={{ marginTop: spacing.md }}>
        <Text variant="captionMedium" color="textMuted" style={{ marginBottom: spacing.xs }}>
          OTP 4-DIGIT SECURITY CODE
        </Text>
        <OTPInput
          length={4}
          value={otpValue}
          onChange={setOtpValue}
        />
      </View>
    </Card>
  );

  // =========================================================================
  // 4. SELECTION CONTROLS
  // =========================================================================
  const renderSelectionControlsSection = () => (
    <Card variant="outlined" style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            4. Selection Controls
          </Text>
          <Text variant="caption" color="textMuted">
            Checkboxes, radio groups, switches, sliders, and segmented pills
          </Text>
        </View>
      </View>

      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        CHECKBOXES
      </Text>
      <View style={styles.controlsCol}>
        <Checkbox
          label="I agree to Corporate Terms & Security Policy"
          isChecked={checkbox1}
          onToggle={setCheckbox1}
        />
        <Checkbox
          label="Enable instant transaction notifications"
          isChecked={checkbox2}
          onToggle={setCheckbox2}
        />
      </View>

      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        RADIO GROUP
      </Text>
      <RadioGroup
        value={radioChoice}
        onChange={setRadioChoice}
        options={[
          { value: 'monthly', label: 'Standard Monthly (No contract)' },
          { value: 'annual', label: 'Annual Billing (Save 20%)', description: 'Billed £99 yearly' },
        ]}
      />

      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        STANDALONE SWITCH & SLIDER
      </Text>
      <View style={styles.switchRow}>
        <Text variant="bodySmMedium" color="textPrimary">
          Biometric Fingerprint Login: {standaloneSwitch ? 'Enabled' : 'Disabled'}
        </Text>
        <Switch value={standaloneSwitch} onValueChange={setStandaloneSwitch} />
      </View>

      <View style={{ marginTop: spacing.md }}>
        <Slider
          label="Monthly Card Spending Limit"
          value={sliderValue}
          onValueChange={setSliderValue}
          valueText={`£${Math.round(sliderValue * 20)}`}
        />
      </View>

      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        SEGMENTED CONTROL
      </Text>
      <SegmentedControl
        items={[
          { key: 'daily', label: 'Daily' },
          { key: 'weekly', label: 'Weekly' },
          { key: 'monthly', label: 'Monthly' },
        ]}
        value={segmentedValue}
        onChange={setSegmentedValue}
      />
    </Card>
  );

  // =========================================================================
  // 5. OVERLAYS, FEEDBACK & LOADERS
  // =========================================================================
  const renderFeedbackAndOverlaysSection = () => (
    <Card variant="outlined" style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            5. Overlays & Feedback
          </Text>
          <Text variant="caption" color="textMuted">
            Modal dialogs, bottom sheets, toasts, banners, spinners and skeletons
          </Text>
        </View>
      </View>

      {/* Dismissible Banner */}
      {isBannerVisible ? (
        <Banner
          variant="info"
          title="Scheduled System Maintenance"
          message="SEPA Instant payments will undergo routine maintenance tonight at 02:00 UTC."
          actionLabel="Details"
          onAction={() => setIsModalOpen(true)}
          isDismissible={true}
          onDismiss={() => setIsBannerVisible(false)}
        />
      ) : null}

      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        SPINNERS & PROGRESS INDICATORS
      </Text>
      <View style={styles.loaderRow}>
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <CircularProgress value={sliderValue} size="sm" />
        <CircularProgress value={sliderValue} size="md" />
      </View>

      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        SKELETON LOADERS
      </Text>
      <View style={styles.skeletonContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.md }}>
          <Skeleton width={44} height={44} borderRadius={radius.full} />
          <View style={{ flex: 1, gap: spacing.xs }}>
            <Skeleton width="60%" height={16} borderRadius={radius.sm} />
            <Skeleton width="40%" height={12} borderRadius={radius.xs} />
          </View>
        </View>
      </View>

      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        TRIGGER INTERACTIVE OVERLAYS
      </Text>
      <View style={styles.buttonGrid}>
        <Button
          label="Open Modal Dialog"
          variant="outline"
          onPress={() => setIsModalOpen(true)}
        />
        <Button
          label="Open Bottom Sheet"
          variant="outline"
          onPress={() => setIsBottomSheetOpen(true)}
        />
        <Button
          label="Trigger Toast Notification"
          variant="outline"
          onPress={() => setIsToastOpen(true)}
        />
      </View>

      {/* Modal Dialog Instance */}
      <Modal
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirm Transfer"
        description="Are you sure you want to transfer £250.00 to Sarah Jenkins? Funds are sent immediately."
        primaryActionLabel="Confirm & Send"
        onPrimaryAction={() => {
          setIsModalOpen(false);
          setIsToastOpen(true);
        }}
        secondaryActionLabel="Cancel"
      />

      {/* BottomSheet Instance */}
      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
        title="Select Transfer Method"
      >
        <ListItem
          title="Instant SEPA Transfer"
          subtitle="Arrives in under 10 seconds • No fee"
          showChevron={true}
          onPress={() => setIsBottomSheetOpen(false)}
        />
        <ListItem
          title="International SWIFT Wire"
          subtitle="1-2 business days • Standard rate"
          showChevron={true}
          onPress={() => setIsBottomSheetOpen(false)}
        />
        <ListItem
          title="Internal TUI Peer-to-Peer"
          subtitle="Instant transfer by mobile number"
          showChevron={true}
          onPress={() => setIsBottomSheetOpen(false)}
        />
      </BottomSheet>

      {/* Toast Instance */}
      <Toast
        isVisible={isToastOpen}
        variant="success"
        message="Payment of £250.00 successfully completed!"
        actionLabel="Dismiss"
        onAction={() => setIsToastOpen(false)}
        onDismiss={() => setIsToastOpen(false)}
      />
    </Card>
  );

  // =========================================================================
  // 6. LAYOUT & NAVIGATION
  // =========================================================================
  const renderLayoutAndNavigationSection = () => (
    <Card variant="outlined" style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            6. Layout & Navigation
          </Text>
          <Text variant="caption" color="textMuted">
            Header bar, tabs, accordions, list items, dividers and bottom nav
          </Text>
        </View>
      </View>

      {/* Header Preview */}
      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        APP HEADER COMPONENT
      </Text>
      <View style={{ borderRadius: radius.lg, overflow: 'hidden', borderWidth: 1, borderColor: colors.borderSubtle }}>
        <Header
          title="Account Security"
          showBack={true}
          onBack={() => {}}
          rightAccessory={<Ionicons name="settings-outline" size={20} color={colors.textPrimary} />}
        />
      </View>

      {/* Tabs */}
      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        TABS COMPONENT (LINE VARIANT)
      </Text>
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        tabs={[
          { key: 'all', label: 'All Transfers', badge: '14' },
          { key: 'pending', label: 'Pending', badge: '2' },
          { key: 'scheduled', label: 'Scheduled' },
        ]}
      />

      {/* Accordion FAQ */}
      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        EXPANDABLE ACCORDION
      </Text>
      <Accordion
        items={[
          {
            id: 'item-1',
            title: 'What are the fees for international transfers?',
            content: (
              <Text variant="bodySm" color="textSecondary">
                Wise uses the mid-market exchange rate with no hidden markups. A small transparent fee starting at 0.35% is applied.
              </Text>
            ),
          },
          {
            id: 'item-2',
            title: 'Is my deposit covered by FSCS protection?',
            content: (
              <Text variant="bodySm" color="textSecondary">
                Your funds are safeguarded in ring-fenced Tier 1 commercial banks and held separately from corporate operational assets.
              </Text>
            ),
          },
        ]}
      />

      <Divider style={{ marginVertical: spacing.md }} />

      {/* List Items */}
      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        INTERACTIVE LIST ITEMS
      </Text>
      <View style={{ backgroundColor: colors.surfaceSubtle, borderRadius: radius.lg }}>
        <ListItem
          title="Direct Debits & Recurring"
          subtitle="Manage 4 active merchant mandates"
          leftAccessory={<Ionicons name="repeat-outline" size={20} color={colors.textPrimary} />}
          showChevron={true}
          hasDivider={true}
        />
        <ListItem
          title="Statements & Export"
          subtitle="Download certified PDF tax reports"
          leftAccessory={<Ionicons name="document-text-outline" size={20} color={colors.textPrimary} />}
          showChevron={true}
        />
      </View>

      {/* Bottom Navigation Preview */}
      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        BOTTOM NAVIGATION DOCK
      </Text>
      <View style={{ borderRadius: radius.lg, overflow: 'hidden', borderWidth: 1, borderColor: colors.borderSubtle }}>
        <BottomNavigation
          activeKey={activeBottomNav}
          onChange={setActiveBottomNav}
          tabs={[
            { key: 'home', label: 'Home', icon: <Ionicons name="home-outline" size={22} color={colors.textMuted} /> },
            { key: 'cards', label: 'Cards', icon: <Ionicons name="card-outline" size={22} color={colors.textMuted} /> },
            { key: 'payments', label: 'Pay', icon: <Ionicons name="paper-plane-outline" size={22} color={colors.textMuted} /> },
            { key: 'recipients', label: 'Directory', icon: <Ionicons name="people-outline" size={22} color={colors.textMuted} /> },
          ]}
        />
      </View>
    </Card>
  );

  // =========================================================================
  // 7. FINTECH PRIMITIVES & DISPLAYS
  // =========================================================================
  const renderFintechPrimitivesSection = () => (
    <Card variant="outlined" style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            7. Fintech Primitives & Displays
          </Text>
          <Text variant="caption" color="textMuted">
            Debit card visuals, currency wallets, transaction feeds and PIN keypads
          </Text>
        </View>
      </View>

      {/* Interactive Debit Card Visual */}
      <View style={styles.debitCardFrame}>
        <DebitCardVisual
          cardHolder="TALHA ABDUREHMAN"
          lastFourDigits="4821"
          expiryDate="09/29"
          isFrozen={cardFrozen}
          themeVariant={cardVariant}
          onPress={() => setCardVariant((curr) => (curr === 'lime' ? 'forest' : 'lime'))}
        />
      </View>

      <View style={[styles.testControlsRow, { borderBottomColor: colors.borderSubtle }]}>
        <Button
          label={cardFrozen ? 'Unfreeze Card' : 'Freeze Card'}
          variant="secondary"
          size="sm"
          onPress={() => setCardFrozen((prev) => !prev)}
        />
        <Button
          label={`Color: ${cardVariant.toUpperCase()}`}
          variant="secondary"
          size="sm"
          onPress={() => setCardVariant((curr) => (curr === 'lime' ? 'forest' : 'lime'))}
        />
      </View>

      {/* Currency Rail */}
      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        CURRENCY BALANCES (HORIZONTAL RAIL)
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

      {/* Transaction Feed */}
      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        TRANSACTION ROWS
      </Text>
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

      {/* Numeric Keypad */}
      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        NUMERIC PIN & AMOUNT KEYPAD (VALUE: £{keypadAmount})
      </Text>
      <Keypad
        onKeyPress={(k) => setKeypadAmount((prev) => prev + k)}
        onDelete={() => setKeypadAmount((prev) => prev.slice(0, -1))}
        onLongDelete={() => setKeypadAmount('')}
      />

      {/* Empty State */}
      <Text variant="captionMedium" color="textMuted" style={styles.subHeading}>
        EMPTY STATE SLATE
      </Text>
      <EmptyState
        title="No Transactions Found"
        description="You have no transactions matching the current filters. Tap below to reset."
        actionLabel="Reset Filter"
        onAction={() => {}}
      />
    </Card>
  );

  // =========================================================================
  // 8. TYPOGRAPHY & FOUNDATION
  // =========================================================================
  const renderTypographySection = () => (
    <Card variant="outlined" style={styles.componentCard}>
      <View style={styles.sectionHeaderRow}>
        <View>
          <Text variant="titleSm" color="textPrimary">
            8. Typography & Design Tokens
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
            TUI_KIT
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
          <Badge
            label="36 Components"
            variant="info"
            size="sm"
          />
        </View>

        {/* Viewport Mode Switcher */}
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
          {/* Desktop Left Sidebar: Complete 36-Component Directory */}
          <ScrollView
            style={[styles.desktopSidebar, { backgroundColor: colors.surface, borderRightColor: colors.borderSubtle }]}
            showsVerticalScrollIndicator={false}
          >
            <Text variant="captionMedium" color="textMuted" style={styles.sidebarHeader}>
              36 KIT PRIMITIVES
            </Text>

            <Text variant="caption" color="textMuted" style={{ marginTop: spacing.xs, marginBottom: spacing.xxs }}>
              CORE & ACTIONS
            </Text>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">🔘 Button</Text><Badge label="Core" variant="primary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">🏷️ Badge</Text><Badge label="7 types" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">🏷️ Chip</Text><Badge label="Filter" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">🗂️ Card</Text><Badge label="3 types" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">👤 Avatar</Text><Badge label="4 sizes" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">⚡ ActionCircle</Text><Badge label="Triggers" variant="secondary" size="sm" /></View>

            <Text variant="caption" color="textMuted" style={{ marginTop: spacing.md, marginBottom: spacing.xxs }}>
              FORMS & SELECTION
            </Text>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">📝 Input</Text><Badge label="Text" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">🔍 SearchBar</Text><Badge label="Search" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">🔢 OTPInput</Text><Badge label="PIN" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">☑️ Checkbox</Text><Badge label="Select" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">🔘 Radio / Group</Text><Badge label="Single" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">🎚️ Switch</Text><Badge label="Toggle" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">🎛️ Slider</Text><Badge label="Range" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">💊 SegmentedControl</Text><Badge label="Pill" variant="secondary" size="sm" /></View>

            <Text variant="caption" color="textMuted" style={{ marginTop: spacing.md, marginBottom: spacing.xxs }}>
              FEEDBACK & OVERLAYS
            </Text>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">💬 Modal</Text><Badge label="Dialog" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">📋 BottomSheet</Text><Badge label="Sheet" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">🔔 Toast</Text><Badge label="Feedback" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">📢 Banner</Text><Badge label="Alert" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">⌛ Spinner</Text><Badge label="Loading" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">🦴 Skeleton</Text><Badge label="Placeholder" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">📊 ProgressBar</Text><Badge label="Linear" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">⭕ CircularProgress</Text><Badge label="Ring" variant="secondary" size="sm" /></View>

            <Text variant="caption" color="textMuted" style={{ marginTop: spacing.md, marginBottom: spacing.xxs }}>
              LAYOUT & NAVIGATION
            </Text>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">🔝 Header</Text><Badge label="Nav" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">⚓ BottomNavigation</Text><Badge label="Dock" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">📑 Tabs</Text><Badge label="Views" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">📂 Accordion</Text><Badge label="Collapse" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">📃 ListItem</Text><Badge label="Row" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">⚙️ SettingRow</Text><Badge label="Option" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">➖ Divider</Text><Badge label="Line" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">⏱️ Timeline</Text><Badge label="Steps" variant="secondary" size="sm" /></View>

            <Text variant="caption" color="textMuted" style={{ marginTop: spacing.md, marginBottom: spacing.xxs }}>
              FINTECH & DISPLAYS
            </Text>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">💳 DebitCardVisual</Text><Badge label="Card" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">💱 CurrencyCard</Text><Badge label="Wallet" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">🧾 TransactionRow</Text><Badge label="Feed" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">⌨️ Keypad</Text><Badge label="PIN" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">📭 EmptyState</Text><Badge label="Slate" variant="secondary" size="sm" /></View>
            <View style={styles.sidebarItem}><Text variant="bodySmMedium" color="textPrimary">🔤 Typography</Text><Badge label="12 levels" variant="secondary" size="sm" /></View>

            {/* Token System Box */}
            <View style={[styles.sidebarTokenBox, { backgroundColor: colors.surfaceSubtle, borderRadius: radius.lg }]}>
              <Text variant="captionMedium" color="textPrimary">
                TOKEN CONTRACT
              </Text>
              <Text variant="caption" color="textSecondary" style={{ marginTop: spacing.xxs }}>
                • Zero arbitrary values{'\n'}
                • 36 Production components{'\n'}
                • 12 Typography presets{'\n'}
                • 11 Spacing increments{'\n'}
                • 8 Border radii{'\n'}
                • 60-120 FPS Hermes
              </Text>
            </View>

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
              style={{ marginBottom: spacing.lg }}
            />
          </ScrollView>

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
                    TUI_KIT Component Workbench
                  </Text>
                  <Text variant="body" color="textSecondary">
                    Complete 36-component mobile UI suite deconstructed from Wise design language.
                  </Text>
                </View>
                <View style={styles.heroBadgesCol}>
                  <Badge label="Hermes Engine" variant="primary" size="md" />
                  <Badge label="Expo SDK 57" variant="secondary" size="md" />
                  <Badge label="36 Components" variant="info" size="md" />
                </View>
              </View>
            </Card>

            {/* 2-Column Responsive Grid */}
            <View style={styles.desktopTwoColGrid}>
              {/* Left Column: Form, Selection & Controls */}
              <View style={styles.desktopCol}>
                {renderButtonsSection()}
                {renderBadgesAndChipsSection()}
                {renderInputsSection()}
                {renderSelectionControlsSection()}
                {renderFeedbackAndOverlaysSection()}
              </View>

              {/* Right Column: Layout, Navigation & Fintech */}
              <View style={styles.desktopCol}>
                {renderFintechPrimitivesSection()}
                {renderLayoutAndNavigationSection()}
                {renderTypographySection()}
              </View>
            </View>

            {/* Desktop Footer */}
            <View style={styles.desktopFooter}>
              <Text variant="caption" color="textMuted" align="center">
                TUI_KIT Design System • Author: Talha Abdurehman (talhakyle124@gmail.com)
              </Text>
              <Text variant="caption" color="textMuted" align="center" style={{ marginTop: spacing.xxs }}>
                Zero Arbitrary Values • Responsive Desktop & Mobile Architecture
              </Text>
            </View>
          </ScrollView>
        </View>
      ) : (
        /* ============================================================== */
        /* MOBILE PHONE LAYOUT                                            */
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
                TUI_KIT MOBILE SHOWCASE
              </Text>
              <Text variant="titleLg" color="textPrimary" style={{ marginVertical: spacing.xs }}>
                36 Component Suite
              </Text>
              <Text variant="bodySm" color="textSecondary">
                Mobile-optimized 44x44pt touch targets, smooth 60-120 FPS Hermes animations.
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
            {renderBadgesAndChipsSection()}
            {renderInputsSection()}
            {renderSelectionControlsSection()}
            {renderFeedbackAndOverlaysSection()}
            {renderLayoutAndNavigationSection()}
            {renderFintechPrimitivesSection()}
            {renderTypographySection()}

            {/* Mobile Footer */}
            <View style={styles.mobileFooter}>
              <Text variant="caption" color="textMuted" align="center">
                Mobile Layout Active • 36 Components • Talha Abdurehman
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
  controlsCol: {
    gap: theme.spacing.sm,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.xs,
  },
  loaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
  },
  skeletonContainer: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surfaceSubtle,
    borderRadius: theme.radius.md,
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
