

# 06_calendar_and_time_intelligence.md  
## Calendar, Events & Time Intelligence

---

## Purpose of This Domain

The Calendar domain acts as the **temporal coordination layer** for the application.

It unifies:
- In-game events
- Player- and organization-defined schedules
- Economic and conflict milestones
- Real-world and EVE-time alignment

The calendar exists to answer:
- *What is happening?*
- *When does it matter?*
- *How does time affect planning and decisions?*

---

## Core Calendar Scope

The calendar includes:
- Automated event ingestion
- Manual event creation
- Cross-domain intelligence events
- Time conversion and labeling

It is informational and organizational, not directive.

---

## Event Sources

### EVE API–Driven Events
- Official EVE events
- Seasonal events
- Scheduled in-game activities

Events are:
- Automatically ingested
- Visually distinct from user-created entries
- Refreshable on API update

---

### Player & Organization Events

- Manual event creation:
  - Free-form title and notes
  - Time-bound or all-day
- Corporation events
- Alliance events
- Optional character birthday tracking

Visibility can be scoped to:
- Character
- Corporation
- Alliance

---

## Economic & Conflict Milestones

### Derived Intelligence Events
The calendar can surface major analytical moments, including:
- Market spikes
- Significant price volatility windows
- Major wars or conflict escalations
- Sustained kill surges in specific regions

These events can be:
- Auto-generated
- User-confirmed
- Edited or dismissed

---

## Subscription & Account Tracking

### Omega Status Tracking
- Omega resubscription date
- User-defined reminders and warning thresholds
- Visual indicators of approaching expiration

---

## Time Systems & Conversion

### EVE Time ↔ Local Time

- Displays:
  - EVE time
  - Local system time
- Automatic conversion based on system timezone
- Conversion label shown inline:
  - Example: `EVE (−06:00)`

### Manual Conversion Aid
- Conversion label is persistent for quick mental conversion
- No reliance on external tools

---

## Date Context

- Dual-date display:
  - Real-world calendar date
  - EVE lore date
- Lore date display is optional and configurable

---

## Views & Navigation

### Calendar Views
- Daily
- Weekly
- Monthly

Each view supports:
- Filtering by event type
- Color overlays
- Collapse/expand behavior

---

## Visual Customization

- Fully customizable color overlays
- Event type–based coloring
- Opacity and contrast controls
- Theme consistency with the rest of the application

All visual elements are optional and user-controlled.

---

## UI Integration

### Main Window Access
- Clickable calendar icon in the main window
- Behavior similar to Edencom notifications
- Quick-glance view

### Dedicated Calendar Window
- Full-featured management interface
- Advanced filtering
- Event creation and editing
- Cross-domain linking

---

## Cross-Domain Integration

Calendar entries can link to:
- Map locations
- Intelligence reports
- Market events
- Player or corporation profiles

Likewise, other domains can surface time-bound events into the calendar.

---

## Design Philosophy Summary

- Time awareness is a strategic advantage
- No event is forced onto the user
- Automation augments memory; it does not replace judgment
- Temporal context is as important as spatial or financial context

---

### Closing Statement

The Calendar domain ensures that **when things happen** is never disconnected from **why they matter**.

It binds gameplay, economics, conflict, and planning into a coherent temporal framework without imposing workflow or intent.

---
**Proprietary Notice:** This documentation and the EVE Unified Intelligence project are proprietary. Unauthorized distribution, reproduction, or reuse is strictly prohibited.
