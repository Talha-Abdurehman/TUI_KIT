# Corporate UI Kit & Starter Template

> **Production-grade, token-driven, zero-bloat React Native UI Kit and GitHub starter template optimized for Expo, the New Architecture, Hermes, and strict TypeScript.**

[![Expo SDK 57](https://img.shields.io/badge/Expo-SDK%2057-black?style=flat&logo=expo)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React%20Native-0.86-blue?style=flat&logo=react)](https://reactnative.dev)
[![TypeScript Strict](https://img.shields.io/badge/TypeScript-Strict%20Mode-blue?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Hermes Ready](https://img.shields.io/badge/Hermes-60--120%20FPS-green?style=flat)]()

---

## ⚡ Core Philosophy & Invariants

1. **Zero Arbitrary Values**: No raw hex codes (`#1A1A1A`) or arbitrary spacing numbers (`13`, `22`). Every color, margin, padding, border radius, and font size references `@/theme`.
2. **Referential Stability (60–120 FPS)**: The `useTheme()` hook returns pre-assembled immutable singletons (`lightTheme`/`darkTheme`), eliminating object reallocation on every render and preventing Hermes garbage collection spikes.
3. **No Web Drift**: Built entirely on React Native native primitives (`View`, `Text`, `Pressable`, `ScrollView`). Zero DOM assumptions.
4. **Zero Dependency Sprawl**: No external heavy UI component libraries or animation bloat.
5. **Accessibility First**: Every interactive element guarantees a minimum touch target of 44×44 pt (with automatic `hitSlop` on compact sizes).
6. **Showcase Driven**: Complete interactive component catalog built with Expo Router for instant simulator and physical device testing.

---

## 📁 Architecture & Directory Layout

```text
├── app/                                 # Expo Router showcase application
│   ├── _layout.tsx                      # Root safe area & navigation layout
│   ├── index.tsx                        # Component catalog & home dashboard
│   └── showcase/                        # Interactive component demos
│       ├── button.tsx
│       ├── typography.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── input.tsx
├── assets/                              # App icons, splash screens, and favicons
├── src/
│   ├── theme/                           # Single source of truth for design tokens
│   │   ├── tokens.ts                    # Colors, spacing, radii, typography, shadows
│   │   └── index.ts                     # useTheme() hook & static theme fallback
│   ├── components/                      # Reusable UI primitives
│   │   ├── ui/
│   │   │   ├── Button/                  # Buttons with variants, sizes & loader
│   │   │   ├── Text/                    # Token-driven typography primitive
│   │   │   ├── Card/                    # Elevated, outlined & flat cards
│   │   │   ├── Badge/                   # Semantic status indicators
│   │   │   └── Input/                   # Accessible text input with states
│   │   └── index.ts                     # Public component export barrel
│   └── index.ts                         # Library root export
├── .agents/                             # Antigravity 2.0 agent configuration
│   ├── mcp_config.json                  # Expo & Supabase MCP servers
│   ├── rules/guidelines.md              # UI component engineering rules
│   └── skills/create-ui-component/      # Automated component scaffolding runbook
├── GEMINI.md                            # High-priority invariants & verification rules
├── app.json                             # Expo configuration with New Architecture enabled
└── package.json                         # Project dependencies and scripts
```

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/your-username/corporate-ui-kit.git
cd corporate-ui-kit
npm install
```

### 2. Start the Development Server
```bash
npx expo start
```
* Press **`i`** to open in iOS Simulator
* Press **`a`** to open in Android Emulator
* Scan the QR code using Expo Go or your Development Build on an iPhone/Android device

---

## 🎨 Token & Theme System

### The Theme Contract
Import tokens dynamically inside components or statically inside module-level `StyleSheet.create`:

```tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme, theme, Text, Button } from '@/components';

export function ExampleCard() {
  const { colors, spacing } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <Text variant="titleSm">Corporate UI Kit</Text>
      <Text variant="body" color="textSecondary" style={{ marginVertical: spacing.sm }}>
        Seamless light & dark mode support.
      </Text>
      <Button label="Get Started" variant="primary" />
    </View>
  );
}

// Static tokens used in StyleSheet for optimal performance
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: theme.spacing.md,
    borderRadius: theme.radius.lg,
    ...theme.shadows.sm,
  },
});
```

---

## 🧩 Components Included

* **Button**: Supports `primary`, `secondary`, `outline`, `ghost`, and `danger` variants; `sm`, `md`, `lg` sizes; `isLoading`, `isDisabled`, `isFullWidth`, and custom icon slots.
* **Text**: Maps strictly to typography presets (`display`, `titleLg`, `titleMd`, `titleSm`, `bodyBold`, `bodyMedium`, `body`, `bodySm`, `caption`).
* **Card**: Containers with `outlined`, `elevated`, and `flat` variants, custom token padding, and pressable states.
* **Badge**: Pill-shaped status indicators (`primary`, `secondary`, `success`, `warning`, `error`, `info`, `outline`).
* **Input**: Accessible inputs with focus highlights, error messages, helper text, and disabled states.

---

## 🤖 Built for Agentic Development (Antigravity 2.0)

This repository includes native agent automation:
* **Runbook Skill (`create-ui-component`)**: Prompts the agent to scaffold new components matching the exact 4-step workflow (Interface, Implementation, Public API, Showcase).
* **Live Web Verification**: Strict `GEMINI.md` mandate ensuring all dependencies and APIs match live specifications.

---

## 📄 License
MIT © Talha Abdurehman
