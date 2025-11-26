# 🎨 Demo Popup - Visual Design Reference

## Component Preview

```
┌─────────────────────────────────────┐
│                                     │  Floating Card Container
│  ┌───────────────────────────────┐  │  • Width: 260px
│  │  [ICON]  Voir la démo         │  │  • Rounded: xl (12px)
│  │          Dashboard            │  │  • Background: white/95 + blur
│  │          Interface médecin    │  │  • Shadow: 0 8px 30px rgba(0,0,0,0.08)
│  └───────────────────────────────┘  │  • Border: white/10
│                                     │
│  ┌───────────────────────────────┐  │
│  │  [ICON]  Voir l'expérience    │  │
│  │          patient              │  │
│  │          Prise de rendez-vous │  │
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

## Color Specifications

### Option 1: Dashboard Demo
```css
Icon Background:
  gradient: linear-gradient(135deg, #3A7AFE 0%, #7460EE 100%)
  
Button Hover:
  background: linear-gradient(90deg, #3A7AFE/5 0%, #7460EE/5 100%)
  border-color: #3A7AFE/30
```

### Option 2: Patient Booking Demo
```css
Icon Background:
  gradient: linear-gradient(135deg, #2AB8A6 0%, #3BB587 100%)
  
Button Hover:
  background: linear-gradient(90deg, #2AB8A6/5 0%, #3BB587/5 100%)
  border-color: #2AB8A6/30
```

## Typography

```
Title (Option Label):
  Font-size: 14px (0.875rem)
  Font-weight: 600 (semibold)
  Color: #445066 (docliq-text)
  Line-height: tight

Subtitle:
  Font-size: 12px (0.75rem)
  Font-weight: 400 (normal)
  Color: #445066/60 (docliq-text with 60% opacity)
  Margin-top: 2px
```

## Spacing & Layout

```
Container:
  Padding: 16px (1rem) on mobile
          20px (1.25rem) on desktop
  Gap between options: 8px (0.5rem)

Option Button:
  Padding: 14px 16px (py-3.5 px-4)
  Border-radius: 8px (rounded-lg)
  Display: flex
  Align-items: center
  Gap: 12px (space-x-3)

Icon Container:
  Width: 40px (10)
  Height: 40px (10)
  Border-radius: 8px (rounded-lg)
  Display: flex
  Align & Justify: center
  
Icon:
  Width: 20px (5)
  Height: 20px (5)
  Color: white
```

## States

### Default State
```css
Background: rgba(255, 255, 255, 0.5)
Border: 1px solid rgba(148, 163, 184, 0.8)
Cursor: default
```

### Hover State
```css
Background: gradient overlay (see color specs)
Border: enhanced color with 30% opacity
Shadow: subtle sm shadow
Transform: none (no scale - stays calm)
Transition: all 200ms ease
```

### Focus State
```css
Outline: none
Ring: 2px solid accent-color/20
Ring-offset: 4px
```

### Active/Clicked State
```css
Transform: none
Transition: smooth close with fade-out
Duration: 150ms
```

## Animation Specifications

### Popup Entrance
```css
Initial State:
  opacity: 0
  scale: 0.95
  
Final State:
  opacity: 1
  scale: 1
  
Duration: 150ms
Easing: cubic-bezier(0.16, 1, 0.3, 1)
```

### Popup Exit
```css
Initial State:
  opacity: 1
  scale: 1
  
Final State:
  opacity: 0
  scale: 0.95
  
Duration: 150ms
Easing: cubic-bezier(0.16, 1, 0.3, 1)
```

### Slide Direction
```css
From Bottom: slide-in-from-top-1 (4px)
From Top: slide-in-from-bottom-1 (4px)
From Left: slide-in-from-right-1 (4px)
From Right: slide-in-from-left-1 (4px)
```

## Positioning Logic

```
Default Position: Center aligned with trigger
Side Offset: 12px from trigger
Collision Padding: Auto adjust to viewport

Smart Positioning:
- If near right edge → align left
- If near left edge → align right
- If near bottom → open upward
- If near top → open downward
```

## Shadow Specifications

```css
Container Shadow:
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08)
  
Icon Shadow:
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) (shadow-md)
  
Option Hover Shadow:
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05) (shadow-sm)
```

## Backdrop Effects

```css
Backdrop Blur:
  backdrop-filter: blur(12px)
  -webkit-backdrop-filter: blur(12px)
  
Background:
  background: rgba(255, 255, 255, 0.95)
```

## Border Specifications

```css
Container:
  border: 1px solid rgba(255, 255, 255, 0.1)
  border-radius: 12px (rounded-xl)
  
Option Buttons:
  border: 1px solid rgba(148, 163, 184, 0.8)
  border-radius: 8px (rounded-lg)
  
Icon Container:
  border: none
  border-radius: 8px (rounded-lg)
```

## Responsive Breakpoints

### Mobile (< 768px)
```
Container Width: 260px (fixed)
Padding: 16px
Icon Size: 40px
Font Size: Unchanged
```

### Tablet (768px - 1024px)
```
Container Width: 260px (fixed)
Padding: 20px
Icon Size: 40px
Font Size: Unchanged
```

### Desktop (> 1024px)
```
Container Width: 260px (fixed)
Padding: 20px
Icon Size: 40px
Font Size: Unchanged
```

## Z-Index Hierarchy

```
Popup Container: z-50
Backdrop: z-40 (if modal variant)
Trigger Button: z-auto
```

## Accessibility Features

```
Keyboard Navigation:
  - Tab: Focus next option
  - Shift+Tab: Focus previous option
  - Enter/Space: Activate option
  - Escape: Close popup
  
Screen Readers:
  - Proper ARIA labels on buttons
  - Role="button" on interactive elements
  - Focus trap when open
  
Focus Indicators:
  - Visible focus ring (2px)
  - 20% opacity of accent color
  - 4px offset for clarity
```

## Icon Library

```
Dashboard Icon:
  - Name: LayoutDashboard
  - Library: lucide-react
  - Size: 20px (w-5 h-5)
  
Patient Booking Icon:
  - Name: CalendarCheck
  - Library: lucide-react
  - Size: 20px (w-5 h-5)
```

## Performance Considerations

```
Animation Performance:
  - Use CSS transforms (GPU accelerated)
  - Avoid animating width/height
  - Use opacity for fade effects
  
Rendering:
  - Portal to body for positioning
  - Conditional render (only when open)
  - Cleanup on unmount
```

## Design System Alignment

```
Component Family: Popover
Design Pattern: Menu/Dropdown
Inspiration: Linear, Stripe, Arc Browser
Style: Premium SaaS, Medical Professional
Consistency: Matches shadcn/ui primitives
```

## Comparison with Design References

### Stripe-like Qualities
✅ Clean, minimal design
✅ Premium shadows and blur
✅ Smooth, subtle animations
✅ High contrast text

### Linear-like Qualities
✅ Frameless floating card
✅ Smart positioning
✅ Keyboard shortcuts ready
✅ Fast, responsive feel

### Apple-like Qualities
✅ Rounded corners
✅ Frosted glass effect
✅ Calm, no-fuss UX
✅ Perfect spacing

## Brand Consistency

```
Docliq Blue: #3A7AFE (Primary action)
Docliq Purple: #7460EE (Secondary gradient)
Docliq Turquoise: #2AB8A6 (Patient-facing)
Docliq Success: #3BB587 (Confirmation)
Docliq Text: #445066 (Typography)

All colors match the existing Docliq design system
```

---

**Design Status**: ✅ Production Ready
**Last Updated**: 2024
**Design System**: Docliq Medical CRM
