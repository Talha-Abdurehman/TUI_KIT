/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Wise Deconstructed Recipients Screen
 */

import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Avatar, Badge, Button, Card, Input, Text } from '@/components';

export default function RecipientsScreen() {
  const { colors, spacing, radius } = useTheme();
  const [search, setSearch] = useState('');

  const recipients = [
    {
      name: 'Sarah Jenkins',
      email: 'sarah.j@example.com',
      currency: 'GBP',
      flag: '🇬🇧',
      accountNumber: '•••• 3819',
      isRecent: true,
    },
    {
      name: 'Hans Schmidt',
      email: 'hans.schmidt@berlin.de',
      currency: 'EUR',
      flag: '🇩🇪',
      accountNumber: 'DE89 •••• 1029',
      isRecent: true,
    },
    {
      name: 'Alex Rivera',
      email: 'alex.rivera@nybank.com',
      currency: 'USD',
      flag: '🇺🇸',
      accountNumber: 'Routing •••• 9921',
      isRecent: false,
    },
    {
      name: 'Kenji Sato',
      email: 'kenji.sato@tokyo.jp',
      currency: 'JPY',
      flag: '🇯🇵',
      accountNumber: '•••• 4410',
      isRecent: false,
    },
    {
      name: 'Elena Rostova',
      email: 'elena.rostova@geneva.ch',
      currency: 'CHF',
      flag: '🇨🇭',
      accountNumber: 'CH93 •••• 8841',
      isRecent: false,
    },
  ];

  const filtered = recipients.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.currency.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView
      contentContainerStyle={[styles.content, { padding: spacing.md, backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Header and Add Button */}
      <View style={styles.topRow}>
        <Text variant="titleLg" color="textPrimary">
          Recipients
        </Text>
        <Button
          label="+ Add"
          variant="primary"
          size="sm"
          onPress={() => {}}
        />
      </View>

      {/* Search Input */}
      <Input
        placeholder="Search name, email, or currency..."
        value={search}
        onChangeText={setSearch}
        containerStyle={styles.searchContainer}
      />

      {/* My Accounts Section */}
      <Text variant="captionMedium" color="textMuted" style={styles.groupTitle}>
        MY ACCOUNTS
      </Text>
      <Card variant="outlined" style={styles.myAccountCard}>
        <View style={styles.recipientRow}>
          <Avatar
            name="Talha Abdurehman"
            variant="primary"
            size="lg"
            style={styles.avatarSpacing}
          />
          <View style={styles.recipientInfo}>
            <Text variant="bodyBold">Talha Abdurehman (Primary)</Text>
            <Text variant="caption" color="textSecondary">
              Barclays UK • 🇬🇧 GBP • Account •••• 9932
            </Text>
          </View>
          <Badge label="Owner" variant="secondary" size="sm" />
        </View>
      </Card>

      {/* Other Recipients Section */}
      <Text variant="captionMedium" color="textMuted" style={[styles.groupTitle, { marginTop: spacing.ml }]}>
        ALL RECIPIENTS ({filtered.length})
      </Text>

      <Card variant="flat" style={styles.recipientsListCard}>
        {filtered.map((item, idx) => (
          <Pressable
            key={item.email}
            accessibilityRole="button"
            style={({ pressed }) => [
              styles.recipientRow,
              idx > 0 && [styles.divider, { borderTopColor: colors.borderSubtle }],
              pressed && styles.pressed,
            ]}
          >
            <Avatar
              icon={<Text variant="titleSm">{item.flag}</Text>}
              size="lg"
              style={styles.avatarSpacing}
            />

            <View style={styles.recipientInfo}>
              <Text variant="bodyBold" color="textPrimary">
                {item.name}
              </Text>
              <Text variant="caption" color="textSecondary">
                {item.currency} • {item.accountNumber}
              </Text>
            </View>

            <Button label="Send" variant="ghost" size="sm" />
          </Pressable>
        ))}
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: theme.spacing.xxl,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  searchContainer: {
    marginBottom: theme.spacing.md,
  },
  groupTitle: {
    marginBottom: theme.spacing.sm,
    letterSpacing: 0.8,
  },
  myAccountCard: {
    padding: theme.spacing.md,
    borderRadius: theme.radius.lg,
  },
  recipientsListCard: {
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.lg,
  },
  recipientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.ms,
  },
  divider: {
    borderTopWidth: 1,
  },
  avatarCircle: {
    width: theme.layout.avatarLg,
    height: theme.layout.avatarLg,
    borderRadius: theme.layout.avatarLg / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.ms,
  },
  avatarSpacing: {
    marginRight: theme.spacing.ms,
  },
  recipientInfo: {
    flex: 1,
    marginRight: theme.spacing.sm,
  },
  pressed: {
    opacity: 0.75,
  },
});
