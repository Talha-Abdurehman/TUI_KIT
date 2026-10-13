---
name: create-ui-component
description: Follow these steps sequentially whenever tasked with building or scaffolding a new UI primitive or component for the UI kit.
---
<!-- 
Author: Talha Abdurehman <talhakyle124@gmail.com>
-->
# Skill: Create UI Component Runbook

Follow these steps sequentially whenever tasked with building a new UI primitive.

## Step 1: Interface Definition
1. Create `src/components/ui/[ComponentName]/[ComponentName].types.ts`.
2. Define component props interface. Extend native base props (`ViewProps`, `PressableProps`, etc.).
3. Document each custom prop with JSDoc comments.

## Step 2: Implementation
1. Create `src/components/ui/[ComponentName]/[ComponentName].tsx`.
2. Import theme tokens from `@/theme`.
3. Handle all states explicitly:
   - Default state
   - Pressed state (touch feedback)
   - Loading state (render native `ActivityIndicator` styled with theme color)
   - Disabled state (dimmed opacity, `pointerEvents: 'none'`, or `disabled={true}`)
4. Keep all styles inside `StyleSheet.create` at the bottom of the file.

## Step 3: Public API Export
1. Create `src/components/ui/[ComponentName]/index.ts` exporting the component and its types.
2. Re-export the component from `src/components/index.ts`.

## Step 4: Showcase Integration
1. Open or create the component screen in `app/showcase/[component-name].tsx`.
2. Render an interactive demo screen displaying:
   - All variants side by side.
   - All size variations.
   - Disabled and loading states.
   - A dark mode preview wrapper.
