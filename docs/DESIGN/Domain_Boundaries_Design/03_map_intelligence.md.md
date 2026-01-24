

# 03_map_intelligence.md  
## Map & Spatial Intelligence

---

## Purpose of This Domain

The Map & Spatial Intelligence domain is the **primary situational awareness surface** for the entire application.

It unifies:
- Static universe structure  
- Live activity and event pressure  
- User-generated intelligence  
- Cross-domain references  

into a **single, configurable, at-a-glance system**.

The map is not just navigational. It is **analytical, predictive, and contextual**.

---

## Core Design Principle

**Every element of the map is optional, customizable, and user-controlled.**

This includes:
- Foundational universe elements  
- API-driven overlays  
- Derived metrics and heuristics  
- User annotations, drawings, and tags  

Nothing is mandatory.  
Nothing is visually enforced.  
Everything can be toggled, styled, reordered, or disabled.

---

## 1.4 Advanced Map System (EVEeye-Inspired)

### Objectives
- Provide **situational awareness at a glance**
- Combine static universe data with live activity and event pressure
- Support route planning, risk evaluation, site hunting, and logistics
- Act as a shared intelligence layer across all other domains

---

## Foundational Map Layer (Customizable)

The foundational layer represents the EVE universe topology.  
Even this layer is configurable in visibility, styling, and detail level.

### Universe Representation
- Full universe map:
  - High-sec / low-sec / null-sec / wormhole space
  - Security status coloring (custom palettes supported)
- Adjustable zoom levels:
  - Cluster
  - Region
  - Constellation
  - System

### System Node Visualization
- Security status
- Sovereignty (where applicable)
- NPC vs player-controlled regions
- Optional labels and iconography

### Connections
- Gate and jump connections:
  - Normal gates
  - Jump bridges
  - Wormhole connections (when known)
- Jump distance indicators
- Connection type differentiation

All foundational visuals can be:
- Hidden
- Simplified
- Restyled

---

## Overlay & Layer Architecture

All non-foundational information is presented as **layers**.

### Layer Behavior
- Individually toggleable
- Reorderable
- Groupable
- Opacity-controlled
- Color-customizable

Multiple layers may be active simultaneously without blocking navigation.

---

## 1.4.1 Dynamic Traffic Overlays

### Activity Metrics
- Player jumps:
  - Last hour
  - Last 24 hours
- NPC kills:
  - Last hour
  - Last 24 hours
- Optional player kill overlays

### Trend Indicators
- Rising / falling activity arrows
- Time-normalized comparisons
- User-defined thresholds

**Use Cases**
- Identify high-traffic systems
- Avoid congested farming zones
- Detect underutilized pockets
- Predict short-term competition spikes

---

## 1.4.2 Site Availability & Competition Modeling

### Site Competition Heuristic
A derived indicator estimating how contested a system is.

Inputs may include:
- Player jump volume
- NPC kill velocity
- User-recorded run history
- Time-of-day activity patterns

### Outputs
- Competition rating:
  - Low
  - Medium
  - High
- Historical congestion heatmaps
- Visual site pressure indicators

**Goal**
Estimate how quickly sites are likely to be depleted or contested — not to guarantee outcomes.

All heuristics are:
- Transparent
- Adjustable
- Optional

---

## 1.4.3 Event & Anomaly Overlays

### Supported Events
- Incursions
- Invasions
- Seasonal events
- Faction warfare activity
- Major NPC campaigns

### Event Gravity Modeling
- Increased player traffic in event systems
- Spillover effects into adjacent systems
- Configurable radius of influence

Event layers can be:
- Viewed alone
- Combined with traffic or competition layers
- Temporarily hidden

---

## 1.4.4 Wormhole & Route Intelligence (Optional / Advanced)

### Wormhole Intelligence
- Wormhole system identification
- Static wormhole types (from SDE)
- User-discovered wormhole annotations
- Manual or semi-automated mapping

### Route Planning Tools
- Safest route
- Lowest traffic route
- Event-avoidance route
- Custom constraint routing

Routes can be:
- Visualized
- Saved
- Exported
- Bookmarked

All wormhole and routing features are **opt-in**.

---

## 1.4.5 Map Interaction & User Customization

### User Markings & Drawings
- Freehand drawings
- Shapes, lines, regions
- Persistent until removed
- Can link to:
  - Notes
  - Timers
  - Other domains

### Custom System Metadata
- User-defined tags:
  - Safe
  - Dangerous
  - Farmed
  - Home
- Personal notes per system
- Favorites (systems, constellations, regions)

### Contextual Interaction
- Right-click system menus
- Tooltip popups with:
  - Expanded data
  - Cross-domain navigation
- Click-to-jump within the application

---

## 1.5 Game Events & System Pressure Index (SPI)

### System Pressure Index
A composite, user-visible metric derived from weighted inputs such as:
- Player jumps
- NPC kill density
- Active events
- Adjacent system activity

### Purpose
- Quantify how “busy” or “contested” a system is
- Feed site availability, routing, and risk evaluation tools
- Provide historical and comparative context

SPI calculations are:
- Configurable
- Viewable
- Disableable

---

## 1.6 Player Tracking & Threat Analysis (Optional)

### Threat Heuristics
- Kill frequency
- Security-space weighting
- Adjacent low-sec/null-sec influence

### Intelligence Tools
- Player / corporation / alliance tagging
- Kill heatmaps
- Watchlists
- Alert triggers (visual, not automated actions)

Threat analysis is advisory only and entirely optional.

---

## Player Location & Movement

### Follow Mechanic
- Optional ESI-based player location tracking
- Highlights:
  - Current system
  - Recent path
- Configurable refresh and visibility

### Lookahead Visualization
- User-defined jump depth
- Displays projected exposure and congestion

---

## Visual Design & Performance Constraints

- 2D only
- No real-time physics
- Minimal animation
- Performance-first rendering

### Themes & Styling
- Fully customizable color schemes
- Transparency and opacity controls
- Applies uniformly across:
  - Map
  - Overlays
  - Drawings
  - UI elements

---

## Window & Layout Behavior

- Dockable / undockable
- Adjustable transparency
- Can function as:
  - Primary workspace
  - Secondary always-on intelligence panel

---

## Design Philosophy Summary

- The map informs, never dictates
- User intelligence always overrides automated assumptions
- Visual clarity is prioritized over density
- Every system must degrade gracefully when features are disabled

---

### Closing Statement

The Map & Spatial Intelligence domain is the **context engine** of the application.

It connects:
- Where things happen  
- Why they matter  
- How they relate to player behavior and outcomes  

into a system that remains flexible, performant, and entirely under user control.
