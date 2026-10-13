/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Wise Mobile App - Complete Deconstructed Home Screen
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
import { useTheme } from '@/theme';
import {
  ActionCircleButton,
  Badge,
  Button,
  Card,
  CurrencyCard,
  Text,
  TransactionRow,
} from '@/components';

export default function WiseHomeScreen() {
  const router = useRouter();
  const { colors, spacing, radius, isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<'home' | 'cards' | 'recipients' | 'payments'>('home');

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={[styles.safeArea, { backgroundColor: colors.background }]}>
      {/* Top Header */}
      <View style={[styles.header, { paddingHorizontal: spacing.md }]}>
        <Pressable
          accessibilityRole="button"
          style={[styles.avatar, { backgroundColor: colors.surfaceSubtle, borderColor: colors.borderSubtle }]}
        >
          <Text variant="bodyBold" color="textPrimary">
            TA
          </Text>
        </Pressable>

        {/* Brand / Title */}
        <View style={styles.headerCenter}>
          <Text variant="titleMd" style={styles.wiseLogo}>
            wise
          </Text>
        </View>

        <View style={styles.headerRight}>
          <Pressable
            accessibilityRole="button"
            onPress={() => router.push('/showcase/button' as any)}
            style={[styles.iconButton, { backgroundColor: colors.surfaceSubtle }]}
          >
            <Text variant="captionMedium">UI Kit</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingHorizontal: spacing.md }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Total Balance Overview */}
        <View style={styles.balanceOverview}>
          <Text variant="bodySmMedium" color="textSecondary">
            Total balance
          </Text>
          <Text variant="hero" style={[styles.heroAmount, { color: colors.textPrimary }]}>
            £6,070.95
          </Text>
        </View>

        {/* Currency Cards Horizontal Slider */}
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

        {/* Quick Actions Bar */}
        <View style={[styles.actionsRow, { backgroundColor: colors.surface, borderRadius: radius.xl, padding: spacing.md }]}>
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

        {/* Digital Debit Card Teaser Banner */}
        <Pressable
          accessibilityRole="button"
          onPress={() => router.push('/cards' as any)}
          style={[styles.cardBanner, { backgroundColor: '#163300', borderRadius: radius.xl }]}
        >
          <View style={styles.cardBannerLeft}>
            <Badge label="Active Card" variant="success" size="sm" />
            <Text variant="titleSm" style={{ color: '#F4F5F2', marginTop: 6 }}>
              Wise Digital Card
            </Text>
            <Text variant="caption" style={{ color: '#9CA396' }}>
              •••• 4821 • Tap to manage limits & freeze
            </Text>
          </View>
          <View style={styles.cardMiniChip}>
            <Text variant="titleSm">💳</Text>
          </View>
        </Pressable>

        {/* Recent Transactions Feed */}
        <View style={styles.transactionsHeader}>
          <Text variant="titleSm" color="textPrimary">
            Recent activity
          </Text>
          <Pressable accessibilityRole="button">
            <Text variant="captionMedium" color="textSecondary">
              See all
            </Text>
          </Pressable>
        </View>

        <Card variant="flat" style={styles.transactionsCard}>
          <Text variant="captionMedium" color="textMuted" style={styles.dateHeader}>
            TODAY
          </Text>
          <TransactionRow
            title="Spotify"
            subtitle="Subscription • Card payment"
            amount="-£10.99"
            avatarIcon={<Text variant="bodySm">🎵</Text>}
          />
          <TransactionRow
            title="Pret A Manger"
            subtitle="Food & Drink • Contactless"
            amount="-£4.50"
            avatarIcon={<Text variant="bodySm">☕</Text>}
          />

          <Text variant="captionMedium" color="textMuted" style={[styles.dateHeader, { marginTop: 16 }]}>
            YESTERDAY
          </Text>
          <TransactionRow
            title="Salary (Google DeepMind)"
            subtitle="Direct deposit • Completed"
            amount="+£3,500.00"
            isPositive={true}
            avatarIcon={<Text variant="bodySm">💼</Text>}
          />
          <TransactionRow
            title="Amazon UK"
            subtitle="Shopping • Online"
            amount="-£42.99"
            avatarIcon={<Text variant="bodySm">📦</Text>}
          />
        </Card>
      </ScrollView>

      {/* Bottom Floating Navigation Bar */}
      <View
        style={[
          styles.bottomNav,
          {
            backgroundColor: colors.surface,
            borderTopColor: colors.borderSubtle,
          },
        ]}
      >
        <Pressable
          accessibilityRole="button"
          onPress={() => setActiveTab('home')}
          style={styles.navItem}
        >
          <Text variant="bodyBold" style={{ color: activeTab === 'home' ? colors.primaryDark : colors.textMuted }}>
            🏠
          </Text>
          <Text
            variant="caption"
            style={{
              color: activeTab === 'home' ? colors.textPrimary : colors.textMuted,
              fontWeight: activeTab === 'home' ? '700' : '400',
            }}
          >
            Home
          </Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push('/cards' as any)}
          style={styles.navItem}
        >
          <Text variant="bodyBold" style={{ color: colors.textMuted }}>
            💳
          </Text>
          <Text variant="caption" color="textMuted">
            Cards
          </Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push('/recipients' as any)}
          style={styles.navItem}
        >
          <Text variant="bodyBold" style={{ color: colors.textMuted }}>
            👥
          </Text>
          <Text variant="caption" color="textMuted">
            Recipients
          </Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push('/payments' as any)}
          style={styles.navItem}
        >
          <Text variant="bodyBold" style={{ color: colors.textMuted }}>
            💸
          </Text>
          <Text variant="caption" color="textMuted">
            Payments
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCenter: {
    alignItems: 'center',
  },
  wiseLogo: {
    fontStyle: 'italic',
    fontWeight: '900',
    letterSpacing: -1,
  },
  headerRight: {
    flexDirection: 'row',
  },
  iconButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
  },
  scrollContent: {
    paddingBottom: 90,
  },
  balanceOverview: {
    marginTop: 16,
    marginBottom: 16,
  },
  heroAmount: {
    marginTop: 4,
    letterSpacing: -1,
  },
  currencySlider: {
    paddingRight: 16,
    marginBottom: 20,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    marginBottom: 24,
  },
  cardBannerLeft: {
    flex: 1,
  },
  cardMiniChip: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#9FE870',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  transactionsCard: {
    padding: 16,
    borderRadius: 16,
  },
  dateHeader: {
    marginBottom: 6,
    letterSpacing: 0.8,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
