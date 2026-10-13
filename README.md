# TUI_KIT

> **Production-grade, token-driven, zero-bloat React Native UI Kit and GitHub starter template. Optimized for Expo SDK 57, the New Architecture, Hermes engine, and strict TypeScript.**

[![Expo SDK 57](https://img.shields.io/badge/Expo-SDK%2057-black?style=flat&logo=expo)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React%20Native-0.86-blue?style=flat&logo=react)](https://reactnative.dev)
[![TypeScript Strict](https://img.shields.io/badge/TypeScript-Strict%20Mode-blue?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Hermes Ready](https://img.shields.io/badge/Hermes-60--120%20FPS-green?style=flat)](https://hermesengine.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ⚡ Core Philosophy & Invariants

1. **Token-First Development Invariant**: Every visual attribute (color, spacing, margin, padding, border radius, font size, and dimension) must be declared in `src/theme/tokens.ts` **first**. Zero arbitrary values or raw hex codes allowed.
2. **Referential Stability (60–120 FPS)**: The `useTheme()` hook returns pre-assembled immutable singletons (`lightTheme` / `darkTheme`), eliminating object reallocation on every render and preventing Hermes garbage collection spikes.
3. **Cross-Platform Responsive Architecture**: Dual-mode showcase supporting both **Desktop Workbench** (`width >= 1024px`, sticky navigation sidebar, 2-column grid) and **Mobile Handheld** (`width < 1024px`, touch-optimized single column) via `useResponsive()`.
4. **No Web Drift**: Built purely with React Native primitives (`View`, `Text`, `Pressable`, `ScrollView`). Zero DOM or CSS assumptions.
5. **Zero Dependency Sprawl**: No heavy external UI wrappers or animation bloat. Runs 100% on React Native primitives and official Expo packages.
6. **Accessibility First**: Every interactive element guarantees a minimum touch target of 44×44 pt with automatic `hitSlop` on compact sizes.

---

## 🧩 Complete Component Catalog (14 Primitives)

| Component | Description | Highlights |
|---|---|---|
| **`Button`** | Signature pill button (`radius.full`) | 5 variants (`primary`, `secondary`, `outline`, `ghost`, `danger`), 3 sizes, loading spinner, disabled |
| **`Badge`** | Status indicator chip | 7 semantic states (`primary`, `secondary`, `success`, `warning`, `error`, `info`, `outline`), 2 sizes |
| **`Input`** | Form text input | Focus rings, helper hints, inline validation (`errorText`), accessory icon slots |
| **`Card`** | Elevation surface container | 3 variants (`flat`, `outlined`, `elevated`), pressable micro-scale feedback (`transform: [{ scale: 0.98 }]`) |
| **`Avatar`** | Circular user visual | Automatic name initials parsing, image URIs, fallback icons, 4 sizes (`sm`, `md`, `lg`, `xl`) |
| **`ProgressBar`** | Linear progress tracker | Clamped values (`0–100%`), semantic fills (`primary`, `success`, `warning`, `error`), optional labels |
| **`SettingRow`** | Accessible settings switch row | Title, explanatory subtitle, divider option, and native `Switch` styled with brand tokens |
| **`Timeline`** | Multi-step process tracker | Milestone indicators (`completed`, `active`, `pending`), connector lines, descriptions |
| **`SegmentedControl`** | Pill-shaped tab selector | Haptic micro-press, active elevation shadow, and icon support |
| **`DebitCardVisual`** | Fintech payment card | ISO 1.586 aspect ratio, EMV chip graphic, contactless waves, brand themes (`lime`/`forest`), freeze overlay |
| **`CurrencyCard`** | Multi-currency balance card | Standard dimensions (`156×160pt`), country flag circle, dashed "Open account" addition variant |
| **`ActionCircleButton`** | Circular action trigger | 52pt diameter, guaranteed 44×44pt touch area, primary/secondary modes |
| **`TransactionRow`** | Feed row primitive | Avatar slot, merchant title, categorization metadata, status badge, debit/credit values |
| **`Text`** | Typography primitive | 12 design token presets (`hero`, `display`, `titleLg`, `titleMd`, `titleSm`, `bodyBold`, etc.) |

---

## 📁 Repository Structure

```text
├── app/                                 # Expo Router showcase application
│   ├── _layout.tsx                      # Root safe area & navigation layout
│   ├── index.tsx                        # Responsive Desktop Workbench & Mobile Catalog
│   ├── cards.tsx                        # Debit card management screen template
│   ├── payments.tsx                     # Live currency calculator & transfer tracker
│   ├── recipients.tsx                   # Contact list & account management template
│   └── showcase/                        # Isolated single-component demo screens
│       ├── button.tsx
│       ├── typography.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── input.tsx
├── src/
│   ├── theme/                           # Single source of truth for design tokens
│   │   ├── tokens.ts                    # Colors, spacing, radii, layout, typography, breakpoints
│   │   └── index.ts                     # useTheme(), useResponsive(), and static theme fallback
│   ├── components/                      # UI Kit Primitives
│   │   ├── ui/                          # 14 atomic and composite components
│   │   └── index.ts                     # Public component export barrel
│   └── index.ts                         # Library root export
├── .agents/                             # Antigravity 2.0 agent configuration
│   ├── rules/guidelines.md              # UI component engineering guidelines
│   └── skills/create-ui-component/      # Automated component scaffolding runbook
├── GEMINI.md                            # Project rules, invariants & verification mandates
├── app.json                             # Expo configuration with New Architecture enabled
└── package.json                         # Project dependencies and scripts
```

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/Talha-Abdurehman/TUI_KIT.git
cd TUI_KIT
npm install
```

### 2. Start Development Server
```bash
npx expo start
```
* Press **`w`** to open in Web Browser (supports Desktop & Mobile modes)
* Press **`i`** to open in iOS Simulator
* Press **`a`** to open in Android Emulator
* Scan the QR code using Expo Go or your Development Build on an iPhone/Android device

---

## 🎨 Theme & Token Usage

### Dynamic Hook vs Static StyleSheet

```tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme, theme, Text, Button, Badge } from '@/components';

export function ExampleCard() {
  const { colors, spacing } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <View style={styles.header}>
        <Text variant="titleSm">Wise Fintech Base</Text>
        <Badge label="Active" variant="success" size="sm" />
      </View>
      <Text variant="body" color="textSecondary" style={{ marginVertical: spacing.sm }}>
        Seamless light & dark mode support with zero arbitrary values.
      </Text>
      <Button label="Transfer Money" variant="primary" size="md" />
    </View>
  );
}

// Static tokens used in StyleSheet.create for Hermes performance
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: theme.spacing.md,
    borderRadius: theme.radius.xl,
    ...theme.shadows.sm,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
```

---

## 🤖 Built for Agentic Development (Antigravity 2.0)

This repository includes native agent automation:
* **Token-First Workflow**: Invariant 0.1 mandates that all changes must be declared in tokens first.
* **Scaffolding Skill (`create-ui-component`)**: 4-step runbook (Interface → Implementation → Public Export → Showcase Integration).
* **Live Web Verification**: Strict `GEMINI.md` mandate ensuring all dependencies and APIs match live specifications.

---

## 📄 License
MIT © [Talha Abdurehman](mailto:talhakyle124@gmail.com)
