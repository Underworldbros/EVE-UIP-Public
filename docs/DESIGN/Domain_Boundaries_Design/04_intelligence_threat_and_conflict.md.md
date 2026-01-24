

# 04_intelligence_threat_and_conflict.md  
## Player Intelligence, Threat Analysis & Conflict Dynamics

---

## Purpose of This Domain

This domain consolidates **player behavior intelligence**, **combat activity**, and **market-impacting conflict data** into a unified analytical system.

Its role is to answer:
- *Who is dangerous?*
- *Where are they operating?*
- *Why does it matter right now?*
- *What downstream effects does this have (movement, markets, risk)?*

This domain feeds:
- The **Map & Spatial Intelligence** system  
- Market spike detection and forecasting  
- Activity risk assessment  
- Player decision-making (avoidance, engagement, speculation)

All features are optional, configurable, and non-automated.

---

## 1.6 Player Tracking & Threat Analysis

### Threat Rating Heuristics

Threat is represented as a **derived advisory metric**, not a binary label.

Inputs may include:
- Kill frequency
- Kill recency
- Security-space weighting
- Adjacent low-sec / null-sec influence
- Ship classes typically flown
- Gang vs solo indicators

Threat ratings:
- Are contextual (space type matters)
- Can be weighted or disabled
- Never override user judgment

---

### Player / Corporation / Alliance Intelligence

- Tagging at:
  - Individual pilot level
  - Corporation level
  - Alliance level
- Custom tag categories (user-defined)
- Kill heatmaps:
  - Temporal
  - Spatial
- Watchlists:
  - Passive alerts on data refresh
  - No real-time automation

---

## 1.7 Market Spike Correlation

### Conflict-to-Market Analysis

This subsystem correlates **destruction events** with **market behavior**.

Tracked correlations may include:
- Hull price movement
- Module price movement
- Component and material demand
- Blueprint relevance
- Build vs destroy ratios

### Temporal Modeling
- Immediate reaction windows
- Delayed market responses
- Sustained conflict pricing trends

**Purpose**
- Identify speculative opportunities
- Explain abnormal price behavior
- Link wars and events to economic outcomes

All correlations are informational, not prescriptive.

---

## 1.8 Player & Corporation Lookup Framework

This section provides **fast, context-rich intelligence gathering** from multiple sources.

Primary data sources:
- zKillboard
- EVEWho
- ESI (where available)

---

## Local Chat Intelligence

### Local Lookup

- Input methods:
  - Copy–paste from local chat
  - Manual entry
- Correlation targets:
  - Personal notes
  - Run history
  - Prior encounters
- Tracks:
  - Who has been looked up
  - When and where

### Personal Pilot Profiles
A user-maintained intelligence record.

May include:
- Encounter date/time
- System(s)
- Ship(s) flown
- Outcome
- Notes (after-action style)

Profiles can be:
- Linked to map locations (“seen here”)
- Cross-referenced in future encounters
- Associated with corp/alliance tags

---

## Directional Scan (D-Scan) Intelligence

### D-Scan Lookup

- Copy–paste D-scan output
- Automatic parsing and classification

### Threat Context Modeling
- Ship role association:
  - Haulers / miners → lower baseline threat
  - Combat hulls → elevated threat
- Role inference based on:
  - Known fittings (historical)
  - Pilot profiles
  - Ship prevalence in kill data

### Profile Linking
- Ships marked as:
  - “Known to fly”
  - “Possible to fly”
- Links directly to pilot profiles and threat assessments

---

## System-Level Conflict Lookup

### Mass-Destruction Intelligence

System-focused analysis answering:
- What was destroyed
- How many
- Over what time span

Additional context:
- Distance from trade hubs
- Recent jump spikes
- Market order activity anomalies

**Use Cases**
- Identifying active war zones
- Predicting traffic spillover
- Market speculation and avoidance

---

## Reports & Intelligence Artifacts

### Report Generation

User-defined reports can be generated from:
- Player lookups
- D-scan analysis
- System conflict data
- Market correlation data

Reports can link to:
- Player cards
- Ship cards
- Systems
- Map overlays

### Notes & Persistence
- Reports can include special notes
- Saved as standalone intelligence artifacts
- Reusable and searchable

---

## Map Integration

Any intelligence element can be:
- Displayed as a map overlay
- Hidden or filtered
- Linked to specific systems or routes

Examples:
- “Possible roaming routes”
- Known hostile corridors
- Recent kill clusters

---

## Notifications & Refresh Behavior

- Optional notifications on:
  - API refresh
  - Watchlist changes
  - New correlations detected
- Visual-only; no automation

---

## Special Section: Spy / Intelligence Desk

A dedicated tab focused on **intelligence aggregation**.

### Purpose
- Centralize all threat, conflict, and movement data
- Act as a planning and review workspace

### Contents
- Recent intelligence summaries
- Active watchlists
- Saved reports
- Conflict heatmaps
- Market impact signals

This section is optional and can be disabled entirely.

---

## Design Philosophy Summary

- Intelligence is advisory, not authoritative
- User memory and judgment always take precedence
- All tagging and threat labeling is personal and private
- No real-time combat automation or decision-making

---

### Closing Statement

This domain transforms raw kill data into **contextual awareness**.

It does not tell the user what to do —  
it explains **who is moving**, **where pressure is building**, and **why outcomes are shifting**.

---
**Proprietary Notice:** This documentation and the EVE Unified Intelligence project are proprietary. Unauthorized distribution, reproduction, or reuse is strictly prohibited.
