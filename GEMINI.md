<!-- 
Author: Talha Abdurehman <talhakyle124@gmail.com>
-->
# Corporate UI Kit System Rules

## Mission
Build a production-grade, token-driven, zero-bloat React Native UI kit optimized for Expo and strict TypeScript. Every component must be accessible, support light and dark modes, handle touch states cleanly, and run at 60-120 FPS.

## Tech Stack & Architecture
- Framework: React Native (Expo SDK, Hermes engine, New Architecture)
- Language: TypeScript in strict mode (`noImplicitAny`, `strictNullChecks` enforced)
- Styling: Standard React Native `StyleSheet.create` consuming central theme tokens
- Navigation: Expo Router
- State & Data: Zustand, React Query, Supabase client
- Icons: `@expo/vector-icons`

## Core Invariants
0. MANDATORY REAL-TIME WEB & DOCS VERIFICATION (HIGHEST PRIORITY): Always verify APIs, CLI flags, package availability, and framework specifications (Expo, React Native New Architecture, Hermes, TypeScript) against live web documentation before writing, proposing, or modifying code. Never guess or rely on outdated assumptions.
1. ZERO ARBITRARY VALUES: Never use raw hex codes (e.g. `#1A1A1A`) or arbitrary spacing numbers (e.g. `13`, `22`). Every color, margin, padding, border radius, and font size must reference `@/theme`.
2. NO WEB DRIFT: Never use web DOM assumptions (`div`, `span`, `window`, `localStorage`, CSS grid, or CSS transitions). Use React Native primitives (`View`, `Text`, `Pressable`, `ScrollView`).
3. ZERO DEPENDENCY SPRAWL: Do not install external UI packages, animation libraries, or utility bloat without explicit user approval. Build on React Native primitives and official Expo packages.
4. SAFE AREAS & VIEWPORTS: Every top-level view must account for device notches, dynamic islands, home indicators, and keyboard intrusions.
5. ACCESSIBILITY: Every interactive element must provide a minimum touch target of 44x44 pt, accessibility labels, and visual pressed states.
6. SHOWCASE DRIVEN: Every new component must have a corresponding showcase screen demonstrating all variants, sizes, and states (default, pressed, disabled, loading, error).

## Directory Layout
- `src/theme/`: Design tokens (colors, spacing, typography, radii, shadows, theme contract).
- `src/components/ui/`: Atomic and composite UI kit primitives.
- `src/components/index.ts`: Public API export barrel.
- `app/`: Expo Router showcase app for iPhone testing.
