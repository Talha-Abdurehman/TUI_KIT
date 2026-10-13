# TUI_KIT

> **Production-grade, token-driven, zero-bloat React Native UI Kit and GitHub starter template. Optimized for Expo SDK 57, the New Architecture, Hermes engine, and strict TypeScript.**

[![Expo SDK 57](https://img.shields.io/badge/Expo-SDK%2057-black?style=flat&logo=expo)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React%20Native-0.86-blue?style=flat&logo=react)](https://reactnative.dev)
[![TypeScript Strict](https://img.shields.io/badge/TypeScript-Strict%20Mode-blue?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Hermes Ready](https://img.shields.io/badge/Hermes-60--120%20FPS-green?style=flat)](https://hermesengine.dev)
[![Components](https://img.shields.io/badge/Components-36%20Primitives-brightgreen?style=flat)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ⚡ Core Philosophy & Invariants

1. **Token-First Development Invariant**: Every visual attribute (color, spacing, margin, padding, border radius, font size, and layout dimension) must be declared in `src/theme/tokens.ts` **first**. Zero arbitrary values or raw hex codes allowed.
2. **Referential Stability (60–120 FPS)**: The `useTheme()` hook returns pre-assembled immutable singletons (`lightTheme` / `darkTheme`), eliminating object reallocation on every render and preventing Hermes garbage collection spikes.
3. **Cross-Platform Responsive Architecture**: Dual-mode showcase supporting both **Desktop Workbench** (`width >= 1024px`, sticky navigation sidebar, 2-column grid) and **Mobile Handheld** (`width < 1024px`, touch-optimized single column) via `useResponsive()`.
4. **No Web Drift**: Built purely with React Native primitives (`View`, `Text`, `Pressable`, `ScrollView`, `Modal`). Zero DOM or CSS assumptions.
5. **Zero Dependency Sprawl**: No heavy external UI wrappers or animation bloat. Runs 100% on React Native primitives and official Expo packages (`@expo/vector-icons`).
6. **Accessibility First**: Every interactive element guarantees a minimum touch target of 44×44 pt with automatic `hitSlop` on compact sizes.

---

## 🧩 Complete Component Catalog (36 Primitives)

### 1. Foundation & Core Primitives
| Component | Description | Highlights |
|---|---|---|
| **`Button`** | Signature pill button (`radius.full`) | 5 semantic variants (`primary`, `secondary`, `outline`, `ghost`, `danger`), 3 sizes, loading spinner, disabled |
| **`Badge`** | Status indicator chip | 7 semantic states (`primary`, `secondary`, `success`, `warning`, `error`, `info`, `outline`), 2 sizes |
| **`Chip`** | Selectable tag & filter pill | Selected/unselected states, optional remove button (`✕`), icon accessory slot |
| **`Card`** | Elevation surface container | 3 variants (`flat`, `outlined`, `elevated`), pressable micro-scale feedback (`transform: [{ scale: 0.98 }]`) |
| **`Avatar`** | Circular user visual | Automatic name initials parsing, image URIs, fallback icons, 4 sizes (`sm`, `md`, `lg`, `xl`) |
| **`ActionCircleButton`** | Circular action trigger | 52pt diameter, guaranteed 44×44pt touch area, primary/secondary modes |
| **`Text`** | Typography primitive | 12 design token presets (`hero`, `display`, `titleLg`, `titleMd`, `titleSm`, `bodyBold`, etc.) |

### 2. Form & Selection Controls
| Component | Description | Highlights |
|---|---|---|
| **`Input`** | Form text input | Focus rings, helper hints, inline validation (`errorText`), accessory icon slots |
| **`SearchBar`** | Search input | Debounce support, search icon, clear button (`✕`), dismissible keyboard |
| **`OTPInput`** | PIN & 2FA code input | Customizable digit length, auto-focus, paste support, individual visual boxes |
| **`Checkbox`** | Interactive checkbox | 22×22pt square with rounded corners, checkmark glyph, label & description |
| **`Radio` & `RadioGroup`** | Mutually exclusive radio | Accessible radio circle with centered dot, label & descriptive subtext |
| **`Switch`** | Standalone toggle switch | 48×28pt track, 22pt sliding thumb, theme colors, accessible role |
| **`Slider`** | Continuous value range bar | Interactive scrubbing, min/max bounds, step increments, live value display |
| **`SegmentedControl`** | Pill-shaped tab selector | Haptic micro-press, active elevation shadow, and icon support |

### 3. Feedback & Overlays
| Component | Description | Highlights |
|---|---|---|
| **`Modal`** | Accessible dialog popup | Centered dialog, dark backdrop dismissal, title, actions, and custom content slots |
| **`BottomSheet`** | Bottom sliding sheet | Drag handle indicator, half-screen / full-height, backdrop dismiss |
| **`Toast`** | Floating banner notification | 4 variants (`success`, `warning`, `error`, `info`), action button, auto-dismiss |
| **`Banner`** | In-page alert banner | Inline status notices, dismissible trigger, action button slot |
| **`Spinner`** | Animated activity indicator | 3 standard sizes (`sm: 20`, `md: 28`, `lg: 40`), brand color integration |
| **`Skeleton`** | Content placeholder shimmer | Animated pulsing placeholder for cards, avatars, and text blocks |
| **`ProgressBar`** | Linear progress tracker | Clamped values (`0–100%`), semantic fills (`primary`, `success`, `warning`, `error`) |
| **`CircularProgress`** | Ring progress indicator | Pure React Native zero-dependency ring arc with center percentage label |

### 4. Layout & Navigation
| Component | Description | Highlights |
|---|---|---|
| **`Header`** | Screen navigation bar | Title, subtitle, back button with hit-slop, left/right accessory slots |
| **`BottomNavigation`** | Mobile bottom dock bar | 44pt+ touch targets, active icon tint, notification badge count |
| **`Tabs`** | View navigation tab bar | `line` (underline) and `pill` variants, scrollable or fixed width, badges |
| **`Accordion`** | Expandable disclosure item | Collapsible FAQ & section content, animated chevron, multi-expand support |
| **`ListItem`** | Universal list item row | Left accessory, right value, badge, chevron, divider, pressable feedback |
| **`SettingRow`** | Accessible settings switch row | Title, explanatory subtitle, divider option, and brand toggle switch |
| **`Divider`** | Subtle separating line | 1pt hairline thickness, horizontal / vertical orientation, token border tint |
| **`Timeline`** | Multi-step process tracker | Milestone indicators (`completed`, `active`, `pending`), connector lines |

### 5. Display & Fintech
| Component | Description | Highlights |
|---|---|---|
| **`DebitCardVisual`** | Fintech payment card | ISO 1.586 aspect ratio, EMV chip graphic, contactless waves, brand themes (`lime`/`forest`), freeze overlay |
| **`CurrencyCard`** | Multi-currency balance card | Standard dimensions (`156×160pt`), country flag circle, dashed "Open account" addition variant |
| **`TransactionRow`** | Feed row primitive | Avatar slot, merchant title, categorization metadata, status badge, debit/credit values |
| **`Keypad`** | Numeric PIN & payment keypad | 3×4 grid, 64×90pt touch keys, decimal point, backspace with long-press clear |
| **`EmptyState`** | Zero-data empty slate | Centered icon glyph, headline, explanatory description, action buttons |

---

## 📁 Repository Structure

```text
├── app/                                 # Expo Router showcase application
│   ├── _layout.tsx                      # Root safe area & navigation layout
│   ├── index.tsx                        # Responsive Desktop Workbench & Mobile Catalog (36 Primitives)
│   ├── cards.tsx                        # Debit card management screen template
│   ├── payments.tsx                     # Live currency calculator & transfer tracker
│   ├── recipients.tsx                   # Contact list & account management template
│   └── showcase/                        # Isolated single-component demo screens
├── src/
│   ├── theme/                           # Single source of truth for design tokens
│   │   ├── tokens.ts                    # Colors, spacing, radii, layout, typography, breakpoints, animation
│   │   └── index.ts                     # useTheme(), useResponsive(), and static theme fallback
│   ├── components/                      # UI Kit Primitives
│   │   ├── ui/                          # 36 atomic and composite components
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
* Scan the QR code using Expo Go on your mobile device

---

## 🎨 Token Contract

```typescript
import { useTheme, useResponsive } from '@/theme';

function MyComponent() {
  const { colors, spacing, radius, typography } = useTheme();
  const { isDesktop, isMobile } = useResponsive();

  return (
    <View style={{ backgroundColor: colors.surface, padding: spacing.md, borderRadius: radius.lg }}>
      <Text style={[typography.presets.titleSm, { color: colors.textPrimary }]}>
        Token-First UI
      </Text>
    </View>
  );
}
```

---

## 👨‍💻 Author

**Talha Abdurehman**  
Email: [talhakyle124@gmail.com](mailto:talhakyle124@gmail.com)  
GitHub: [@Talha-Abdurehman](https://github.com/Talha-Abdurehman)
